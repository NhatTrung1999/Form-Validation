import AddItem from "./AddItem";
import "./addAlert.css";
import { useState, useEffect } from "react";
import {validateProduct} from "../Product/ValidateProduct"

function AddAlert({
    open,
    onCancel,
    onAdd,
    handleAddChange,
    title,
    action,
    product,
}) {
    const [mess, setMess] = useState({});
    const errors = { ...mess };

    useEffect(() => {
        if (product.name.length !== 0) {
            errors.name = "product name cannot be blank.";
            setMess(errors);
        }
        if (product.quantity.length !== 0) {
            errors.quantity = "quantity cannot be blank.";
            setMess(errors);
        }
        if (product.price.length !== 0) {
            errors.price = "price cannot be blank.";
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

    const handleSubmit = () => {
        const error =  validateProduct(product)
        if(Object.keys(error).length > 0) {
            setMess(error);
        } else {
            onAdd();
            setMess({});
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
                            valueItem="Please enter product name..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="name"
                            value={product.name}
                            handleChange={handleAddChange}
                            handleBlur={handleBlur}
                            errors={
                                !product.name
                                    ? mess.name 
                                    : ""
                            }
                        />
                        <AddItem
                            titleItem="Số lượng"
                            valueItem="Please enter quantity..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="quantity"
                            value={product.quantity}
                            handleChange={handleAddChange}
                            handleBlur={handleBlur1}
                            errors={
                                !product.quantity
                                    ? mess.quantity
                                    : isNaN(product.quantity)
                                    ? "quantity must be number."
                                    : /[.]/.test(product.quantity) &&
                                      product.unit !== "Kg"
                                    ? "quantity is not valid with unit."
                                    : ""
                            }
                        />
                        <h2 className="item-title">Đơn vị</h2>
                        <select
                            name="unit"
                            onChange={handleAddChange}
                            className="input-item"
                            value={product.unit}
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
                            value={product.price}
                            handleChange={handleAddChange}
                            handleBlur={handleBlur2}
                            errors={
                                !product.price
                                    ? mess.price 
                                    : /^[0]/.test(product.price)
                                    ? "price cannot be 0"
                                    : ""
                            }
                            type="number"
                        />
                        <div className="btn-container">
                            <button className="add-btn" onClick={handleSubmit}>
                                {action}
                            </button>
                            <button className="cancel-btn" onClick={() => {onCancel(); setMess({});}}>
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
