import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {TellerRetiros} from "./MainRetiros";


function TellerRetiro() {
    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <TellerRetiros/>
        </DashboardLayout>
    );
}

export default TellerRetiro;
