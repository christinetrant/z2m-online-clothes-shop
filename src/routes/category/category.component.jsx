import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryStyles } from "./category.styles.jsx";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selector.js";
import Spinner from "../../components/spinner/spinner.component.jsx";

const Category = () => {
	const { category } = useParams();
	// const { categoriesMap } = useContext(CategoriesContext);
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<CategoryStyles>
			<h2 className="category-title">{category.toUpperCase()}</h2>
			{isLoading ? <Spinner /> : <div className="category-container">{products && products.map((product) => <ProductCard key={product.id} product={product} />)}</div>}
		</CategoryStyles>
	);
};

export default Category;
