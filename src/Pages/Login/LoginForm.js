import { useState } from "react";
import { TextInput, BtnForm, Registration } from "../../components/Form";
import { validate } from "../../components/Form/Validate";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const initialState = {
        username: "",
        password: "",
    };

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const formatSpecialCharaters = /^[a-zA-Z0-9]+$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(validate(formValues));
        if (
            formValues.username &&
            formValues.password &&
            formValues.password.length >= 8 &&
            formatSpecialCharaters.test(formValues.username)
        ) {
            setIsSubmit(true);
            navigate("/user", {replace: true});
            localStorage.setItem('login', JSON.stringify(formValues))
        } else if (formValues.password.length < 8) {
            setIsSubmit(false);
        }
        // if (Object.keys(errors).length) {
        //     setFormErrors(errors);
        // }
        // else {
        //     setIsSubmit(true)
        // }

        // console.log(Object.keys(errors))
    };

    return (
        <div className="body-container">
            <div className="form-container">
                <form className="form">
                    {isSubmit ? (
                        <div className="success-message">Login is success!</div>
                    ) : null}
                    <TextInput
                        type="text"
                        name="username"
                        placeholder="USERNAME"
                        value={formValues.username}
                        onChange={handleChange}
                        errorMessages={formErrors.username}
                    />
                    <TextInput
                        type="password"
                        name="password"
                        placeholder="PASSWORD"
                        value={formValues.password}
                        onChange={handleChange}
                        errorMessages={formErrors.password}
                    />
                    <BtnForm btnTitle="LOGIN" onClick={handleSubmit} />
                    <Registration />
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
