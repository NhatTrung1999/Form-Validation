import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {
    let activeClassName = {
        backgroundColor: "#DCD7C9",
        color: "#2C3639",
        borderRadius: "4px",
    };

    const role = JSON.parse(localStorage.getItem("login"));
    const roles = useSelector((state) => state.user.listUser);
    const findUser = roles.find((user) => user.username === role.username);
    const listProduct = () => {
        return (
            <ul className="sidebar-container">
                <li>
                    <NavLink
                        to="product"
                        className={`list-product ${({ isActive }) =>
                            isActive ? activeClassName : undefined}`}
                    >
                        Danh sách sản phẩm
                    </NavLink>
                </li>
            </ul>
        );
    };

    if (findUser.role !== "admin") {
        return listProduct();
    }

    return (
        <>
            <ul className="sidebar-container">
                <li>
                    <NavLink
                        to="user"
                        className={`list-user ${({ isActive }) =>
                            isActive ? activeClassName : undefined}`}
                    >
                        Danh sách người dùng
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="product"
                        className={`list-product ${({ isActive }) =>
                            isActive ? activeClassName : undefined}`}
                    >
                        Danh sách sản phẩm
                    </NavLink>
                </li>
            </ul>
        </>
    );
}

export default Sidebar;
