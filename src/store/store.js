import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

// Root Reducer contains all the reducers needed to create the store
import { rootReducer } from "./root-reducer";

// Library helpers that run the items in the array before an action hits the reducer
const middleWares = [logger];
// In order for the middleware to work, we need to apply the middleware
const composedEnhancers = compose(applyMiddleware(...middleWares));

// middleware needs to be applied to the store as the third argument but we don't have a second so pass in undefined
export const store = createStore(rootReducer, undefined, composedEnhancers);
