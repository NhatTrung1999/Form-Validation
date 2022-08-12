import { createSlice, nanoid } from "@reduxjs/toolkit";

const getDefaultUser = (id) => {
    return {
        id: id,
        name: "some text",
        email: "mail@gmail.com",
        date: "12/8/2022",
        status: 'chưa kích hoạt',
    };
};

export const userSlice = createSlice({
    name: "user",
    initialState: () => {
        const id = nanoid();
        return {
            userId: id,
            users: [getDefaultUser(id)],
        };
    },
    reducers: {},
});

export const { increment, decrement } = userSlice.actions;

export default userSlice.reducer;
