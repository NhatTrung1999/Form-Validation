import { TextInput, BtnForm, Registration } from "../../components";

function SignUp() {
    return (
        <div className="form-container">
            <form className="login-form">
                <TextInput type="text" placeholder="Your Full Name" />
                <TextInput type="text" placeholder="Your Email" />
                <TextInput type="text" placeholder="Your Phone" />
                <TextInput type="text" placeholder="UserName" />
                <TextInput type="password" placeholder="Password" />
                <TextInput type="password" placeholder="Confirm Password" />
                <BtnForm title="SIGN UP" />
                <BtnForm title="RETURN" />
            </form>
        </div>
    );
}

export default SignUp;
