import React from 'react';
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import BasicCard from "../../components/teller-retiros/BasicCard";

export const EjemploPaginaRetiros = () => {
    return (
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
    >
        <Typography component="h1" variant="h5">
            Pagina de Ejemplo Retiros
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
