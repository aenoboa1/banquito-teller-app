// Soft UI Dashboard React Context Provider
import {SoftUIControllerProvider} from "context";
import {ContextProvider} from "./context/custom/useStateContext";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <SoftUIControllerProvider>
            <ContextProvider>
                <DevSupport ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
                >
                    <App/>
                </DevSupport>
            </ContextProvider>
        </SoftUIControllerProvider>
    </BrowserRouter>
);
