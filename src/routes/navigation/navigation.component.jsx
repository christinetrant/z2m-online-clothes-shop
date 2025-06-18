import { Link, Outlet } from "react-router-dom";
// import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
// import { UserContext } from "../../context/user.context";
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import { CartContext } from "../../context/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainerStyles } from "./navigation.style.jsx";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { signOutStart } from "../../store/user/user.action.js";

const Navigation = () => {
	// const { currentUser } = useContext(UserContext);
	const currentUser = useSelector(selectCurrentUser);
	// const { isCartOpen } = useContext(CartContext);
	const isCartOpen = useSelector(selectIsCartOpen);
	const dispatch = useDispatch();

	const signOutUser = () => dispatch(signOutStart());

	return (
		<>
			<NavigationContainerStyles>
				<div className="logo-container">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<div className="nav-links-container">
					<Link className="nav-link" to="shop">
						Shop
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							Sign Out
						</span>
					) : (
						<Link className="nav-link" to="auth">
							Sign In
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</NavigationContainerStyles>
			<Outlet />
		</>
	);
};
export default Navigation;
