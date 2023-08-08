import './css/style.css';
import {Button, Divider, TextField} from '@mui/material';
import React, {useState} from 'react'

import SearchIcon from '@mui/icons-material/Search';
import {AccountCard} from './components/AccountCard';
import {getAccountByNumber} from './Tranferencias';
import {NotFound} from "./components/NotFound";
import Grid from '@mui/material/Grid';


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
            spacing={2}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                borderRadius: 1,
                width: 1
            }}
        >

            <Grid item>
                <TextField
                    id="outlined-basic"
                    label="Cuenta"
                    variant="outlined"
                    size="small"
                    value={inputValue}
                    onChange={handleChange}
                    inputProps={{maxLength: 10}}
                    disabled={disabledTextF}
                />
            </Grid>
            <Grid item>
                <Button
                    className='buttonSearch'
                    variant="contained"
                    size="medium"
                    startIcon={
                        <SearchIcon style={{marginLeft: '1rem'}}/>
                    }
                    onClick={validate}
                    disabled={disabledButton}
                >
                </Button>
            </Grid>
            <Divider></Divider>
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
    );
}