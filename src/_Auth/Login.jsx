import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Form, FormGroup, FormLabel, FormControl, FormCheck } from "react-bootstrap";

export const Login = () => {
  return (
    <>
      <section className="register_section section_space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">

                            <ul className="nav register_tabnav ul_li_center" role="tablist">
                                <li role="presentation">
                                    <button className="active" data-bs-toggle="tab" data-bs-target="#signin_tab" type="button" role="tab" aria-controls="signin_tab" aria-selected="true">Sign In</button>
                                </li>
                                <li role="presentation">
                                    <button data-bs-toggle="tab" data-bs-target="#signup_tab" type="button" role="tab" aria-controls="signup_tab" aria-selected="false" >Register</button>
                                </li>
                            </ul>

                            <div className="register_wrap tab-content">
                                <div className="tab-pane fade show active" id="signin_tab" role="tabpanel">
                                    <form action="#">
                                        <div className="form_item_wrap">
                                            <h3 className="input_title">User Name*</h3>
                                            <div className="form_item">
                                                <label for="username_input"><i className="fas fa-user"></i></label>
                                                <input id="username_input" type="text" name="username" placeholder="User Name" />
                                            </div>
                                        </div>

                                        <div className="form_item_wrap">
                                            <h3 className="input_title">Password*</h3>
                                            <div className="form_item">
                                                <label for="password_input"><i className="fas fa-lock"></i></label>
                                                <input id="password_input" type="password" name="password" placeholder="Password" />
                                            </div>
                                            <div className="checkbox_item">
                                                <input id="remember_checkbox" type="checkbox" />
                                                <label for="remember_checkbox">Remember Me</label>
                                            </div>
                                        </div>

                                        <div className="form_item_wrap">
                                            <button type="submit" className="btn" style={{backgroundColor: '#2563EB', color: 'white', border: 'none', }}>Sign In</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="tab-pane fade" id="signup_tab" role="tabpanel">
                                    <form action="#">
                                        <div className="form_item_wrap">
                                            <h3 className="input_title">User Name*</h3>
                                            <div className="form_item">
                                                <label for="username_input2"><i className="fas fa-user"></i></label>
                                                <input id="username_input2" type="text" name="username" placeholder="User Name" />
                                            </div>
                                        </div>

                                        <div className="form_item_wrap">
                                            <h3 className="input_title">Password*</h3>
                                            <div className="form_item">
                                                <label for="password_input2"><i className="fas fa-lock"></i></label>
                                                <input id="password_input2" type="password" name="password" placeholder="Password" />
                                            </div>
                                        </div>

                                        <div className="form_item_wrap">
                                            <h3 className="input_title">Email*</h3>
                                            <div className="form_item">
                                                <label for="email_input"><i className="fas fa-envelope"></i></label>
                                                <input id="email_input" type="email" name="email" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="form_item_wrap">
                                          <NavLink to='/home'>
                                            <button type="submit" className="btn" style={{backgroundColor: '#2563EB', border: 'none', color: 'white'}}>Register</button>
                                        </NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  );
};
