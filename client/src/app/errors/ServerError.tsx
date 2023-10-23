import { Container, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function SererError() {
    const {state} = useLocation();
    return (
        <Container component={Paper}>
            {state?.error ? (
                <>
                    <Typography gutterBottom variant="h3" color='secondary'>
                        {state.error.title}
                    </Typography>
                    <Typography variant="body1">{state.error.detail || 'Internal server error'}</Typography>
                </>
            ) : (
                <Typography variant="h5" gutterBottom>Server error</Typography>
            )}
        </Container>
    )
}