import React from "react";
import { SideCart } from "../_Component/side_cart";
import { TableData } from "../_Component/table_data";



export const Cart = () => {

  return (
      <main style={{marginTop: '3em'}}>
        {/* <!-- sidebar cart - start
================================================== --> */}
        <SideCart />
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

           <TableData />

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
