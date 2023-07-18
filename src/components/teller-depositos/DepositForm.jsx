import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './css/index.css';
import { Button, Divider, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const DepositForm = ({ accountOrigin }) => {
    const [formularioEnviado, setFormularioEnviado] = useState(false);
    const navigate = useNavigate();

    const handleNavigateToDeposit = () => {
        navigate('/home');
    };

    return (
        <>
            <Formik
                initialValues={{
                    cuenta: '',
                    nombre: '',
                    monto: ''
                }}
                validate={(valores) => {
                    let errores = {};
                    // Validación cedula
                    if (!valores.cuenta) {
                        errores.cuenta = 'Por favor ingresa un n° de cuenta';
                    }
                    else if (valores.cuenta.length !== 10) {
                        errores.cuenta = 'Por favor ingresa los 10 dígitos';
                    }
                    else if (!/^[0-9.]+$/.test(valores.cuenta)) {
                        errores.cuenta = 'El n° de cuenta solo puede contener números';
                    }
                    // Validacion nombre
                    if (!valores.nombre) {
                        errores.nombre = 'Por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }
                    // Validación monto
                    if (!valores.monto) {
                        errores.monto = 'Por favor ingresa un monto';
                    } else if (!/^\d+(\.\d{1,2})?$/.test(valores.monto)) {
                        errores.monto = 'El monto debe ser un número válido';
                    }
                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    setFormularioEnviado(true);
                    setTimeout(() => setFormularioEnviado(false), 5000);
                    navigate('/depositosConfirm', {
                        state: {
                            nombre: valores.nombre,
                            cuentaDestino: valores.cuenta,
                            monto: valores.monto,
                            cuentaOrigen: accountOrigin
                        }
                    });
                }}
            >
                {({ errors, values, handleChange }) => (
                    <Form className="formulario">
                        <div style={{ marginBottom: '10px' }}>
                            {/* <label htmlFor="nombre" style={{ marginLeft: '3rem' }}>Monto</label> */}
                            <Field
                                id="monto"
                                name="monto"
                                label="Monto"
                                size="small"
                                as={TextField}
                                onChange={handleChange}
                                value={values.monto}
                                style={{ marginLeft: '38.4%' }}
                            />
                            <ErrorMessage name="monto" component={() => (<div style={{
                                color: '#e92b2d',
                                fontWeight: 600,
                                fontSize: '12px',
                                marginLeft: '38.4%'
                            }} >
                                {errors.monto}</div>)} />
                        </div>

                        <label htmlFor="nombre" style={{ marginLeft: '1rem', marginBottom: '1rem' }}>Beneficiario</label>

                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="nombre" style={{ marginLeft: '3rem' }}>Nombre del depositante</label>
                            <Field
                                id="nombre"
                                name="nombre"
                                label="Nombre del depositante"
                                size="small"
                                as={TextField}
                                onChange={handleChange}
                                value={values.nombre}
                                style={{ marginLeft: '15.6%' }}
                            />
                            <ErrorMessage name="nombre" component={() => (<div className="error" >
                                {errors.nombre}</div>)} />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="nombre" style={{ marginLeft: '3rem' }}>Número de cuenta</label>
                            <Field
                                id="cuenta"
                                name="cuenta"
                                label="Número de cuenta"
                                size="small"
                                inputProps={{ maxLength: 10 }}
                                as={TextField}
                                onChange={handleChange}
                                value={values.cuenta}
                                style={{ marginLeft: '20%' }}
                            />
                            <ErrorMessage name="cuenta" component={() => (<div className="error" >
                                {errors.cuenta}
                            </div>)} />
                        </div>

                        <Divider variant="middle" color="#ad1414" sx={{ height: 3 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
                            {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
                            <div>
                                <button
                                    type="submit"
                                    style={{
                                        marginBottom: '10px',
                                        marginRight: '12rem',
                                        backgroundColor: '#00202E'
                                    }}
                                    onClick={handleNavigateToDeposit}
                                >
                                    CANCELAR
                                </button>

                                <button
                                    type="submit"
                                    style={{
                                        marginBottom: '10px',
                                        marginLeft: '12rem',
                                        backgroundColor: '#810000'
                                    }}
                                >
                                    REALIZAR DEPÓSITO
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>

            {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
                <div></div>
            </div> */}
        </>
    );
}
