export const validateProduct = (values) => {
    const formatUnit = /[.]/;
    const errors = {};

    if (!values.name) {
        errors.name = "product name cannot be blank.";
    }

    if (!values.quantity) {
        errors.quantity = "quantity cannot be blank.";
    } 

    if (!values.price) {
        errors.price = "price cannot be blank.";
    } 
    
    if(/^[0]/.test(values.price)) {
        errors.price = "price cannot be 0.";
    }
     
    if (formatUnit.test(values.quantity) && values.unit !== "Kg") {
        errors.unit = "quantity is not valid with unit.";
    } 

    if (isNaN(values.quantity)) {
        errors.quantity = "quantity must be number.";
    }

    return errors;
};



