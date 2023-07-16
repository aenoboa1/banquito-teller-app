import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBox";
import Grid from "@mui/material/Grid";
import AccountCard from "./AccountCard";
import TransactionsGrid from "./TransactionsGrid";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import {useEffect, useState} from "react";

export const TellerConsultas = () => {


    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);

    };

    return (
        <>
            <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                sx={{minHeight: '100vh'}}
            >
                <Grid item>
                    <Paper
                        component="form"
                        sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
                    >
                        <InputBase
                            sx={{ml: 1, flex: 1}}
                            placeholder="Buscar por Numero de Cuenta"
                            inputProps={{'aria-label': 'search google maps'}}
                        />
                        <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                    </Paper>


                </Grid>

                <Grid item>
                    <AccountCard/>
                </Grid>
                <Grid item>
                    <TransactionsGrid/>
                </Grid>

            </Grid>

        </>
    )
}