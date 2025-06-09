import React from "react";
import { BackgroundImageStyles, DirectoryContainerStyles } from "./directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";
import { StyleSheetManager } from "styled-components";

const DirectoryItem = ({ category }) => {
	const { id, title, imageUrl, route } = category;
	// console.log("🚀 ~ DirectoryItem ~ route:", route);

	const navigate = useNavigate();
	const onNavigateHandler = () => navigate(route);

	return (
		<DirectoryContainerStyles onClick={onNavigateHandler}>
			<StyleSheetManager shouldForwardProp={(prop) => prop !== "imageUrl"}>
				<BackgroundImageStyles imageUrl={imageUrl}></BackgroundImageStyles>
			</StyleSheetManager>

			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</DirectoryContainerStyles>
	);
};

export default DirectoryItem;
