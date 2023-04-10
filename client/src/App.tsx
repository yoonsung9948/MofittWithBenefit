import React, { useRef, useEffect, useState, ReactComponentElement, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import ViewCard from './components/ViewCard';
import NavBar from './components/NavBar';
import { Box, Container } from '@mui/material';
import Profile from './components/Profile';
import Matched from './components/Matched';
import BasicContainer from './components/BasicContainer';

type PageType = 'swipe' | 'profile' | 'matched';

const pages: Record<string, JSX.Element> = {
  swipe: (
    <Box sx={{ 
      height: '80%',
      width: '100%',
      alignItems: 'center', 
      justifyContent: 'center',
      display: 'flex',
      }}>
      { [1, 2, 3, 4, 5].map((card: any) => <ViewCard zIndex={card}/>) }
    </Box>
  ),
  profile: (
    <Profile />
  ),
  matched: (
    <Matched />
  )
};

function App() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<PageType>('swipe');

  useEffect(() => {
    if (!isLoading) {
      const loadingPage = document.getElementById('loading');
      if (loadingPage)
        loadingPage.style.display = 'none';
    }
  }, [isLoading])

  return (
    // <>
    //   {isLoading ? 
    //     <LoadingPage /> : 
    //   }
    // </>
    <BasicContainer setLoading={setLoading}>
      {pages[page]}
      <NavBar setPage={setPage} />
    </BasicContainer>
  )
}

export default App;
