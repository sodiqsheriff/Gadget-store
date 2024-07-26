// src/CartContext.js
import React, { createContext, useState } from 'react';

// Create a Context
export const CartContext = createContext();

// Create a Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Update quantity if item already exists in cart
        return prevItems.map((i) =>
          i.id === product.ProductId ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        // Add new item to cart
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
