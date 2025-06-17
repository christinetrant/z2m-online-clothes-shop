import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/auth/auth.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import { createUserDocumentFromAuth, getCurrentUser, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { checkUserSession, setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// // check for auth changes and update the user state
		// const unsubscribe = onAuthStateChangedListener((user) => {
		// 	// console.log({user});
		// 	if (user) {
		// 		createUserDocumentFromAuth(user);
		// 	}
		// 	dispatch(setCurrentUser(user));
		// });
		// // end listener
		// return unsubscribe;
		// Saga
		// getCurrentUser().then((user) => console.log({ user }));
		dispatch(checkUserSession());
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
