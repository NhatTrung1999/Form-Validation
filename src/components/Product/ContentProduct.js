import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addProduct } from "../../features/product/productSlice";
import AddAlert from "../Modal/AddAlert";
import ShowOnlyProduct from "./ShowOnlyProduct";

function Content() {
    const [open, setOpen] = useState(false);
    const products = useSelector((state) => state.product.listProduct);
    const dispatch = useDispatch();
    const [addData, setAddData] = useState({
        name: "",
        quantity: "",
        unit: "",
        price: "",
        status: "",
        date: "",
    });

    const handleAddChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newData = { ...addData };
        newData[fieldName] = fieldValue;
        setAddData(newData);
    };

    const handleAdd = () => {
        const newProduct = {
            id: nanoid(),
            name: addData.name,
            quantity: addData.quantity,
            unit: addData.unit,
            price: addData.price,
            status: addData.status,
            date: addData.date,
        };

        dispatch(addProduct(newProduct));
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
                        setOpen(false);
                    }}
                    action="Add"
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
                            <ShowOnlyProduct key={product.id} product={product} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Content;
