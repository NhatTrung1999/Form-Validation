import AddItem from "./AddItem";
import "./addAlert.css";

function AddAlert({ open, onCancel, onAdd, handleAddChange, title, action }) {
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
                        />
                        <AddItem
                            titleItem="Số lượng"
                            valueItem="Please enter product number..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="quantity"
                            handleChange={handleAddChange}
                        />
                        <AddItem
                            titleItem="Đơn vị"
                            valueItem="Please enter product unit..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="unit"
                            handleChange={handleAddChange}
                        />
                        <AddItem
                            titleItem="Giá"
                            valueItem="Please enter product price..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="price"
                            handleChange={handleAddChange}
                        />
                        <AddItem
                            titleItem="Trạng thái"
                            valueItem="Please enter product status..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="status"
                            handleChange={handleAddChange}
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
