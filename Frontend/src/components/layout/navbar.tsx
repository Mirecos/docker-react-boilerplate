import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
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
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    MUI
                </Typography>
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