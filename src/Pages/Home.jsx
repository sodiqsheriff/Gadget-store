import React from "react";
import { Wrapper } from "../_Component/Wrapper";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import product1 from "../assets/images/latest_product/latest_product_1.png";
import product_2 from "../assets/images/latest_product/latest_product_2.png"
import view12 from "../assets/images/viewed_products/viewed_product_img_6.png";
import view11 from "../assets/images/viewed_products/viewed_product_img_5.png";
import view10 from "../assets/images/viewed_products/viewed_product_img_4.png";
import image1 from '../assets/images/cart/cart_img_1.jpg';
import image2 from '../assets/images/cart/cart_img_2.jpg';
import image3 from '../assets/images/cart/cart_img_3.jpg';
import mac from "../assets/images/shop/product_img_12.png";
import shop from "../assets/images/shop/product_img_12.png";
import sale from "../assets/images/shop/product-img-21.png";
import product2 from "../assets/images/shop/product-img-22.png";
import product4 from "../assets/images/shop/product-img-23.png";
import imac from  "../assets/images/shop/product-img-24.png"
import iphone13 from "../assets/images/shop/product-img-25.png" 
import category1 from "../assets/images/categories/category_1.png" 
import category2 from "../assets/images/categories/category_2.png"
import category3 from "../assets/images/categories/category_3.png"
import category4 from "../assets/images/categories/category_4.png"
import category5 from "../assets/images/categories/category_5.png"
import cctv from "../assets/images/categories/category_3.png"
import promotion from "../assets/images/promotion/banner_img_1.png"
import promotion2 from "../assets/images/promotion/banner_img_2.png"
import { CustomSlider } from "../_Component/CustomSlider";

