import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { EjemploPaginaRetiros } from "./Pages/teller-retiros/EjemploPagina";
import { EjemploPaginaTransferencias } from "./Pages/teller-transferencias/EjemploPagina";
import { EjemploPaginaDepositos } from "./Pages/teller-depositos/EjemploPagina";
import LoginLayout from "./layout/loginLayout";
import MainLayout from "./layout/mainLayout";
import { TellerConsultas } from "./Pages/teller-consultas/TellerConsultas";
import { StartPage } from "./Pages/StartPage";
import ThemeCustomization from "./themes";
import { TellerDepositos } from './Pages/teller-depositos/TellerDepositos';
import { ConfirmDeposit } from './components/teller-depositos/ConfirmDeposit';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children:
            [
                {
                    path: '/home',
                    element: <StartPage />,
                },

                {
                    path: '/depositos',
                    element: <TellerDepositos />,
                },
                {
                    path: '/depositosConfirm',
                    element: <ConfirmDeposit />,
                },
                {
                    path: '/retiros',
                    element: <EjemploPaginaRetiros />,
                },
                {
                    path: '/transferencias',
                    element: <EjemploPaginaTransferencias />,
                },
                {
                    path: '/consultas',
                    element: <TellerConsultas />
                }
            ]
    },
    {
        path: '/login',
        element: <LoginLayout />,
        children: []
    }
]);

function App() {
    return (
        <div className="App">

            <ThemeCustomization>
                <RouterProvider router={router} />
            </ThemeCustomization>
        </div>
    );
}

export default App;

