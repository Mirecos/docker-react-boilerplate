import React from 'react';
import { UserProvider } from './providers/UserProvider';
import { Box } from '@mui/material';
import Navbar from './components/layout/navbar';

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
