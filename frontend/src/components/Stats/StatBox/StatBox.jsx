import React from 'react';
import "./StatBox.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const StatBox = ({ title, stat }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h2" component="div">
                    {stat}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default StatBox;