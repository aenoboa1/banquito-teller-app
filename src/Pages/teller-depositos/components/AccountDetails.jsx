import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {DepositForm} from './DepositForm';
import {Box, Divider, Grid} from '@mui/material';


export const AccountDetails = ({account}) => {
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4} marginLeft='-5rem'>
                <Card sx={{minWidth: 500, ':hover': {boxShadow: 5}, width: '100%'}}>
                    <Grid container spacing={2} columns={16} justifyContent="center">
                        <Box sx={{my: 1, mx: 2}}>
                            <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>Número de cuenta</Box>
                            </Typography>
                            <Typography sx={{fontSize: 16}} gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>
                                    {account.numberAccount}
                                </Box>
                            </Typography>
                        </Box>
                        <Box sx={{my: 1, mx: 2}}>
                            <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>Propietario</Box>
                            </Typography>
                            <Typography sx={{fontSize: 16}} gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>
                                    {account.firstName} {account.lastName}
                                </Box>
                            </Typography>
                        </Box>
                        <Box sx={{my: 1, mx: 2}}>
                            <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>Tipo de Cuenta</Box>
                            </Typography>
                            <Typography sx={{fontSize: 16}} gutterBottom variant="button">
                                <Box sx={{textAlign: 'left', m: 1}}>{account.accountType}</Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Card sx={{minWidth: 400, ':hover': {boxShadow: 5},}}>
                    <DepositForm accountOrigin={account.numberAccount}/>
                </Card>
            </Grid>
        </Grid>
    );
}