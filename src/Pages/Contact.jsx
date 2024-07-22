import React from 'react'
import leaf from "../assets/images/leaf.png"
export const Contact = () => {
  return (
         <section className="contact_section section_space">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6">
                            <div className="contact_info_wrap">
                                <h3 className="contact_title">Address <span>Information</span></h3>
                                <div className="decoration_image">
                                    <img src={leaf} alt="image_not_found" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="row">
                                    <div className="col col-md-6">
                                        <div className="contact_info_list">
                                            <h4 className="list_title">Colourbar U.S.A</h4>
                                            <ul className="ul_li_block">
                                                <li>Dhaka In Twin Tower Concord </li>
                                                <li>Shopping Complex</li>
                                                <li>Open  Closes 8:30PM </li>
                                                <li>yourinfo@gmail.com</li>
                                                <li>(1200)-0989-568-331</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col col-md-6">
                                        <div className="contact_info_list">
                                            <h4 className="list_title">USA Exchanger</h4>
                                            <ul className="ul_li_block">
                                                <li>Dhaka In Twin Tower Concord </li>
                                                <li>Shopping Complex</li>
                                                <li>Open  Closes 8:30PM </li>
                                                <li>yourinfo@gmail.com</li>
                                                <li>(1200)-0989-568-331</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-6">
                            <div className="contact_info_wrap">
                                <h3 className="contact_title">Get In Touch <span>Inform Us</span></h3>
                                <div className="decoration_image">
                                    <img src={leaf} alt="image_not_found" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <form action="#">
                                    <div className="form_item">
                                        <input id="contact-form-name" type="text" name="name" placeholder="Your Name" />
                                    </div>
                                    <div className="row">
                                        <div className="col col-md-6 col-sm-6">
                                            <div className="form_item">
                                            <input id="contact-form-email" type="email" name="email" placeholder="Your Email" />
                                        </div>
                                        </div>
                                        <div className="col col-md-6 col-sm-6">
                                            <div className="form_item">
                                                <input type="text" name="subject" placeholder="Your Subject" /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_item">
                                        <textarea id="contact-form-message" name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div id="form-msg"></div>
                                    <button id="contact-form-submit" type="submit" className="btn btn" style={{background: '#2563EB', color: 'white'}}>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  );
}
