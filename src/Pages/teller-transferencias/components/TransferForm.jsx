import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import './css/index.css';
import {Button, Divider, InputLabel, Modal, OutlinedInput, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: '16px',
    borderColor: 'secondary.main',
    boxShadow: 24,
    pt: 4,
    px: 6,
    pb: 5,
};
function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>CONFIRMAR</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{...style, width: 400, p:2, m:1 }}>
                    <h3 id="child-modal-title">Transferencia realizada con éxito!</h3>
                    <Button onClick={handleClose}>Cerrar</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export const TransferForm = () => {

    const navigate = useNavigate();
    const [valueTrx, setValueTrx] = useState(0);
    const [accountTrx, setAccountTrx] = useState();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleNavigateToConfirmTransfer = () => {
        navigate('/transferenciasConfirm');
    };

    const handleNavigateToTransfer = () => {

        console.log('navigateToTransfer');
    };

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <Formik
            initialValues={{
                cuenta: '',
                nombre: '',
                monto: ''
            }}
            validate={(values) => {
                let errores = {};

                // Validacion nombre
                if (!values.nombre) {
                    errores.nombre = 'Por favor ingresa un nombre'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
                    errores.nombre = 'El nombre solo puede contener letras y espacios'
                }
            }}
            onSubmit={(values, {resetForm}) => {
                resetForm();
                console.log(values);
                setValueTrx(values.monto);
                setAccountTrx(values.cuenta);
                cambiarFormularioEnviado(true);
                setTimeout(() => cambiarFormularioEnviado(false), 5000);
            }}
        >
            {({errors, values, handleChange}) => (
                <Box>
                    <Grid>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Realizar transferencia
                                </Typography>
                                <Box>
                                    <Form sx={{width: '50%'}}>
                                        <FormControl sx={{p: 1, m: 1, display: 'block'}}>
                                            <InputLabel htmlFor="cuenta" size="small">Cuenta
                                                Beneficiario</InputLabel>
                                            <OutlinedInput fullWidth id="cuenta" name="cuenta"
                                                           onChange={handleChange} value={values.cuenta}/>
                                            <ErrorMessage name="cuenta" component={() => (<FormHelperText
                                                id="component-error-text">{errors.cuenta}</FormHelperText>)}/>
                                        </FormControl>
                                        <FormControl sx={{p: 1, m: 1, display: 'block'}}>
                                            <InputLabel htmlFor="nombre" size="small">Nombre
                                                Beneficiario</InputLabel>
                                            <OutlinedInput fullWidth id="nombre" name="nombre"
                                                           onChange={handleChange} value={values.nombre}/>
                                            <ErrorMessage name="nombre" component={() => (<FormHelperText
                                                id="component-error-text">{errors.nombre}</FormHelperText>)}/>
                                        </FormControl>
                                        <FormControl sx={{p: 1, m: 1, display: 'block'}}>
                                            <InputLabel htmlFor="monto" size="small">Monto</InputLabel>
                                            <OutlinedInput fullWidth id="monto" name="monto" onChange={handleChange}
                                                           value={values.monto}/>
                                            <ErrorMessage name="monto" component={() => (<FormHelperText
                                                id="component-error-text">{errors.monto}</FormHelperText>)}/>
                                        </FormControl>
                                        <Box sx={{flexGrow: 1, justifyContent:'center'}}>
                                            <Grid container spacing={2} columns={16}>
                                                <Grid item xs={8}>
                                                    <Button variant="filled" color="secondary"
                                                            onClick={handleNavigateToTransfer}>Regresar</Button>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <Button type="submit" variant="contained" color="primary"  onClick={handleOpen}>Transferir</Button>
                                                    <Modal
                                                        open={open}
                                                        onClose={handleClose}
                                                        aria-labelledby="parent-modal-title"
                                                        aria-describedby="parent-modal-description"
                                                    >
                                                        <Box sx={{ ...style, width: 400 }}>
                                                            <h2 id="parent-modal-title">Detalles de trasnferencia</h2>
                                                            <p id="parent-modal-description">
                                                                Vas a transferir $ {valueTrx} a la cuenta {accountTrx}.
                                                                Desea continuar?
                                                            </p>
                                                            <Box sx={{justifyContent: 'center', display:'block', p:1, m:1}}>
                                                                <ChildModal/>
                                                                <Button variant="filled" color="secondary" onClick={handleClose}>Cerrar</Button>
                                                            </Box>
                                                        </Box>
                                                    </Modal>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Form>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Box>
            )}
        </Formik>
    );
}