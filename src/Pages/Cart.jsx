import React, { useState, useEffect, useContext } from "react";
import { Wrapper } from "../_Component/Wrapper";
import image1 from "../assets/wactch.svg";
import image2 from "../assets/wactch.svg";
import { CartContext } from "../contexts/CartContext";



export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
      <main>
        {/* <!-- sidebar cart - start
================================================== --> */}
        <div className="sidebar-menu-wrapper">
          <div className="cart_sidebar">
            <button type="button" className="close_btn">
              <i className="fal fa-times"></i>
            </button>
            <ul className="cart_items_list ul_li_block mb_30 clearfix">
              <li>
                <div className="item_image">
                  <img
                    src="assets/images/cart/cart_img_1.jpg"
                    alt="image_not_found"
                  />
                </div>
                <div className="item_content">
                  <h4 className="item_title">Yellow Blouse</h4>
                  <span className="item_price">$30.00</span>
                </div>
                <button type="button" className="remove_btn">
                  <i className="fal fa-trash-alt"></i>
                </button>
              </li>
              <li>
                <div className="item_image">
                  <img
                    src="assets/images/cart/cart_img_2.jpg"
                    alt="image_not_found"
                  />
                </div>
                <div className="item_content">
                  <h4 className="item_title">Yellow Blouse</h4>
                  <span className="item_price">$30.00</span>
                </div>
                <button type="button" className="remove_btn">
                  <i className="fal fa-trash-alt"></i>
                </button>
              </li>
              <li>
                <div className="item_image">
                  <img
                    src="assets/images/cart/cart_img_3.jpg"
                    alt="image_not_found"
                  />
                </div>
                <div className="item_content">
                  <h4 className="item_title">Yellow Blouse</h4>
                  <span className="item_price">$30.00</span>
                </div>
                <button type="button" className="remove_btn">
                  <i className="fal fa-trash-alt"></i>
                </button>
              </li>
            </ul>

            <ul className="total_price ul_li_block mb_30 clearfix">
              <li>
                <span>Subtotal:</span>
                <span>$90</span>
              </li>
              <li>
                <span>Vat 5%:</span>
                <span>$4.5</span>
              </li>
              <li>
                <span>Discount 20%:</span>
                <span>- $18.9</span>
              </li>
              <li>
                <span>Total:</span>
                <span>$75.6</span>
              </li>
            </ul>
            <ul className="btns_group ul_li_block clearfix">
              <li>
                <a className="btn btn_primary" href="cart.html">
                  View Cart
                </a>
              </li>
              <li>
                <a className="btn btn_secondary" href="checkout.html">
                  Checkout
                </a>
              </li>
            </ul>
          </div>
          <div className="cart_overlay"></div>
        </div>
        {/* <!-- sidebar cart - end
================================================== -->

<!-- breadcrumb_section - start
================================================== --> */}
        <div className="breadcrumb_section">
          <div className="container">
            <ul className="breadcrumb_nav ul_li">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
        {/* <!-- breadcrumb_section - end
================================================== -->

<!-- cart_section - start
================================================== --> */}
        <section className="cart_section section_space">
          <div className="container">
            <div className="cart_update_wrap">
              <p className="mb-0">
                <i className="fal fa-check-square"></i> Shipping costs updated.
              </p>
            </div>

            <div className="cart_table">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Total</th>
                    <th className="text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} width="100" />
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: ${item.price}</span>
            <span>Total Price: ${(item.price * item.quantity).toFixed(2)}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
                </tbody>
              </table>
            </div>

            <div className="cart_btns_wrap">
              <div className="row">
                <div className="col col-lg-6">
                  <form action="#">
                    <div className="coupon_form form_item mb-0">
                      <input
                        type="text"
                        name="coupon"
                        placeholder="Coupon Code..."
                      />
                      <button
                        type="submit"
                        className="btn btn_"
                        style={{ backgroundColor: "#2563EB", color: "white" }}
                      >
                        Apply Coupon
                      </button>
                      <div className="info_icon">
                        <i
                          className="fas fa-info-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Your Info Here"
                        ></i>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="col col-lg-6">
                  <ul className="btns_group ul_li_right">
                    <li>
                      <a className="btn border_black">Update Cart</a>
                    </li>
                    <li>
                      <a
                        className="btn btn"
                        style={{ backgroundColor: "#2563EB", color: "white" }}
                      >
                        Proceed To Checkout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col col-lg-6">
                <div className="calculate_shipping">
                  <h3 className="wrap_title">
                    Calculate Shipping{" "}
                    <span className="icon">
                      <i className="far fa-arrow-up"></i>
                    </span>
                  </h3>
                  <form action="#">
                    <div className="select_option clearfix">
                      <select>
                        <option data-display="Select Your Currency">
                          Select Your Option
                        </option>
                        <option value="1" selected>
                          United Kingdom (UK)
                        </option>
                        <option value="2">United Kingdom (UK)</option>
                        <option value="3">United Kingdom (UK)</option>
                        <option value="4">United Kingdom (UK)</option>
                        <option value="5">United Kingdom (UK)</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="col col-md-6">
                        <div className="form_item">
                          <input
                            type="text"
                            name="location"
                            placeholder="State / Country"
                          />
                        </div>
                      </div>
                      <div className="col col-md-6">
                        <div className="form_item">
                          <input
                            type="text"
                            name="postalcode"
                            placeholder="Postcode / ZIP"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn_primary rounded-pill"
                      style={{ color: "white" }}
                    >
                      Update Total
                    </button>
                  </form>
                </div>
              </div>

              <div className="col col-lg-6">
                <div className="cart_total_table">
                  <h3 className="wrap_title">Cart Totals</h3>
                  <ul className="ul_li_block">
                    <li>
                      <span>Cart Subtotal</span>
                      <span>$52.50</span>
                    </li>
                    <li>
                      <span>Shipping and Handling</span>
                      <span>Free Shipping</span>
                    </li>
                    <li>
                      <span>Order Total</span>
                      <span className="total_price">$52.50</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- cart_section - end
================================================== --> */}

        {/* <!-- newsletter_section - start
================================================== --> */}

        {/* <!-- newsletter_section - end
================================================== --> */}
      </main>
  );
};
