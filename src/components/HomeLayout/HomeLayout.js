import { Navigate, Outlet} from "react-router-dom"
import {useSelector} from "react-redux"

function HomeLayout() {
    
    // const user = JSON.parse(localStorage.getItem("login"));
    const users = useSelector((state) => state.user.listUser)
    // const findUser = users.find((role) => role.username === user.username);
    if (users) {
        return <Navigate to="/dashboard/home/user" replace />
    }

    return <Outlet />
}

export default HomeLayout;