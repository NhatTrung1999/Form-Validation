function BtnForm({title = '', onClick}) {
    return (
        <button className="form-field" type="submit" >
            {title}
        </button>
    );
}

export default BtnForm;
