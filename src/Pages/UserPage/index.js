import { Header, Sidebar, Content} from '../../components/User'

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
