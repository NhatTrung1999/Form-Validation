import { useState } from "react";
import Modal from "../Modal";
import { useSelector, useDispatch } from "react-redux";
import { activeUser } from "../../features/user/userSlice";

function ShowOnlyRow({ user, handleEditClick, handleDeleteClick }) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    const users = useSelector((state) => state.user.listUser);

    const handleActiveUser = () => {
        dispatch(
            activeUser({
                id: user.id,
                status: !user.status,
            })
        );
    };

    return (
        <>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.date}</td>
            <td>
                <div className="check-container">
                    <div
                        className={`${
                            user.status === true ? "check-fill" : "check-empty"
                        }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setActive(true);
                        }}
                    ></div>
                    {user.status === true ? "đã kích hoạt" : "chưa kích hoạt"}
                    {user.status === true ? (
                        <Modal
                            open={active}
                            title="Hủy kích hoạt tài khoản"
                            name={user.username}
                            value="Hủy kích hoạt"
                            handleDelete={() => {
                                handleActiveUser();
                                setActive(false);
                                console.log(users);
                            }}
                            handleClose={() => setActive(false)}
                        />
                    ) : (
                        <Modal
                            open={active}
                            title="Kích hoạt tài khoản"
                            name={user.username}
                            value="Kích hoạt"
                            handleDelete={() => {
                                handleActiveUser();
                                setActive(false);
                                console.log(users);
                            }}
                            handleClose={() => setActive(false)}
                        />
                    )}
                </div>
            </td>
            <td>
                <div className="action">
                    <div
                        className="edit"
                        onClick={(event) => handleEditClick(event, user)}
                    ></div>
                    <div
                        className="delete"
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen(true);
                        }}
                    ></div>
                    <Modal
                        open={open}
                        title="Bạn muốn xóa tài khoản"
                        name={user.username}
                        value="Xóa"
                        handleDelete={() => handleDeleteClick(user.id)}
                        handleClose={() => setOpen(false)}
                    />
                </div>
            </td>
        </>
    );
}

export default ShowOnlyRow;
