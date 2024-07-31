import React, { useContext, useEffect, useState } from "react";
import promotion from "../assets/images/promotion/banner_img_1.png";
import promotion2 from "../assets/images/promotion/banner_img_2.png";
import { CustomSlider } from "../_Component/CustomSlider";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { fetchProduct } from "../_repo/product_repository";
import { ProductCard } from "../_Component/card_component";
import  CartContext  from "../contexts/CartContext";
// import { addToCart } from "../_Component/AddToCart";
import { fetchCategory } from "../_repo/category_repository";
import { CategoryModal, ProductModal } from "../_Component/modal_card";
import { CategoryCard } from "../_Component/category_card";

export const Home = ({ product, category }) => {
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
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [pageNo, setPageNo] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pageSize] = useState(6);
  

  const { addToCart } = useContext(CartContext);

  //handle products
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProduct(pageNo, pageSize);
        setProducts(data.content);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [pageNo, pageSize]);

  useEffect(() => {
    const loadCategories = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCategory(pageNo, 6);
        setCategories(data.content);
      } catch (error) {
        console.error('Error loading categories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCategories();
  }, [pageNo]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleClosedModal = () => {
    setSelectedCategory(null);
  };

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
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.productId}
              productData={product}
              onProductClick={handleProductClick}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={handleCloseModal}
          />
        )}
      </div>
      <Row>
        <Col className="d-flex justify-content-between">
          <Button
            onClick={() =>
              setPageNo((prevPageNo) => Math.max(prevPageNo - 1, 0))
            }
            disabled={pageNo === 0}
          >
            Previous
          </Button>
          <Button onClick={() => setPageNo((prevPageNo) => prevPageNo + 1)}>
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
                <Container>
      <div className="product-area clearfix">
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          categories.length > 0 ? (
            categories.map((category) => (
              <CategoryCard
                key={category.categoryId}
                categoryData={category}
                onCategoryClick={handleCategoryClick}
              />
            ))
          ) : (
            <p>No categories available</p>
          )
        )}
        {selectedCategory && (
          <CategoryModal
            category={selectedCategory}
            onClose={handleClosedModal}
          />
        )}
      </div>
      <Row>
        <Col className="d-flex justify-content-between">
          <Button
            onClick={() => setPageNo((prevPageNo) => Math.max(prevPageNo - 1, 0))}
            disabled={pageNo === 0}
          >
            Previous
          </Button>
          <Button onClick={() => setPageNo((prevPageNo) => prevPageNo + 1)}>
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
      </main>
      {/* </Wrapper> */}
    </>
  );
};