import "./modal.css";

function Modal() {
    return (
        <div className='modal overlay'>
            <div className='modal-container'>
                <h2 className='modal-title'>Bạn muốn xóa tài khoản "some text"?</h2>
                <div className='modal-btn'>
                    <input type='button' className='modal-close' value="Đóng" />
                    <input type='button' className="modal-del" value="Xóa" />
                </div>
            </div>
        </div>
    );
}

export default Modal;
