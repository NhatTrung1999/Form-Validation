import "./assets/css/user.css";
import "./assets/css/header.css";
import "./assets/css/sidebar.css";
import "./assets/css/content.css";

import {Routes, Route} from "react-router-dom"

import HomePage from "./Pages/Home"
// import { LoginForm } from "./Pages/Login"
import UserPage from "./Pages/UserPage";
import ProductPage from "./Pages/ProductPage";


function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="/user" element={<UserPage />} />
                <Route path="/product" element={<ProductPage />} />
            </Route>
        </Routes>
    );
}

export default App;
