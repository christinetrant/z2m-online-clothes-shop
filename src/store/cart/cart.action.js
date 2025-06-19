// import { createAction } from "../../utils/reducers/reducer.utils";
// import CART_ACTION_TYPES from "./cart.types";

// // Helper functions
// const addCartItem = (cartItems, selectedProduct) => {
// 	// find if cartItems contain selectedProduct
// 	const existingCartItem = cartItems.find((item) => item.id === selectedProduct.id);
// 	// if found, increment the quanity
// 	if (existingCartItem) {
// 		return cartItems.map((item) => (item.id === selectedProduct.id ? { ...item, quantity: item.quantity + 1 } : item)).filter((item) => item.quantity > 0);
// 	}

// 	// return new array with updated quantity
// 	return [...cartItems, { ...selectedProduct, quantity: 1 }];
// };

// const decreaseCartItem = (cartItems, selectedProduct) => {
// 	// find if cartItems contain selectedProduct
// 	const existingCartItem = cartItems.find((item) => item.id === selectedProduct.id);
// 	if (existingCartItem.quantity === 1) {
// 		return cartItems.filter((item) => item.id !== selectedProduct.id);
// 	}
// 	return cartItems.map((item) => (item.id === selectedProduct.id ? { ...item, quantity: item.quantity - 1 } : item));
// };

// const removeCartItem = (cartItems, selectedProduct) => {
// 	return cartItems.filter((item) => item.id !== selectedProduct.id);
// };

// // Reducer Actions
// export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

// export const addItemToCart = (cartItems, product) => {
// 	const newCartItems = addCartItem(cartItems, product);
// 	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
// };

// export const decreaseItemFromCart = (cartItems, product) => {
// 	const newCartItems = decreaseCartItem(cartItems, product);
// 	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
// };

// export const removeItemFromCart = (cartItems, product) => {
// 	const newCartItems = removeCartItem(cartItems, product);
// 	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
// };
