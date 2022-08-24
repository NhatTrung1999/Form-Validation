import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../components/HomeLayout";

function HomePage() {
    // const location = useLocation();
    // // const user = JSON.parse(localStorage.getItem("login"));
    // if (location.pathname === "/") {
    //     return <Navigate to="/user" replace />;
    // }

    return (
        <>
            <div id="header">
                <Header />
            </div>
            <div id="container">
                <div id="sidebar">
                    <Sidebar />
                </div>
                <div id="content">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default HomePage;
