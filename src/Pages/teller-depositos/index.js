import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {TellerDepositos} from "./TellerDepositos";


function TellerDeposit() {
    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <TellerDepositos/>
        </DashboardLayout>
    );
}

export default TellerDeposit;
