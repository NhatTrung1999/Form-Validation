import AddItem from "./AddItem";
import "./addAlert.css";
import { useState } from "react";
import { validateProduct } from "../Product/ValidateProduct";

function AddAlert({
    open,
    onCancel,
    onAdd,
    handleAddChange,
    title,
    action,
    product,
    errorMessages,
}) {
    const { name, quantity, price, unit } = errorMessages;
    const [mess, setMess] = useState({});

    const handleBlur = () => {
        const blurMess = validateProduct(product);
        if (Object.keys(blurMess).length > 0) {
            setMess(blurMess);
        }
    };

    return (
        <div className={`modal-add ${open ? "open" : ""}`}>
            <div className="add-container">
                <div className="wrapper">
                    <h1 className="add-product">{title} Product</h1>
                    <div>
                        <AddItem
                            titleItem="Tên sản phẩm"
                            valueItem="Please enter product number..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="name"
                            handleChange={handleAddChange}
                            handleBlur={handleBlur}
                            errors={!product.name ? mess.name || name : ""}
                        />
                        <AddItem
                            titleItem="Số lượng"
                            valueItem="Please enter product number..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="quantity"
                            type="number"
                            handleChange={handleAddChange}
                            handleBlur={handleBlur}
                            errors={
                                !product.quantity
                                    ? mess.quantity || quantity
                                    : product.unit !== "Kg"
                                    ? unit
                                    : ""
                            }
                        />
                        <h2 className="item-title">Đơn vị</h2>
                        <select
                            name="unit"
                            onChange={handleAddChange}
                            className="input-item"
                        >
                            <option value={"Select"}>--Select Unit--</option>
                            <option value={"Thùng"}>Thùng</option>
                            <option value={"Cái"}>Cái</option>
                            <option value={"Kg"}>Kg</option>
                        </select>
                        <AddItem
                            titleItem="Giá"
                            valueItem="Please enter product price..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="price"
                            handleChange={handleAddChange}
                            handleBlur={handleBlur}
                            errors={!product.price ? mess.price || price : ""}
                            type="number"
                        />
                        <div className="btn-container">
                            <button className="add-btn" onClick={onAdd}>
                                {action}
                            </button>
                            <button className="cancel-btn" onClick={onCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddAlert;
