import CATEGORIES_ACTION_TYPES from "./categories.types";

const CATEGORIES_INITIAL_STATE = {
	categories: [],
	isLoading: false,
	error: null,
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
	// console.log("dispatched action", action);
	const { type, payload } = action;

	// Using thunk we have new action types so need to update the switch statement
	switch (type) {
		// case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
		case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
			return {
				...state,
				categories: payload,
			};
		case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
			return {
				...state,
				isLoading: true,
			};
		case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
			return {
				...state,
				isLoading: false,
				error: payload,
			};
		default:
			return state;
	}
};
