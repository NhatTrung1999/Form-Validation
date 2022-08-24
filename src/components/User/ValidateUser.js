export const validateUser = (values) => {
    const errors = {};
    const formatEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.username) {
        errors.username = 'username cannot be blank.';
    }

    if(!values.email) {
        errors.email = 'email cannot be blank.';
    }else if (!formatEmail.test(values.email)) {
        errors.email = 'email is not valid.';
    }

    return errors;
}