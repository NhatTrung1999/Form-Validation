function BtnForm({ btnTitle = "", onClick }) {
    return (
        <div className="form-field">
            <button className='btn' type="submit" onClick={onClick}>
                {btnTitle}
            </button>
        </div>
    );
}

export default BtnForm;
