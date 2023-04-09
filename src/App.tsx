import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import ViewCard from './components/ViewCard';
import NavBar from './components/NavBar';
import { Box, Container } from '@mui/material';
import Profile from './components/Profile';

type PageType = 'swipe' | 'profile';

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

  const cards = [1, 2, 3, 4, 5]
  return (
    <Container sx={{
      height: '100vh',
      width: '100vw',
      padding: '0',
      margin: '0',
    }}>
      {
        page === 'swipe' ? 
        <Box sx={{ 
          height: '80%',
          width: '100%',
          alignItems: 'center', 
          justifyContent: 'center',
          display: 'flex',
          }}>
          { cards.map((card: any) => <ViewCard zIndex={card}/>) }
        </Box> :
        <Profile />
      }
      <NavBar setPage={setPage} />
    </Container>
  );
}

export default App;
