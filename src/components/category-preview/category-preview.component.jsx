import { Link } from "react-router-dom";
import React from "react";
import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewContainerStyles } from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
	return (
		<CategoryPreviewContainerStyles>
			<h2>
				<Link className="title" to={`/shop/${title}`}>
					<span className="title">{title.toUpperCase()}</span>
				</Link>
			</h2>
			<div className="preview">
				{
					// Underscore first param means we don't want to use it
					products
						.filter((_, idx) => idx < 4)
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))
				}
			</div>
		</CategoryPreviewContainerStyles>
	);
};

export default CategoryPreview;
