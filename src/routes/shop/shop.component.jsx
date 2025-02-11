import {useContext} from "react";
import {CategoriesContext} from "../../context/shop.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
    const {categories} = useContext(CategoriesContext);
    console.log({categories});
    return (
        <div className="categories-container">
            {/* {categories.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))} */}
        </div>
    );
};
export default Shop;
