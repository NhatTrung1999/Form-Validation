import AddItem from "./AddItem";
import "./addAlert.css";
import productSlice from "../../features/product/productSlice";
import {useState} from "react";

function AddAlert({ open, onCancel, onAdd, handleAddChange, title, action, product }) {

    const [showErrors, setShowErrors] = useState({})
    const errors = {};
    const checkBlank =
            product.name === "" &&
            product.quantity === "" &&
            product.unit === "" &&
            product.price === "" &&
            product.status === "";

    const handleAdd = () => {
        if(product.name === "" && product.quantity === "" && product.unit === "" && product.price === "" && product.status === "") {
            errors.name = "name cannot be blank.";
            errors.quantity = "quantity cannot be blank.";
            errors.unit = "unit cannot be blank.";
            errors.price = "price cannot be blank.";
            errors.status = "status cannot be blank.";
            setShowErrors(errors)
        } if (product.name === "" || product.quantity === "" || product.unit === "" || product.price === "" || product.status === "") {
            errors.name = "name cannot be blank.";
            errors.quantity = "quantity cannot be blank.";
            errors.unit = "unit cannot be blank.";
            errors.price = "price cannot be blank.";
            errors.status = "status cannot be blank.";
            setShowErrors(errors)
        } else {
            onAdd()
        }
    }

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
                            errors={showErrors.name}
                        />
                        <AddItem
                            titleItem="Số lượng"
                            valueItem="Please enter product number..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="quantity"
                            handleChange={handleAddChange}
                            errors={showErrors.quantity}
                        />
                        <AddItem
                            titleItem="Đơn vị"
                            valueItem="Please enter product unit..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="unit"
                            handleChange={handleAddChange}
                            errors={showErrors.unit}
                        />
                        <AddItem
                            titleItem="Giá"
                            valueItem="Please enter product price..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="price"
                            handleChange={handleAddChange}
                            errors={showErrors.price}
                        />
                        <AddItem
                            titleItem="Trạng thái"
                            valueItem="Please enter product status..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="status"
                            handleChange={handleAddChange}
                            errors={showErrors.status}
                        />
                        <AddItem
                            titleItem="Ngày tạo"
                            valueItem="Please enter create date..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="date"
                            handleChange={handleAddChange}                            
                        />
                        <div className="btn-container">
                            <button className="add-btn" onClick={handleAdd}>
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
