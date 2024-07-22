import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"
import payment_icon from "../assets/images/payments_icon.png";
import appstore from "../assets/images/app_store.png";
import playstore from "../assets/images/play_store.png";
import { IoLogoWhatsapp } from "react-icons/io";
export const Footer = () => {
  return (
    <>
    <section className="newsletter_section" style={{backgroundColor: '#2563EB'}}>
    <div className="container">
        <div className="row align-items-center">
            <div className="col col-lg-6">
                <h2 className="newsletter_title text-white">Sign Up for Newsletter </h2>
                <p>Get E-mail updates about our latest products and special offers.</p>
            </div>
            <div className="col col-lg-6">
                <form action="#!">
                    <div className="newsletter_form">
                        <input type="email" name="email" placeholder="Enter your email address" />
                        <button type="submit" className="btn btn_secondary" style={{backgroundColor: 'black', color: 'white'}}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
      <footer className="footer_section">
        <div className="footer_widget_area">
          <div className="container">
            <div className="row">
              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="footer_widget footer_about">
                  <div className="brand_logo">
                    <a
                      className="brand_link"
                      href="index-2.html" style={{display: 'flex', alignItems: 'center', textDecoration: 'none',gap: '0.3em', color: 'black', fontWeight: 'bold',}}>     
                         <img src={logo} srcset="assets/images/logo/logo_2x.png 2x" style={{height:'3.5em',}} alt="logo_not_found" />
                      <h2 style={{fontWeight: 'bold'}}>
                        Gadget
                      </h2>
                    </a>

                  </div>
                  <ul className="social_round ul_li">
                    <li>
                      <a href="" >
                        <i className="icofont-youtube-play"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" >
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col col-lg-2 col-md-3 col-sm-6">
                <div className="footer_widget footer_useful_links">
                  <h3 className="footer_widget_title text-uppercase">
                    Quick Links
                  </h3>
                  <ul className="ul_li_block">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact" >Contact Us</Link>
                    </li>
                  
                    <li>
                      <Link to="/login" >Login</Link>
                    </li>
                    <li>
                      <Link to="/signup" >Sign Up</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col col-lg-2 col-md-3 col-sm-6">
                <div className="footer_widget footer_useful_links">
                  <h3 className="footer_widget_title text-uppercase">
                    Custom area
                  </h3>
                  <ul className="ul_li_block">
                    <li>
                      <Link to="/account" >My Account</Link>
                    </li>
                    <li>
                      <Link to="/privacy" >Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/cart" >My Cart</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="footer_widget footer_contact">
                  <h3 className="footer_widget_title text-uppercase">
                    Contact Info
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <div className="hotline_wrap">
                    <div className="footer_hotline">
                      <div className="item_icon">
                        <i className="icofont-headphone-alt"></i>
                      </div>
                      <div className="item_content">
                        <h4 className="item_title">Have any question?</h4>
                        <span className="hotline_number">+ 123 456 7890</span>
                      </div>
                    </div>
                    <div className="livechat_btn clearfix">
                      <Link to="" className="" style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black', cursor: 'pointer'}} >
                      <IoLogoWhatsapp className='' style={{color: 'green', fontSize: '3em'}}/>
                       Whatsapp
                      </Link>
                    </div>
                  </div>
                  <ul className="store_btns_group ul_li">
                    <li><a href="" ><img src={appstore} alt="app_store" /></a></li>            
                    <li><a href="" ><img src={playstore} alt="play_store" /></a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col col-md-6">
                <p className="copyright_text">
                  ©2024 <a href="" >Gadget</a>. All Rights Reserved.
                </p>
              </div>

              <div className="col col-md-6">
                <div className="payment_method">
                  <h4>Payment:</h4>
                  <img src={payment_icon} alt="image_not_found" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
