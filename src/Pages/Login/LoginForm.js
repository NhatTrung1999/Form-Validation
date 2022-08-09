import { useState } from "react";
import { TextInput, BtnForm, Registration } from "../../components";
import { validate } from "../../components/Validate";

function LoginForm() {
    const initialValues = {
        username: "",
        password: "",
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
                    type="text"
                    name="username"
                    placeholder="USERNAME"
                    onChange={handleChange}
                    errorMessages={formErrors.username}
                />
                <TextInput
                    type="password"
                    name="password"
                    placeholder="PASSWORD"
                    onChange={handleChange}
                    errorMessages={formErrors.password}
                />
                <BtnForm title="LOGIN" onClick={handleSubmit} />
                <Registration />
            </form>
        </div>
    );
}

export default LoginForm;
