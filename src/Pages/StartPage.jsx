import ContainedButtons from "./components/ContainedButtons";
import DashboardLayout from "../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../examples/Navbars/DashboardNavbar";

export const StartPage = () => {
    return (<>

        <DashboardLayout>
            <DashboardNavbar/>
            <ContainedButtons/>
        </DashboardLayout>

    </>)
}