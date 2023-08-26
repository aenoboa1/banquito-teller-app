import './css/style.css';
import {Button, Divider, TextField} from '@mui/material';
import React, {useState} from 'react'

import SearchIcon from '@mui/icons-material/Search';
import {AccountCard} from './components/AccountCard';
import {getAccountByNumber} from './Tranferencias';
import {NotFound} from "./components/NotFound";
import Grid from '@mui/material/Grid';
import axios from "axios";


export const MainTransfer = () => {

    const [inputValue, setInputValue] = useState(null);
    const [account, setAccount] = useState(null);
    const [show, setShow] = useState(false);
    const [showNot, setShowNot] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);
    const [disabledTextF, setDisabledTextF] = useState(false);
    const [Error, setError] = useState("");
    const [result, setResult] = useState([]);
    const [searchAccount, setSearchAccount] = useState([]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        e.preventDefault()
        getAccountInfo(inputValue);
    };

    const getAccountInfo = (value) => {
        axios.get('https://banquito-ws-cuentas-ntsumodxxq-uc.a.run.app/api/v1/account/information/'+value)
            .then(async (response) => {
                if (response.data.codeInternalAccount === value) {
                    setSearchAccount(response.data)
                    setShowNot(false);
                    setShow(true);
                    setDisabledButton(true);
                    setDisabledTextF(true);
                    console.log(response.data)
                }else{
                    setShowNot(true);
                    setError(response.statusText)
                }
            })
            .catch((err) => {

                console.log(err)
            })
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
                    onClick={handleChange}
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
                {show ? <AccountCard account={searchAccount}/> : showNot ? <NotFound/> : null}
            </Grid>
        </Grid>
    );
}