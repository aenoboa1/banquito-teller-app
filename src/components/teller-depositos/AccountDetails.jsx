import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DepositForm } from './DepositForm';
import { Grid } from '@mui/material';


export const AccountDetails = ({ account }) => {
    return (
        <Grid>
            <Card sx={{ width: 697, height: 181, minWidth: 300, border: '1px solid #df2c3f', borderRadius: '10px', marginTop: '-1rem' }}>
                <CardContent sx={{ textAlign: 'start' }} className='p-tag'>
                    <Typography sx={{ mb: 1.5, lineHeight: '250%' }} color="text.secondary">
                        Número de cuenta: {account.numeroCuenta}
                    </Typography>
                    <Typography sx={{ mb: 1.5, lineHeight: '250%' }} color="text.secondary">
                        Tipo de cuenta: {account.tipoCuenta}
                    </Typography>
                    <Typography sx={{ mb: 1.5, lineHeight: '250%' }} color="text.secondary">
                        Propietario: {account.propietario}
                    </Typography>
                </CardContent>
            </Card>

            <DepositForm accountOrigin={account.numeroCuenta} />
        </Grid>
    );
}