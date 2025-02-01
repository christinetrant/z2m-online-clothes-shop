import {createContext, useState} from "react";

const removeCartItem = (cartItems, selectedProduct) => {
    // find if cartItems contain selectedProduct
    const exisitngCartItem = cartItems.find(
        (item) => item.id === selectedProduct.id
    );
    if (exisitngCartItem) {
        return cartItems.filter((item) => item.id !== selectedProduct.id);
    }
};
const addCartItem = (cartItems, selectedProduct, adjust) => {
    // find if cartItems contain selectedProduct
    const exisitngCartItem = cartItems.find(
        (item) => item.id === selectedProduct.id
    );
    // if found, increment the quanity
    if (exisitngCartItem) {
        return cartItems
            .map((item) =>
                item.id === selectedProduct.id
                    ? {
                          ...item,
                          quantity:
                              adjust === "increase"
                                  ? item.quantity + 1
                                  : item.quantity - 1,
                      }
                    : item
            )
            .filter((item) => item.quantity > 0);
    }

    // return new array with updated quantity
    return [...cartItems, {...selectedProduct, quantity: 1}];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: () => {},
    removeItemFromCart: () => {},
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const cartCount = cartItems.reduce((acc, item) => item.quantity + acc, 0);

    const addItemToCart = (product, adjust = "increase") => {
        setCartItems(addCartItem(cartItems, product, adjust));
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
        removeItemFromCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
