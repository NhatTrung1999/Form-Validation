export const validateProduct = (values) => {
    const formatUnit = /[.]/;
    const errors = {};

    if (!values.name) {
        errors.name = "product name cannot be blank.";
    } else if (!values.quantity) {
        errors.quantity = "product quantity cannot be blank.";
    } else if (!values.price) {
        errors.price = "product price cannot be blank.";
    } else if (!values.name && !values.quantity && !values.price) {
        errors.name = "product name cannot be blank.";
        errors.quantity = "product quantity cannot be blank.";
        errors.price = "product price cannot be blank.";
    }
     else if (formatUnit.test(values.quantity) && values.unit !== "Kg") {
        errors.unit = "quantity is not valid";
    }

    return errors;
};



