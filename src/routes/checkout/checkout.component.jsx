import React from "react";
// import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import Button from "../../components/button/button.component";
import { CheckoutContainerStyles } from "./checkout.styles";

const Checkout = () => {
	// const { cartItems, cartTotal } = useContext(CartContext);
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	const navigate = useNavigate();

	const goToShopHandler = () => navigate("/shop");

	return (
		<CheckoutContainerStyles>
			{cartItems.length ? (
				<>
					<div className="checkout-header">
						<div className="header-block">Product</div>
						<div className="header-block">Description</div>
						<div className="header-block">Quantity</div>
						<div className="header-block">Price</div>
						<div className="header-block">Remove</div>
					</div>
					<>
						{cartItems.map((item) => (
							<CheckoutItem key={item.id} item={item} />
						))}
					</>
					<span className="total">Total: ${cartTotal}</span>
				</>
			) : (
				<div>
					<h2>No items in cart</h2>
					<Button onClick={goToShopHandler}>Go to shop</Button>
				</div>
			)}
			<PaymentForm />
		</CheckoutContainerStyles>
	);
};

export default Checkout;
