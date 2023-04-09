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
type Pages = {
  [key: string]: ReactNode;
}

const pages: Pages = {
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
  const [page, setPage] = useState<PageType>('swipe');
  useEffect(() => {
    const loading = document.getElementById('loading');
    if (loading) {
      setTimeout(() => {
        loading.style.display = 'none';
      }, 500);
    }
  }, [])

  // useEffect(() => {
  // }, [page])

  return (
    <BasicContainer>
      {
        pages[page]
      }
      <NavBar setPage={setPage} />
    </BasicContainer>
  );
}

export default App;
