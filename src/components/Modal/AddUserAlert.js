import AddItem from "./AddItem";
import "./addAlert.css";

function AddUserAlert({
    open,
    onCancel,
    onAdd,
    handleAddChange,
    title,
    action,
    product,
    errorMessages,
}) {
    const { username, email } = errorMessages;

    return (
        <div className={`modal-add ${open ? "open" : ""}`}>
            <div className="add-container">
                <div className="wrapper">
                    <h1 className="add-product">{title} User</h1>
                    <div>
                        <AddItem
                            titleItem="Tên đăng nhập"
                            valueItem="Please enter username..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="username"
                            handleChange={handleAddChange}
                            errors={!product.username ? username : ""}
                        />
                        <AddItem
                            titleItem="Email"
                            valueItem="Please enter email..."
                            inputItem="input-item"
                            itemTitle="item-title"
                            itemProduct="item-product"
                            name="email"
                            handleChange={handleAddChange}
                            errors={!product.email ? email : ""}
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

export default AddUserAlert;
