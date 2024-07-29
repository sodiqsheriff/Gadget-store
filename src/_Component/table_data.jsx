import React, { useContext } from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import { CartContext } from '../contexts/CartContext';
export const TableData = () => {
    const { cartItems, removeFromCart, calculateTotal } = useContext(CartContext);
    
  return (
    <>
    <div className="cart_table">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Price</th>
              <th className="text-center">Total Price</th>
              <th className="text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.productId}>
                <td style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={item.productImage} alt={item.productName} width="100" />
                  <span>{item.productName}</span>
                </td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-center">${item.productPrice.toFixed(2)}</td>
                <td className="text-center">${(item.productPrice * item.quantity).toFixed(2)}</td>
                <td className="text-center">
                  <button onClick={() => removeFromCart(item.productId)}>
                    <MdOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
     
    </div>
    </>
  );
};

