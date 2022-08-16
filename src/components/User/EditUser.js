function EditUser({ user, handleEditFormChange, handleCancelClick, handleEditSubmit }) {
    return (
        <>
            <td>
                <input
                    className="user-item"
                    type="text"
                    required="required"
                    placeholder="Enter a name..."
                    name="name"
                    value={user.name}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className="user-item"
                    type="text"
                    required="required"
                    placeholder="Enter an address..."
                    name="email"
                    value={user.email}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>{user.date}</td>
            <td>
                <div className="check-container">
                    <div className="check-empty"></div>
                    {user.status}
                </div>
            </td>
            <td>
                <div className="action">
                    <button type="submit" className="save" onClick={handleEditSubmit}></button>
                    <button
                        className="cancel"
                        onClick={handleCancelClick}
                    ></button>
                </div>
            </td>
        </>
    );
}

export default EditUser;
