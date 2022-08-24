import "./assets/css/user.css";
import "./assets/css/header.css";
import "./assets/css/sidebar.css";
import "./assets/css/content.css";

import { Routes, Route } from "react-router-dom";
import ProtectedPages from "./components/Protected";
import { HomeLayout } from "./components/HomeLayout";
import HomePage from "./Pages/Home";
import { LoginForm } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";
import UserPage from "./Pages/UserPage";
import ProductPage from "./Pages/ProductPage";

function App() {
    return (
        <Routes>
            <Route element={<HomeLayout />}>
                <Route path="/" element={<LoginForm />} />
            </Route>
            <Route path="/dashboard" element={<ProtectedPages />}>
                <Route path="home" element={<HomePage />}>
                    <Route path="user" element={<UserPage />} />
                    <Route path="product" element={<ProductPage />} />
                </Route>
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
