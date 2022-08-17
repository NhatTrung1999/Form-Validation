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
                username: "Mary",
                password: 'mary1234',
                email: "mary@gmail.com",
                date: date,
                status: true,
            },
            {
                id: 1,
                username: "Peter",
                password: "peter5678",
                email: "peter@gmail.com",
                date: date,
                status: true,
            },
            {
                id: 2,
                username: "John",
                password: "john12345",
                email: "peter@gmail.com",
                date: date,
                status: false,
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
