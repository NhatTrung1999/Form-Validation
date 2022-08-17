function EditUser({
    user,
    handleEditFormChange,
    handleCancelClick,
    handleEditSubmit,
}) {
    return (
        <>
            <td>
                <input
                    className="user-item"
                    type="text"
                    required="required"
                    placeholder="Enter a username..."
                    name="username"
                    value={user.username}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    className="user-item"
                    type="text"
                    required="required"
                    placeholder="Enter an email..."
                    name="email"
                    value={user.email}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>{user.date}</td>
            <td>
                <div className="check-container">
                    <div
                        className={`${
                            user.status === true ? "check-fill" : "check-empty"
                        }`}
                    ></div>
                    {user.status === true ? "đã kích hoạt" : "chưa kích hoạt"}
                </div>
            </td>
            <td>
                <div className="action">
                    <button
                        type="submit"
                        className="save"
                        onClick={handleEditSubmit}
                    ></button>
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
