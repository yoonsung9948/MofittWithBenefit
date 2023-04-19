import React, { useRef, useEffect, useState, ReactComponentElement, ReactNode, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import NavBar from './components/NavBar';
import { Box, Container } from '@mui/material';

import OuterContainer from './components/OuterContainer';
import { WidthWideOutlined } from '@mui/icons-material';

import ProfilePage from './components/ProfilePage';
import SwipePage from './components/SwipePage';
import MatchedProfiles from './components/MatchedProfiles';
import ErrorPage from './components/ErrorPage';
import CreateProfile from './components/CreateProfile';
import { UserProfile } from './types/UserProfile';

type PageType = 'swipe' | 'profile' | 'matched';

const pages: Record<string, JSX.Element> = {
  swipe: (
    <SwipePage cardData={'dummy'}/>
  ),
  profile: (
    <ProfilePage />
  ),
  matched: (
    <MatchedProfiles />
  )
};

const dummyProfile: UserProfile = {
  id: 1,
  firstName: "Wonyoung",
  lastName: "Jang",
  gender: 'female',
  photos: ['../../public/13131.jpeg'],
  location: 4,
}

function App() {
  const width = window.innerWidth > 992 ? 428 : '100%';
  const [isLoading, setLoading] = useState<boolean>(true);
  const [hasProfile, setHasProfile] = useState<boolean>(true);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 1,
    firstName: '',
    lastName: '',
    gender: '',
    photos: [],
    location: 0,
  });
  const [profileDB, setProfileDB] = useState<IDBDatabase>();
  const [page, setPage] = useState<PageType>('swipe');


  /* connect to database, if profile exists retrieve it, otherwise render CreateProfile */
  useEffect(() => {

  }, [])


  return (
    <div  style={{display: 'flex', justifyContent: 'center'}}>
      <OuterContainer setLoading={setLoading} width={width}>
        { hasProfile ? 
        pages[page] :
        <CreateProfile setUserProfile={setUserProfile} profileDB={profileDB} /> 
        }
        <NavBar setPage={setPage} width={width} />
      </OuterContainer>
    </div>
  )
}

export default App;
