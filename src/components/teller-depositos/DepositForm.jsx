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
                    cedula: '',
                    nombre: '',
                    monto: ''
                }}
                validate={(valores) => {
                    let errores = {};
                    // Validación cedula
                    if (!valores.cedula) {
                        errores.cedula = 'Por favor ingresa una cédula';
                    }
                    else if (valores.cedula.length !== 10) {
                        errores.cedula = 'Por favor ingresa los 10 dígitos';
                    }
                    else if (!/^[0-9.]+$/.test(valores.cedula)) {
                        errores.cedula = 'La cédula solo puede contener números';
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
                    // console.log('Valores a enviar:', valores.nombre, valores.cedula, valores.monto);
                    setFormularioEnviado(true);
                    setTimeout(() => setFormularioEnviado(false), 5000);
                    navigate('/depositosConfirm', {
                        state: {
                            nombre: valores.nombre,
                            cedula: valores.cedula,
                            monto: valores.monto,
                            cuentaOrigen: accountOrigin
                        }
                    });
                }}
            >
                {({ errors, values, handleChange }) => (
                    <Form className="formulario">
                        <div style={{ marginBottom: '10px' }}>
                            {/* <label htmlFor="nombre">Cédula del depositante</label> */}
                            <Field
                                id="cedula"
                                name="cedula"
                                label="Cédula del depositante"
                                size="small"
                                inputProps={{ maxLength: 10 }}
                                as={TextField}
                                onChange={handleChange}
                                value={values.cedula}
                            />
                            <ErrorMessage name="cedula" component={() => (<div className="error">{errors.cedula}</div>)} />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            {/* <label htmlFor="nombre">Nombre del depositante</label> */}
                            <Field
                                id="nombre"
                                name="nombre"
                                label="Nombre del depositante"
                                size="small"
                                as={TextField}
                                onChange={handleChange}
                                value={values.nombre}
                            />
                            <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            {/* <label htmlFor="nombre">Monto</label> */}
                            <Field
                                id="monto"
                                name="monto"
                                label="Monto"
                                size="small"
                                as={TextField}
                                onChange={handleChange}
                                value={values.monto}
                            />
                            <ErrorMessage name="monto" component={() => (<div className="error">{errors.monto}</div>)} />
                        </div>
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



            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
                <div></div>
            </div>
        </>
    );
}
