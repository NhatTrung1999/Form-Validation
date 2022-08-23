import { useState } from "react";
import Modal from "../Modal"

function ShowOnlyProduct({ product, onShow, onDelete }) {

    const [open, setOpen] = useState(false)
    function formatMoney(n) {
        return (Math.round(n * 100) / 100).toLocaleString();
    }

    return (
        <>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.unit}</td>
            <td>{formatMoney(product.price)} {"VNĐ"}</td>
            <td>{Number(product.quantity) === 0 ? "Hết hàng" : "Còn hàng"}</td>
            <td>{product.date}</td>
            <td>
                <div className="action">
                    <button
                        className="editProduct"
                        onClick={(e) => onShow(e, product)}
                    ></button>
                    <button
                        className="deleteProduct"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(true);
                        }}
                    ></button>
                    <Modal
                        open={open}
                        title="Bạn muốn xóa sản phẩm"
                        name={product.name}
                        value="Xóa"
                        handleDelete={() => onDelete(product.id)}
                        handleClose={() => setOpen(false)}
                    />
                </div>
            </td>
        </>
    );
}

export default ShowOnlyProduct;
