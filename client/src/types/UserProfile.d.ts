export interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'non-binary' | '';
  photos: string[];
  location: 3 | 4 | 5 | 0;
}

interface UserData {
  userProfile: UserProfile;
  setUserProfile: Function;
}