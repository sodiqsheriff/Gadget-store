// AddToCart.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import Spinner from 'react-bootstrap/Spinner';

export const AddToCartButton = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    await addToCart(product);
    setLoading(false);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000); // Change back to "Add to Cart" after 2 seconds
  };

  return (
    <button onClick={handleAddToCart} className="add-to-cart" disabled={loading}>
      {loading ? (
        <Spinner animation="border" size="sm" />
      ) : added ? (
        'Added'
      ) : (
        'Add to Cart'
      )}
    </button>
  );
};

