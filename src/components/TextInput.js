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
            <label className="label-input">{label}</label>
            <input
                className="form-field"
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                // onChange={(e) => onChange(e.target.value)}
                onChange={onChange}
            />
            <span className="error-messages">{errorMessages}</span>
        </>
    );
}

export default TextInput;
