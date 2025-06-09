import { createContext, useState, useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducers/reducer.utils";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

// Reducer
export const USER_ACTION_TYPES = {
	SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
	console.log("dispatched action", action);
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			throw new Error(`Unhandled type ${type} in userReducer`);
	}
};

const INITIAL_STATE = {
	currentUser: null,
};

export const UserProvider = ({ children }) => {
	// const [currentUser, setCurrentUser] = useState(null);
	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const { currentUser } = state;
	const setCurrentUser = (user) => {
		// dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
		dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
	};

	// console.log("🚀 ~ file: user.context.jsx:11 ~ UserProvider ~ currentUser:", currentUser)
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		// check for auth changes and update the user state
		const unsubscribe = onAuthStateChangedListener((user) => {
			// console.log({user});
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});
		// end listener
		return unsubscribe;
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
