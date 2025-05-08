import {createContext, useState} from "react";

const addCartItem = (cartItems, selectedProduct) => {
    // find if cartItems contain selectedProduct
    const existingCartItem = cartItems.find(
        (item) => item.id === selectedProduct.id
    );
    // if found, increment the quanity
    if (existingCartItem) {
        return cartItems
            .map((item) =>
                item.id === selectedProduct.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
            )
            .filter((item) => item.quantity > 0);
    }

    // return new array with updated quantity
    return [...cartItems, {...selectedProduct, quantity: 1}];
};

const decreaseCartItem = (cartItems, selectedProduct) => {
    // find if cartItems contain selectedProduct
    const existingCartItem = cartItems.find(
        (item) => item.id === selectedProduct.id
    );
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((item) => item.id !== selectedProduct.id);
    }
    return cartItems.map((item) =>
        item.id === selectedProduct.id
            ? {...item, quantity: item.quantity - 1}
            : item
    );
};

const removeCartItem = (cartItems, selectedProduct) => {
    return cartItems.filter((item) => item.id !== selectedProduct.id);
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: () => {},
    cartTotal: () => {},
    decreaseItemFromCart: () => {},
    removeItemFromCart: () => {},
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const cartCount = cartItems.reduce((acc, item) => item.quantity + acc, 0);
    const cartTotal = cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    };

    const decreaseItemFromCart = (product) => {
        setCartItems(decreaseCartItem(cartItems, product));
    };

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        decreaseItemFromCart,
        removeItemFromCart,
        cartTotal,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
