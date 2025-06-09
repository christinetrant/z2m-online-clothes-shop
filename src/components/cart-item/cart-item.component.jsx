import { CartItemContainer } from "./cart-item.styles.jsx";

const CartItem = ({ item }) => {
	console.log("🚀 ~ CartItem ~ item:", item);
	const { imageUrl, price, name, quantity } = item;

	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					{quantity} x ${price}
				</span>
			</div>
		</CartItemContainer>
	);
};

export default CartItem;
