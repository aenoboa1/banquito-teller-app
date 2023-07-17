import './css/style.css';
import {Button, Divider, Grid, TextField, Typography} from '@mui/material';
import React, {useState} from 'react'

import SearchIcon from '@mui/icons-material/Search';
import {AccountCard} from '../../components/teller-transferencias/AccountCard';
import {NotFound} from '../../components/teller-transferencias/NotFound';
import {getAccountByNumber} from './Tranferencias';


export const MainTransfer = () => {

    const [inputValue, setInputValue] = useState(null);
    const [account, setAccount] = useState(null);
    const [show, setShow] = useState(false);
    const [showNot, setShowNot] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);
    const [disabledTextF, setDisabledTextF] = useState(false);

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
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            <Typography component="h1" variant="h5" style={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                marginTop: '1rem',
                marginLeft: '5rem'
            }}>
                TRANSFERENCIAS
            </Typography>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Divider align="center">
                    <span className="p-tag">N° de cuenta</span>
                </Divider>
                <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    size="small"
                    value={inputValue}
                    onChange={handleChange}
                    inputProps={{maxLength: 10}}
                    disabled={disabledTextF}

                />
                <Divider align="center">
                    <span> </span>
                </Divider>

                <Button
                    className='buttonSearch'
                    variant="contained"
                    color="info"
                    size="large"
                    startIcon={
                        <SearchIcon style={{marginLeft: '1rem'}}/>
                    }
                    onClick={validate}
                    disabled={disabledButton}
                >
                </Button>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{marginTop: "2rem"}}
                >
                    {show ? <AccountCard account={account}/> : showNot ? <NotFound/> : null}
                </Grid>
            </Grid>
        </Grid>
    );
}