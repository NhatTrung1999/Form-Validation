import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const logout = () => {
        navigate("/signin", { replace: true });
    };

    return (
        <>
            <div className="menu"></div>
            <div className="user">
                username
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
