import { useState } from "react";
import { TextInput, BtnForm, Registration } from "../../components";
import isEmpty from "validator/lib/isEmpty";

function LoginForm() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [validationMsg, setValidationMsg] = useState("");

    const onChangeUser = (value) => {
        setUserName(value);
    };

    const onChangePassWord = (value) => {
        setPassword(value);
    };

    const validationAll = () => {
        const msg = {};
        if (isEmpty(username)) {
            msg.username = "Please input your username"
        }

        if (isEmpty(password)) {
            msg.password = "Please input your password"
        }

        setValidationMsg(msg)

        if (Object.keys(msg).length > 0) return true;
        return false;
    };

    const onSubmitLogin = () => {
        const isValid  = validationAll();
        if(!isValid) alert('Login is success!')       
    };

    return (
        <div className="form-container">
            <form className="login-form">
                <TextInput
                    type="text"
                    placeholder="username"
                    onChange={onChangeUser}
                    errorMessages={validationMsg.username}
                />
                <TextInput
                    type="password"
                    placeholder="password"
                    onChange={onChangePassWord}
                    errorMessages={validationMsg.password}
                />
                <BtnForm title="LOGIN" onClick={onSubmitLogin} />
                <Registration />
            </form>
        </div>
    );
}

export default LoginForm;
