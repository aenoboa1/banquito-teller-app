import * as React from 'react';
import {useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {createAPIEndpoint, ENDPOINTS} from "../../api";
import {TellerConsultas} from "./TellerConsultas";
import AccountCard from "./AccountCard";
import TransactionsGrid from "./TransactionsGrid";

export default function SearchBar() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState([]);


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

    return (
        <>
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

            {result.length === 0 ? (
                <>

                </>
            ) : (
                <>
                    <AccountCard/>
                    <TransactionsGrid/>

                </>

            )}
        </>
    );
}