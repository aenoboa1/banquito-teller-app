import {Outlet} from 'react-router-dom';
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";

// ==============================|| MINIMAL LAYOUT ||============================== //

const MainLayout = () => (
    <>
        <DashboardLayout>
            <DashboardNavbar/>
            <Outlet/>
        </DashboardLayout>
    </>
);

export default MainLayout;
