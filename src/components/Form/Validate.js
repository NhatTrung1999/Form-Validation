export const validate = (values) => {
    const errors = {};
    var formatCharacterSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var formatEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const formatPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!values.username) {
        errors.username = "username cannot be blank.";
    } else if (formatCharacterSpecial.test(values.username)) {
        errors.username = "username cannot contains special characters.";
    }

    if (!values.email) {
        errors.email = "email cannot be blank.";
    } else if (!formatEmail.test(values.email)) {
        errors.email = "email is not valid.";
    }

    if (!values.phone) {
        errors.phone = "phone cannot be blank.";
    } else if (!formatPhone.test(values.phone)) {
        errors.phone = "please enter a valid phone number and phone must has at least 10 number.";
    }

    if (!values.password) {
        errors.password = "password cannot be blank.";
    } else if (!/^(?=.*[a-z])/.test(values.password)) {
        errors.password = "password must contain at least one lowercase character.";
    } else if(!/^(?=.*[A-Z])/.test(values.password)) {
        errors.password = "password must contain at least one uppercase character.";
    } else if (!/^(?=.*[0-9])/.test(values.password)) {
        errors.password = "password must contain at least one number.";
    } else if (!/^(?=.*[!@#$%^&*])/.test(values.password)) {
        errors.password = "password must contain at least one special character.";
    } else if (!/^(?=.{8,})/.test(values.password)) {
        errors.password = "password password must be 8 characters or longer.";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "confirm password cannot be blank.";
    } else if(values.password !== values.confirmPassword) {
        errors.confirmPassword = "confirm password does not match.";
    }

    return errors;
};
