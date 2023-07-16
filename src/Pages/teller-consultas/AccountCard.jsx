import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Chip, Grid, Paper, styled} from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


export default function AccountCard() {
    return (
        <Card sx={{minWidth: 500}}>
            <Box sx={{width: '100%', maxWidth: 575, bgcolor: 'background.paper'}}>
                <Box sx={{my: 1, mx: 2}}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>Propietario:</Box>
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography sx={{fontSize: 16}} gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>
                                    Luis Alfredo Gonzales Torres
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{my: 1, mx: 2}}>
                    <Grid container spacing={1} columns={16}>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>Tipo de Cuenta:</Box>
                            </Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 16}} gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>
                                    Ahorros
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>


                <Box sx={{my: 0, mx: 2}}>
                    <Grid container spacing={1} columns={16}>
                        <Grid item xs={12}>
                            <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom variant="button">
                                <Box sx={{textAlign: 'left', m: 1}}>AHO1000</Box>
                            </Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 16}} gutterBottom>
                                <Box sx={{textAlign: 'right', m: 1}}>
                                    123456789
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider variant="middle"/>
                <Box sx={{m: 2}}>
                    <Typography gutterBottom variant="body1">
                        <Grid container columns={16}>
                            <Grid item xs={7}>
                                <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>
                                    <Box sx={{textAlign: 'left', m: 1}}>Disponible</Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography sx={{fontSize: 16}} gutterBottom>
                                    <Box sx={{textAlign: 'right', m: 1}}>
                                        $100.00
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}