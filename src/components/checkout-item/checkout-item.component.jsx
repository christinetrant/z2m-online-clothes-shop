// import { CartContext } from "../../context/cart.context";
import { useDispatch, useSelector } from "react-redux";
// import { selectCartItems } from "../../store/cart/cart.selector";
import { CheckoutItemContainerStyles } from "./checkout-item.styles";
// import { addItemToCart, decreaseItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";
import { addItemToCart, decreaseItemFromCart, removeItemFromCart } from "../../store/cart/cart.reducer";

const CheckoutItem = ({ item }) => {
	const { imageUrl, name, price, quantity } = item;
	// const { addItemToCart, decreaseItemFromCart, removeItemFromCart } = useContext(CartContext);
	// const cartItems = useSelector(selectCartItems);

	const dispatch = useDispatch();

	// const increaseItemHandler = () => dispatch(addItemToCart(cartItems, item));
	// const decreaseItemHandler = () => dispatch(decreaseItemFromCart(cartItems, item));
	// const clearItemHandler = () => dispatch(removeItemFromCart(cartItems, item));
	const increaseItemHandler = () => dispatch(addItemToCart(item));
	const decreaseItemHandler = () => dispatch(decreaseItemFromCart(item));
	const clearItemHandler = () => dispatch(removeItemFromCart(item));

	return (
		<CheckoutItemContainerStyles>
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={decreaseItemHandler}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={increaseItemHandler}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={clearItemHandler}>
				&#10005;
			</div>
		</CheckoutItemContainerStyles>
	);
};

export default CheckoutItem;
