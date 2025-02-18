import {useContext} from "react";
import "./checkout-item.styles.scss";
import {CartContext} from "../../context/cart-context";
const CheckoutItem = ({item}) => {
    const {imageUrl, name, price, quantity} = item;
    const {addItemToCart, decreaseItemFromCart, removeItemFromCart} =
        useContext(CartContext);

    const increaseItemHandler = () => addItemToCart(item);
    const decreaseItemHandler = () => decreaseItemFromCart(item);
    const clearItemHandler = () => removeItemFromCart(item);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decreaseItemHandler}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={increaseItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
