import { useState, useEffect } from "react";
import { TextInput, BtnForm } from "../../components/Form";
import { validate } from "../../components/Form/Validate";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/user/userSlice";

let today = new Date();
let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

function SignUp() {
    const initialValues = {
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    };

    const users = useSelector((state) => state.user.listUser);

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const messErrors = { ...formErrors };
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    var formatCharacterSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const formatPhone =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    var formatEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    useEffect(() => {
        if (formValues.username.length !== 0) {
            messErrors.username = "username cannot be blank.";
            setFormErrors(messErrors);
        }
        if (formValues.email.length !== 0) {
            messErrors.email = "email cannot be blank.";
            setFormErrors(messErrors);
        }
        if (formValues.phone.length !== 0) {
            messErrors.phone = "phone cannot be blank.";
            setFormErrors(messErrors);
        }
        if (formValues.password.length !== 0) {
            messErrors.password = "password cannot be blank.";
            setFormErrors(messErrors);
        }
        if (formValues.confirmPassword.length !== 0) {
            messErrors.confirmPassword = "confirm password cannot be blank.";
            setFormErrors(messErrors);
        }
    }, [formValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            id: nanoid(),
            username: formValues.username,
            password: formValues.password,
            email: formValues.email,
            date: date,
            status: true,
            role: "user",
        };
        const errors = validate(formValues);
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            dispatch(addUser(user))
            navigate("/", { replace: true });
            console.log(users)
        }
    };

    return (
        <div className="body-container">
            <div className="form-container">
                <form className="form">
                    <TextInput
                        label="User Name"
                        type="text"
                        placeholder="UserName"
                        name="username"
                        onChange={handleChange}
                        value={formValues.username}
                        errorMessages={
                            !formValues.username
                                ? messErrors.username
                                : formatCharacterSpecial.test(
                                      formValues.username
                                  )
                                ? "username cannot contains special characters."
                                : ""
                        }
                    />
                    <TextInput
                        label="Email"
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        onChange={handleChange}
                        value={formValues.email}
                        errorMessages={
                            !formValues.email
                                ? messErrors.email
                                : !formatEmail.test(formValues.email)
                                ? "email is not valid."
                                : ""
                        }
                    />
                    <TextInput
                        label="Phone"
                        type="text"
                        placeholder="Your Phone"
                        name="phone"
                        onChange={handleChange}
                        value={formValues.phone}
                        errorMessages={
                            !formValues.phone
                                ? messErrors.phone
                                : !formatPhone.test(formValues.phone)
                                ? "please enter a valid phone number and phone must has at least 10 number."
                                : ""
                        }
                    />

                    <TextInput
                        label="Password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={formValues.password}
                        errorMessages={
                            !formValues.password ? messErrors.password : ""
                        }
                    />
                    <TextInput
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={handleChange}
                        value={formValues.confirmPassword}
                        errorMessages={
                            !formValues.confirmPassword
                                ? messErrors.confirmPassword
                                : ""
                        }
                    />
                    <BtnForm btnTitle="SIGN UP" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    );
}

export default SignUp;
