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
                name: "some text",
                email: "mail@gmail.com",
                date: date,
                status: "chưa kích hoạt",
            },
            {
                id: 1,
                name: "some text 1",
                email: "somtext1@gmail.com",
                date: date,
                status: "chưa kích hoạt",
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
                name: action.payload.name,
                email: action.payload.email,
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
            console.log(id);
            newUsers.splice(index, 1);
            return {
                ...state,
                listUser: newUsers,
            };
        },
    },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
