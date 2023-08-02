// Soft UI Dashboard React Context Provider
import {SoftUIControllerProvider} from "context";
import {ContextProvider} from "./context/custom/useStateContext";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <SoftUIControllerProvider>
            <ContextProvider>
                <App/>
            </ContextProvider>
        </SoftUIControllerProvider>
    </BrowserRouter>
);
