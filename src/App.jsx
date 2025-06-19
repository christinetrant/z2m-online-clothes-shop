import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/auth/auth.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
// import { setCurrentUser } from "./store/user/user.action";
import { setCurrentUser } from "./store/user/user.reducer";
import { useDispatch } from "react-redux";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// check for auth changes and update the user state
		const unsubscribe = onAuthStateChangedListener((user) => {
			// console.log({user});
			if (user) {
				createUserDocumentFromAuth(user);
			}
			const pickedUser = user && (({ accessToken, email }) => ({ accessToken, email }))(user);
			// dispatch(setCurrentUser(user));
			// To prevent serialize errors from redux toolkit, we need to pick the user object to only include the properties we want
			dispatch(setCurrentUser(pickedUser));
		});
		// end listener
		return unsubscribe;
	}, [dispatch]);

	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index={true} element={<Home />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
