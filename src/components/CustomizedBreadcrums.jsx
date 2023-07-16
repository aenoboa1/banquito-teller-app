import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {useLocation} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {
    Link as RouterLink,
} from 'react-router-dom';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrums() {

    const location = useLocation();

    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <RouterLink underline="hover" color="inherit" href="/home">
                    <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                    Home
                </RouterLink>
                <Typography
                    sx={{display: 'flex', alignItems: 'center'}}
                    color="text.primary"
                >
                    {location.pathname.split('/')}
                </Typography>
            </Breadcrumbs>
        </div>
    );
}