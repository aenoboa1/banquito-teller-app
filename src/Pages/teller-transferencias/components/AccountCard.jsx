import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {Divider, Grid} from '@mui/material';
import {TransferForm} from './TransferForm';


export const AccountCard = ({account}) => {
    return (<Grid>
        <Card sx={{p:1,m:1}}>
            <CardContent >
                <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                    <Grid item xs={8}>
                        <Typography sx={{mb: 1.5, lineHeight: '250%'}} color="text.secondary">
                            Propietario: {account.clientAccount.firstName} {account.clientAccount.lastName}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{mb: 1.5, lineHeight: '250%'}} color="text.secondary">
                            Saldo Disponible: ${account.availableBalance}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        <Divider></Divider>
        <TransferForm/>
    </Grid>);
}
