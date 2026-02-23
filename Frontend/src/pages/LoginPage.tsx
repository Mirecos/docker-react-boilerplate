import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useUser } from '../context/userContext';
import { useSnackbar } from '../context/snackbarContext';

function LoginPage() {
    const userContext = useUser();
    const snackbarContext = useSnackbar();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await userContext.login(email, password)
        } catch (error) {
            snackbarContext.showSnackbar("Login failed. Please check your credentials and try again.", "error");
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="80vh"
        >
            <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 400 }}>
                <Typography variant="h4" textAlign="center" mb={3}>
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                    />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
                        Login
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default LoginPage;
