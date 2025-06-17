import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducers/reducer.utils";
import CATEGORIES_ACTION_TYPES from "./categories.types";

// export const setCategoriesMap = (categories) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
	// As soon as function runs we want to run the fetchCategoriesStart action to set isLoading to true
	dispatch(fetchCategoriesStart());
	try {
		const categoriesArray = await getCategoriesAndDocuments("categories");
		dispatch(fetchCategoriesSuccess(categoriesArray));
	} catch (error) {
		dispatch(fetchCategoriesFailed(error));
	}
};
