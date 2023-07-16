import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


export const NotFound = () => {
    return (
        <Grid>
            <Card sx={{ width: 697, height: 150, minWidth: 300, border: '1px solid #df2c3f', borderRadius: '10px', marginTop: '-1rem' }}>
                <CardContent className='p-tag' align="center">
                    <Typography sx={{ mb: 1.5, marginTop: '3rem' }} color="text.primary">
                        LA CUENTA NO EXISTE.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}