function ShowOnlyRow({ user, handleEditClick }) {
    return (
        <>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.date}</td>
            <td>
                <div className="check-container">
                    <div className="check-empty"></div>
                    {user.status}
                </div>
            </td>
            <td>
                <div className="action">
                    <div
                        className="edit"
                        onClick={(event) => handleEditClick(event, user)}
                    ></div>
                    <div className="delete"></div>
                </div>
            </td>
        </>
    );
}

export default ShowOnlyRow;
