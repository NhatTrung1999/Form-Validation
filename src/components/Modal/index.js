import "./modal.css";

function Modal({ open, title, name, value, handleDelete, handleClose }) {
    return (
        <div className={`modal ${open ? "open" : ""}`}>
            <div className="modal-container">
                <h2 className="modal-title">
                    {title} "{name}"?
                </h2>
                <div className="modal-btn">
                    <input
                        type="button"
                        className="modal-close"
                        value="Đóng"
                        onClick={handleClose}
                    />
                    <input
                        type="button"
                        className="modal-del"
                        value={value}
                        onClick={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
}

export default Modal;
