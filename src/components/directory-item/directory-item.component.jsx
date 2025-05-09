import React from "react";
import {
	BackgroundImageStyles,
	DirectoryContainerStyles,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
	const { id, title, imageUrl } = category;
	return (
		<DirectoryContainerStyles>
			<BackgroundImageStyles imageUrl={imageUrl}></BackgroundImageStyles>

			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</DirectoryContainerStyles>
	);
};

export default DirectoryItem;
