import { Navigate, Outlet } from "react-router-dom";

function ProtectedPages() {
    const user = JSON.parse(localStorage.getItem("login"));

    if (!user) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}

export default ProtectedPages;
