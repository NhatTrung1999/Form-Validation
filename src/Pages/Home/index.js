import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../components/HomeLayout";

function HomePage() {

    const [show, setShow] = useState(false);
    
    const handleClick = () => {
        setShow(!show);
    }

    return (
        <>
            <div id="header">
                <Header onClick={handleClick} />
            </div>
            <div id="container">
                <div className={`sidebar ${show ? "show" : ""}`}>
                    <Sidebar />
                </div>
                <div id="content">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default HomePage;
