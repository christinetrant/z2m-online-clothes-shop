import React from "react";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
	const { id, title, imageUrl } = category;
	return (
		<div className="directory-container">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}></div>

			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
