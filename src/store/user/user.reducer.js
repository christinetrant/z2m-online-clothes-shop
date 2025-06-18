import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";
// import USER_ACTION_TYPES from "./user.types";

const USER_INITIAL_STATE = {
	currentUser: null,
};

// Plain Redux
// export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
// 	// console.log("dispatched action", action);
// 	const { type, payload } = action;

// 	switch (type) {
// 		case USER_ACTION_TYPES.SET_CURRENT_USER:
// 			return {
// 				...state,
// 				currentUser: payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// Redux Toolkit
export const userSlice = createSlice({
	name: "user",
	initialState: USER_INITIAL_STATE,
	reducers: {
		// setCurrentUser: () => {}
		setCurrentUser(state, action) {
			state.currentUser = action.payload;
		},
	},
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
