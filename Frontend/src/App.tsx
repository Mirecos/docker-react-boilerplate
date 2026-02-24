import React from 'react';
import { Box, Container, CssBaseline, Paper, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import { UserProvider } from './context/userContext';
import { SnackbarProvider } from './context/snackbarContext';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { darkTheme, lightTheme } from './config/theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <SnackbarProvider>
        <UserProvider>
          <CssBaseline />
          <BrowserRouter>
            <Navbar />
            <Box sx={{ mt: 8 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </Box>
          </BrowserRouter>
        </UserProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
