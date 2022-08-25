import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({onClick}) {
    const [open, setOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("login"))
    const navigate = useNavigate();

    const logout = () => {
        navigate("/", { replace: true });
        localStorage.removeItem("login");
    };

    return (
        <>
            <div className="menu" onClick={onClick}></div>
            <div className="user">
                {user.username}
                <div className="avatar" onClick={() => setOpen(!open)}>
                    <div
                        className={`logout ${open ? "open" : ""}`}
                        onClick={logout}
                    >
                        Log out
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
