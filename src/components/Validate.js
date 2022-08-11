export const validate = (values) => {
    const errors = {};
    const formatEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const formatPassword =
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";
    const formatSpecialCharaters = /^[a-zA-Z0-9]+$/;
    const formatPhone =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!values.username) {
        errors.username = "Username cannot be blank.";
    } else if (!formatSpecialCharaters.test(values.username)) {
        errors.username = "Username cannot be special characters.";
    }
    if (!values.phone) {
        errors.phone = "Phone cannot be blank.";
    } else if (!formatPhone.test(values.phone) && values.phone.length < 10) {
        errors.phone =
            "Please enter a valid phone number and Phone must has at least 10 number.";
    }
    // if (!values.fullName) {
    //     errors.fullName = "Full name không được để trống!";
    // }
    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm password cannot be blank.";
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Confirm password does not match.";
    }

    if (!values.email) {
        errors.email = "Email cannot be blank.";
    } else if (!formatEmail.test(values.email)) {
        errors.email = "Email is not valid.";
    }

    if (!values.password) {
        errors.password = "Password cannot be blank.";
    } else if (values.password.length < 8) {
        errors.password = "Password must has at least 8 characters.";
    } 
    // else if (formatPhone.test(values.password)) {
    //     errors.password = "Password must contain a digit.";
    // } else if (/[!@#$%^&*]/.test(values.password)) {
    //     errors.password = "Password must contain special character: !@#$%^&*";
    // }
    return errors;
};
