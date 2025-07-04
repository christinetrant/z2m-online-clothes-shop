import CART_ACTION_TYPES from "./cart.types";

export const CART_INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
	// console.log("dispatched action", action);
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
				cartItems: payload,
			};
		default:
			return state;
	}
};
