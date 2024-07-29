// src/components/SideCart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const SideCart = () => {
  const { cartItems, removeFromCart, calculateTotal } = useContext(CartContext);
  const { subtotal, vat, discount, total } = calculateTotal();

  return (
    <div className="sidebar-menu-wrapper">
      <div className="cart_sidebar">
        <button type="button" className="close_btn">
          <i className="fal fa-times"></i>
        </button>
        <ul className="cart_items_list ul_li_block mb_30 clearfix">
          {cartItems.map((item) => (
            <li key={item.productId}>
              <div className="item_image">
                <img src={item.productImage} alt={item.productName} />
              </div>
              <div className="item_content">
                <h4 className="item_title">{item.productName}</h4>
                <span className="item_price">${(item.productPrice * item.quantity).toFixed(2)}</span>
                <span className="item_quantity">Qty: {item.quantity}</span>
              </div>
              <button type="button" className="remove_btn" onClick={() => removeFromCart(item.productId)}>
                <i className="fal fa-trash-alt"></i>
              </button>
            </li>
          ))}
        </ul>

        <ul className="total_price ul_li_block mb_30 clearfix">
          <li>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </li>
          <li>
            <span>Vat 5%:</span>
            <span>${vat.toFixed(2)}</span>
          </li>
          <li>
            <span>Discount 20%:</span>
            <span>- ${discount.toFixed(2)}</span>
          </li>
          <li>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </li>
        </ul>

        <ul className="btns_group ul_li_block clearfix">
          <li>
            <a className="btn btn_primary" href="/cart">
              View Cart
            </a>
          </li>
          <li>
            <a className="btn btn_secondary" href="/checkout">
              Checkout
            </a>
          </li>
        </ul>
      </div>
      <div className="cart_overlay"></div>
    </div>
  );
};

