import React, { createContext, useReducer } from "react";

export const CartContext = createContext({
  cart: { items: [] },
  addItem: (item) => {},
  deleteItem: (item) => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case "add_item": {
      const existingItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.item.id,
      );

      if (existingItemIndex !== -1) {
        const updatedItems = state.items.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );

        return { ...state, items: updatedItems };
      } else {
        const newItem = {
          ...action.item,
          quantity: 1,
        };

        return { ...state, items: [...state.items, newItem] };
      }
    }
    case "delete_item": {
      const existingItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.item.id,
      );

      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].quantity > 1) {
          const updatedItems = state.items.map((cartItem, index) =>
            index === existingItemIndex
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem,
          );

          return { ...state, items: updatedItems };
        } else {
          const updatedItems = state.items;

          updatedItems.splice(existingItemIndex, 1);

          return { ...state, items: [...updatedItems] };
        }
      }
    }
    default:
      return state;
  }
}

export default function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "add_item", item });
  }

  function deleteItem(item) {
    dispatchCartAction({ type: "delete_item", item });
  }

  const cartContext = {
    cart,
    addItem,
    deleteItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
