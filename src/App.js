import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path='/' element={<LoginForm />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/notfound' element={<NotFound />} />
        </Routes>
        
    );
}

export default App;
