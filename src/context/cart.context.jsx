import { createContext, useEffect, useReducer, useState } from "react";
import { createAction } from "../utils/reducers/reducer.utils";

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

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
	cartTotal: 0,
	decreaseItemFromCart: () => {},
	removeItemFromCart: () => {},
});

// Reducer
export const CART_ACTION_TYPES = {
	SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
	SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
	console.log("dispatched action", action);
	console.log("state", state);
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		default:
			throw new Error(`Unhandled type ${type} in cartReducer`);
	}
};

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

export const CartProvider = ({ children }) => {
	// const [isCartOpen, setIsCartOpen] = useState(false);
	// const [cartItems, setCartItems] = useState([]);
	// const [cartCount, setCartCount] = useState(0);
	// const [cartTotal, setCartTotal] = useState(0);

	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

	const { isCartOpen, cartItems, cartCount, cartTotal } = state;

	const setIsCartOpen = (bool) => {
		// dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
		dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
	};

	const updateCartItemsReducer = (newCartItems) => {
		const newCartCount = newCartItems.reduce((acc, item) => item.quantity + acc, 0);
		const newCartTotal = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0);

		const updatedCartItems = {
			cartItems: newCartItems,
			cartCount: newCartCount,
			cartTotal: newCartTotal,
		};

		// dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: updatedCartItems });
		dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems));
	};

	// These are no longer needed now we are using reducers
	// useEffect(() => {
	// 	const newCartCount = cartItems.reduce((acc, item) => item.quantity + acc, 0);
	// 	setCartCount(newCartCount);
	// }, [cartItems]);

	// useEffect(() => {
	// 	const newCartTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
	// 	setCartTotal(newCartTotal);
	// }, [cartItems]);

	const addItemToCart = (product) => {
		// setCartItems(addCartItem(cartItems, product));
		const newCartItems = addCartItem(cartItems, product);
		updateCartItemsReducer(newCartItems);
	};

	const decreaseItemFromCart = (product) => {
		// setCartItems(decreaseCartItem(cartItems, product));
		const newCartItems = decreaseCartItem(cartItems, product);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemFromCart = (product) => {
		// setCartItems(removeCartItem(cartItems, product));
		const newCartItems = removeCartItem(cartItems, product);
		updateCartItemsReducer(newCartItems);
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		cartCount,
		decreaseItemFromCart,
		removeItemFromCart,
		cartTotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
