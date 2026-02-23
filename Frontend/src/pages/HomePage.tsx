import { Box, Typography } from "@mui/material";

export default function HomePage() {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Home
            </Typography>
            <Typography variant="body1">
                Welcome to the home page.
            </Typography>
        </Box>
    );
}
