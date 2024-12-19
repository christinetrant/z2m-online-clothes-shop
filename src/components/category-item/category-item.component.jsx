import React from "react";
import "./category-item.styles.scss";

const CategoryItem = ({category}) => {
    const {id, title, imageUrl} = category;
    return (
        <div className="category-container">
            <div className="category">
                <div
                    className="background-image"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                    }}
                ></div>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default CategoryItem;
