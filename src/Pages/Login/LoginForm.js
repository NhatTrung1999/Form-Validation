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
        if (!validate(formValues)) {
            setIsSubmit(false);
        } else {
            setIsSubmit(true)
        }
        
    };

    return (
        <div className="form-container">
            <form className="form">
                {isSubmit ? (
                    <div className="success-message">Login is success!</div>
                ) : null}
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
                <BtnForm btnTitle="LOGIN" onClick={handleSubmit} />
                <Registration />
            </form>
        </div>
    );
}

export default LoginForm;
