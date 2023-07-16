import * as React from 'react';
import {ButtonBase, Grid, styled} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const images = [
    {
        url: 'https://d187qskirji7ti.cloudfront.net/news/wp-content/uploads/2017/11/shutterstock_254004307-e1510037041452.jpg',

        title: 'Retiros',
        width: '40%',
    },
    {
        url: 'https://makechange.aspiration.com/wp-content/uploads/2021/12/GettyImages-1126878582-6d25dc6732dc464da74e99e037039238.jpg',
        title: 'Depositos',
        width: '30%',
    },
    {
        url: 'https://images.ctfassets.net/q33z48p65a6w/5nJ6QCHVLXCuTDrfOcLVI5/8611dde811a3138eab67812a210ab38f/EN1.png?w=1200&h=645&fit=thumb',
        title: 'Transferencias',
        width: '30%',
    },
    {
        url: 'https://www.bankdirector.com/wp-content/uploads/7423_customer-6-20-19.png',
        title: 'Consultas',
        width: '30%',
    },
];

const ImageButton = styled(ButtonBase)(({theme}) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({theme}) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({theme}) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({theme}) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function ContainedButtons() {
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
            {images.map((image) => (
                <ImageButton
                    focusRipple
                    key={image.title}
                    style={{
                        width: image.width,
                    }}
                    href={image.title}
                >
                    <ImageSrc style={{backgroundImage: `url(${image.url})`}}/>
                    <ImageBackdrop className="MuiImageBackdrop-root"/>
                    <Image>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image.title}
                            <ImageMarked className="MuiImageMarked-root"/>
                        </Typography>
                    </Image>
                </ImageButton>
            ))}
        </Box>
    );
}