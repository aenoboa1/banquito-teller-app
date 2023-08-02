import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {MainTransfer} from "./MainTransfer";


function TellerTransferencia() {
    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <MainTransfer/>
        </DashboardLayout>
    );
}

export default TellerTransferencia;
