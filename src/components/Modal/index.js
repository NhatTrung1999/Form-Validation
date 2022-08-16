import "./modal.css";

function Modal({open, handleDelete, handleClose}) {
    return (
        <div className={`modal ${open ? 'open' : ''}`}>
            <div className='modal-container'>
                <h2 className='modal-title'>Bạn muốn xóa tài khoản "some text"?</h2>
                <div className='modal-btn'>
                    <input type='button' className='modal-close' value="Đóng" onClick={handleClose}/>
                    <input type='button' className="modal-del" value="Xóa" onClick={handleDelete} />
                </div>
            </div>
        </div>
    );
}

export default Modal;
