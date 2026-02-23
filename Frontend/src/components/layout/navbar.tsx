import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useUser } from "../../context/userContext";


export default function Navbar() {
    const { user, isAuthenticated, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;

    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                </IconButton>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'inherit', textDecoration: 'none' }}
                >
                    MUI
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1, mr: 2 }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/profile">Profile</Button>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {isAuthenticated && user ? (
                        <Avatar sx={{ bgcolor: 'secondary.main' }}>
                            {user.name.charAt(0).toUpperCase()}
                        </Avatar>
                    ) : (
                        <p>Not authenticated</p>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}