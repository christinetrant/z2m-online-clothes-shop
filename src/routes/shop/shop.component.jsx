import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCategoriesMap, fetchCategoriesAsync, fetchCategoriesStart } from "../../store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		// using the thunk action creator
		// dispatch(fetchCategoriesAsync());
		// original code
		// // const getCategoriesMap = async () => {
		// // const categories = await getCategoriesAndDocuments("categories");
		// // dispatch(setCategoriesMap(categories));
		// // };

		// // getCategoriesMap();
		// Using saga we don't need to use the above code
		dispatch(fetchCategoriesStart());
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};
export default Shop;
