import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.style.scss";

const Navigation = () => {
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
                    <Link className="nav-link" to="sign-in">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};
export default Navigation;
