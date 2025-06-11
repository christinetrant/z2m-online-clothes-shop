import { createSelector } from "reselect";
// export const selectCategoriesMap = (state) => state.categories.categories;
// We'll use memoization here using reselect library to only re-render if the state changes

// Get the slice of state we want to use
const selectCategoryReducer = (state) => state.categories;

// createSelector takes in an array of input selectors and a function that returns the output selector
export const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.categories);

// export const selectCategoriesMap = (state) => {
// 	const categoriesMap = state.categories.categories.reduce((acc, category) => {
// 		const { title, items } = category;
// 		acc[title.toLowerCase()] = items;
// 		return acc;
// 	}, {});
// 	return categoriesMap;
// };

// Use memoization to only re-render if the state changes
export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
	categories.reduce((acc, category) => {
		console.log("selector fired");
		const { title, items } = category;
		acc[title.toLowerCase()] = items;
		return acc;
	}, {})
);
