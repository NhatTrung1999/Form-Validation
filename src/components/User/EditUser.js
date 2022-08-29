import { useState, useEffect } from "react";

function EditUser({
    user,
    handleEditDataChange,
    handleCancelClick,
    handleEditSubmit,
    errorMessages,
}) {
    const { username, email } = errorMessages;
    const formatEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const [mess, setMess] = useState({});
        const errors = { ...mess };

        useEffect(() => {
            if (user.username.length !== 0) {
                errors.isUsername = "username cannot be blank.";
                setMess(errors);
            }
            if (user.email.length !== 0) {
                errors.isEmail = "email cannot be blank.";
                setMess(errors);
            }
            
        }, [user]);
    
        const handleBlur = () => {
            errors.username = "username cannot be blank.";
            setMess(errors);
        };
    
        const handleBlur1 = () => {
            errors.email = "email cannot be blank.";
            setMess(errors);
        };
    

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
                    onChange={handleEditDataChange}
                    onBlur={handleBlur}
                />
                <span className="error-messages">
                    {!user.username ? username || mess.username || mess.isUsername : ""}
                </span>
            </td>
            <td>
                <input
                    className="user-item"
                    type="text"
                    required="required"
                    placeholder="Enter an email..."
                    name="email"
                    value={user.email}
                    onChange={handleEditDataChange}
                    onBlur={handleBlur1}
                ></input>
                <span className="error-messages">
                    {!user.email ? email || mess.email || mess.isEmail : !formatEmail.test(user.email) ? "email is not valid" : ""}
                </span>
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
