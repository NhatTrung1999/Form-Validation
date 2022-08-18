// import { Routes, Route } from "react-router-dom";
// import ProtectedPages from "./components/Protected";
// import { Content } from "./components/User";
// import { LoginForm } from "./Pages/Login";
// import { SignUp } from "./Pages/SignUp";
// import NotFound from "./Pages/NotFound";
import "./assets/css/user.css";
import "./assets/css/header.css";
import "./assets/css/sidebar.css";
import "./assets/css/content.css";
// import User from "./Pages/UserPage";
import ProductPage from "./Pages/ProductPage";

function App() {
    return (
        // <Routes>
        //     <Route element={<ProtectedPages />}>
        //         <Route path="/" element={<User />}>
        //             <Route path="signin" element={<LoginForm />} />
        //             <Route path="user" element={<Content />} />
        //         </Route>
        //     </Route>
        //     <Route path="/signup" element={<SignUp />} />
        //     <Route path="*" element={<NotFound />} />
        // </Routes>
        <ProductPage />
    );
}

export default App;
