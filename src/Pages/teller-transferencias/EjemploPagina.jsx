import React from 'react';
import {Grid, Paper} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { BasicCard } from '../../components/teller-transferencias/BasicCard';


export const EjemploPaginaTransferencias = () => {
    return (
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
    >
        <Typography component="h1" variant="h5">
            Pagina de Ejemplo Tranferencias
        </Typography>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <BasicCard />
        </Grid>
    </Grid>
    );
}
