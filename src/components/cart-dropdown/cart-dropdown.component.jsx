import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainerStyles } from "./cart-dropdown.styles.jsx";
// import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

const CartDropdown = () => {
	// const { cartItems } = useContext(CartContext);
	const cartItems = useSelector(selectCartItems);

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
		return dispatch(setIsCartOpen(false));
	};

	return (
		<CartDropdownContainerStyles>
			<div className="cart-items">{cartItems.length ? cartItems.map((item) => <CartItem key={item.id} item={item} />) : <span className="empty-message">Your cart is empty</span>}</div>
			<Button onClick={goToCheckoutHandler}>Go to checkout</Button>
		</CartDropdownContainerStyles>
	);
};

export default CartDropdown;
