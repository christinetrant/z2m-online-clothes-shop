import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductCardStyles } from "./product-card.styles.jsx";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	return (
		<ProductCardStyles>
			<img src={imageUrl} alt={name} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addItemToCart(product)}>
				Add to cart
			</Button>
		</ProductCardStyles>
	);
};

export default ProductCard;
