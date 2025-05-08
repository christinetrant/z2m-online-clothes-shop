import React from "react";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
	return (
		<div className="category-preview-container">
			<h2>
				<span className="title">{title.toUpperCase()}</span>
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
			</h2>
		</div>
	);
};

export default CategoryPreview;
