import { createSlice } from "@reduxjs/toolkit";
// import CART_ACTION_TYPES from "./cart.types";

export const CART_INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

// Helper functions
const addCartItem = (cartItems, selectedProduct) => {
	// find if cartItems contain selectedProduct
	const existingCartItem = cartItems.find((item) => item.id === selectedProduct.id);
	// if found, increment the quanity
	if (existingCartItem) {
		return cartItems.map((item) => (item.id === selectedProduct.id ? { ...item, quantity: item.quantity + 1 } : item)).filter((item) => item.quantity > 0);
	}

	// return new array with updated quantity
	return [...cartItems, { ...selectedProduct, quantity: 1 }];
};

const decreaseCartItem = (cartItems, selectedProduct) => {
	// find if cartItems contain selectedProduct
	const existingCartItem = cartItems.find((item) => item.id === selectedProduct.id);
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== selectedProduct.id);
	}
	return cartItems.map((item) => (item.id === selectedProduct.id ? { ...item, quantity: item.quantity - 1 } : item));
};

const removeCartItem = (cartItems, selectedProduct) => {
	return cartItems.filter((item) => item.id !== selectedProduct.id);
};

// Redux Toolkit
export const cartSlice = createSlice({
	name: "cart",
	initialState: CART_INITIAL_STATE,
	reducers: {
		setIsCartOpen(state, action) {
			state.isCartOpen = action.payload;
		},
		// setCartItems(state, action) {
		// 	state.cartItems = action.payload;
		// },
		addItemToCart(state, action) {
			state.cartItems = addCartItem(state.cartItems, action.payload);
		},
		decreaseItemFromCart(state, action) {
			state.cartItems = decreaseCartItem(state.cartItems, action.payload);
		},
		removeItemFromCart(state, action) {
			state.cartItems = removeCartItem(state.cartItems, action.payload);
		},
	},
});

export const { setIsCartOpen, addItemToCart, decreaseItemFromCart, removeItemFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

// export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
// 	// console.log("dispatched action", action);
// 	const { type, payload } = action;

// 	switch (type) {
// 		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
// 			return {
// 				...state,
// 				isCartOpen: payload,
// 			};
// 		case CART_ACTION_TYPES.SET_CART_ITEMS:
// 			return {
// 				...state,
// 				cartItems: payload,
// 			};
// 		default:
// 			return state;
// 	}
// };
