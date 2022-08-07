import { useState } from "react";
import { TextInput, BtnForm, Registration } from "../../components";

function LoginForm() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "user1",
            password: "pass1",
        },
        {
            username: "user2",
            password: "pass2",
        },
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password",
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) => {
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    };

    const renderForm = (
        <form className="login-form" onSubmit={handleSubmit}>
            <TextInput
                type="text"
                name="uname"
                placeholder="username"
                errorMessages={renderErrorMessage("uname")}
            />
            <TextInput
                type="password"
                name="pass"
                placeholder="password"
                errorMessages={renderErrorMessage("pass")}
            />
            <BtnForm title="LOGIN" />
            <Registration />
        </form>
    );

    return (
        <div className="form-container">
            {isSubmitted ? (
                <div>User is successfully logged in</div>
            ) : (
                renderForm
            )}
        </div>
    );
}

export default LoginForm;
