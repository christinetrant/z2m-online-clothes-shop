import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

// Root Reducer contains all the reducers needed to create the store
import { rootReducer } from "./root-reducer";

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

// Library helpers that run the items in the array before an action hits the reducer
const middleWares = [logger];
// In order for the middleware to work, we need to apply the middleware
const composedEnhancers = compose(applyMiddleware(...middleWares));

// middleware needs to be applied to the store as the third argument but we don't have a second so pass in undefined
export const store = createStore(rootReducer, undefined, composedEnhancers);
