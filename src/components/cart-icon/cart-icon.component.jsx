import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CartIconStyles, ShoppingIconStyles } from "./cart-icon.styles.jsx";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
	const toggleDropdown = () => {
		setIsCartOpen(!isCartOpen);
	};

	return (
		<CartIconStyles onClick={() => toggleDropdown()}>
			<ShoppingIconStyles className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</CartIconStyles>
	);
};

export default CartIcon;
