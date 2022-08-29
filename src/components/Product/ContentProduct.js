import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
    addProduct,
    editProduct,
    deleteProduct,
} from "../../features/product/productSlice";
import AddAlert from "../Modal/AddAlert";
import ShowOnlyProduct from "./ShowOnlyProduct";
import EditProduct from "./EditProduct";
import { validateProduct } from "./ValidateProduct";

let today = new Date();

let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

function Content() {
    const [open, setOpen] = useState(false);
    const products = useSelector((state) => state.product.listProduct);
    const [showErrors, setShowErrors] = useState({});
    const dispatch = useDispatch();
    const [addData, setAddData] = useState({
        name: "",
        quantity: "",
        unit: "",
        price: "",
        date: date,
    });

    const handleAddChange = (event) => {
        const { name, value } = event.target;
        setAddData({ ...addData, [name]: value });
    };

    const handleAdd = () => {
        const newProduct = {
            id: nanoid(),
            name: addData.name,
            quantity: addData.quantity,
            unit: addData.unit,
            price: addData.price,
            date: addData.date,
        };
        dispatch(addProduct(newProduct));
        setAddData({
            ...addData,
            name: "",
            quantity: "",
            price: "",
            unit: "--Select Unit--",
        });
        setOpen(false);
    };

    const [editData, setEditData] = useState({
        name: "",
        quantity: "",
        unit: "",
        price: "",
        status: "",
        date: date,
    });

    const [editProductId, setEditProductId] = useState(null);

    const handleEditDataChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newData = { ...editData };
        newData[fieldName] = fieldValue;
        setEditData(newData);
    };

    const handleEditSubmit = () => {
        const editedProduct = {
            id: editProductId,
            name: editData.name,
            quantity: editData.quantity,
            unit: editData.unit,
            price: editData.price,
            status: editData.status,
            date: editData.date,
        };

        const errors = validateProduct(editedProduct);

        if (Object.keys(errors).length > 0) {
            setShowErrors(errors);
        } else {
            dispatch(editProduct(editedProduct));
            setEditProductId(null);
        }
    };

    const handleEditClick = (event, product) => {
        event.preventDefault();

        setEditProductId(product.id);
        const formValues = {
            name: product.name,
            quantity: product.quantity,
            unit: product.unit,
            price: product.price,
            status: product.status,
            date: product.date,
        };
        setEditData(formValues);
    };

    const handleCancelClick = () => {
        setEditProductId(null);
    };

    const handleDelete = (productId) => {
        dispatch(deleteProduct(productId));
    };

    return (
        <>
            <div className="content-header">
                <div className="list">Danh sách sản phẩm</div>
                <div className="content-add" onClick={() => setOpen(true)}>
                    <div className="add-user"></div>
                    <span className="add">Thêm sản phẩm</span>
                </div>
                <AddAlert
                    title="Add"
                    open={open}
                    onCancel={() => setOpen(false)}
                    handleAddChange={handleAddChange}
                    onAdd={() => {
                        handleAdd();
                    }}
                    action="Add"
                    product={addData}
                />
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn vị</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Ngày tạo</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                {editProductId === product.id ? (
                                    <EditProduct
                                        product={editData}
                                        handleEditChange={handleEditDataChange}
                                        handleCancelClick={handleCancelClick}
                                        handleEditSubmit={handleEditSubmit}
                                        errorMessages={showErrors}
                                    />
                                ) : (
                                    <ShowOnlyProduct
                                        product={product}
                                        onEditClick={handleEditClick}
                                        onDelete={handleDelete}
                                    />
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Content;
