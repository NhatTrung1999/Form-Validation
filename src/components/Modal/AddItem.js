function AddItem({
    titleItem,
    inputItem,
    valueItem,
    itemProduct,
    itemTitle,
    handleChange,
    name,
    errors
}) {
    return (
        <div className={itemProduct}>
            <h2 className={itemTitle}>{titleItem}</h2>
            <input
                className={inputItem}
                placeholder={valueItem}
                name={name}
                onChange={handleChange}
            />
            <span className="error-messages">{errors}</span>
        </div>
    );
}

export default AddItem;
