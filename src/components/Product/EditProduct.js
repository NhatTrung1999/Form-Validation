import { useState } from "react";
import { useSelector } from "react-redux";

function EditProduct({
    product,
    handleEditChange,
    handleEditSubmit,
    handleCancelClick,
}) {
    const products = useSelector((state) => state.product.listProduct);
    const [showErrors, setShowErrors] = useState({});
    function formatMoney(n) {
        return (Math.round(n * 100) / 100).toLocaleString();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        const checkBlank =
            product.name === "" &&
            product.quantity === "" &&
            product.unit === "" &&
            product.price === "" &&
            product.status === "";

        if (
            checkBlank ||
            product.name === "" ||
            product.quantity === "" ||
            product.unit === "" ||
            product.price === "" ||
            product.status === ""
        ) {
            errors.name = "name cannot be blank.";
            errors.quantity = "quantity cannot be blank.";
            errors.unit = "unit cannot be blank.";
            errors.price = "price cannot be blank.";
            errors.status = "status cannot be blank.";
            setShowErrors(errors);
        } else if (isNaN(product.quantity) || isNaN(product.price)) {
            errors.quantity = "quantity is invalid.";
            errors.price = "price is invalid.";
            setShowErrors(errors);
        } else {
            handleEditSubmit();
        }
    };

    return (
        <>
            <td>
                <input
                    className="user-item"
                    type="text"
                    required
                    placeholder="Enter a productname..."
                    name="name"
                    value={product.name}
                    onChange={handleEditChange}
                ></input>
                <span className="error-messages">{showErrors.name}</span>
            </td>
            <td>
                <input
                    className="user-item"
                    type="text"
                    placeholder="Enter a productname..."
                    name="quantity"
                    value={product.quantity}
                    onChange={handleEditChange}
                ></input>
                <span className="error-messages">{showErrors.quantity}</span>
            </td>
            <td>
                <input
                    className="user-item"
                    type="text"
                    required
                    placeholder="Enter a productname..."
                    name="unit"
                    value={product.unit}
                    onChange={handleEditChange}
                ></input>
                <span className="error-messages">{showErrors.unit}</span>
            </td>
            <td>
                <input
                    className="user-item"
                    type="text"
                    required
                    placeholder="Enter a productname..."
                    name="price"
                    value={formatMoney(product.price)}
                    onChange={handleEditChange}
                ></input>
                <span className="error-messages">{showErrors.price}</span>
            </td>
            <td>
                <input
                    className="user-item"
                    type="text"
                    required
                    placeholder="Enter a productname..."
                    name="status"
                    value={product.status}
                    onChange={handleEditChange}
                ></input>
                <span className="error-messages">{showErrors.status}</span>
            </td>
            <td>{product.date}</td>
            <td>
                <div className="action">
                    <button
                        type="submit"
                        className="save"
                        onClick={handleSubmit}
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
