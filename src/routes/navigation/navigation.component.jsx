import {useContext} from "react";
import {Link, Outlet} from "react-router-dom";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import {UserContext} from "../../context/user.context";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./navigation.style.scss";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../context/cart-context";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <>
            <div className="navigation">
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
            </div>
            <Outlet />
        </>
    );
};
export default Navigation;
