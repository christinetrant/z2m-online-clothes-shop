import React, {useContext} from "react";
import {CartContext} from "../../context/cart-context";
import "./checkout.styles.scss";
import {useNavigate} from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Button from "../../components/button/button.component";

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);

    const navigate = useNavigate();

    const goToShopHandler = () => navigate("/shop");

    return (
        <div className="checkout-container">
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
        </div>
    );
};

export default Checkout;
