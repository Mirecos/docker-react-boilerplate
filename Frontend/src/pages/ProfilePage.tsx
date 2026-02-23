import { Box, Typography, Divider } from "@mui/material";
import { useUser } from "../context/userContext";

export default function ProfilePage() {
    const { user, isAuthenticated } = useUser();

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Profile
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {isAuthenticated && user ? (
                <Box>
                    <Typography variant="body1"><strong>Name:</strong> {user.name}</Typography>
                    <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
                </Box>
            ) : (
                <Typography variant="body1">You are not logged in.</Typography>
            )}
        </Box>
    );
}
