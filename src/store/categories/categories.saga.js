import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesFailed, fetchCategoriesSuccess } from "./categories.action";
import CATEGORIES_ACTION_TYPES from "./categories.types";

// This is instead of fetchCategoriesAsync in categories.action.js using thunk
export function* fetchCategoriesAsync() {
	try {
		const categories = yield call(getCategoriesAndDocuments, "categories");
		console.log("categories", categories);
		yield put(fetchCategoriesSuccess(categories));
	} catch (error) {
		yield put(fetchCategoriesFailed(error));
	}
}
// Whenever an actions happens and the saga hears it, we want to do something with it
export function* onFetchCategories() {
	// get the latest action that matches the type and then what we want to happen
	yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

// This is essentially an accumulator that holds all the sagas for category
export function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
}
