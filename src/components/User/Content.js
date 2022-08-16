import { useSelector, useDispatch } from "react-redux";
import { addUser, editUser, deleteUser } from "../../features/user/userSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import EditUser from "./EditUser";
import ShowOnlyRow from "./ShowOnlyRow";

function Content() {
    const users = useSelector((state) => state.user.listUser);

    const dispatch = useDispatch();

    const [editFormData, setEditFormData] = useState({
        name: "",
        email: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddUser = (e) => {
        e.preventDefault();
        let today = new Date();

        let date =
            today.getDate() +
            "/" +
            (today.getMonth() + 1) +
            "/" +
            today.getFullYear();
        dispatch(
            addUser({
                id: nanoid(),
                name: `some text`,
                email: "mail@gmail.com",
                date: date,
                status: "chưa kích hoạt",
            })
        );
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();

        dispatch(
            editUser({
                id: editContactId,
                name: editFormData.name,
                email: editFormData.email,
            })
        );

        setEditContactId(null);
    };

    const handleEditClick = (event, user) => {
        event.preventDefault();

        setEditContactId(user.id);
        const formValues = {
            name: user.name,
            email: user.email,
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
                                        handleEditFormChange={
                                            handleEditFormChange
                                        }
                                        handleCancelClick={handleCancelClick}
                                        handleEditSubmit={handleEditSubmit}
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
