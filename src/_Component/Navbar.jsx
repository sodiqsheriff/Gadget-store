import React, { useEffect, useState, useContext } from "react";
import logo from "../../src/assets/images/logo.svg";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { fetchCategory } from "../_repo/category_repository";
import { IoMdSearch } from "react-icons/io";
import { SideCart } from "./side_cart";
import { SearchContext } from "../contexts/SearchContext";
export const NavigationBar = () => {
  const [visible, setVisible] = useState(false);
  const { setSearchParams } = useContext(SearchContext);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      category,
      query,
      pageNo: 0,
    }));
  };
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategory();
        setCategories(data.content);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };

    loadCategories();
  }, []);

  //function toggle visiblity

  const toggleDropdown = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className="body_wrap">
        {/* backtotop - start */}
        <div className="backtotop">
          <Link to="" className="scroll">
            <i className="far fa-arrow-up"></i>
          </Link>
        </div>
        {/* backtotop - end */}

        {/* preloader - start */}
        {/* <div id="preloader"></div> */}
        {/* preloader - end */}

        {/* header_section - start */}
        <header className="header_section header-style-no-collapse  border-0">
          <div className="header_middle">
            <Container>
              <Row className="align-items-center">
                <Col lg={3} md={3} sm={12}>
                  <div className="brand_logo">
                    <Link
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
                    </Link>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <Form action="#">
                    <div className="advance_serach">
                      <div className="select_option mb-0 clearfix">
                        <Form.Select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option data-display="All Categories" value="">
                            Select A Category
                          </option>
                          {categories.map((cat) => (
                            <option key={cat.categoryId} value={cat.categoryId}>
                              {cat.categoryName}
                            </option>
                          ))}
                        </Form.Select>
                      </div>
                      <div className="form_item">
                        <Form.Control
                          type="text"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          name="search"
                          placeholder="Search Products..."
                        />
                        <button
                          onClick={handleSearch}
                          className="search_btn"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <IoMdSearch />
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
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "end",
                      gap: "3px",
                      justifyContent: "end",
                    }}
                  >
                    <Link to="/account">
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
                    </Link>
                    <Link to="/cart">
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
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="custom_header_bottom">
      <div className="custom_container">
        <div className="custom_row align-items-center">
          <div className="custom_col custom_col-md-3">
            <div className="custom_allcategories_dropdown">
              <button
                className="custom_allcategories_btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#custom_allcategories_collapse"
                aria-expanded="false"
                aria-controls="custom_allcategories_collapse"
                style={{backgroundColor: '#2563EB', color: 'white', fontWeight: 'medium', fontSize:'22px'}}
              >
                <svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  aria-labelledby="statsIconTitle"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  color="#000"
                >
                  <title id="statsIconTitle">Stats</title>
                  <path d="M6 7L15 7M6 12L18 12M6 17L12 17" />
                </svg>
                Browse categories
              </button>
              <div
                className="custom_allcategories_collapse show"
                id="custom_allcategories_collapse"
              >
                <div className="custom_card card-body">
                  <ul className="custom_allcategories_list ul_li_block">
                    {categories.map((cat) => (
                      <li key={cat.categoryId}>
                        <a href={`/shop/${cat.categoryId}`}>
                          <i className={`icon icon-${cat.icon}`}></i> {cat.categoryName}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="custom_col custom_col-md-6">
            <nav className="custom_main_menu navbar navbar-expand-lg">
              <div
                className="custom_main_menu_inner collapse navbar-collapse"
                id="custom_main_menu"
              >
               
                <ul className="custom_main_menu_list ul_li">
                  <li>
                    <Link to="" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link
                      className="nav-link"
                      to="/shop"
                      id="custom_shop_submenu"
                      role="button"
                    >
                      Shop
                    </Link>
                    <ul
                      className="submenu dropdown-menu"
                      aria-labelledby="custom_shop_submenu"
                    >
                      <li>
                        <a href="/shop">Shop List</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link
                      className="nav-link"
                      to=""
                      id="custom_pages_submenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </Link>
                    <ul
                      className="submenu dropdown-menu"
                      aria-labelledby="custom_pages_submenu"
                    >
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/team">Team</Link>
                      </li>
                      <li>
                        <Link to="/account">My Account</Link>
                      </li>
                      <li>
                        <Link
                          to="/register"
                          style={{
                            backgroundColor: "#2563EB",
                            color: "white",
                          }}
                        >
                          Register
                        </Link>
                      </li>
                      <li className="dropdown">
                        <Link
                          to="#"
                          id="custom_cart_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Shopping Cart
                        </Link>
                        <ul
                          className="submenu dropdown-menu"
                          aria-labelledby="custom_cart_submenu"
                        >
                          <li>
                            <a href="/cart">Cart</a>
                          </li>
                          <li>
                            <a href="/cart_empty">Cart Empty</a>
                          </li>
                          <li>
                            <a href="/checkout">Checkout</a>
                          </li>
                          <li>
                            <a href="/compare">Compare</a>
                          </li>
                          <li>
                            <a href="/wishlist">Wishlist</a>
                          </li>
                          <li>
                            <a href="/order_tracking">Order Tracking</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/error">404 Error</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="custom_offcanvas_overlay"></div>
          </div>

          <div className="custom_col custom_col-md-3">
            <ul className="custom_header_icons_group ul_li_right">
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        </header>
        {/* header_section - end */}

        <SideCart />
        {/* End Sidebar cart conent */}
      </div>
    </>
  );
};
