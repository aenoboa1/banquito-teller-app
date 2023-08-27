import './css/style.css';
import {Button, Divider, InputLabel, Modal, OutlinedInput, TextField} from '@mui/material';
import React, {useState} from 'react'
// import { SearchIcon } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import {getAccountByNumber} from './retiros';
import {AccountDetails} from "./components/AccountDetails";
import {NotFound} from "./components/NotFound";
import Grid from '@mui/material/Grid';
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {ErrorMessage, Form, Formik} from "formik";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

export const TellerRetiros = () => {

    const [inputValue, setInputValue] = useState(null);
    const [account, setAccount] = useState(null);
    const [show, setShow] = useState(false);
    const [showNot, setShowNot] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);
    const [disabledTextF, setDisabledTextF] = useState(false);
    const [Error, setError] = useState("");
    const [searchAccount, setSearchAccount] = useState([]);
    const [trx, setTrx] = useState([]);
    const [valueTrx, setValueTrx] = useState(0);
    const [accountTrx, setAccountTrx] = useState();

    const [open, setOpen] = React.useState(false);

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

    const handleOpenModal = () => {
        setOpen(true);
    };
    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleChangeSearch = (e) => {
        setInputValue(e.target.value);
        e.preventDefault();
        getAccountInfo(inputValue);
    };

    const getAccountInfo = (value) => {
        axios.get('https://banquito-ws-cuentas-ntsumodxxq-uc.a.run.app/api/v1/account/information/' + value)
            .then(async (response) => {
                if (response.data.codeInternalAccount === value) {
                    setSearchAccount(response.data)
                    setShowNot(false);
                    setShow(true);
                    setDisabledButton(true);
                    setDisabledTextF(true);
                } else {
                    setShowNot(true);
                    setError(response.statusText)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const submitWithDraw = (trx) => {
        const {cuenta, monto, referencia} = trx;
        const debtorAccount = searchAccount.codeInternalAccount;
        const transactionType = "DEB";
        const transaction = {
            creditorAccount: cuenta,
            debtorAccount: debtorAccount,
            transactionType: transactionType,
            transactionAmount: monto,
            parentTransactionKey: null,
            amount: monto,
            reference: referencia
        }
        axios.post('https://banquito-ws-cuentas-ntsumodxxq-uc.a.run.app/api/v1/account-transaction', transaction)
            .then(async (response) => {
                if (response.status === 200) {
                    setOpen(true)
                }
            }).catch((err) => {
            console.log(err);

        })
    }

    const AccountCard = () => {
        return (<Grid>
            <Card sx={{p: 1, m: 1}}>
                <CardContent>
                    <Grid container spacing={2} sx={{justifyContent: 'center'}}>
                        <Grid item xs={8}>
                            <Typography sx={{mb: 1.5, lineHeight: '250%'}} color="text.secondary">
                                Propietario: {searchAccount.clientAccount.firstName} {searchAccount.clientAccount.lastName}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography sx={{mb: 1.5, lineHeight: '250%'}} color="text.secondary">
                                Saldo Disponible: ${searchAccount.availableBalance}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Divider></Divider>
            <TrxForm/>
        </Grid>);
    }

    function ChildModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true);
            submitWithDraw(trx);
        };
        const handleClose = () => {
            setOpen(false);
            handleCloseModal();
            setShow(false);
            setDisabledButton(false);
            setDisabledTextF(false);
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
                    <Box sx={{...style, width: 400, p: 3, m: 2}}>
                        <h3 id="child-modal-title">Retiro realizado con éxito!</h3>
                        <Button onClick={handleClose}>Cerrar</Button>
                    </Box>
                </Modal>
            </React.Fragment>
        );
    }

    const TrxForm = () => {
        return (
            <Formik
                initialValues={{
                    cuenta: '00138015',
                    monto: '',
                    referencia: 'Retiro de cuenta en ventanilla',

                }}
                validate={(values) => {
                    let errors = {};
                    if (!values.monto) {
                        errors.monto = 'monto requerido!';
                    }
                    return errors;
                }}
                onSubmit={(values, {resetForm}) => {
                    resetForm();
                    console.log(values);
                    setTrx(values);
                    setAccountTrx(searchAccount.codeInternalAccount);
                    setValueTrx(values.monto)
                    handleOpenModal();
                }}
            >
                {({errors, values, handleChange}) => (
                    <Box>
                        <Grid container sx={{justifyContent: 'center'}}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Realizar Retiro
                                    </Typography>
                                    <Box>
                                        <Form>
                                            <FormControl sx={{p: 1, m: 1, display: 'block'}}>
                                                <InputLabel htmlFor="monto" size="small">Monto</InputLabel>
                                                <OutlinedInput fullWidth id="monto" name="monto"
                                                               onChange={handleChange} value={values.monto}/>
                                                <ErrorMessage name="monto" component={() => (<FormHelperText
                                                    id="component-error-text">{errors.monto}</FormHelperText>)}/>
                                            </FormControl>
                                            <Box sx={{flexGrow: 1, justifyContent: 'center'}}>
                                                <Grid container spacing={2} columns={16}>
                                                    <Grid item xs={8}>
                                                        <Button type="submit" variant="contained"
                                                                color="primary">Retirar</Button>
                                                        <Modal
                                                            open={open}
                                                            onClose={handleCloseModal}
                                                            aria-labelledby="parent-modal-title"
                                                            aria-describedby="parent-modal-description"
                                                        >
                                                            <Box sx={{...style, width: 400}}>
                                                                <h2 id="parent-modal-title">Detalles de Retiro</h2>
                                                                <p id="parent-modal-description">
                                                                    Vas a retirar $ {valueTrx} de la cuenta {accountTrx}.
                                                                    Desea continuar?
                                                                </p>
                                                                <Box sx={{
                                                                    justifyContent: 'center',
                                                                    display: 'block',
                                                                    p: 1,
                                                                    m: 1
                                                                }}>
                                                                    <ChildModal/>
                                                                    <Button variant="filled" color="secondary"
                                                                            onClick={handleCloseModal}>Cerrar</Button>
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
        )
    }


    return (<Grid
        container
        spacing={2}
        sx={{
            display: 'flex',
            justifyContent: 'center',
            borderRadius: 1,
            width: 1
        }}
    >

        <Grid item>
            <TextField
                id="outlined-basic"
                label="Cuenta"
                variant="outlined"
                size="small"
                value={inputValue}
                onChange={handleChangeSearch}
                inputProps={{maxLength: 10}}
                disabled={disabledTextF}
            />
        </Grid>

        <Grid item>
            <Button
                className='buttonSearch'
                variant="contained"
                size="medium"
                startIcon={<SearchIcon style={{marginLeft: '1rem'}}/>}
                onClick={handleChangeSearch}
                disabled={disabledButton}
            >
            </Button>
        </Grid>
        <Divider></Divider>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{marginTop: "2rem"}}
        >
            {show ? <AccountCard/> : showNot ? <NotFound/> : null}
        </Grid>

    </Grid>);
}