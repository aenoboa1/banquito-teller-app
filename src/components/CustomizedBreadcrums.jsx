import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useLocation} from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import {Chip, emphasize, styled} from "@mui/material";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const StyledBreadcrumb = styled(Chip)(({theme}) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});
export default function CustomSeparator() {

    const location = useLocation();
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/home">
            <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
        </Link>,
        <Typography key="3" color="text.primary">
            {location.pathname.split('/')}
        </Typography>,
    ];
    return (
        <Stack spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small"/>}
                aria-label="breadcrumb"
            >
                
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    );
}