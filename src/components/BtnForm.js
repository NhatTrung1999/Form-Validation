function BtnForm({title = '', onClick}) {
    return (
        <button className="form-field btn" type="button" onClick={onClick} >
            {title}
        </button>
    );
}

export default BtnForm;
