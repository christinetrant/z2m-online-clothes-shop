import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../data/shop-data";
// import {addCollectionAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
	categories: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	// Only need this once to add categories to collection - in real world we'd delete so it can't accidentally be uncommented but for learning keeping it here
	// useEffect(() => {
	//     addCollectionAndDocuments("categories", SHOP_DATA);
	// }, []);

	useEffect(() => {
		const getCategoryMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategoriesMap(categoryMap);
		};
		getCategoryMap();
	}, []);

	const value = { categoriesMap };
	return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
