import { useState} from "react"

function EditUser({
    user,
    handleEditFormChange,
    handleCancelClick,
    handleEditSubmit,
}) {

    const [showErrors, setShowErrors] = useState({})

    const formatEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = {};
        if(user.username === "" || user.email === "") {
            errors.username = 'Username is required'
            errors.email = 'Email is required'
            setShowErrors(errors)
            console.log(errors)
        } if (!formatEmail.test(user.email)) {
            errors.email = 'Email is not valid'
            setShowErrors(errors)
        } else {
            handleEditSubmit()
        } 
    }

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
                />
                <span className="error-messages">{showErrors.username}</span>
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
                <span className="error-messages">{showErrors.email}</span>
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
                        onClick={handleSubmit}
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
