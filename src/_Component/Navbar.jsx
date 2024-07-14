import React, { useState } from "react";
import flug from "../../src/assets/images/flug/flug_uk.png";

import image1 from '../assets/images/cart/cart_img_1.jpg';
import image2 from '../assets/images/cart/cart_img_2.jpg';
import image3 from '../assets/images/cart/cart_img_3.jpg';


import logo from "../../src/assets/images/logo.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import { Container, Row, Col, Form } from "react-bootstrap";
export const NavigationBar = () => {
  const [visible, setVisible] = useState(false);

  //function toggle visiblity

  const toggleDropdown = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className="body_wrap">
        {/* backtotop - start */}
        <div className="backtotop">
          <a href="#" className="scroll">
            <i className="far fa-arrow-up"></i>
          </a>
        </div>
        {/* backtotop - end */}

        {/* preloader - start */}
        {/* <div id="preloader"></div> */}
        {/* preloader - end */}

        {/* header_section - start */}
        <header className="header_section header-style-no-collapse">
          <div className="header_middle">
            <Container>
              <Row className="align-items-center">
                <Col lg={3} md={3} sm={12}>
                  <div className="brand_logo">
                    <a
                      className="brand_link"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        gap: "5px",
                      }}
                    >
                      <img
                        src={logo}
                        srcSet="assets/images/logo/logo_2x.png 2x"
                        style={{ height: "3em" }}
                        alt=""
                      />
                      <h1
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "30px",
                        }}
                      >
                        Gadget
                      </h1>
                    </a>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <Form action="#">
                    <div className="advance_serach">
                      <div className="select_option mb-0 clearfix">
                        <Form.Select>
                          <option data-display="All Categories">
                            Select A Category
                          </option>
                          <option value="1">New Arrival Products</option>
                          <option value="2">Most Popular Products</option>
                          <option value="3">Deals of the day</option>
                          <option value="4">Mobile Accessories</option>
                          <option value="5">Computer Accessories</option>
                          <option value="6">Consumer Electronics</option>
                          <option value="7">Automobiles & Motorcycles</option>
                        </Form.Select>
                      </div>
                      <div className="form_item">
                        <Form.Control
                          type="search"
                          name="search"
                          placeholder="Search Products..."
                        />
                        <button type="submit" className="search_btn">
                          <i className="far fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </Form>
                </Col>
                <Col lg={3} md={3} sm={12}>
                  <button
                    className="mobile_menu_btn2 navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown"
                    aria-controls="main_menu_dropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fal fa-bars"></i>
                  </button>
                  <button
                    type="button"
                    className="cart_btn"
                    style={{ backgroundColor: "white", border: "none" }}
                  >
                    <span className="cart_icon">
                      <i className="icon icon-ShoppingCart"></i>
                      <small className="cart_counter">3</small>
                    </span>
                    <span className="cart_amount">$909.00</span>
                  </button>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="header_bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col col-md-3">
                  <div className="allcategories_dropdown">
                    <button className="allcategories_btn" type="button" data-bs-toggle="collapse" data-bs-target="#allcategories_collapse" aria-expanded="false" aria-controls="allcategories_collapse">
                      <svg role="img" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" aria-labelledby="statsIconTitle" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000"> <title id="statsIconTitle">Stats</title> <path d="M6 7L15 7M6 12L18 12M6 17L12 17" /> </svg>
                      Browse categories
                    </button>
                    <div className="allcategories_collapse show" id="allcategories_collapse">
                      <div className="card card-body">
                        <ul className="allcategories_list ul_li_block">
                          <li><a href="shop_grid.html"><i className="icon icon-Starship"></i> New Arrival Products</a></li>
                          <li><a href="shop_list.html"><i className="icon icon-WorldWide"></i> Most Popular Products</a></li>
                          <li><a href="shop_grid.html"><i className="icon icon-Star"></i> Deals of the day</a></li>
                          <li><a href="shop_list.html"><i className="icon icon-Phone"></i> Mobile Accessories</a></li>
                          <li><a href="shop_grid.html"><i className="icon icon-DesktopMonitor"></i> Computer Accessories</a></li>
                          <li><a href="shop_list.html"><i className="icon icon-Bulb"></i> Consumer Electronics</a></li>
                          <li><a href="shop_grid.html"><i className="icon icon-Car"></i> Automobiles & Motorcycles</a></li>
                          <li><a href="shop_list.html"><i className="icon icon-Phone"></i> Mobile Accessories</a></li>
                          <li><a href="shop_grid.html"><i className="icon icon-DesktopMonitor"></i> Computer Accessories</a></li>
                          <li><a href="shop_list.html"><i className="icon icon-Bulb"></i> Consumer Electronics</a></li>
                          <li><a href="shop_grid.html"><i className="icon icon-Car"></i> Automobiles & Motorcycles</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-md-6">
                  <nav className="main_menu navbar navbar-expand-lg">
                    <div
                      className="main_menu_inner collapse navbar-collapse"
                      id="main_menu_dropdown"
                    >
                      <button type="button" className="offcanvas_close">
                        <i className="fal fa-times"></i>
                      </button>
                      <ul className="main_menu_list ul_li">
                        <li className="">
                          <a className="nav-link" href="#" id="shop_submenu">
                            Home
                          </a>
                        </li>
                        <li className="dropdown">
                          <a
                            className="nav-link"
                            href="#"
                            id="shop_submenu"
                            role="button"
                          >
                            Shop
                          </a>
                          <ul
                            className="submenu dropdown-menu"
                            aria-labelledby="shop_submenu"
                          >
                            {/* <li><a href="shop_grid.html">Shop Grid</a></li> */}
                            <li>
                              <a href="shop_list.html">Shop List</a>
                            </li>
                            {/* <li><a href="shop_details.html">Shop Details</a></li> */}
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            className="nav-link"
                            href="#"
                            id="pages_submenu"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {" "}
                            Pages{" "}
                          </a>
                          <ul
                            className="submenu dropdown-menu"
                            aria-labelledby="pages_submenu"
                          >
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="team.html">Team</a>
                            </li>
                            <li>
                              <a href="account.html">My Account</a>
                            </li>
                            <li>
                              <a
                                href="register.html"
                                style={{
                                  backgroundColor: "#2563EB",
                                  color: "white",
                                }}
                              >
                                Register
                              </a>
                            </li>
                            <li className="dropdown">
                              <a
                                href="#"
                                id="cart_submenu"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Shopping Cart
                              </a>
                              <ul
                                className="submenu dropdown-menu"
                                aria-labelledby="cart_submenu"
                              >
                                <li>
                                  <a href="cart.html">Cart</a>
                                </li>
                                <li>
                                  <a href="cart_empty.html">Cart Empty</a>
                                </li>
                                <li>
                                  <a href="checkout.html">Checkout</a>
                                </li>
                                <li>
                                  <a href="compare.html">Compare</a>
                                </li>
                                <li>
                                  <a href="wishlist.html">Wishlist</a>
                                </li>
                                <li>
                                  <a href="order_tracking.html">
                                    Order Tracking
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="error.html">404 Error</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="nav-link" href="contact.html">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="offcanvas_overlay"></div>
                </div>

                <div className="col col-md-3">
                  <ul className="header_icons_group ul_li_right">
                    <li>
                      <a href="contact.html">
                        <svg
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          height="30px"
                          viewBox="0 0 24 24"
                          stroke="#051d43"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="miter"
                          fill="none"
                          color="#2329D6"
                        >
                          {" "}
                          <title id="locationIconTitle">Location</title>{" "}
                          <path d="M12,21 C16,16.8 18,12.8 18,9 C18,5.6862915 15.3137085,3 12,3 C8.6862915,3 6,5.6862915 6,9 C6,12.8 8,16.8 12,21 Z" />{" "}
                          <circle cx="12" cy="9" r="1" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="compare.html">
                        <svg
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          height="30px"
                          viewBox="0 0 24 24"
                          stroke="#051d43"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="miter"
                          fill="none"
                          color="#2329D6"
                        >
                          {" "}
                          <title id="rotateIconTitle">Rotate</title>{" "}
                          <path d="M22 12l-3 3-3-3" />{" "}
                          <path d="M2 12l3-3 3 3" />{" "}
                          <path d="M19.016 14v-1.95A7.05 7.05 0 0 0 8 6.22" />{" "}
                          <path d="M16.016 17.845A7.05 7.05 0 0 1 5 12.015V10" />{" "}
                          <path stroke-linecap="round" d="M5 10V9" />{" "}
                          <path stroke-linecap="round" d="M19 15v-1" />{" "}
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="wishlist.html">
                        <svg
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          height="30px"
                          viewBox="0 0 24 24"
                          stroke="#051d43"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="miter"
                          fill="none"
                          color="#2329D6"
                        >
                          {" "}
                          <title>Favourite</title>{" "}
                          <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z" />{" "}
                        </svg>
                        <span className="wishlist_counter">3</span>
                      </a>
                    </li>
                    <li>
                      <a href="account.html">
                        <svg
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          height="30px"
                          viewBox="0 0 24 24"
                          stroke="#051d43"
                          stroke-width="1"
                          stroke-linecap="square"
                          stroke-linejoin="miter"
                          fill="none"
                          color="#2329D6"
                        >
                          {" "}
                          <title id="personIconTitle">Person</title>{" "}
                          <path d="M4,20 C4,17 8,17 10,15 C11,14 8,14 8,9 C8,5.667 9.333,4 12,4 C14.667,4 16,5.667 16,9 C16,14 13,14 14,15 C16,17 20,17 20,20" />{" "}
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header_section - end */}

        {/* Sidebar Cart Section */}

        <div className="sidebar-menu-wrapper">
          <div className="cart_sidebar">
            <button type="button" className="close_btn">
              <i className="fal fa-times"></i>
            </button>
            <ul className="cart_items_list ul_li_block mb_30 clearfix">
              <li>
                <div className="item_image">
                  <img src={image1} alt='alt' />
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
                  <img src={image2} alt='alt' />
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
                  <img src={image3} alt='alt' />
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
        {/* End Sidebar cart conent */}
      </div>
    </>
  );
};
