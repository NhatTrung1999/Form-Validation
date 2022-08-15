function EditUser({ user, handleEditFormChange, handleCancelClick }) {
    return (
        <>
            <td>
                <input
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
                    <div className="edit">Save</div>
                    <div className="delete" onClick={handleCancelClick}>
                        Cancel
                    </div>
                </div>
            </td>
        </>
    );
}

export default EditUser;
