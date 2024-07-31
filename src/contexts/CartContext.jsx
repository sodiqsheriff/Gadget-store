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
      const existingItem = prevItems.find((i) => i.productId === product.productId);
      if (existingItem) {
        // Update quantity if item already exists in cart
        return prevItems.map((i) =>
          i.productId === product.productId ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        // Add new item to cart
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.productId !== productId));
  };

  // Calculate totals
  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
    const vat = subtotal * 0.05;
    const discount = subtotal * 0.2;
    const total = subtotal + vat - discount;
    return { subtotal, vat, discount, total };
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};
