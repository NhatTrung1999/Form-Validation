import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        listProduct: [
            {
                id: 0,
                name: "Product 1",
                quantity: "10",
                unit: "thùng",
                price: "30000",
                status: "Còn hàng",
                date: "19/08/2022",
            },
            {
                id: 1,
                name: "Product 2",
                quantity: "20",
                unit: "Cái",
                price: "40000",
                status: "Còn hàng",
                date: "19/08/2022",
            },
            {
                id: 2,
                name: "Product 3",
                quantity: "30",
                unit: "Kg",
                price: "50000",
                status: "Hết hàng",
                date: "19/08/2022",
            },
        ],
    },
    reducers: {
        addProduct: (state, action) => {
            return {
                ...state,
                listProduct: [...state.listProduct, action.payload],
            };
        },
        deleteProduct: (state, action) => {
            const id = action.payload;
            const newProducts = [...state.listProduct];
            const index = newProducts.findIndex((product) => product.id === id);
            newProducts.splice(index, 1);
            return {
                ...state,
                listProduct: newProducts,
            };
        }
    },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
