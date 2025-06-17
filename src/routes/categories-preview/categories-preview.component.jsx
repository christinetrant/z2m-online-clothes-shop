// import { useContext } from "react";
// import { CategoriesContext } from "../../context/categories.context";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = ({ title, products }) => {
	// const { categoriesMap } = useContext(CategoriesContext);
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
					return <CategoryPreview key={title} title={title} products={products} />;
				})
			)}
		</>
	);
};
export default CategoriesPreview;
