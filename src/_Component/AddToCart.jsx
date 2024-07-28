// src/components/AddToCartButton.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const AddToCartButton = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <button onClick={() => addToCart(product)} className="add-to-cart">
      Add to Cart
    </button>
  );
};

