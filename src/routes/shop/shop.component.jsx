import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCategoriesMap, fetchCategoriesAsync } from "../../store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesAsync());
		// const getCategoriesMap = async () => {
		// const categories = await getCategoriesAndDocuments("categories");
		// dispatch(setCategoriesMap(categories));
		// };

		// getCategoriesMap();
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};
export default Shop;
