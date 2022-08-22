import { NavLink } from "react-router-dom";

function Sidebar() {
    let activeClassName = {
        marginBottom: "10px",
        padding: " 20px 0 20px 20px",
        color: "#DCD7C9",
        cursor: "pointer",
    };

    return (
        <>
            <ul className="sidebar-container">
                <NavLink to="user">
                    <li
                        className={({ isActive }) =>
                            isActive ? "list-user active" : "undefined"
                        }
                    >
                        Danh sách người dùng
                    </li>
                </NavLink>
                <NavLink to="product">
                    <li
                        className={({ isActive }) =>
                            isActive ? "list-product active" : "undefined"
                        }
                    >
                        Danh sách sản phẩm
                    </li>
                </NavLink>
            </ul>
        </>
    );
}

export default Sidebar;
