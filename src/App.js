import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import ProtectedPage from "./Pages/ProtectedPage";
import { LoginForm } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";
import "./assets/css/user.css";
import "./assets/css/header.css";
import "./assets/css/sidebar.css";
import "./assets/css/content.css";
import User from "./Pages/UserPage";

function App() {
    return (
        <Routes>
            <Route element={<HomePage />}>
                <Route path="user" element={<User />} />
            </Route>
            {/* <Route path="/dashboard" element={<ProtectedPage />}> */}
            {/* </Route> */}
            <Route path="/signin" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
