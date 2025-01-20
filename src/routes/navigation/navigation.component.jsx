import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.style.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    };

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
                        <span className="nav-link" onClick={signOutHandler}>
                            Sign Out
                        </span>
                    ) : (
                        <Link className="nav-link" to="auth">
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    );
};
export default Navigation;
