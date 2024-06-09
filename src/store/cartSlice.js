import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";


const items =
	localStorage.getItem("cartItems") != null
		? JSON.parse(localStorage.getItem("cartItems"))
		: [];
const initialState = {
	cart: items,
	products: [],

};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			let isExist = state.cart.find((item) => item.$id === action.payload.$id);

			if (isExist) {
				isExist.quantity++;
			} else {
				if (action.payload) {
					state.cart.push(action.payload);
				}
			}
			localStorage.setItem("cartItems", JSON.stringify(state.cart.map((i) => i)));
		},
		addAllToCart: (state, action) => {
           for (let index = 0; index < action.payload.length; index++) {
             
                let isExist = state.cart.find((item) => item.$id === action.payload[index].$id);
               
                if (!isExist) {
                  state.cart.push(action.payload[index]);
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cart))
             }
		},
		
		decreaseQuantity: (state,action) => {
			let isExist = state.cart.find((item) => item.$id === action.payload.$id);

			if (isExist && isExist.quantity > 1) {
				isExist.quantity--;}
			localStorage.setItem("cartItems", JSON.stringify(state.cart.map((i) => i)));
		},
		deleteItem: (state,action) => {
			let cleaned = state.cart.filter(item => item.$id != action.payload.$id)
            state.cart = cleaned
            localStorage.setItem("cartItems", JSON.stringify(cleaned.map(i=>i)));
		},
		resetCart: (state) => {
			state.cart = []
			localStorage.removeItem('cartItems')
		},
		addProducts: (state, action) => {
			let isExist = state.products.find((item, i) => item.$id === action.payload[i].$id);
			if (!isExist) {
				state.products.push(...action.payload);
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	addToCart,
	addAllToCart,
	decreaseQuantity,
	deleteItem,
	resetCart,
	addProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
