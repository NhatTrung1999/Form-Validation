import { useState } from "react";
import { useSelector } from "react-redux";

function Content() {
    const { userId, users } = useSelector((state) => {
        return {
            userId: state.user.userId,
            users: state.user.users,
        };
    });

    console.log(userId);
    console.log(users);

    return (
        <>
            <div className="content-header">
                <div className="list">Danh sách</div>
                <div className="content-add">
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
                        <tr>
                            {users.map((user) => (
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
                                            <div className="edit"></div>
                                            <div className="delete"></div>
                                        </div>
                                    </td>
                                </>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Content;
