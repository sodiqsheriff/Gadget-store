import React, { useContext, useEffect, useState } from "react";
import mac from "../assets/images/shop/product_img_12.png";
import shop from "../assets/images/shop/product_img_12.png";
import sale from "../assets/images/shop/product-img-21.png";
import product2 from "../assets/images/shop/product-img-21.png";
import product4 from "../assets/images/shop/product-img-23.png";
import imac from "../assets/images/shop/product-img-24.png";
import pro from "../assets/images/shop/product-img-28.png";
import iphone13 from "../assets/images/shop/product-img-25.png";
import promotion from "../assets/images/promotion/banner_img_1.png";
import promotion2 from "../assets/images/promotion/banner_img_2.png";
import { CustomSlider } from "../_Component/CustomSlider";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { fetchProduct } from "../_repo/product_repository";
import { ProductCard } from "../_Component/card_component";
import { CartContext } from "../_Component/CartContext";

export const Home = ({ product }) => {
  console.log("Home called");

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

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState(0);
  const [pageSize] = useState(6);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      id: product.ProductId,
      name: product.ProductName,
      price: product.ProductPrice,
      image: product.ProductImage, // Ensure you have this property
    }, 1);
  };
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProduct(pageNo, pageSize);
        setProducts(data.content);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [pageNo, pageSize]);

  if (loading) {
    return <Spinner animation="border" />;
  }
  return (
    <>
      {/* <Wrapper> */}
      <main>
        {/*
            <!-- product quick view modal - start
            ================================================== --> */}
        <div
          className="modal fade"
          id="quickview_popup"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabIndex="1"
        >
          <div className="modal-dialog modal-dialog">
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
                          <img src={shop} alt="alt" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="product_details_content">
                          <h2 className="item_title">Macbook Pro</h2>
                          <p>
                            It is a long established fact that a reader will be
                            distracted eget velit. Donec ac tempus ante. Fusce
                            ultricies massa massa. Fusce aliquam, purus eget
                            sagittis vulputate
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
                                      <option value="2">Another option</option>
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
                                      <option value={2}>Another option</option>
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
                              <button onClick={handleAddToCart} className="addtocart_btn">
                                Add To Cart
                              </button>
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
              <div className="col-lg-12 order-lg-3">
                <div className="best-selling-products">
                  <div className="sec-title-link">
                    <h3>Best selling</h3>
                    <div className="view-all">
                      <a href="#">
                        View all<i className="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                  <Container>
                    <div className="product-area clearfix">
                      {products.length > 0 ? (
                        products.map((product) => (
                          <ProductCard
                            key={product.productId}
                            productData={product}
                          />
                        ))
                      ) : (
                        <p>No products available</p>
                      )}
                    </div>
                    <Row>
                      <Col className="d-flex justify-content-between">
                        <Button
                          onClick={() =>
                            setPageNo((prevPageNo) =>
                              Math.max(prevPageNo - 1, 0)
                            )
                          }
                          disabled={pageNo === 0}
                        >
                          Previous
                        </Button>
                        <Button
                          onClick={() =>
                            setPageNo((prevPageNo) => prevPageNo + 1)
                          }
                        >
                          Next
                        </Button>
                      </Col>
                    </Row>
                  </Container>
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
                    <img src={promotion} alt="" />
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
                    <img src={promotion2} alt="" />
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
                      <img src={pro} alt="" />
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
                      <button onClick={handleAddToCart} className="addtocart_btn">
                                Add To Cart
                              </button>
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
                      <button onClick={handleAddToCart} className="addtocart_btn">
                                Add To Cart
                              </button>
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
                      <button onClick={handleAddToCart} className="addtocart_btn">
                                Add To Cart
                              </button>
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
                      <button onClick={handleAddToCart} className="addtocart_btn">
                                Add To Cart
                              </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* </Wrapper> */}
    </>
  );
};
