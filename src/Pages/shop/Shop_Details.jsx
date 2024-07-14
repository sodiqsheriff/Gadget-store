import React from 'react'
import { Wrapper } from '../../_Component/Wrapper'

export const Shop_Details = () => {
  return (
    <Wrapper>
        <section className="product_details section_space pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6">
                            <div className="product_details_image">
                                <div className="details_image_carousel">
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_1.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_2.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_3.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_4.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_1.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_2.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_3.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_4.png" alt="image_not_found" />
                                    </div>
                                </div>

                                <div className="details_image_carousel_nav">
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_1.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_2.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_3.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_4.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_1.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_2.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_3.png" alt="image_not_found" />
                                    </div>
                                    <div className="slider_item">
                                        <img src="assets/images/details/product_details_img_4.png" alt="image_not_found" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="product_details_content">
                                <h2 className="item_title">CURREN 8109 Watches</h2>
                                <p>It is a long established fact that a reader will be distracted eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate</p>
                                <div className="item_review">
                                    <ul className="rating_star ul_li">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star-half-alt"></i></li>
                                    </ul>
                                    <span className="review_value">3 Rating(s)</span>
                                </div>

                                <div className="item_price">
                                    <span>$620.00</span>
                                    <del>$720.00</del>
                                </div>
                                <hr/>

                                <div className="item_attribute">
                                    <h3 className="title_text">Options <span className="underline"></span></h3>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col col-md-6">
                                                <div className="select_option clearfix">
                                                    <h4 className="input_title">Size *</h4>
                                                    <select>
                                                        <option data-display="- Please select -">Choose A Option</option>
                                                        <option value="1">Some option</option>
                                                        <option value="2">Another option</option>
                                                        <option value="3" disabled>A disabled option</option>
                                                        <option value="4">Potato</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col col-md-6">
                                                <div className="select_option clearfix">
                                                    <h4 className="input_title">Color *</h4>
                                                    <select>
                                                        <option data-display="- Please select -">Choose A Option</option>
                                                        <option value="1">Some option</option>
                                                        <option value="2">Another option</option>
                                                        <option value="3" disabled>A disabled option</option>
                                                        <option value="4">Potato</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="repuired_text">Repuired Fiields *</span>
                                    </form>
                                </div>

                                <div className="quantity_wrap">
                                    <form action="#">
                                        <div className="quantity_input">
                                            <button type="button" className="input_number_decrement">
                                                <i className="fal fa-minus"></i>
                                            </button>
                                            <input className="input_number" type="text" value="1" />
                                            <button type="button" className="input_number_increment">
                                                <i className="fal fa-plus"></i>
                                            </button>
                                        </div>
                                    </form>

                                    <div className="total_price">Total: $620,99</div>
                                </div>

                                <ul className="default_btns_group ul_li">
                                    <li><a className="btn btn_primary addtocart_btn" href="#!">Add To Cart</a></li>
                                    <li><a href="#!"><i className="far fa-compress-alt"></i></a></li>
                                    <li><a href="#!"><i className="fas fa-heart"></i></a></li>
                                </ul>

                                <ul className="default_share_links ul_li">
                                    <li>
                                        <a className="facebook" href="#!">
                                            <span><i className="fab fa-facebook-square"></i> Like</span>
                                            <small>10K</small>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#!">
                                            <span><i className="fab fa-twitter-square"></i> Tweet</span>
                                            <small>15K</small>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google" href="#!">
                                            <span><i className="fab fa-google-plus-square"></i> Google+</span>
                                            <small>20K</small>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="share" href="#!">
                                            <span><i className="fas fa-plus-square"></i> Share</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="details_information_tab">
                        <ul className="tabs_nav nav ul_li" role='tablist'>
                            <li>
                                <button className="active" data-bs-toggle="tab" data-bs-target="#description_tab" type="button" role="tab" aria-controls="description_tab" aria-selected="true">
                                Description
                                </button>
                            </li>
                            <li>
                                <button data-bs-toggle="tab" data-bs-target="#additional_information_tab" type="button" role="tab" aria-controls="additional_information_tab" aria-selected="false">
                                Additional information
                                </button>
                            </li>
                            <li>
                                <button data-bs-toggle="tab" data-bs-target="#reviews_tab" type="button" role="tab" aria-controls="reviews_tab" aria-selected="false">
                                Reviews(2)
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="description_tab" role="tabpanel">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                                <p className="mb-0">
                                Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.
                                </p>
                            </div>

                            <div className="tab-pane fade" id="additional_information_tab" role="tabpanel">
                                <p>
                                Return into stiff sections the bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked what's happened to me he thought It wasn't a dream. His room, a proper human room although a little too small
                                </p>

                                <div className="additional_info_list">
                                    <h4 className="info_title">Additional Info</h4>
                                    <ul className="ul_li_block">
                                        <li>No Side Effects</li>
                                        <li>Made in USA</li>
                                    </ul>
                                </div>

                                <div className="additional_info_list">
                                    <h4 className="info_title">Product Features Info</h4>
                                    <ul className="ul_li_block">
                                        <li>Compatible for indoor and outdoor use</li>
                                        <li>Wide polypropylene shell seat for unrivalled comfort</li>
                                        <li>Rust-resistant frame</li>
                                        <li>Durable UV and weather-resistant construction</li>
                                        <li>Shell seat features water draining recess</li>
                                        <li>Shell and base are stackable for transport</li>
                                        <li>Choice of monochrome finishes and colourways</li>
                                        <li>Designed by Nagi</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="reviews_tab" role="tabpanel">
                                <div className="average_area">
                                    <h4 className="reviews_tab_title">Average Ratings</h4>
                                    <div className="row align-items-center">
                                        <div className="col-md-5 order-last">
                                            <div className="average_rating_text">
                                                <ul className="rating_star ul_li_center">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star-half-alt"></i></li>
                                                </ul>
                                                <p className="mb-0">
                                                Average Star Rating: <span>4.3 out of 5</span> (2 vote)
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-md-7">
                                            <div className="product_ratings_progressbar">
                                                <ul className="five_star ul_li">
                                                    <li><span>5 Star</span></li>
                                                    <li><div className="progress_bar"></div></li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                                <ul className="four_star ul_li">
                                                    <li><span>4 Star</span></li>
                                                    <li><div className="progress_bar"></div></li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                    </li>
                                                </ul>
                                                <ul className="three_star ul_li">
                                                    <li><span>3 Star</span></li>
                                                    <li><div className="progress_bar"></div></li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                    </li>
                                                </ul>
                                                <ul className="two_star ul_li">
                                                    <li><span>2 Star</span></li>
                                                    <li><div className="progress_bar"></div></li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                    </li>
                                                </ul>
                                                <ul className="one_star ul_li">
                                                    <li><span>1 Star</span></li>
                                                    <li><div className="progress_bar"></div></li>
                                                    <li>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                        <i className="fal fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="customer_reviews">
                                    <h4 className="reviews_tab_title">2 reviews for this product</h4>
                                    <div className="customer_review_item clearfix">
                                        <div className="customer_image">
                                            <img src="assets/images/team/team_1.jpg" alt="image_not_found" />
                                        </div>
                                        <div className="customer_content">
                                            <div className="customer_info">
                                                <ul className="rating_star ul_li">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star-half-alt"></i></li>
                                                </ul>
                                                <h4 className="customer_name">Aonathor troet</h4>
                                                <span className="comment_date">JUNE 2, 2021</span>
                                            </div>
                                            <p className="mb-0">Nice Product, I got one in black. Goes with anything!</p>
                                        </div>
                                    </div>

                                    <div className="customer_review_item clearfix">
                                        <div className="customer_image">
                                            <img src="assets/images/team/team_2.jpg" alt="image_not_found" />
                                        </div>
                                        <div className="customer_content">
                                            <div className="customer_info">
                                                <ul className="rating_star ul_li">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star-half-alt"></i></li>
                                                </ul>
                                                <h4 className="customer_name">Danial obrain</h4>
                                                <span className="comment_date">JUNE 2, 2021</span>
                                            </div>
                                            <p className="mb-0">
                                            Great product quality, Great Design and Great Service.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="customer_review_form">
                                    <h4 className="reviews_tab_title">Add a review</h4>
                                    <p>
                                    Your email address will not be published. Required fields are marked *
                                    </p>
                                    <form action="#">
                                        <div className="form_item">
                                            <input type="text" name="name" placeholder="Your name*" />
                                        </div>
                                        <div className="form_item">
                                            <input type="email" name="email" placeholder="Your Email*" />
                                        </div>
                                        <div className="checkbox_item">
                                            <input id="save_checkbox" type="checkbox" />
                                            <label for="save_checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>
                                        <div className="your_ratings">
                                            <h5>Your Ratings:</h5>
                                            <button type="button"><i className="fal fa-star"></i></button>
                                            <button type="button"><i className="fal fa-star"></i></button>
                                            <button type="button"><i className="fal fa-star"></i></button>
                                            <button type="button"><i className="fal fa-star"></i></button>
                                            <button type="button"><i className="fal fa-star"></i></button>
                                        </div>
                                        <div className="form_item">
                                            <textarea name="comment" placeholder="Your Review*"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn_primary">Submit Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </Wrapper>
  )
}
