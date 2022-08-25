import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom"

function RolePage() {
    
    const role = JSON.parse(localStorage.getItem("login"))
    const roles = useSelector((state) => state.user.listUser);
    const findUser = roles.find((user) => user.username === role.username)
    
    if (findUser.role === "admin") {
        return <Outlet />
    }

    return <Navigate to="/dashboard/home/product" />;
}

export default RolePage;