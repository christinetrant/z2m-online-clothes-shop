import React, {useContext} from "react";
import {CartContext} from "../../context/cart-context";
import "./checkout.styles.scss";
import {useNavigate} from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
    const {cartItems, addItemToCart, decreaseItemFromCart} =
        useContext(CartContext);

    const navigate = useNavigate();

    const goToShopHandler = () => navigate("/shop");

    return (
        //   {cartItems.length ? () : (<div>
        //     No items in cart
        //     <Button onClick={goToShopHandler}>Go to shop</Button>
        // </div>)}
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">Product</div>
                <div className="header-block">Description</div>
                <div className="header-block">Quantity</div>
                <div className="header-block">Price</div>
                <div className="header-block">Remove</div>
            </div>
            {cartItems.map((item) => (
                <CheckoutItem key={item.id} item={item} />
            ))}
            <span className="total">Total: 0</span>
        </div>
    );
};

export default Checkout;
