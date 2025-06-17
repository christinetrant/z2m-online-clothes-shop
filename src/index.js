import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
// import { UserProvider } from "./context/user.context";
// import { CategoriesProvider } from "./context/categories.context";
// import { CartProvider } from "./context/cart.context";
import { persistor, store } from "./store/store";
import "./index.scss";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* Add loading={null} means nothing will render until it is finshed */}
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					{/* <UserProvider> */}
					{/* <CategoriesProvider> */}
					{/* <CartProvider> */}
					<App />
					{/* </CartProvider> */}
					{/* </CategoriesProvider> */}
					{/* </UserProvider> */}
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
