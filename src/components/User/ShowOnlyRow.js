import { useState } from "react";
import Modal from "../Modal";

function ShowOnlyRow({ user, handleEditClick, handleDeleteClick }) {
    const [open, setOpen] = useState(false);

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
                    <div
                        className="delete"
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen(true);
                        }}
                    ></div>
                    <Modal
                        open={open}
                        handleDelete={() => handleDeleteClick(user.id)}
                        handleClose={() => setOpen(false)}
                    />
                </div>
            </td>
        </>
    );
}

export default ShowOnlyRow;
