
import { UserProfile } from "../types/UserProfile";

const DB_NAME = 'profileDB';
const OBJSTORE_NAME = 'profile';
const VERSION = 1;


/**
 * Opens indexedDB, declares the objectstore that can store the user data.
 * Stores the DB object in the component state.
 * @param setDB setState hook to store the objectstore object.
 * @returns IDBObjectStore which contains the user profile data.
*/
export function open(setDB: Function): void {
  let db: IDBDatabase;
  const request = window.indexedDB.open(DB_NAME, VERSION);
  console.log(`opened DB, request obj: ${request}`);
  request.onerror = (event: Event): void => {
    console.error('ERROR!');
  }
  request.onupgradeneeded = (event: Event): void => {
    // Save the IDBDatabase interface
    db = (event.target as IDBRequest).result;
    // Create an objectStore for this database
    db.createObjectStore(DB_NAME);
  };

  request.onsuccess = (event: Event): void => {
    db = (event.target as IDBRequest).result;
    setDB(db);
  }
}

export function add(db: IDBDatabase, profile: UserProfile, setUserProfile: Function): void {
  const transaction = db.transaction(DB_NAME, "readwrite");
  const objectStore = transaction.objectStore(OBJSTORE_NAME);
  const request = objectStore.add(profile);
  request.onsuccess = (event: Event): void => {
    setUserProfile(profile);
  }
}