// import src from "../map_data/data.js"
export const Home = () => {

  const slides = [
    {
      id: 1,
      bgClass: "set-bgg",
      smallTitle: "Clothing",
      bigTitle: "Smart blood Pressure monitor",
      description: "The best gadgets collection 2021",
      originalPrice: "$430.00",
      salePrice: "$350.00",
      link: "shop_details.html",
    },
    {
      id: 2,
      bgClass: "set-bgg2",
      smallTitle: "Clothing",
      bigTitle: "Smart blood Pressure monitor",
      description: "The best gadgets collection 2021",
      originalPrice: "$430.00",
      salePrice: "$350.00",
      link: "shop_details.html",
    },
    {
      id: 3,
      bgClass: "set-bgg1",
      smallTitle: "Clothing",
      bigTitle: "Smart blood Pressure monitor",
      description: "The best gadgets collection 2021",
      originalPrice: "$430.00",
      salePrice: "$350.00",
      link: "shop_details.html",
    },
  ];
  return (
    <>
      <Wrapper>
        <main>
          {/*<!-- sidebar cart - start
            ================================================== --> */}
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
          {/* <!-- sidebar cart - end
            ================================================== -->

            
            <!-- product quick view modal - start
            ================================================== --> */}
          <div
            className="modal fade"
            id="quickview_popup"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel2">
                    Product Quick View
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="product_details">
                    <div className="container">
                      <div className="row">
                        <div className="col col-lg-6">
                          <div className="product_details_image p-0">
                            <img src={shop} alt='alt' />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="product_details_content">
                            <h2 className="item_title">Macbook Pro</h2>
                            <p>
                              It is a long established fact that a reader will
                              be distracted eget velit. Donec ac tempus ante.
                              Fusce ultricies massa massa. Fusce aliquam, purus
                              eget sagittis vulputate
                            </p>
                            <div className="item_review">
                              <ul className="rating_star ul_li">
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <span className="review_value">3 Rating(s)</span>
                            </div>
                            <div className="item_price">
                              <span>$620.00</span>
                              <del>$720.00</del>
                            </div>
                            <hr />
                            <div className="item_attribute">
                              <h3 className="title_text">
                                Options <span className="underline"></span>
                              </h3>
                              <form action="#">
                                <div className="row">
                                  <div className="col col-md-6">
                                    <div className="select_option clearfix">
                                      <h4 className="input_title">Size *</h4>
                                      <select>
                                        <option data-display="- Please select -">
                                          Choose A Option
                                        </option>
                                        <option value="1">Some option</option>
                                        <option value="2">
                                          Another option
                                        </option>
                                        <option value="3" disabled>
                                          A disabled option
                                        </option>
                                        <option value="4">Potato</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col col-md-6">
                                    <div className="select_option clearfix">
                                      <h4 className="input_title">Color *</h4>
                                      <select>
                                        <option data-display="- Please select -">
                                          Choose A Option
                                        </option>
                                        <option value={1}>Some option</option>
                                        <option value={2}>
                                          Another option
                                        </option>
                                        <option value={3} disabled>
                                          A disabled option
                                        </option>
                                        <option value={4}>Potato</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <span className="repuired_text">
                                  Required Fields *
                                </span>
                              </form>
                            </div>

                            <div className="quantity_wrap">
                              <form action="#">
                                <div className="quantity_input">
                                  <button
                                    type="button"
                                    className="input_number_decrement"
                                  >
                                    <i className="fal fa-minus"></i>
                                  </button>
                                  <input
                                    className="input_number"
                                    type="text"
                                    value="1"
                                  />
                                  <button
                                    type="button"
                                    className="input_number_increment"
                                  >
                                    <i className="fal fa-plus"></i>
                                  </button>
                                </div>
                              </form>
                              <div className="total_price">Total: $620,99</div>
                            </div>

                            <ul className="default_btns_group ul_li">
                              <li>
                                <a className="addtocart_btn" href="./cart.html">
                                  Add To Cart
                                </a>
                              </li>
                              <li>
                                <a href="#!">
                                  <i className="far fa-compress-alt"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#!">
                                  <i className="fas fa-heart"></i>
                                </a>
                              </li>
                            </ul>

                            <ul className="default_share_links ul_li">
                              <li>
                                <a className="facebook" href="#!">
                                  <span>
                                    <i className="fab fa-facebook-square"></i>{" "}
                                    Like
                                  </span>
                                  <small>10K</small>
                                </a>
                              </li>
                              <li>
                                <a className="twitter" href="#!">
                                  <span>
                                    <i className="fab fa-twitter-square"></i>{" "}
                                    Tweet
                                  </span>
                                  <small>15K</small>
                                </a>
                              </li>
                              <li>
                                <a className="google" href="#!">
                                  <span>
                                    <i className="fab fa-google-plus-square"></i>{" "}
                                    Google+
                                  </span>
                                  <small>20K</small>
                                </a>
                              </li>
                              <li>
                                <a className="share" href="#!">
                                  <span>
                                    <i className="fas fa-plus-square"></i> Share
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- product quick view modal - end
            ================================================== -->

            
            <!-- slider_section - start
            ================================================== --> */}
         <div className="App">
      <CustomSlider slides={slides} />
    </div>
          {/* <!-- slider_section - end
            ================================================== -->
            
            <!-- policy_section - start
            ================================================== --> */}
          <section className="policy_section">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="policy-wrap">
                    <div className="policy_item">
                      <div className="item_icon">
                        <i className="icon icon-Truck"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Free Shipping</h3>
                        <p>Free shipping on all US order</p>
                      </div>
                    </div>

                    <div className="policy_item">
                      <div className="item_icon">
                        <i className="icon icon-Headset"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Support 24/ 7</h3>
                        <p>Contact us 24 hours a day</p>
                      </div>
                    </div>

                    <div className="policy_item">
                      <div className="item_icon">
                        <i className="icon icon-Wallet"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">100% Money Back</h3>
                        <p>You have 30 days to Return</p>
                      </div>
                    </div>

                    <div className="policy_item">
                      <div className="item_icon">
                        <i className="icon icon-Starship"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">90 Days Return</h3>
                        <p>If goods have problems</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- policy_section - end
            ================================================== -->
        
            
            <!-- products-with-sidebar-section - start
            ================================================== --> */}
          <section className="products-with-sidebar-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 order-lg-3">
                  <div className="best-selling-products">
                    <div className="sec-title-link">
                      <h3>Best selling</h3>
                      <div className="view-all">
                        <a href="#">
                          View all<i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-area clearfix">
                      <div className="grid">
                        <div className="product-pic">
                          <img src={mac} alt='' />
                          <div className="actions">
                            <ul>
                              <li>
                                <a href="#">
                                  <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    stroke="#2329D6"
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
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    stroke="#2329D6"
                                    stroke-width="1"
                                    stroke-linecap="square"
                                    stroke-linejoin="miter"
                                    fill="none"
                                    color="#2329D6"
                                  >
                                    {" "}
                                    <title>Shuffle</title>{" "}
                                    <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{" "}
                                    <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{" "}
                                    <path d="M19 4L22 7L19 10" />{" "}
                                    <path d="M19 13L22 16L19 19" />{" "}
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="quickview_btn"
                                  data-bs-toggle="modal"
                                  href="#quickview_popup"
                                  role="button"
                                  tabindex="0"
                                >
                                  <svg
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#2329D6"
                                    stroke-width="1"
                                    stroke-linecap="square"
                                    stroke-linejoin="miter"
                                    fill="none"
                                    color="#2329D6"
                                  >
                                    {" "}
                                    <title>Visible (eye)</title>{" "}
                                    <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{" "}
                                    <circle cx="12" cy="12" r="3" />{" "}
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="details">
                          <h4>
                            <a href="#">Macbook Pro</a>
                          </h4>
                          <p>
                            <a href="#">
                              Apple MacBook Pro13.3″ Laptop with new Touch bar
                              ID{" "}
                            </a>
                          </p>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <span className="price">
                            <ins>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  471.48
                                </bdi>
                              </span>
                            </ins>
                          </span>
                          <div className="add-cart-area">
                            <button className="add-to-cart" href="./cart.html">
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="grid">
                        <div className="product-pic">
                          <img src={sale} alt='' />
                          <span className="theme-badge">Sale</span>
                          <div className="actions">
                            <ul>
                              <li>
                                <a href="#">
                                  <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    stroke="#2329D6"
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
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    stroke="#2329D6"
                                    stroke-width="1"
                                    stroke-linecap="square"
                                    stroke-linejoin="miter"
                                    fill="none"
                                    color="#2329D6"
                                  >
                                    {" "}
                                    <title>Shuffle</title>{" "}
                                    <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{" "}
                                    <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{" "}
                                    <path d="M19 4L22 7L19 10" />{" "}
                                    <path d="M19 13L22 16L19 19" />{" "}
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="quickview_btn"
                                  data-bs-toggle="modal"
                                  href="#quickview_popup"
                                  role="button"
                                  tabindex="0"
                                >
                                  <svg
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#2329D6"
                                    stroke-width="1"
                                    stroke-linecap="square"
                                    stroke-linejoin="miter"
                                    fill="none"
                                    color="#2329D6"
                                  >
                                    {" "}
                                    <title>Visible (eye)</title>{" "}
                                    <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{" "}
                                    <circle cx="12" cy="12" r="3" />{" "}
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="details">
                          <h4>
                            <a href="#">Apple Watch</a>
                          </h4>
                          <p>
                            <a href="#">
                              Apple Watch Series 7 case Pair any band with cool
                              design
                            </a>
                          </p>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <span className="price">
                            <ins>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  471.48
                                </bdi>
                              </span>
                            </ins>
                          </span>
                          <div className="add-cart-area">
                            <button className="add-to-cart" href="./cart.html">
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="grid">
                        <div className="product-pic">
                          <img src={product2} alt='' />
                          <span className="theme-badge-2">12% off</span>
                          <div className="actions">
                            <ul>
                              <li>
                                <a href="#">
                                  <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    stroke="#2329D6"
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
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    stroke="#2329D6"
                                    stroke-width="1"
                                    stroke-linecap="square"
                                    stroke-linejoin="miter"
                                    fill="none"
                                    color="#2329D6"
                                  >
                                    {" "}
                                    <title>Shuffle</title>{" "}
                                    <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{" "}
                                    <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{" "}
                                    <path d="M19 4L22 7L19 10" />{" "}
                                    <path d="M19 13L22 16L19 19" />{" "}
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="quickview_btn"
                                  data-bs-toggle="modal"
                                  href="#quickview_popup"
                                  role="button"
                                  tabindex="0"
                                >
                                  <svg
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#2329D6"
                                    stroke-width="1"
                                    stroke-linecap="square"
                                    stroke-linejoin="miter"
                                    fill="none"
                                    color="#2329D6"
                                  >
                                    {" "}
                                    <title>Visible (eye)</title>{" "}
                                    <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{" "}
                                    <circle cx="12" cy="12" r="3" />{" "}
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="details">
                          <h4>
                            <a href="#">Mac Mini</a>
                          </h4>
                          <p>
                            <a href="#">
                              Apple MacBook Pro13.3″ Laptop with new Touch bar
                              ID{" "}
                            </a>
                          </p>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <span className="price">
                            <ins>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  471.48
                                </bdi>
                              </span>
                            </ins>
                            <del aria-hidden="true">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  904.21
                                </bdi>
                              </span>
                            </del>
                          </span>
                          <div className="add-cart-area">
                            <a href="./cart.html">
                              <button className="add-to-cart">
                                Add to cart
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="grid">
                        <div className="product-pic">
                          <img src={product4} alt='' />
                          <span className="theme-badge">Sale</span>
                          <div className="actions">
                            <ul>
                              <li>
                                <a href="#">
                                  <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    stroke="#2329D6"
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
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    stroke="#2329D6"
                                    stroke-width="1"
                                    stroke-linecap="square"
                                    stroke-linejoin="miter"
                                    fill="none"
                                    color="#2329D6"
                                  >
                                    {" "}
                                    <title>Shuffle</title>{" "}
                                    <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{" "}
                                    <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{" "}
                                    <path d="M19 4L22 7L19 10" />{" "}
                                    <path d="M19 13L22 16L19 19" />{" "}
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="quickview_btn"
                                  data-bs-toggle="modal"
                                  href="#quickview_popup"
                                  role="button"
                                  tabindex="0"
                                >
                                  <svg
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#2329D6"
                                    stroke-width="1"
                                    stroke-linecap="square"
                                    stroke-linejoin="miter"
                                    fill="none"
                                    color="#2329D6"
                                  >
                                    {" "}
                                    <title>Visible (eye)</title>{" "}
                                    <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{" "}
                                    <circle cx="12" cy="12" r="3" />{" "}
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="details">
                          <h4>
                            <a href="#">iPad mini</a>
                          </h4>
                          <p>
                            <a href="#">
                              The ultimate iPad experience all over the world
                              with coll model{" "}
                            </a>
                          </p>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <span className="price">
                            <ins>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  471.48
                                </bdi>
                              </span>
                            </ins>
                          </span>
                          <div className="add-cart-area">
                            <button className="add-to-cart">Add to cart</button>
                          </div>
                        </div>
                      </div>
                      <div className="grid">
                        <div className="product-pic">
                          <img src={imac} alt='' />
                          <span className="theme-badge-2">25% off</span>
                          <div className="actions">
                            <ul>
                              <li>
                                <a href="#">
                                  <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    stroke="#2329D6"
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
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    stroke="#2329D6"
                                    stroke-width="1"
                                    stroke-linecap="square"
                                    stroke-linejoin="miter"
                                    fill="none"
                                    color="#2329D6"
                                  >
                                    {" "}
                                    <title>Shuffle</title>{" "}
                                    <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{" "}
                                    <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{" "}
                                    <path d="M19 4L22 7L19 10" />{" "}
                                    <path d="M19 13L22 16L19 19" />{" "}
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="quickview_btn"
                                  data-bs-toggle="modal"
                                  href="#quickview_popup"
                                  role="button"
                                  tabindex="0"
                                >
                                  <svg
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#2329D6"
                                    stroke-width="1"
                                    stroke-linecap="square"
                                    stroke-linejoin="miter"
                                    fill="none"
                                    color="#2329D6"
                                  >
                                    {" "}
                                    <title>Visible (eye)</title>{" "}
                                    <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{" "}
                                    <circle cx="12" cy="12" r="3" />{" "}
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="details">
                          <h4>
                            <a href="#">Imac 29"</a>
                          </h4>
                          <p>
                            <a href="#">
                              Apple iMac 29″ Laptop with new Touch bar ID for
                              you{" "}
                            </a>
                          </p>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <span className="price">
                            <ins>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  471.48
                                </bdi>
                              </span>
                            </ins>
                            <del aria-hidden="true">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  904.21
                                </bdi>
                              </span>
                            </del>
                          </span>
                          <div className="add-cart-area">
                            <button className="add-to-cart">Add to cart</button>
                          </div>
                        </div>
                      </div>
                      <div className="grid">
                        <div className="product-pic">
                          <img src={iphone13} alt='' />
                          <div className="actions">
                            <ul>
                              <li>
                                <a href="#">
                                  <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    stroke="#2329D6"
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
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <svg
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    stroke="#2329D6"
                                    stroke-width="1"
                                    stroke-linecap="square"
                                    stroke-linejoin="miter"
                                    fill="none"
                                    color="#2329D6"
                                  >
                                    {" "}
                                    <title>Shuffle</title>{" "}
                                    <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{" "}
                                    <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{" "}
                                    <path d="M19 4L22 7L19 10" />{" "}
                                    <path d="M19 13L22 16L19 19" />{" "}
                                  </svg>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="quickview_btn"
                                  data-bs-toggle="modal"
                                  href="#quickview_popup"
                                  role="button"
                                  tabindex="0"
                                >
                                  <svg
                                    width="48px"
                                    height="48px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#2329D6"
                                    stroke-width="1"
                                    stroke-linecap="square"
                                    stroke-linejoin="miter"
                                    fill="none"
                                    color="#2329D6"
                                  >
                                    {" "}
                                    <title>Visible (eye)</title>{" "}
                                    <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{" "}
                                    <circle cx="12" cy="12" r="3" />{" "}
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="details">
                          <h4>
                            <a href="#">iPhone 13</a>
                          </h4>
                          <p>
                            <a href="#">
                              A dramatically more powerful camera system a
                              display
                            </a>
                          </p>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <span className="price">
                            <ins>
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  471.48
                                </bdi>
                              </span>
                            </ins>
                          </span>
                          <div className="add-cart-area">
                            <button className="add-to-cart">Add to cart</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="top_category_wrap">
                    <div className="sec-title-link">
                      <h3>Top categories</h3>
                    </div>
                    <div
                      className="top_category_carousel2"
                      data-slick='{"dots": false}'
                    >
                      <div className="slider_item">
                        <div className="category_boxed">
                          <a href="#!">
                            <span className="item_image">
                              <img src={category1} alt="image_not_found" />
                            </span>
                            <span className="item_title">Men's Watches</span>
                          </a>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="category_boxed">
                          <a href="#!">
                            <span className="item_image">
                              <img src={category2} alt="image_not_found" />
                            </span>
                            <span className="item_title">iPad</span>
                          </a>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="category_boxed">
                          <a href="#!">
                            <span className="item_image">
                              <img src={category3} alt="image_not_found" />
                            </span>
                            <span className="item_title">iPhone</span>
                          </a>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="category_boxed">
                          <a href="#!">
                            <span className="item_image">
                              <img src={category4} alt="image_not_found"/>
                            </span>
                            <span className="item_title">Headphone</span>
                          </a>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="category_boxed">
                          <a href="#!">
                            <span className="item_image">
                              <img src={category5} alt="image_not_found" />
                            </span>
                            <span className="item_title">Mac Mini</span>
                          </a>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="category_boxed">
                          <a href="#!">
                            <span className="item_image">
                              <img src={category1} alt="image_not_found" />
                            </span>
                            <span className="item_title">Men's Watches</span>
                          </a>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="category_boxed">
                          <a href="#!">
                            <span className="item_image">
                              <img src={category2} alt="image_not_found" />
                            </span>
                            <span className="item_title">CCTV Camera</span>
                          </a>
                        </div>
                      </div>

                      <div className="slider_item">
                        <div className="category_boxed">
                          <a href="#!">
                            <span className="item_image">
                              <img src={cctv} alt="image_not_found" />
                            </span>
                            <span className="item_title">CCTV Camera</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel_nav carousel-nav-top-right">
                      <button type="button" className="tc_left_arrow">
                        <i className="fal fa-long-arrow-alt-left"></i>
                      </button>
                      <button type="button" className="tc_right_arrow">
                        <i className="fal fa-long-arrow-alt-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 order-lg-9">
                  <div className="product-sidebar">
                    <div className="widget latest_product_carousel">
                      <div className="title_wrap">
                        <h3 className="area_title">Latest Products</h3>
                        <div className="carousel_nav">
                          <button type="button" className="vs4i_left_arrow">
                            <i className="fal fa-angle-left"></i>
                          </button>
                          <button type="button" className="vs4i_right_arrow">
                            <i className="fal fa-angle-right"></i>
                          </button>
                        </div>
                      </div>
                      <div
                        className="vertical_slider_4item"
                        data-slick='{"dots": false}'
                      >
                        <div className="slider_item">
                          <div className="small_product_layout">
                            <a className="item_image" href="shop_details.html">
                              <img src={product1} alt="image_not_found" />
                            </a>
                            <div className="item_content">
                              <h3 className="item_title">
                                <a href="shop_details.html">Product Sample</a>
                              </h3>
                              <ul className="rating_star ul_li">
                                <li>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star-half-alt"></i>
                                </li>
                              </ul>
                              <div className="item_price">
                                <span>$690.99</span>
                                <del>$720.00</del>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="slider_item">
                          <div className="small_product_layout">
                            <a className="item_image" href="shop_details.html">
                              <img src={product_2} alt="image_not_found" />
                            </a>
                            <div className="item_content">
                              <h3 className="item_title">
                                <a href="shop_details.html">Product Sample</a>
                              </h3>
                              <ul className="rating_star ul_li">
                                <li>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star-half-alt"></i>
                                </li>
                              </ul>
                              <div className="item_price">
                                <span>$690.99</span>
                                <del>$720.00</del>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="slider_item">
                          <div className="small_product_layout">
                            <a className="item_image" href="shop_details.html">
                              {/* <img src="assets/images/latest_product/latest_product_3.png" alt="image_not_found"> */}
                            </a>
                            <div className="item_content">
                              <h3 className="item_title">
                                <a href="shop_details.html">Product Sample</a>
                              </h3>
                              <ul className="rating_star ul_li">
                                <li>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star-half-alt"></i>
                                </li>
                              </ul>
                              <div className="item_price">
                                <span>$690.99</span>
                                <del>$720.00</del>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="slider_item">
                          <div className="small_product_layout">
                            <a className="item_image" href="shop_details.html">
                              {/* <img src="assets/images/latest_product/latest_product_4.png" alt="image_not_found"> */}
                            </a>
                            <div className="item_content">
                              <h3 className="item_title">
                                <a href="shop_details.html">Product Sample</a>
                              </h3>
                              <ul className="rating_star ul_li">
                                <li>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star-half-alt"></i>
                                </li>
                              </ul>
                              <div className="item_price">
                                <span>$690.99</span>
                                <del>$720.00</del>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="slider_item">
                          <div className="small_product_layout">
                            <a className="item_image" href="shop_details.html">
                              {/* <img src="assets/images/latest_product/latest_product_1.png" alt="image_not_found"> */}
                            </a>
                            <div className="item_content">
                              <h3 className="item_title">
                                <a href="shop_details.html">Product Sample</a>
                              </h3>
                              <ul className="rating_star ul_li">
                                <li>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star-half-alt"></i>
                                </li>
                              </ul>
                              <div className="item_price">
                                <span>$690.99</span>
                                <del>$720.00</del>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="slider_item">
                          <div className="small_product_layout">
                            <a className="item_image" href="shop_details.html">
                              {/* <img src="assets/images/latest_product/latest_product_2.png" alt="image_not_found"> */}
                            </a>
                            <div className="item_content">
                              <h3 className="item_title">
                                <a href="shop_details.html">Product Sample</a>
                              </h3>
                              <ul className="rating_star ul_li">
                                <li>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star-half-alt"></i>
                                </li>
                              </ul>
                              <div className="item_price">
                                <span>$690.99</span>
                                <del>$720.00</del>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="slider_item">
                          <div className="small_product_layout">
                            <a className="item_image" href="shop_details.html">
                              {/* <img src="assets/images/latest_product/latest_product_3.png" alt="image_not_found"> */}
                            </a>
                            <div className="item_content">
                              <h3 className="item_title">
                                <a href="shop_details.html">Product Sample</a>
                              </h3>
                              <ul className="rating_star ul_li">
                                <li>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star-half-alt"></i>
                                </li>
                              </ul>
                              <div className="item_price">
                                <span>$690.99</span>
                                <del>$720.00</del>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="slider_item">
                          <div className="small_product_layout">
                            <a className="item_image" href="shop_details.html">
                              {/* <img src="assets/images/latest_product/latest_product_4.png" alt="image_not_found"> */}
                            </a>
                            <div className="item_content">
                              <h3 className="item_title">
                                <a href="shop_details.html">Product Sample</a>
                              </h3>
                              <ul className="rating_star ul_li">
                                <li>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star-half-alt"></i>
                                </li>
                              </ul>
                              <div className="item_price">
                                <span>$690.99</span>
                                <del>$720.00</del>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget product-add">
                      <div className="product-img">
                        {/* <img src="assets/images/shop/product_img_10.png" alt> */}
                      </div>
                      <div className="details">
                        <h4>iPad pro</h4>
                        <p>iPad pro with M1 chipe</p>
                        <a className="btn btn_primary" href="#">
                          Start Buying
                        </a>
                      </div>
                    </div>
                    <div className="widget audio-widget">
                      <h5>
                        Audio <span>5</span>
                      </h5>
                      <ul>
                        <li>
                          <a href="#">MI headphone</a>
                        </li>
                        <li>
                          <a href="#">Bluetooth AirPods</a>
                        </li>
                        <li>
                          <a href="#">Music system</a>
                        </li>
                        <li>
                          <a href="#">JBL bar 5.1</a>
                        </li>
                        <li>
                          <a href="#">Edifier Computer Speaker</a>
                        </li>
                        <li>
                          <a href="#">Macbook pro</a>
                        </li>
                        <li>
                          <a href="#">Men's watch</a>
                        </li>
                        <li>
                          <a href="#">Washing metchin</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="promotion_section">
            <div className="container">
              <div className="row promotion_banner_wrap">
                <div className="col col-lg-6">
                  <div className="promotion_banner">
                    <div className="item_image">
                      <img src={promotion} alt='' />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">
                        Protective sleeves <span>combo.</span>
                      </h3>
                      <p>
                        It is a long established fact that a reader will be
                        distracted
                      </p>
                      <a className="btn btn_primary" href="shop_details.html">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col col-lg-6">
                  <div className="promotion_banner">
                    <div className="item_image">
                      <img src={promotion2} alt='' />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">
                        Nutrillet blender <span>combo.</span>
                      </h3>
                      <p>
                        It is a long established fact that a reader will be
                        distracted
                      </p>
                      <a className="btn btn_primary" href="shop_details.html">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="new_arrivals_section section_space">
            <div className="container">
              <div className="sec-title-link">
                <h3>New Arrivals</h3>
              </div>

              <div className="row newarrivals_products">
                <div className="col col-lg-5">
                  <div className="deals_product_layout1">
                    <div className="bg_area">
                      <h3 className="item_title">
                        Best <span>Product</span> Deals
                      </h3>
                      <p>
                        Get a 20% Cashback when buying TWS Product From SoundPro
                        Audio Technology.
                      </p>
                      <a className="btn btn_primary" href="shop_details.html">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col col-lg-7">
                  <div className="new-arrivals-grids clearfix">
                    <div className="grid">
                      <div className="product-pic">
                        {/* <img src="assets/images/shop/product-img-28.png" alt> */}
                        <div className="actions">
                          <ul>
                            <li>
                              <a href="#">
                                <svg
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 24 24"
                                  stroke="#2329D6"
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
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <svg
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 24 24"
                                  stroke="#2329D6"
                                  stroke-width="1"
                                  stroke-linecap="square"
                                  stroke-linejoin="miter"
                                  fill="none"
                                  color="#2329D6"
                                >
                                  {" "}
                                  <title>Shuffle</title>{" "}
                                  <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{" "}
                                  <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{" "}
                                  <path d="M19 4L22 7L19 10" />{" "}
                                  <path d="M19 13L22 16L19 19" />{" "}
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <svg
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  stroke="#2329D6"
                                  stroke-width="1"
                                  stroke-linecap="square"
                                  stroke-linejoin="miter"
                                  fill="none"
                                  color="#2329D6"
                                >
                                  {" "}
                                  <title>Visible (eye)</title>{" "}
                                  <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{" "}
                                  <circle cx="12" cy="12" r="3" />{" "}
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="details">
                        <h4>
                          <a href="#">iPhone 13 pro</a>
                        </h4>
                        <p>
                          <a href="#">
                            A dramatically more powerful camera system a display
                          </a>
                        </p>
                        <span className="price">
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                471.48
                              </bdi>
                            </span>
                          </ins>
                        </span>
                        <div className="add-cart-area">
                          <button className="add-to-cart">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="product-pic">
                        {/* <img src="assets/images/shop/product-img-26.png" alt> */}
                        <span className="theme-badge-2">20% off</span>
                        <div className="actions">
                          <ul>
                            <li>
                              <a href="#">
                                <svg
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 24 24"
                                  stroke="#2329D6"
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
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <svg
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 24 24"
                                  stroke="#2329D6"
                                  stroke-width="1"
                                  stroke-linecap="square"
                                  stroke-linejoin="miter"
                                  fill="none"
                                  color="#2329D6"
                                >
                                  {" "}
                                  <title>Shuffle</title>{" "}
                                  <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{" "}
                                  <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{" "}
                                  <path d="M19 4L22 7L19 10" />{" "}
                                  <path d="M19 13L22 16L19 19" />{" "}
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <svg
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  stroke="#2329D6"
                                  stroke-width="1"
                                  stroke-linecap="square"
                                  stroke-linejoin="miter"
                                  fill="none"
                                  color="#2329D6"
                                >
                                  {" "}
                                  <title>Visible (eye)</title>{" "}
                                  <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{" "}
                                  <circle cx="12" cy="12" r="3" />{" "}
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="details">
                        <h4>
                          <a href="#">Apple</a>
                        </h4>
                        <p>
                          <a href="#">
                            Apple MacBook Pro13.3″ Laptop with Touch bar ID{" "}
                          </a>
                        </p>
                        <span className="price">
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                471.48
                              </bdi>
                            </span>
                          </ins>
                          <del aria-hidden="true">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                904.21
                              </bdi>
                            </span>
                          </del>
                        </span>
                        <div className="add-cart-area">
                          <a href="./cart.html">
                            <button className="add-to-cart">Add to cart</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="product-pic">
                        {/* <img src="assets/images/shop/product-img-27.png" alt> */}
                        <span className="theme-badge-2">15% off</span>
                        <div className="actions">
                          <ul>
                            <li>
                              <a href="#">
                                <svg
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 24 24"
                                  stroke="#2329D6"
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
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <svg
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 24 24"
                                  stroke="#2329D6"
                                  stroke-width="1"
                                  stroke-linecap="square"
                                  stroke-linejoin="miter"
                                  fill="none"
                                  color="#2329D6"
                                >
                                  {" "}
                                  <title>Shuffle</title>{" "}
                                  <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{" "}
                                  <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{" "}
                                  <path d="M19 4L22 7L19 10" />{" "}
                                  <path d="M19 13L22 16L19 19" />{" "}
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <svg
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  stroke="#2329D6"
                                  stroke-width="1"
                                  stroke-linecap="square"
                                  stroke-linejoin="miter"
                                  fill="none"
                                  color="#2329D6"
                                >
                                  {" "}
                                  <title>Visible (eye)</title>{" "}
                                  <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{" "}
                                  <circle cx="12" cy="12" r="3" />{" "}
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="details">
                        <h4>
                          <a href="#">Mac Mini</a>
                        </h4>
                        <p>
                          <a href="#">
                            Apple MacBook Pro13.3″ Laptop with Touch ID{" "}
                          </a>
                        </p>
                        <span className="price">
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                471.48
                              </bdi>
                            </span>
                          </ins>
                          <del aria-hidden="true">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                904.21
                              </bdi>
                            </span>
                          </del>
                        </span>
                        <div className="add-cart-area">
                          <button className="add-to-cart">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    <div className="grid">
                      <div className="product-pic">
                        {/* <img src="assets/images/shop/product_img_12.png" alt> */}
                        <span className="theme-badge">Sale</span>
                        <div className="actions">
                          <ul>
                            <li>
                              <a href="#">
                                <svg
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 24 24"
                                  stroke="#2329D6"
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
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <svg
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 24 24"
                                  stroke="#2329D6"
                                  stroke-width="1"
                                  stroke-linecap="square"
                                  stroke-linejoin="miter"
                                  fill="none"
                                  color="#2329D6"
                                >
                                  {" "}
                                  <title>Shuffle</title>{" "}
                                  <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{" "}
                                  <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{" "}
                                  <path d="M19 4L22 7L19 10" />{" "}
                                  <path d="M19 13L22 16L19 19" />{" "}
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <svg
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  stroke="#2329D6"
                                  stroke-width="1"
                                  stroke-linecap="square"
                                  stroke-linejoin="miter"
                                  fill="none"
                                  color="#2329D6"
                                >
                                  {" "}
                                  <title>Visible (eye)</title>{" "}
                                  <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{" "}
                                  <circle cx="12" cy="12" r="3" />{" "}
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="details">
                        <h4>
                          <a href="#">Apple</a>
                        </h4>
                        <p>
                          <a href="#">
                            Apple MacBook Pro13.3″ Laptop with Touch ID{" "}
                          </a>
                        </p>
                        <span className="price">
                          <ins>
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                471.48
                              </bdi>
                            </span>
                          </ins>
                          <del aria-hidden="true">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                904.21
                              </bdi>
                            </span>
                          </del>
                        </span>
                        <div className="add-cart-area">
                          <a href="./cart.html">
                            <button className="add-to-cart">Add to cart</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="brand_section pb-0">
            <div className="container">
              <div className="brand_carousel">
                <div className="slider_item">
                  <a className="product_brand_logo" href="#!">
                    {/* <img src="assets/images/brand/brand_1.png" alt="image_not_found"> */}
                    {/* <img src="assets/images/brand/brand_1.png" alt="image_not_found"> */}
                  </a>
                </div>
                <div className="slider_item">
                  <a className="product_brand_logo" href="#!">
                    {/* <img src="assets/images/brand/brand_2.png" alt="image_not_found"> */}
                    {/* <img src="assets/images/brand/brand_2.png" alt="image_not_found"> */}
                  </a>
                </div>
                <div className="slider_item">
                  <a className="product_brand_logo" href="#!">
                    {/* <img src="assets/images/brand/brand_3.png" alt="image_not_found"> */}
                    {/* <img src="assets/images/brand/brand_3.png" alt="image_not_found"> */}
                  </a>
                </div>
                <div className="slider_item">
                  <a className="product_brand_logo" href="#!">
                    {/* <img src="assets/images/brand/brand_4.png" alt="image_not_found"> */}
                    {/* <img src="assets/images/brand/brand_4.png" alt="image_not_found"> */}
                  </a>
                </div>
                <div className="slider_item">
                  <a className="product_brand_logo" href="#!">
                    {/* <img src="assets/images/brand/brand_5.png" alt="image_not_found"> */}
                    {/* <img src="assets/images/brand/brand_5.png" alt="image_not_found"> */}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className="viewed_products_section section_space">
            <div className="container">
              <div className="sec-title-link mb-0">
                <h3>Recently Viewed Products</h3>
              </div>

              <div className="viewed_products_wrap arrows_topright">
                <div
                  className="viewed_products_carousel row"
                  data-slick='{"dots": false}'
                >
                  <div className="slider_item col">
                    <div className="viewed_product_item">
                      <div className="item_image">
                        {/* <img src="assets/images/viewed_products/viewed_product_img_1.png" alt="image_not_found"> */}
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Electronics</h3>
                        <ul className="ul_li_block">
                          <li>
                            <a href="#!">Computers</a>
                          </li>
                          <li>
                            <a href="#!">Laptop</a>
                          </li>
                          <li>
                            <a href="#!">Macbook</a>
                          </li>
                          <li>
                            <a href="#!">Accessories</a>
                          </li>
                          <li>
                            <a href="#!">More...</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="viewed_product_item">
                      <div className="item_image">
                        {/* <img src="assets/images/viewed_products/viewed_product_img_2.png" alt="image_not_found"> */}
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">PC & Laptop</h3>
                        <ul className="ul_li_block">
                          <li>
                            <a href="#!">Computers</a>
                          </li>
                          <li>
                            <a href="#!">Laptop</a>
                          </li>
                          <li>
                            <a href="#!">Macbook</a>
                          </li>
                          <li>
                            <a href="#!">Accessories</a>
                          </li>
                          <li>
                            <a href="#!">More...</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="slider_item col">
                    <div className="viewed_product_item">
                      <div className="item_image">
                        {/* <img src="assets/images/viewed_products/viewed_product_img_3.png" alt="image_not_found"> */}
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Tables & Mobiles</h3>
                        <ul className="ul_li_block">
                          <li>
                            <a href="#!">Computers</a>
                          </li>
                          <li>
                            <a href="#!">Laptop</a>
                          </li>
                          <li>
                            <a href="#!">Macbook</a>
                          </li>
                          <li>
                            <a href="#!">Accessories</a>
                          </li>
                          <li>
                            <a href="#!">More...</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="viewed_product_item">
                      <div className="item_image">
                        {/* <img src="assets/images/viewed_products/viewed_product_img_4.png" alt="image_not_found"> */}
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Accessories</h3>
                        <ul className="ul_li_block">
                          <li>
                            <a href="#!">Computers</a>
                          </li>
                          <li>
                            <a href="#!">Laptop</a>
                          </li>
                          <li>
                            <a href="#!">Macbook</a>
                          </li>
                          <li>
                            <a href="#!">Accessories</a>
                          </li>
                          <li>
                            <a href="#!">More...</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="slider_item col">
                    <div className="viewed_product_item">
                      <div className="item_image">
                        {/* <img src="assets/images/viewed_products/viewed_product_img_5.png" alt="image_not_found"> */}
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">TV & Audio</h3>
                        <ul className="ul_li_block">
                          <li>
                            <a href="#!">Computers</a>
                          </li>
                          <li>
                            <a href="#!">Laptop</a>
                          </li>
                          <li>
                            <a href="#!">Macbook</a>
                          </li>
                          <li>
                            <a href="#!">Accessories</a>
                          </li>
                          <li>
                            <a href="#!">More...</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="viewed_product_item">
                      <div className="item_image">
                        {/* <img src="assets/images/viewed_products/viewed_product_img_6.png" alt="image_not_found"> */}
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Games & Consoles</h3>
                        <ul className="ul_li_block">
                          <li>
                            <a href="#!">Computers</a>
                          </li>
                          <li>
                            <a href="#!">Laptop</a>
                          </li>
                          <li>
                            <a href="#!">Macbook</a>
                          </li>
                          <li>
                            <a href="#!">Accessories</a>
                          </li>
                          <li>
                            <a href="#!">More...</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="slider_item col">
                    <div className="viewed_product_item">
                      <div className="item_image">
                        {/* <img src="assets/images/viewed_products/viewed_product_img_1.png" alt="image_not_found"> */}
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Electronics</h3>
                        <ul className="ul_li_block">
                          <li>
                            <a href="#!">Computers</a>
                          </li>
                          <li>
                            <a href="#!">Laptop</a>
                          </li>
                          <li>
                            <a href="#!">Macbook</a>
                          </li>
                          <li>
                            <a href="#!">Accessories</a>
                          </li>
                          <li>
                            <a href="#!">More...</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="viewed_product_item">
                      <div className="item_image">
                        {/* <img src="assets/images/viewed_products/viewed_product_img_2.png" alt="image_not_found"> */}
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">PC & Laptop</h3>
                        <ul className="ul_li_block">
                          <li>
                            <a href="#!">Computers</a>
                          </li>
                          <li>
                            <a href="#!">Laptop</a>
                          </li>
                          <li>
                            <a href="#!">Macbook</a>
                          </li>
                          <li>
                            <a href="#!">Accessories</a>
                          </li>
                          <li>
                            <a href="#!">More...</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="slider_item col">
                    <div className="viewed_product_item">
                      <div className="item_image">
                        {/* <img src="assets/images/viewed_products/viewed_product_img_3.png" alt="image_not_found"> */}
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Tables & Mobiles</h3>
                        <ul className="ul_li_block">
                          <li>
                            <a href="#!">Computers</a>
                          </li>
                          <li>
                            <a href="#!">Laptop</a>
                          </li>
                          <li>
                            <a href="#!">Macbook</a>
                          </li>
                          <li>
                            <a href="#!">Accessories</a>
                          </li>
                          <li>
                            <a href="#!">More...</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="viewed_product_item">
                      <div className="item_image">
                        <img src={view10} alt="image_not_found" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Accessories</h3>
                        <ul className="ul_li_block">
                          <li>
                            <a href="#!">Computers</a>
                          </li>
                          <li>
                            <a href="#!">Laptop</a>
                          </li>
                          <li>
                            <a href="#!">Macbook</a>
                          </li>
                          <li>
                            <a href="#!">Accessories</a>
                          </li>
                          <li>
                            <a href="#!">More...</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="slider_item col">
                    <div className="viewed_product_item">
                      <div className="item_image">
                        <img src={view11} alt="image_not_found" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">TV & Audio</h3>
                        <ul className="ul_li_block">
                          <li>
                            <a href="#!">Computers</a>
                          </li>
                          <li>
                            <a href="#!">Laptop</a>
                          </li>
                          <li>
                            <a href="#!">Macbook</a>
                          </li>
                          <li>
                            <a href="#!">Accessories</a>
                          </li>
                          <li>
                            <a href="#!">More...</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="viewed_product_item">
                      <div className="item_image">
                        <img src={view12} alt="image_not_found" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Games & Consoles</h3>
                        <ul className="ul_li_block">
                          <li>
                            <a href="#!">Computers</a>
                          </li>
                          <li>
                            <a href="#!">Laptop</a>
                          </li>
                          <li>
                            <a href="#!">Macbook</a>
                          </li>
                          <li>
                            <a href="#!">Accessories</a>
                          </li>
                          <li>
                            <a href="#!">More...</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel_nav">
                  <button type="button" className="vpc_left_arrow">
                    <i className="fal fa-long-arrow-alt-left"></i>
                  </button>
                  <button type="button" className="vpc_right_arrow">
                    <i className="fal fa-long-arrow-alt-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>

        </main>
      </Wrapper>
    </>
  );
};
