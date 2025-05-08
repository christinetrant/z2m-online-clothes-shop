import React from "react";
import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
	return (
		<div className="App">
			<div className="categories-container">
				{categories.map((category) => (
					<DirectoryItem key={category.id} category={category} />
				))}
			</div>
		</div>
	);
};

export default Directory;
