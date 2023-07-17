import Grid from "@mui/material/Grid";
import AccountCard from "./AccountCard";
import TransactionsGrid from "./TransactionsGrid";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import {useEffect, useState} from "react";
import {createAPIEndpoint, ENDPOINTS} from "../../api";
import Typography from "@mui/material/Typography";

export const TellerConsultas = () => {
    const [value, setValue] = useState("");
    const [Error, setError] = useState("");
    const [result, setResult] = useState([]);

    function handleSearch(e) {
        e.preventDefault();
        getInfo(value);
    }


    function getInfo(value) {
        createAPIEndpoint(ENDPOINTS.accounts)
            .fetchById(value,
                {},
            )
            .then(async (res) => {
                setResult(res.data)
            })
            .catch((err) => {
                setResult([])
                setError(err.code)
            });
    }

    useEffect(() => {

    }, []);


    return (
        <>
            <Grid
                container
                spacing={5}
                direction="column"
                alignItems="center"
                sx={{minHeight: '100vh'}}
            >

                <Grid item xs={6}>
                    <Paper

                        component="form"
                        sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
                    >
                        <InputBase
                            sx={{ml: 1, flex: 1}}
                            placeholder="Buscar por Numero de Cuenta"
                            onChange={event => {                                 //adding the onChange event
                                setValue(event.target.value)
                            }}
                        />
                        <IconButton type="button" sx={{p: '10px'}} aria-label="search" onClick={handleSearch}>
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                </Grid>
                {
                    // conditional rendering
                    result.length === 0 ? (
                        <>
                            {Error === "ERR_BAD_RESPONSE" ? (
                                <>
                                    <Grid item xs={6}>
                                        No se encontro ninguna cuenta con ese número
                                    </Grid>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <Grid item xs={6}>
                                <AccountCard data={result}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>
                                    Últimos Movimientos
                                </Typography>

                                <TransactionsGrid/>
                            </Grid>
                        </>
                    )}

            </Grid>


        </>
    )
}