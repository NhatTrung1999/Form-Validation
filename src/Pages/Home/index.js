import {Outlet} from "react-router-dom"
import { Header, Sidebar} from '../../components/HomeLayout'

function HomePage() {
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
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default HomePage;