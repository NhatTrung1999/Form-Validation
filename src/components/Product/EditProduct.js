import { useState, useEffect } from "react";
function EditProduct({
    product,
    handleEditChange,
    handleEditSubmit,
    handleCancelClick,
    errorMessages,
}) {
    const { name, quantity, price } = errorMessages;

    const [mess, setMess] = useState({});
    const errors = { ...mess };

    useEffect(() => {
        if (product.name.length !== 0) {
            errors.isName = "product name cannot be blank.";
            setMess(errors);
        }
        if (product.quantity.length !== 0) {
            errors.isQuantity = "quantity cannot be blank.";
            setMess(errors);
        }
        if (product.price.length !== 0) {
            errors.isPrice = "price cannot be blank.";
            setMess(errors);
        }
    }, [product]);

    const handleBlur = () => {
        errors.name = "product name cannot be blank.";
        setMess(errors);
    };

    const handleBlur1 = () => {
        errors.quantity = "quantity cannot be blank.";
        setMess(errors);
    };

    const handleBlur2 = () => {
        errors.price = "price cannot be blank.";
        setMess(errors);
    };

    return (
        <>
            <td>
                <input
                    className="user-item"
                    type="text"
                    placeholder="Enter a productname..."
                    name="name"
                    value={product.name}
                    onChange={handleEditChange}
                    onBlur={handleBlur}
                ></input>
                <span className="error-messages">
                    {!product.name ? name || mess.name || mess.isName : ""}
                </span>
            </td>
            <td>
                <input
                    className="user-item"
                    // type="number"
                    placeholder="Enter a quantity..."
                    name="quantity"
                    value={product.quantity}
                    onChange={handleEditChange}
                    onBlur={handleBlur1}
                ></input>
                <span className="error-messages">
                    {!product.quantity
                        ? quantity || mess.quantity || mess.isQuantity
                        : isNaN(product.quantity)
                        ? "quantity must be number."
                        : /[.]/.test(product.quantity) === true &&
                          product.unit !== "Kg"
                        ? "quantity is not valid with unit."
                        : ""}
                </span>
            </td>
            <td>
                <select
                    className="input-item"
                    name="unit"
                    onChange={handleEditChange}
                    value={product.unit}
                >
                    <option value={"Thùng"}>Thùng</option>
                    <option value={"Cái"}>Cái</option>
                    <option value={"Kg"}>Kg</option>
                </select>
            </td>
            <td>
                <input
                    className="user-item"
                    type="number"
                    placeholder="Enter a price..."
                    name="price"
                    value={product.price}
                    onChange={handleEditChange}
                    onBlur={handleBlur2}
                ></input>
                <span className="error-messages">
                    {!product.price
                        ? price || mess.price || mess.isPrice
                        : /^[0]/.test(product.price)
                        ? "price cannot be 0"
                        : ""}
                </span>
            </td>
            <td>{Number(product.quantity) <= 0 ? "Hết hàng" : "Còn hàng"}</td>
            <td>{product.date}</td>
            <td>
                <div className="action">
                    <button
                        type="submit"
                        className="save"
                        onClick={handleEditSubmit}
                    ></button>
                    <button
                        className="cancel"
                        onClick={handleCancelClick}
                    ></button>
                </div>
            </td>
        </>
    );
}

export default EditProduct;
