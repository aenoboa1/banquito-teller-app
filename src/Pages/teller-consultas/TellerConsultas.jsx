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
import Grow from '@mui/material/Grow';

export const TellerConsultas = () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState([]);
    const [checked, setChecked] = useState(false);

    function handleSearch(event) {
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
                console.log(err);
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