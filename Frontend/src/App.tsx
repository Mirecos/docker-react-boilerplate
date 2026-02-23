import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/layout/navbar';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <UserProvider>
      <Box>
        <Navbar />
      </Box>
    </UserProvider>
  );
}

export default App;
