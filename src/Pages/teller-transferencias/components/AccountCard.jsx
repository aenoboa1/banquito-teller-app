import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {Grid} from '@mui/material';
import {TransferForm} from './TransferForm';


export const AccountCard = ({account}) => {
    return (<Grid>
        <Card sx={{
            width: 697,
            height: 80,
            minWidth: 1064,
            border: '1px solid #df2c3f',
            borderRadius: '10px',
            marginTop: '-1rem'
        }}>
            <CardContent sx={{textAlign: 'start'}} className='p-tag'>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={{mb: 1.5, lineHeight: '250%'}} color="text.secondary">
                            Propietario: {account.propietario}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{mb: 1.5, lineHeight: '250%'}} color="text.secondary">
                            Saldo Disponible: {account.saldoDisponible}
                        </Typography>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>

        <TransferForm/>
    </Grid>);
}
