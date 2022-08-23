import { NavLink } from "react-router-dom";

function Sidebar() {
    let activeClassName = {
        backgroundColor: "#DCD7C9",
        color: "#2C3639",
        borderRadius: "4px",
    };

    return (
        <>
            <ul className="sidebar-container">
                <li >
                    <NavLink
                        to="user"
                        className={`list-user ${({ isActive }) => isActive ? activeClassName : undefined}`}
                    >
                        Danh sách người dùng
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="product"
                        className={`list-product ${({ isActive }) => isActive ? activeClassName : undefined}`}
                    >
                        Danh sách sản phẩm
                    </NavLink>
                </li>
            </ul>
        </>
    );
}

export default Sidebar;
