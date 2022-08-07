function TextInput({ type, placeholder, name, errorMessages }) {
    return (
        <>
            <input
                className="form-field"
                type={type}
                name={name}
                placeholder={placeholder}
                required
            />
            {errorMessages}
        </>
    );
}

export default TextInput;
