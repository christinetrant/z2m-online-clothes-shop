import React from "react";
import { DirectoryContainerStyles } from "./directory.styles.jsx";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
	return (
		<div className="App">
			<DirectoryContainerStyles>
				{categories.map((category) => (
					<DirectoryItem key={category.id} category={category} />
				))}
			</DirectoryContainerStyles>
		</div>
	);
};

export default Directory;
