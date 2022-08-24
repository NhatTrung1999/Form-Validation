export const validateProduct = (values) => {
    const formatUnit = /[.]/;
    const errors = {};

    if (!values.name) {
        errors.name = "product name cannot be blank.";
    }

    if (!values.quantity) {
        errors.quantity = "product quantity cannot be blank.";
    }

    if (!values.price) {
        errors.price = "product price cannot be blank.";
    }

    if (formatUnit.test(values.quantity) && values.unit !== "Kg") {
        errors.unit = "product quantity is invalid";
    }

    return errors;
};
