import { useState, useEffect } from "react";
import { TextInput, BtnForm } from "../../components";
import { validate } from "../../components/Form/Validate";

function SignUp() {
    const initialValues = {
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        // fullName: "",
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const formatEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const formatSpecialCharaters = /^[a-zA-Z0-9]+$/;
    const formatPhone =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if (
            formValues.username &&
            formValues.password &&
            formValues.phone &&
            formValues.confirmPassword &&
            formValues.email &&
            formValues.password == formValues.confirmPassword &&
            formValues.password.length >= 8 &&
            formatEmail.test(formValues.email) &&
            formatSpecialCharaters.test(formValues.username) &&
            formatPhone.test(formValues.phone)
        ) {
            setIsSubmit(true);
        } else if (formValues.password.length < 8) {
            setIsSubmit(false);
        }
    };

    return (
        <div className="form-container">
            <form className="form">
                {isSubmit ? (
                    <div className="success-message">Sign up is success!</div>
                ) : null}
                <TextInput
                    label="User Name"
                    type="text"
                    placeholder="UserName"
                    name="username"
                    onChange={handleChange}
                    value={formValues.username}
                    errorMessages={formErrors.username}
                />
                <TextInput
                    label="Email"
                    type="text"
                    placeholder="Your Email"
                    name="email"
                    onChange={handleChange}
                    value={formValues.email}
                    errorMessages={formErrors.email}
                />
                <TextInput
                    label="Phone"
                    type="text"
                    placeholder="Your Phone"
                    name="phone"
                    onChange={handleChange}
                    value={formValues.phone}
                    errorMessages={formErrors.phone}
                />

                <TextInput
                    label="Password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={formValues.password}
                    errorMessages={formErrors.password}
                />
                <TextInput
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={formValues.confirmPassword}
                    errorMessages={formErrors.confirmPassword}
                />
                <BtnForm btnTitle="SIGN UP" onClick={handleSubmit} />
            </form>
        </div>
    );
}

export default SignUp;
