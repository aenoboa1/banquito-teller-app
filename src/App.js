import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import { EjemploPaginaRetiros } from "./Pages/teller-retiros/EjemploPagina";
import { EjemploPaginaTransferencias } from "./Pages/teller-transferencias/EjemploPagina";
import { EjemploPaginaDepositos } from "./Pages/teller-depositos/EjemploPagina";
import { StartPage } from "./Pages/StartPage";
import { MainDeposit } from './Pages/teller-depositos/MainDeposit';
import { ConfirmDeposit } from './components/teller-depositos/ConfirmDeposit';

const router = createBrowserRouter([
    {
        path: '/',
        element: <StartPage />,
    },
    {
        path: '/depositos',
        element: <MainDeposit />,
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
    }
]);

function App() {
    return (
        <div className="App">
            <Header />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

