import { createSlice, nanoid } from "@reduxjs/toolkit";

// const getDefaultUser = (id) => {
//     return {
//         id: id,
//         name: "some text",
//         email: "mail@gmail.com",
//         date: "12/8/2022",
//         status: 'chưa kích hoạt',
//     };
// };

export const userSlice = createSlice({
    name: "user",
    initialState: {
        listUser: [
            {
                id: 0,
                name: "some text",
                email: "mail@gmail.com",
                date: "12/8/2022",
                status: "chưa kích hoạt",
            },
            {
                id: 2,
                name: "some text 1",
                email: "somtext1@gmail.com",
                date: "12/8/2022",
                status: "chưa kích hoạt",
            },
        ],
        userId: 0,
    },
    // () => {
    //     const id = nanoid();
    //     return {
    //         userId: id,
    //         users: [getDefaultUser(id)],
    //     };
    // }
    reducers: {
        addUser: (state, action) => {
            return {
                ...state,
                listUser: [...state.listUser, action.payload],
            };
        },
    },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
