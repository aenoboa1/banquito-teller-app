import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box, Button, Divider, Grid, Modal } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


export const ConfirmDeposit = () => {
    const location = useLocation();
    const { nombre, cuentaDestino, monto, cuentaOrigen } = location.state;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        fontStyle: 'italic',
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();

    const handleNavigateToDeposit = () => {
        handleClose();
        navigate('/home');
    };

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* <Card sx={{
                        width: 926,
                        height: 340,
                        minWidth: 300,
                        border: '1px solid #df2c3f',
                        borderRadius: '10px',
                        marginY: '30px'
                    }}> 
                        <CardContent sx={{textAlign: 'start'}} className='p-tag'>
                            <Typography sx={{mb: 1.5, lineHeight: '4rem'}} color="text.secondary">
                                Se depositará la cantidad de: {monto} $
                            </Typography>
                            <Typography sx={{mb: 1.5, lineHeight: '4rem'}} color="text.secondary">
                                De la cuenta: {cuentaOrigen}
                            </Typography>
                            <Typography sx={{mb: 1.5, lineHeight: '4rem'}} color="text.secondary">
                                A la cuenta: {cedula}
                            </Typography>
                            <Typography sx={{mb: 1.5, lineHeight: '4rem'}} color="text.secondary">
                                Nombre de beneficiario: {nombre}
                            </Typography>
                        </CardContent>
                    </Card> */}
                    <Typography sx={{ fontSize: 26, fontWeight: 'bold' }} color="text.primary" gutterBottom>
                        <Box sx={{ textAlign: 'left', m: 1 }}>Confirmación de Depósito
                        </Box>
                    </Typography>
                    <Card sx={{
                        minWidth: 500, ':hover': {
                            boxShadow: 5,
                        }
                    }}>
                        <Box sx={{ width: '100%', maxWidth: 575, bgcolor: 'background.paper' }}>
                            <Box sx={{ my: 1, mx: 2 }}>
                                <Grid container spacing={2} columns={2}>
                                    <Grid item xs={6}>
                                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                            <Box sx={{ textAlign: 'left', m: 1 }}>Se depositará la cantidad de:
                                                <label style={{ marginLeft: '3rem' }}>
                                                    ${monto}
                                                </label>
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ my: 1, mx: 2 }}>
                                <Grid container spacing={2} columns={2}>
                                    <Grid item xs={6}>
                                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                            <Box sx={{ textAlign: 'left', m: 1 }}>De la cuenta:
                                                <label style={{ marginLeft: '10rem' }}>
                                                    {cuentaOrigen}
                                                </label>

                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ my: 1, mx: 2 }}>
                                <Grid container spacing={2} columns={2}>
                                    <Grid item xs={6}>
                                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                            <Box sx={{ textAlign: 'left', m: 1 }}>A la cuenta:
                                                <label style={{ marginLeft: '10.5rem' }}>
                                                    {cuentaDestino}
                                                </label>
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ my: 1, mx: 2 }}>
                                <Grid container spacing={2} columns={16}>
                                    <Grid item xs={6}>
                                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                            <Box sx={{ textAlign: 'left', m: 1 }}>Beneficiario:
                                                <label style={{ marginLeft: '10.5rem' }}>
                                                    {nombre}
                                                </label>
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Card>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{
                                marginBottom: '10px',
                                marginRight: '20rem',
                                backgroundColor: '#00202E'
                            }}
                            onClick={handleNavigateToDeposit}
                        >
                            CANCELAR
                        </Button>

                        <Button
                            variant="contained"
                            color="secondary"
                            style={{
                                marginBottom: '10px',
                                marginLeft: '20rem',
                                backgroundColor: '#810000'
                            }}
                            onClick={handleOpen}
                        >
                            CONFIRMAR
                        </Button>
                    </div>
                </div>
            </Grid>
            {
                <div>
                    <Modal
                        keepMounted
                        open={open}
                        onClose={false}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                    >
                        <Box sx={style}>
                            <Typography sx={{ mb: 0.5, lineHeight: '2rem', }} color="text.primary" align='center'
                                fontSize={30}>
                                <span style={{ fontWeight: 'bold' }}>
                                    Transacción Exitosa
                                </span>
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src="ok.png" alt="ok" style={{ width: '50%', height: 'auto', }} />
                            </div>
                            <Divider sx={{ backgroundColor: "#000" }} />

                            <Typography sx={{ mb: 0.5, lineHeight: '2rem' }} color="text.secondary">
                                Se ha depositado la cantidad de: <span style={{ fontWeight: 'bold' }}> {monto} $</span>
                            </Typography>
                            <Typography sx={{ mb: 0.5, lineHeight: '2rem' }} color="text.secondary">
                                A la cuenta: <span style={{ fontWeight: 'bold' }}> {cuentaDestino}</span>
                            </Typography>
                            <Typography sx={{ mb: 0.5, lineHeight: '2rem' }} color="text.secondary">
                                Beneficiario: <span style={{ fontWeight: 'bold' }}>{nombre}</span>
                            </Typography>

                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    marginTop: '10px',
                                    marginLeft: '3rem',
                                    backgroundColor: '#00202E'
                                }}
                                onClick={handleNavigateToDeposit}
                            >
                                REALIZAR OTRA TRANSACCIÓN
                            </Button>
                        </Box>
                    </Modal>
                </div>
            }
        </Grid>
    );
}