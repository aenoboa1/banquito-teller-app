import * as React from 'react';
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {randomStatusOptions, randomPrice} from '@mui/x-data-grid-generator';
import {styled} from "@mui/material";

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
const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'tipoTransaccion',
        headerName: 'Tipo de Transacción',
        width: 200,
        editable: true,
    },
    {
        field: 'monto',
        headerName: 'Monto',
        width: 150,
        editable: true,
        ...usdPrice
    },
    {
        field: 'fechaTransaccion',
        headerName: 'Fecha de creación',
        width: 250,
        editable: true,
    },

    {
        field: 'fechaRegistro',
        headerName: 'Fecha de Registro',
        width: 150,
        editable: true,
    },
];


const rows = [
    {
        id: 1,
        tipoTransaccion: 'Transferencia',
        monto: randomPrice(),
        fechaTransaccion: "2022-12-12",
        fechaRegistro: "2023-12-12"
    },
    {
        id: 2,
        tipoTransaccion: 'Transferencia',
        monto: randomPrice(),
        fechaTransaccion: "2022-12-12",
        fechaRegistro: "2023-12-12"
    },
    {
        id: 3,
        tipoTransaccion: 'Transferencia',
        monto: randomPrice(),
        fechaTransaccion: "2022-12-12",
        fechaRegistro: "2023-12-12"
    },
    {
        id: 4,
        tipoTransaccion: 'Transferencia',
        monto: randomPrice(),
        fechaTransaccion: "2022-12-12",
        fechaRegistro: "2023-12-12"
    },
    {
        id: 5,
        tipoTransaccion: 'Transferencia',
        monto: randomPrice(),
        fechaTransaccion: "2022-12-12",
        fechaRegistro: "2023-12-12"
    },
    {
        id: 6,
        tipoTransaccion: 'Transferencia',
        monto: randomPrice(),
        fechaTransaccion: "2022-12-12",
        fechaRegistro: "2023-12-12"
    },
    {
        id: 7,
        tipoTransaccion: 'Transferencia',
        monto: randomPrice(),
        fechaTransaccion: "2022-12-12",
        fechaRegistro: "2023-12-12"
    },
    {
        id: 8,
        tipoTransaccion: 'Transferencia',
        monto: randomPrice(),
        fechaTransaccion: "2022-12-12",
        fechaRegistro: "2023-12-12"
    },
    {
        id: 9,
        tipoTransaccion: 'Transferencia',
        monto: randomPrice(),
        fechaTransaccion: "2022-12-12",
        fechaRegistro: "2023-12-12"
    },
];

export default function TransactionsGrid() {
    return (
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
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}