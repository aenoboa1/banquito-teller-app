import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {Consultas} from "./Consultas";


function TellerConsultas() {
    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <Consultas/>
        </DashboardLayout>
    );
}

export default TellerConsultas;
