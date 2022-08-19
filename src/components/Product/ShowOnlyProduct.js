import { useState } from "react";
import AddAlert from "../Modal/AddAlert";

function ShowOnlyProduct({ product, key }) {
    return (
        <tr key={key}>
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
        </tr>
    );
}

export default ShowOnlyProduct;
