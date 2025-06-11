// import { CartContext } from "../../context/cart.context";
import { CartIconStyles, ShoppingIconStyles } from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

const CartIcon = () => {
	const dispatch = useDispatch();

	// const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);

	const toggleDropdown = () => {
		dispatch(setIsCartOpen(!isCartOpen));
	};

	return (
		<CartIconStyles onClick={() => toggleDropdown()}>
			<ShoppingIconStyles className="shopping-icon" />
			<span className="item-count">{cartCount}</span>
		</CartIconStyles>
	);
};

export default CartIcon;
