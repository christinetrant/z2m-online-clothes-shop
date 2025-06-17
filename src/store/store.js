import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

// Root Reducer contains all the reducers needed to create the store
import { rootReducer } from "./root-reducer";

// Create a config for redux persist, as user is done via firebase we can blacklist the user reducer
const persistConfig = {
	key: "root",
	storage,
	blacklist: ["user"],
};
// Create a persisted reducer using the config and root reducer which can be used in store
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Below is an example of creating our own middleware
// Uses a currying function and will re render a component when the store is updated and when next is called. So will update synchronously unlike the logger middleware which bundles all console logs together so will be out of order
// const loggerMiddleWare = (store) => (next) => (action) => {
// 	if (!action.type) {
// 		return next(action);
// 	}
// 	console.log("type: ", action.type);
// 	console.log("payload: ", action.payload);
// 	console.log("currentState: ", store.getState());

// 	next(action);

// 	console.log("next state: ", store.getState());
// };
// const middleWares = [loggerMiddleWare];

// Library helpers that run the items in the array before an action hits the reducer (logger & thunk)
// Only use when in development, if not in development, filter out the logger so it doesn't pass false to the applyMiddleware function
const middleWares = [process.env.NODE_ENV !== "production" && logger, thunk].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// In order for the middleware to work, we need to apply the middleware
// const composedEnhancers = compose(applyMiddleware(...middleWares));
// To use Redux DevTools, we need to use the composeEnhancer function
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// middleware needs to be applied to the store as the third argument but we don't have a second so pass in undefined
// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(persistedReducer, undefined, composedEnhancers);

// Export out a perisitor object which calls persist store using the store object.
export const persistor = persistStore(store);
