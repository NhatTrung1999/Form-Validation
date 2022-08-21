function ShowOnlyProduct({ product }) {
    return (
        <>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.unit}</td>
            <td>{product.price}</td>
            <td>{product.status}</td>
            <td>{product.date}</td>
            <td>
                <div className="action">
                    <button className="editProduct"></button>
                    <button className="deleteProduct"></button>
                </div>
            </td>
        </>
    );
}

export default ShowOnlyProduct;
