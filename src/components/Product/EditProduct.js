function EditProduct({
    product,
    handleEditChange,
    handleEditSubmit,
    handleCancelClick,
    errorMessages,
}) {
    const { name, quantity, price, unit } = errorMessages;

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
                ></input>
                <span className="error-messages">
                    {!product.name ? name : ""}
                </span>
            </td>
            <td>
                <input
                    className="user-item"
                    type="number"
                    placeholder="Enter a productname..."
                    name="quantity"
                    value={product.quantity}
                    onChange={handleEditChange}
                ></input>
                <span className="error-messages">
                    {!product.quantity ? quantity : ""}
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
                <span className="error-messages">
                    {product.unit !== "Kg" ? unit : ""}
                </span>
            </td>
            <td>
                <input
                    className="user-item"
                    type="number"
                    placeholder="Enter a productname..."
                    name="price"
                    value={product.price}
                    onChange={handleEditChange}
                ></input>
                <span className="error-messages">
                    {!product.price ? price : ""}
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
