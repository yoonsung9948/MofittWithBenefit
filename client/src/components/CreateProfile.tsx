import { useEffect } from "react";
import ErrorPage from "./ErrorPage";

interface CreateProfileProps {
  setUserProfile: Function;
  profileDB: IDBDatabase | undefined;
}

export default function CreateProfile(props: CreateProfileProps) {
  const { setUserProfile, profileDB } = props;
  useEffect(() => {

  }, [])
  return (
    profileDB  ?
      <ErrorPage /> :
    null
  )
}