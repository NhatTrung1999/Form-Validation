import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../features/user/userSlice";
import { useState, useRef, useEffect } from "react";
import { nanoid } from '@reduxjs/toolkit'
import EditUser from "./EditUser";
import ShowOnlyRow from "./ShowOnlyRow";

function Content() {
    const { userId, users } = useSelector((state) => {
        return {
            userId: state.user.userId,
            users: state.user.listUser,
        };
    });

    const dispatch = useDispatch();

    const [editFormData, setEditFormData] = useState({
        name: "",
        email: "",
    });

    const [editId, setEditId] = useState(null);

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleEditClick = (event, user) => {
        event.preventDefault();

        setEditId(user.id);
        const formValues = {
            name: user.name,
            email: user.email,
        };
        setEditFormData(formValues);
    };

    const nameRef = useRef();
    const emailRef = useRef();

    useEffect(() => {
        console.log(nameRef);
        console.log(emailRef);
    });

    console.log(users)

    const handleAddUser = () => {
        dispatch(
            addUser({
                id: nanoid(),
                name: `some text ${users.length}`,
                email: "mail@gmail.com",
                date: "15/8/2022",
                status: "chưa kích hoạt",
            })
        );
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
                                {editId === user.id ? (
                                    <EditUser
                                        user={user}
                                        handleEditFormChange={
                                            handleEditFormChange
                                        }
                                    />
                                ) : (
                                    <ShowOnlyRow
                                        user={user}
                                        handleEditClick={handleEditClick}
                                        
                                    />
                                )}
                            </tr>
                        ))}
                        {/* <EditUser /> */}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Content;
