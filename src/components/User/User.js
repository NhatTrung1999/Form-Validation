import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./user.css";

function User() {
    return (
        <>
            <div id="header">
                <Header />
            </div>
            <div id="container">
                <div id="sidebar">
                    <Sidebar />
                </div>
                <div id="content">
                    <Content />
                </div>
            </div>
        </>
    );
}

export default User;
