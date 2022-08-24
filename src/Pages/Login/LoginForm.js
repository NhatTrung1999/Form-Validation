import { useState, useEffect } from "react";
import { TextInput, BtnForm, Registration } from "../../components/Form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";

function LoginForm() {
    const initialState = {
        username: "",
        password: "",
    };

    const users = useSelector((state) => state.user.listUser);
    localStorage.setItem("listuser", JSON.stringify(users));

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});

    const oldLogin = {
        username: formValues.username,
        password: formValues.password,
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const userCheck = (user) => {
        return user.username === formValues.username;
    };

    const passCheck = (user) => {
        return user.password === formValues.password;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (
            (formValues.username === "" && formValues.password === "") ||
            formValues.username === "" ||
            formValues.password === ""
        ) {
            errors.username = "username cannot be blank.";
            errors.password = "password cannot be blank.";
            setFormErrors(errors);
        } else if (users.find(userCheck) && users.find(passCheck)) {
            if (users.find(userCheck).status === true) {
                navigate("/dashboard/home/user", { replace: true });
                localStorage.setItem("login", JSON.stringify(oldLogin));
            } else {
                swal({
                    title: "No Active",
                    text: "username is not active!",
                    icon: "warning",
                    button: "Close",
                });
            }
        } else {
            swal({
                title: "Error",
                text: "username or password incorrect!",
                icon: "error",
                button: "Close",
            });
        }
    };

    return (
        <div className="body-container">
            <div className="form-container">
                <form className="form">
                    <TextInput
                        type="text"
                        name="username"
                        placeholder="USERNAME"
                        value={formValues.username}
                        onChange={handleChange}
                        errorMessages={
                            !formValues.username ? formErrors.username : ""
                        }
                    />
                    <TextInput
                        type="password"
                        name="password"
                        placeholder="PASSWORD"
                        value={formValues.password}
                        onChange={handleChange}
                        errorMessages={
                            !formValues.password ? formErrors.password : ""
                        }
                    />
                    <BtnForm btnTitle="LOGIN" onClick={handleSubmit} />
                    <Registration />
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
