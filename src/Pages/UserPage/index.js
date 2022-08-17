import { Header, Sidebar } from "../../components/User";
import { useLocation, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function User() {
    const location = useLocation();
    if (location.pathname === "/") {
        return <Navigate to="/signin" />;
    }

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

export default User;
