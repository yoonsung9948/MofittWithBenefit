import React, { useRef } from 'react';
import './App.css';
import ViewCard from './components/ViewCard';
import { Box } from '@mui/material';

function App() {
  const cards = [1, 2, 3, 4, 5]
  return (
    <Box sx={{ 
      height: '100vh', 
      width: '100vw', 
      alignItems: 'center', 
      justifyContent: 'center',
      display: 'flex',
      }}>
      { cards.map((card: any) => <ViewCard zIndex={card}/>) }
    </Box>
  );
}

export default App;
