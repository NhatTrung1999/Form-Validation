import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux";

function ProtectedPages() {
    const users = useSelector((state) => state.user.listUser)
    // const userOld = () => {
    //     const user = JSON.parse(localStorage.getItem("login"));

    //     if (user) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };

    if (!users) {
        return <Navigate to="/signin" />
    }

    return <Outlet /> ;
}

export default ProtectedPages;
