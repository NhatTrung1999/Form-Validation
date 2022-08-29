import { createSlice } from "@reduxjs/toolkit";

let today = new Date();

let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

export const userSlice = createSlice({
    name: "user",
    initialState: {
        listUser: [
            {
                id: 0,
                username: "admin",
                password: 'admin',
                email: "admin@gmail.com",
                date: date,
                status: true,
                role: 'admin'
            },
            {
                id: 1,
                username: "user1",
                password: "user1234",
                email: "user1@gmail.com",
                date: date,
                phone: "0123456789",
                status: true,
                role: 'user'
            },
            {
                id: 2,
                username: "user2",
                password: "user5678",
                email: "user2@gmail.com",
                date: date,
                phone: "0987654321",
                status: false,
                role: 'user'
            },
        ],
    },

    reducers: {
        addUser: (state, action) => {
            return {
                ...state,
                listUser: [...state.listUser, action.payload],
            };
        },
        editUser: (state, action) => {
            const id = action.payload.id;
            const editUser = {
                id: id,
                username: action.payload.username,
                email: action.payload.email,
                date: action.payload.date,
                status: action.payload.status,
            };

            const newUsers = [...state.listUser];
            const index = newUsers.findIndex((user) => user.id === id);
            newUsers[index] = editUser;
            return {
                ...state,
                listUser: newUsers,
            };
        },
        deleteUser: (state, action) => {
            const id = action.payload;
            const newUsers = [...state.listUser];
            const index = newUsers.findIndex((user) => user.id === id);
            newUsers.splice(index, 1);
            return {
                ...state,
                listUser: newUsers,
            };
        },
        activeUser: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.status;
            const newUsers = state.listUser.map((user) => {
                if (user.id === id) {
                    return {
                        ...user,
                        status: newValue
                    };
                }
                return user;
            });
            return {
                ...state,
                listUser: newUsers,
            };
        }
    },
});

export const { addUser, editUser, deleteUser, activeUser } = userSlice.actions;

export default userSlice.reducer;
