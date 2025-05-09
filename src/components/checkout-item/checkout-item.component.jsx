import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CheckoutItemContainerStyles } from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
	const { imageUrl, name, price, quantity } = item;
	const { addItemToCart, decreaseItemFromCart, removeItemFromCart } = useContext(CartContext);

	const increaseItemHandler = () => addItemToCart(item);
	const decreaseItemHandler = () => decreaseItemFromCart(item);
	const clearItemHandler = () => removeItemFromCart(item);

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
