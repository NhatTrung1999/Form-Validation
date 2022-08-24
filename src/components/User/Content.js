import { useSelector, useDispatch } from "react-redux";
import { addUser, editUser, deleteUser } from "../../features/user/userSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import EditUser from "./EditUser";
import ShowOnlyRow from "./ShowOnlyRow";
import { validateUser } from "./ValidateUser";

function Content() {
    const users = useSelector((state) => state.user.listUser);
    const dispatch = useDispatch();
    const [showErrors, setShowErrors] = useState({});

    let today = new Date();

    let date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

    const [editFormData, setEditFormData] = useState({
        username: "",
        email: "",
        date: date,
        status: false,
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddUser = (e) => {
        e.preventDefault();
        dispatch(
            addUser({
                id: nanoid(),
                username: `some text`,
                email: "mail@gmail.com",
                date: date,
                status: false,
            })
        );
    };

    const handleEditDataChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleEditSubmit = () => {
        const newEditData = {
            id: editContactId,
            username: editFormData.username,
            email: editFormData.email,
            date: editFormData.date,
            status: editFormData.status,
        };

        const errors = validateUser(newEditData);

        if (Object.keys(errors).length > 0) {
            setShowErrors(errors);
        } else {
            dispatch(editUser(newEditData));
            setEditContactId(null);
        }
    };

    const handleEditClick = (event, user) => {
        event.preventDefault();

        setEditContactId(user.id);
        const formValues = {
            username: user.username,
            email: user.email,
            date: user.date,
            status: user.status,
        };
        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (userId) => {
        dispatch(deleteUser(userId));
    };

    return (
        <>
            <div className="content-header">
                <div className="list">Danh sách</div>
                <div className="content-add" onClick={handleAddUser}>
                    <div className="add-user"></div>
                    <span className="add">Thêm</span>
                </div>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Email</th>
                            <th>Ngày cập nhật</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                {editContactId === user.id ? (
                                    <EditUser
                                        user={editFormData}
                                        handleEditDataChange={
                                            handleEditDataChange
                                        }
                                        handleCancelClick={handleCancelClick}
                                        handleEditSubmit={handleEditSubmit}
                                        errorMessages={showErrors}
                                    />
                                ) : (
                                    <ShowOnlyRow
                                        user={user}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Content;
