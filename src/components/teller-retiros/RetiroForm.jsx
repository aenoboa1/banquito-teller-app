import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './css/index.css';
import { Button, Divider, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const DepositForm = ({ accountOrigin, accountPropi }) => {
    const [formularioEnviado, setFormularioEnviado] = useState(false);
    const navigate = useNavigate();

    const handleNavigateToDeposit = () => {
        navigate('/home');
    };

    return (
        <>
            <Formik
                initialValues={{
                    nombre: '',
                    monto: ''
                }}
                validate={(valores) => {
                    let errores = {};
                    // Validación cedula

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
                    navigate('/retirosConfirm', {
               
                        state: {
                            nombre:"Juanito",
                          
                            monto: valores.monto,
                            cuentaOrigen: accountOrigin
                        }
                    });
                }}
            >
                {({ errors, values, handleChange }) => (
                    <Form className="formulario">
                        

                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="nombre" style={{ marginLeft: '3rem' }}>Monto a Retirar</label>
                            <Field
                                id="monto"
                                name="monto"
                                label="Monto"
                                size="small"
                                as={TextField}
                                onChange={handleChange}
                                value={values.monto}
                                style={{ marginLeft: '36.5%' }}
                            />
                            <ErrorMessage name="monto" component={() => (<div style={{
                                color: '#e92b2d',
                                fontWeight: 600,
                                fontSize: '12px',
                                marginLeft: '23rem'
                            }} >
                                {errors.monto}</div>)} />
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
                                    REALIZAR RETIRO
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
