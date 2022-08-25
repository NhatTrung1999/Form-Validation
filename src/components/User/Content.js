import { useSelector, useDispatch } from "react-redux";
import { addUser, editUser, deleteUser } from "../../features/user/userSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import EditUser from "./EditUser";
import ShowOnlyRow from "./ShowOnlyRow";
import AddUserAlert from "../Modal/AddUserAlert";
import { validateUser } from "./ValidateUser";

let today = new Date();
let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

function Content() {
    const users = useSelector((state) => state.user.listUser);
    const dispatch = useDispatch();
    const [showErrors, setShowErrors] = useState({});
    const [editFormData, setEditFormData] = useState({
        username: "",
        email: "",
        date: date,
        status: false,
    });
    const [addData, setAddData] = useState({
        username: "",
        email: "",
        date: date,
        status: false,
    });

    const handleAddChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newData = { ...addData };
        newData[fieldName] = fieldValue;
        setAddData(newData);
    };

    const [editContactId, setEditContactId] = useState(null);

    const handleAddUser = () => {

        const newData = {
            id: nanoid(),
            username: addData.username,
            email: addData.email,
            date: addData.date,
            status: addData.status,
        };

        const errors = validateUser(newData);

        if (Object.keys(errors).length > 0) {
            setShowErrors(errors);
        } else {
            dispatch(addUser(newData));
            setOpen(false);
        }
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

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="content-header">
                <div className="list">Danh sách</div>
                <div className="content-add" onClick={() => setOpen(true)}>
                    <div className="add-user"></div>
                    <span className="add">Thêm</span>
                </div>
                <AddUserAlert
                    title="Add"
                    open={open}
                    onCancel={() => setOpen(false)}
                    handleAddChange={handleAddChange}
                    onAdd={() => {
                        handleAddUser();
                    }}
                    action="Add"
                    errorMessages={showErrors}
                    product={addData}
                />
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
