import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  handleCartItems: () => {},
});

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const handleCartItems = (item) => {
    console.log("Hi!");
  };

  return (
    <CartContext.Provider value={{ cartItems, handleCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
