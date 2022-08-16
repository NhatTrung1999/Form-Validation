import { Routes, Route } from "react-router-dom";
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
            <Route path='/' element={<LoginForm />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/admin' element={<User />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default App;
