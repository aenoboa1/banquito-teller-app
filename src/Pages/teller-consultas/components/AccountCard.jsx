import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from '@mui/material/Box';


export default function AccountCard({data}) {
    return (<Card sx={{
            minWidth: 500, ':hover': {
                boxShadow: 5,
            }
        }}>
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
                                    {data.ACCOUNT_HOLDER_FIRSTNAME} {data.ACCOUNT_HOLDER_LASTNAME}
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{my: 1, mx: 2}}>
                    <Grid container spacing={1} columns={16}>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>Cuenta:</Box>
                            </Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 16}} gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>
                                    {data.trx}
                                </Box>
                            </Typography>

                        </Grid>
                    </Grid>
                </Box>


                <Box sx={{my: 0, mx: 2}}>
                    <Grid container spacing={1} columns={16}>
                        <Grid item xs={12}>
                            <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom variant="button">
                                <Box sx={{textAlign: 'left', m: 1}}>{data.PRODUCT_ACCOUNT}</Box>
                            </Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 16}} gutterBottom>
                                <Box sx={{textAlign: 'right', m: 1}}>
                                    {data.NAME}
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider variant="middle" color="#ad1414" sx={{height: 3}}/>
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
                                        ${data.AVAILABLE_BALANCE}
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Typography>
                </Box>
            </Box>
        </Card>);
}