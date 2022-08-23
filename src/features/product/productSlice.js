import { createSlice } from "@reduxjs/toolkit";


let today = new Date();

let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

export const productSlice = createSlice({
    name: "product",
    initialState: {
        listProduct: [
            {
                id: 0,
                name: "Product 1",
                quantity: "10",
                unit: "Thùng",
                price: '30000',
                status: 10,
                date: date,
            },
            {
                id: 1,
                name: "Product 2",
                quantity: "20",
                unit: "Cái",
                price: '40000',
                status: 10,
                date: date,
            },
            {
                id: 2,
                name: "Product 3",
                quantity: "30",
                unit: "Kg",
                price: "50000",
                status: 0,
                date: date,
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
        editProduct: (state, action) => {
            const id = action.payload.id;
            const editProduct = {
                id: id,
                name: action.payload.name,
                quantity: action.payload.quantity,
                unit: action.payload.unit,
                price: action.payload.price,
                status: action.payload.status,
                date: action.payload.date,
            };

            const newProducts = [...state.listProduct];
            const index = newProducts.findIndex((product) => product.id === id);
            newProducts[index] = editProduct;
            return {
                ...state,
                listProduct: newProducts,
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
        },
    },
});

export const { addProduct, editProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
