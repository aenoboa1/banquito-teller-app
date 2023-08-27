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
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {randomStatusOptions, randomPrice} from '@mui/x-data-grid-generator';
import {styled} from "@mui/material";
import axios from "axios";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import {getRowIdFromRowModel} from "@mui/x-data-grid/internals";

const usdPrice = {
    type: 'number',
    width: 130,
    valueFormatter: ({value}) => currencyFormatter.format(value),
    cellClassName: 'font-tabular-nums',
};
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const StyledDataGrid = styled(DataGrid)(({theme}) => ({
    border: 0,
    color:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${
            theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
        }`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${
            theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
        }`,
    },
    '& .MuiDataGrid-cell': {
        color:
            theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
    },
    '& .MuiPaginationItem-root': {
        borderRadius: 0,
    },
}));


export const Consultas = () => {
    const [value, setValue] = useState("");
    const [Error, setError] = useState("");
    const [result, setResult] = useState([]);
    const [searchAccount, setSearchAccount] = useState([]);
    const [clientAccountName, setClientAccountName] = useState("");
    const [transactions, setTransactions] = useState([]);

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
                    setClientAccountName(response.data.clientAccount.firstName+" "+response.data.clientAccount.lastName)
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
                setTransactions(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'reference',
            headerName: 'Concepto',
            width: 200,
        },
        {
            field: 'tipoTransaccion',
            headerName: 'Tipo',
            width: 200,
            renderCell: (params) => {
                const tipoTransaccion = params.value;
                const formattedType= tipoTransaccion === 'DEB' ? 'Débito' : 'Crédito';
                return <span>{formattedType}</span>
            }
        },
        {
            field: 'monto',
            headerName: 'Monto',
            width: 150,
            ...usdPrice
        },
        {
            field: 'fechaTransaccion',
            headerName: 'Fecha de creación',
            width: 250,
            renderCell: (params) => {
                const fechaTransaccion = params.value;
                const formattedDate = new Date(fechaTransaccion).toLocaleDateString('es-ES');
                return <span>{formattedDate}</span>
            }
        },

        {
            field: 'fechaRegistro',
            headerName: 'Fecha de Registro',
            width: 150,
            renderCell: (params) => {
                const fechaRegistro = params.value;
                const formattedDate = new Date(fechaRegistro).toLocaleDateString('es-ES');
                return <span>{formattedDate}</span>
            }
        }
    ];
    const rows = transactions.map((transaction) => ({
        id: transaction.uniqueKey,
        reference: transaction.reference,
        tipoTransaccion: transaction.transactionType,
        monto: transaction.amount,
        fechaTransaccion: transaction.valueDate,
        fechaRegistro: transaction.creationDate
    }));

    const TransactionGridHistory = () => {
        return(
            <Box sx={{height: 400, width: '100%'}}>
                <StyledDataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                        columns:{
                            columnVisibilityModel: {
                                id: false,
                            }
                        }
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                />
            </Box>
        );

    }

    const AccountCard = () => {
        return (<Card sx={{
            minWidth: 500, ':hover': {
                boxShadow: 5,
            }
        }}>
            <Box sx={{width: '100%', maxWidth: 575, bgcolor: 'background.paper'}}>
                <Box sx={{my: 1, mx: 2}}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>Propietario:</Box>
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography sx={{fontSize: 16}} gutterBottom>
                                <Box sx={{justifyContent: 'flex-end', m: 1}}>
                                    {clientAccountName}
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{my: 1, mx: 2}}>
                    <Grid container spacing={1} columns={16}>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>Cuenta:</Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>


                <Box sx={{my: 0, mx: 2}}>
                    <Grid container spacing={1} columns={16}>
                        <Grid item xs={12}>
                            <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom variant="button">
                                <Box sx={{textAlign: 'left', m: 1}}>{
                                    searchAccount.productAccount === 'BASIC CURRENT BUSINESS ACCOUNT' ? 'Ahorro' : 'Corriente'
                                }</Box>
                            </Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 16}} gutterBottom>
                                <Box sx={{textAlign: 'left', m: 1}}>
                                    {searchAccount.codeInternalAccount}
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Divider variant="middle" color="#ad1414" sx={{height: 3}}/>
                <Box sx={{m: 2}}>
                    <Typography gutterBottom variant="body1">
                        <Grid container columns={16}>
                            <Grid item xs={7}>
                                <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>
                                    <Box sx={{textAlign: 'left', m: 1}}>Disponible</Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography sx={{fontSize: 16}} gutterBottom>
                                    <Box sx={{textAlign: 'right', m: 1}}>
                                        ${searchAccount.availableBalance}
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Typography>
                </Box>
            </Box>
        </Card>);
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
                            <Divider/>
                            <TransactionGridHistory/>
                        </>
                    )}

            </Grid>


        </>
    )
}