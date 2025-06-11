import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action.js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductCardStyles } from "./product-card.styles.jsx";
import { selectCartItems } from "../../store/cart/cart.selector.js";
// import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	// const { addItemToCart } = useContext(CartContext);
	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);

	return (
		<ProductCardStyles>
			<img src={imageUrl} alt={name} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => dispatch(addItemToCart(cartItems, product))}>
				Add to cart
			</Button>
		</ProductCardStyles>
	);
};

export default ProductCard;
