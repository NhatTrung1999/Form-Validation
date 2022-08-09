function TextInput({
    type,
    placeholder,
    value,
    onChange,
    errorMessages,
    label = "",
    name = "",
}) {
    return (
        <>
            <div className="form-field">
                <label>{label}</label>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
            <span className="error-messages">{errorMessages}</span>
        </>
    );
}

export default TextInput;
