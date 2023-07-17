import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import LoginLayout from "./layout/loginLayout";
import MainLayout from "./layout/mainLayout";
import {TellerConsultas} from "./Pages/teller-consultas/TellerConsultas";
import {StartPage} from "./Pages/StartPage";
import ThemeCustomization from "./themes";
import {MainTransfer} from './Pages/teller-transferencias/MainTransfer';
import {ConfirmTransfer} from './components/teller-transferencias/ConfirmTransfer';
import {TellerDepositos} from './Pages/teller-depositos/TellerDepositos';
import {ConfirmDeposit} from './components/teller-depositos/ConfirmDeposit';
import {TellerRetiros} from './Pages/teller-retiros/MainRetiros';
import {ConfirmRetiro} from './components/teller-retiros/ConfirmRetiro';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:
            [
                {
                    path: '/home',
                    element: <StartPage/>,
                },

                {
                    path: '/depositos',
                    element: <TellerDepositos/>,
                },
                {
                    path: '/depositosConfirm',
                    element: <ConfirmDeposit/>,
                },
                {
                    path: '/retiros',
                    element: <TellerRetiros/>,
                },
                {
                    path: '/retirosConfirm',
                    element: <ConfirmRetiro/>,
                },
                {
                    path: '/transferencias',
                    element: <MainTransfer/>,
                },
                {
                    path: '/transferenciasConfirm',
                    element: <ConfirmTransfer/>,
                },
                {
                    path: '/consultas',
                    element: <TellerConsultas/>
                }
            ]
    },
    {
        path: '/login',
        element: <LoginLayout/>,
        children: []
    }
]);

function App() {
    return (
        <div className="App">

            <ThemeCustomization>
                <RouterProvider router={router}/>
            </ThemeCustomization>
        </div>
    );
}

export default App;

