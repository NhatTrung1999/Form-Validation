import { useState, useEffect } from "react";
import { TextInput, BtnForm } from "../../components";
import { validate } from "../../components/Validate";

function SignUp() {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        phone: "",
        fullName: "",
        confirmPassword: "",
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(!isSubmit);
    };

    return (
        <div className="form-container">
            <form className="login-form">
                <TextInput
                    label="Full Name"
                    type="text"
                    name="fullName"
                    placeholder="Your Full Name"
                    value={formValues.fullName}
                    onChange={handleChange}
                    errorMessages={formErrors.fullName}
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
                    label="User Name"
                    type="text"
                    placeholder="UserName"
                    name="username"
                    onChange={handleChange}
                    value={formValues.username}
                    errorMessages={formErrors.username}
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
                <BtnForm title="SIGN UP" onClick={handleSubmit} />
                <BtnForm title="RETURN" />
            </form>
        </div>
    );
}

export default SignUp;
