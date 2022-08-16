import { Navigate, Outlet } from "react-router-dom";

function HomePage() {
    const userOld = () => {
        const user = JSON.parse(localStorage.getItem("login"));
        if (user) {
            return true;
        } else {
            return false;
        }
    };
    return userOld() ? <Outlet /> : <Navigate to="/signin" />;
}

export default HomePage;
