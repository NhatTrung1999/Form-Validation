function AddItem({
    titleItem,
    inputItem,
    valueItem,
    itemProduct,
    itemTitle,
    handleChange,
    name
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
        </div>
    );
}

export default AddItem;
