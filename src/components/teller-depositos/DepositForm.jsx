import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './css/index.css';
import { Button, Divider, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const DepositForm = () => {
    const navigate = useNavigate();

    const handleNavigateToConfirmDeposit = () => {
        navigate('/depositosConfirm');
    };

    const handleNavigateToDeposit = () => {
        // navigate('/depositos');
        console.log('navigateToDeposit');
        alert('Regresando a Tipo de transaccion');
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
                                label="Cédula del depositante"
                                size="small"
                            />
                            <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                        </div>

                        <div style={{ marginBottom: '10px' }}>

                            <TextField
                                id="nombre"
                                name="nombre"
                                label="Nombre del depositante"
                                size="small"
                                variant='outlined'
                            />
                            <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <TextField
                                id="monto"
                                name="monto"
                                label="Monto"
                                size="small"
                            />
                            <ErrorMessage name="correo" component={() => (<div className="error">{errors.monto}</div>)} />
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
                        onClick={handleNavigateToDeposit}
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
                        onClick={handleNavigateToConfirmDeposit}
                    >
                        REALIZAR DEPÓSITO
                    </Button>
                </div>
            </div>
        </>
    );
}
