import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import {useEffect, useState} from "react";
import {createAPIEndpoint, ENDPOINTS} from "../../api";
import Typography from "@mui/material/Typography";
import AccountCard from "./components/AccountCard";
import TransactionsGrid from "./components/TransactionsGrid";
import axios from "axios";

export const Consultas = () => {
    const [value, setValue] = useState("");
    const [Error, setError] = useState("");
    const [result, setResult] = useState([]);
    const [searchAccount, setSearchAccount] = useState([]);

    useEffect(() => {

    }, []);

    function handleSearch(e) {
        setValue(e.target.value)
        e.preventDefault();
        getAccountInfo(value)
        getAccountTransactions(value)
    }


    /*function getInfo(value) {
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
    }*/

    const getAccountInfo = (value) => {
        axios.get('https://banquito-ws-cuentas-ntsumodxxq-uc.a.run.app/api/v1/account/information/'+value)
            .then(async (response) => {
                if (response.data.codeInternalAccount === value) {
                    setSearchAccount(response.data)
                }else{
                    setError(response.statusText)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getAccountTransactions = (value) => {
        axios.get('https://banquito-ws-cuentas-ntsumodxxq-uc.a.run.app/api/v1/account-transaction/history/'+value)
            .then(async (response) => {
                setResult(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }




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
                            {Error ? (
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
                                <AccountCard data={searchAccount}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>
                                    Últimos Movimientos
                                </Typography>
                            </Grid>
                            <TransactionsGrid data={result}/>
                        </>
                    )}

            </Grid>


        </>
    )
}