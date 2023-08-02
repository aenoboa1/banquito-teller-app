import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './css/index.css';
import { Button, Divider, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const TransferForm = () => {
    const navigate = useNavigate();

    const handleNavigateToConfirmTransfer = () => {
        navigate('/transferenciasConfirm');
    };

    const handleNavigateToTransfer = () => {
       
        console.log('navigateToTransfer');
        alert('REGRESANDO');
    };

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    cedula: '',
                    nombre: '',
                    monto: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    // Validacion nombre
                    if (!valores.nombre) {
                        errores.nombre = 'Por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    console.log('Formulario enviado');
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 5000);
                }}
            >
                {({ errors }) => (
                    <Form className="formulario">
                        <div style={{ marginBottom: '10px' }}>
                            <TextField
                                id="cedula"
                                name="cedula"
                                label="Cuenta del Beneficiario"
                                size="small"
                            />
                            <ErrorMessage name="cedula" component={() => (<div className="error">{errors.nombre}</div>)} />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <TextField
                                id="tipo"
                                name="tipo"
                                label="Tipo de Cuenta"
                                size="small"
                            />
                            <ErrorMessage name="tipo" component={() => (<div className="error">{errors.nombre}</div>)} />
                        </div>

                        <div style={{ marginBottom: '10px' }}>

                            <TextField
                                id="nombre"
                                name="nombre"
                                label="Nombre del Beneficiario"
                                size="small"
                                variant='outlined'
                            />
                            <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <TextField
                                id="monto"
                                name="monto"
                                label="Monto a Transferir $"
                                size="small"
                            />
                            <ErrorMessage name="monto" component={() => (<div className="error">{errors.monto}</div>)} />
                        </div>
                    </Form>
                )}
            </Formik>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            marginBottom: '10px',
                            marginRight: '12rem',
                            backgroundColor: '#00202E'
                        }}
                        onClick={handleNavigateToTransfer}
                    >
                        REGRESAR
                    </Button>

                    <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            marginBottom: '10px',
                            marginLeft: '12rem',
                            backgroundColor: '#810000'
                        }}
                        onClick={handleNavigateToConfirmTransfer}
                    >
                        REALIZAR TRANSFERENCIA
                    </Button>
                </div>
            </div>
        </>
    );
}