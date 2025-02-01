import React, {useContext} from "react";
import {CartContext} from "../../context/cart-context";
import {Link} from "react-router-dom";
import Button from "../../components/button/button.component";

const Checkout = () => {
    const {cartItems, addItemToCart, removeItemFromCart} =
        useContext(CartContext);

    return (
        <div className="cart-items">
            {cartItems.length ? (
                cartItems.map((item) => {
                    const {imageUrl, price, name, quantity} = item;
                    return (
                        <div key={item.id} className="cart-item-container">
                            <div className="item-details">
                                <span className="name">{name}</span>
                                <div>
                                    <button
                                        onClick={() =>
                                            addItemToCart(item, "decrease")
                                        }
                                    >
                                        -
                                    </button>
                                    <span className="price">{quantity}</span>
                                    <button onClick={() => addItemToCart(item)}>
                                        +
                                    </button>
                                </div>
                                <span className="price">${price}</span>
                                <button
                                    onClick={() => removeItemFromCart(item)}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>
                    No items in cart
                    <Link to="/shop">
                        <Button>Go to shop</Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Checkout;
