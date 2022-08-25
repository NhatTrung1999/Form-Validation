function AddItem({
    titleItem,
    inputItem,
    valueItem,
    itemProduct,
    itemTitle,
    handleChange,
    name,
    errors,
    type,
    handleBlur
}) {
    return (
        <div className={itemProduct}>
            <h2 className={itemTitle}>{titleItem}</h2>
            <input
                className={inputItem}
                placeholder={valueItem}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                type={type}
            />
            <span className="error-messages">{errors}</span>
        </div>
    );
}

export default AddItem;
