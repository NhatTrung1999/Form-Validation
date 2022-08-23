import "./assets/css/user.css";
import "./assets/css/header.css";
import "./assets/css/sidebar.css";
import "./assets/css/content.css";

import { Routes, Route } from "react-router-dom";
import ProtectedPages from "./components/Protected";
import HomePage from "./Pages/Home";
import { LoginForm } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import Admin from "./components/Admin";
import NotFound from "./Pages/NotFound";
import UserPage from "./Pages/UserPage";
import ProductPage from "./Pages/ProductPage";

function App() {
    return (
        <Routes>
            <Route element={<ProtectedPages />}>
                <Route path="/" element={<HomePage />}>
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/product" element={<ProductPage />} />
                </Route>
            </Route>
            <Route path="/signin" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
