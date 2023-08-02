import './css/style.css';
import {Grid, IconButton, InputBase, Paper} from '@mui/material';
import React, {useEffect, useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {getAccountByNumber} from './depositos';
import {AccountDetails} from './components/AccountDetails';
import {createAPIEndpointDeposit, ENDPOINTSDEPOSIT} from '../../api/'


export const TellerDepositos = () => {

    const [inputValue, setInputValue] = useState(null);
    const [account, setAccount] = useState(null);
    const [show, setShow] = useState(false);
    const [showNot, setShowNot] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);
    const [disabledTextF, setDisabledTextF] = useState(false);

    const [value, setValue] = useState("");
    const [Error, setError] = useState("");
    const [result, setResult] = useState([]);

    function handleSearch(e) {
        e.preventDefault();
        getInfo(value);
    }


    function getInfo(value) {
        createAPIEndpointDeposit(ENDPOINTSDEPOSIT.deposit)
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

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const validate = () => {
        const accountData = getAccountByNumber(inputValue);
        if (accountData === undefined || accountData === null) {
            const newAccount = {
                numeroCuenta: '0000000000',
                tipoCuenta: '----------',
                propietario: 'Sin nombre'
            };
            setAccount(newAccount);
            setShowNot(true);
        } else {
            setAccount(accountData);
            if (inputValue === accountData.numeroCuenta) {
                setShowNot(false);
                setShow(true);
                setDisabledButton(true);
                setDisabledTextF(true);
            }
        }
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
                            onChange={event => {  //adding the onChange event
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
                    (result.length === 0 || result === null ? (
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
                                {/* {show ? <AccountDetails account={account} /> : showNot ? <NotFound /> : null} */}
                                <AccountDetails account={result}/>
                                {/* <AccountCard data={result} /> */}
                            </Grid>
                        </>
                    ))
                }

            </Grid>


        </>
    )
}