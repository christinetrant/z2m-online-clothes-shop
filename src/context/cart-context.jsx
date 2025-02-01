import {createContext, useState} from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contain productToAdd
    const exisitngCartItem = cartItems.find(
        (item) => item.id === productToAdd.id
    );
    // if found, increment the quanity
    if (exisitngCartItem) {
        return cartItems.map((item) =>
            item.id === productToAdd.id
                ? {...item, quantity: item.quantity + 1}
                : item
        );
    }
    // return new array with updated quantity
    return [...cartItems, {...productToAdd, quantity: 1}];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: () => {},
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const cartCount = cartItems.reduce((acc, item) => item.quantity + acc, 0);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
