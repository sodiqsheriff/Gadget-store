import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export const ShopList = () => {
  const { data } = useContext(SearchContext);

  return (
    <>
      <div className="breadcrumb_section">
        <div className="container">
          <ul className="breadcrumb_nav ul_li">
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li>Product List</li>
          </ul>
        </div>
      </div>
      <section className="product_section section_space">
        <h2 className="hidden">Product sidebar</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <aside className="sidebar_section p-0 mt-0">
                <div className="sb_widget sb_category">
                  <h3 className="sb_widget_title">Categories</h3>
                  <ul className="sb_category_list ul_li_block">
                    <li>
                      <a href="#!">
                        Official electronic <span></span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        Dell <span>(1375)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        Asus <span>(1687)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        HP <span>(1036)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        Acer <span>(202)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        Aivta <span>(525)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        HP <span>(135)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        Apple <span>(298)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <span>All Categories</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sb_widget">
                  <h3 className="sb_widget_title">Your Filter</h3>
                  <div className="filter_sidebar">
                    <div className="fs_widget">
                      <h3 className="fs_widget_title">Category</h3>
                      <form action="#">
                        <div className="select_option clearfix">
                          <select>
                            <option data-display="Select Category">
                              Select Your Option
                            </option>
                            <option value="1" selected>
                              HP
                            </option>
                            <option value="2">HP</option>
                            <option value="3">HP</option>
                          </select>
                        </div>
                      </form>
                    </div>

                    <div className="fs_widget">
                      <h3 className="fs_widget_title">Manufacturer</h3>
                      <form action="#">
                        <ul className="fs_brand_list ul_li_block">
                          <li>
                            <div className="checkbox_item">
                              <input
                                id="apple_brand"
                                type="checkbox"
                                name="brand_checkbox"
                              />
                              <label for="apple_brand">
                                Apple <span>(19)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_item">
                              <input
                                id="asus_brand"
                                type="checkbox"
                                name="brand_checkbox"
                              />
                              <label for="asus_brand">
                                Asus <span>(1)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="checkbox_item">
                              <input
                                id="bank_oluvsen_brand"
                                type="checkbox"
                                name="brand_checkbox"
                              />
                              <label for="bank_oluvsen_brand">
                                Bank & Oluvsen
                                <span>(1)</span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </form>
                    </div>

                    <div className="fs_widget">
                      <h3 className="fs_widget_title">Price</h3>
                      <form action="#">
                        <div className="price-range-area clearfix">
                          <div className="price-text d-flex align-items-center">
                            <span>Range:</span>
                            <input type="text" id="amount" readonly />
                          </div>
                          <div id="slider-range" className="slider-range"></div>
                        </div>
                      </form>
                    </div>

                    <div className="fs_widget">
                      <h3 className="fs_widget_title">Filter by Memory</h3>
                      <ul className="filter_memory_list ul_li_block">
                        <li>
                          <a href="#!">
                            256 GB or more <span>(12)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            128 GB <span>(12)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            16 GB <span>(6)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            32 GB <span>(7)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            64 GB <span>(9)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            8 GB or less <span>(8)</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div className="col-lg-9">
              <div className="filter_topbar">
                <div className="row align-items-center">
                  <div className="col col-md-4">
                    <ul className="layout_btns nav" role="tablist">
                      <li>
                        <button
                          data-bs-toggle="tab"
                          data-bs-target="#home"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          <i className="fal fa-bars"></i>
                        </button>
                      </li>
                      <li>
                        <button
                          className="active"
                          data-bs-toggle="tab"
                          data-bs-target="#profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          <i className="fal fa-th-large"></i>
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="col col-md-4">
                    <div className="result_text">
                      Showing 1-16 of 30 relults
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div className="tab-content">
                <div className="tab-pane fade" id="home" role="tabpanel">
                  <div className="shop-product-area shop-product-area-col">
                    <div className="product-area shop-grid-product-area clearfix">
                      <div className="grid">
                        <div className="product-pic">
                          <img
                            src="assets/images/shop/product_img_12.png"
                            alt
                          />
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
                                    <title>Favourite</title>
                                    <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z" />
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
                                    <title>Shuffle</title>
                                    <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />
                                    <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />
                                    <path d="M19 4L22 7L19 10" />
                                    <path d="M19 13L22 16L19 19" />
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
                                    <title>Visible (eye)</title>
                                    <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />
                                    <circle cx="12" cy="12" r="3" />
                                  </svg>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pagination_wrap">
                    <ul className="pagination_nav">
                      <li className="active">
                        <a href="#!">01</a>
                      </li>
                      <li>
                        <a href="#!">02</a>
                      </li>
                      <li>
                        <a href="#!">03</a>
                      </li>
                      <li className="prev_btn">
                        <a href="#!">
                          <i className="fal fa-angle-left"></i>
                        </a>
                      </li>
                      <li className="next_btn">
                        <a href="#!">
                          <i className="fal fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
