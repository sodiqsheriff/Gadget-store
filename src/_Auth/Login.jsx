import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { Button, Form, FormGroup, FormLabel, FormControl, FormCheck } from "react-bootstrap";

export const Login = () => {
  return (
    <>
      <section
        className="register_section section_space"
        style={{
          display: "flex",
          justifyContent: "between",
          border: "none",
          padding: "0",
          margin: "0",
          height: "100dvh",
        }}
      >
        <div
          className=""
          style={{ backgroundColor: "#2563EB", width: "100%" }}
        ></div>
        <div className="container" style={{margin: 'auto 0'}}>
          <div
            className="row justify-content-start w-100 h-screen"
            style={{
              display: "flex",
              flexDirection: "column",
              border: "none",
              outline: "none",
            }}
          >
            <div className="col-lg-" style={{ border: "none" }}>
              <ul className="nav register_tabnav ul_li_center" role="tablist">
                <li role="presentation">
                  <button
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#signin_tab"
                    type="button"
                    role="tab"
                    aria-controls="signin_tab"
                    aria-selected="true"
                  >
                    Sign In
                  </button>
                </li>
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#signup_tab"
                    type="button"
                    role="tab"
                    aria-controls="signup_tab"
                    aria-selected="false"
                  >
                    Register
                  </button>
                </li>
              </ul>

              <div
                className="register_wrap tab-content"
                style={{ border: "none" }}
              >
                <div
                  className="tab-pane fade show active"
                  id="signin_tab"
                  role="tabpanel"
                  style={{ border: "none" }}
                >
                  <form action="#" style={{ border: "none" }}>
                    <div className="form_i">
                      
                      <div className="form_item">
                        <label for="username_input">
                          <i className="fas fa-user"></i>
                        </label>
                        <input
                          id="username_input"
                          type="text"
                          name="username"
                          placeholder="User Name"
                        />
                      </div>
                    </div>

                    <div className="form_it">
                      <div className="form_item">
                        <label for="password_input">
                          <i className="fas fa-lock"></i>
                        </label>
                        <input
                          id="password_input"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="checkbox_item">
                        <input id="remember_checkbox" type="checkbox" />
                        <label for="remember_checkbox">Remember Me</label>
                      </div>
                    </div>

                    <div className="form_it w-100">
                      <Link to="/home" className="w-100">
                        <button
                          type="submit"
                          className="btn"
                          style={{
                            backgroundColor: "#2563EB",
                            color: "white",
                            fontWeight: "600",
                            border: "none",
                            height: "2.5em",
                            width: "100%",
                            padding: "0",
                            marginLeft: "0",
                          }}
                        >
                          Sign In
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>

                <div className="tab-pane fade" id="signup_tab" role="tabpanel">
                  <form action="#">
                    <div className="form_item">
                    
                      <div className="form_item">
                        <label for="username_input2">
                          <i className="fas fa-user"></i>
                        </label>
                        <input
                          id="username_input2"
                          type="text"
                          name="username"
                          style={{ width: "100%" }}
                          placeholder="UserName"
                        />
                      </div>
                    </div>

                    <div className="form_item">
                     
                      <div className="form_item">
                        <label for="password_input2">
                          <i className="fas fa-lock"></i>
                        </label>
                        <input
                          id="password_input2"
                          type="password"
                          name="password"
                          style={{ width: "100%" }}
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="form_item">
                      <div className="form_item">
                        <label for="email_input">
                          <i className="fas fa-envelope"></i>
                        </label>
                        <input
                          id="email_input"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="w-100">
                      <Link to="" className="w-100">
                        <button
                          type="submit"
                          className="btn"
                          style={{
                            backgroundColor: "#2563EB",
                            color: "white",
                            fontWeight: "600",
                            border: "none",
                            height: "2.5em",
                            width: "100%",
                          }}
                        >
                          Register
                        </button>
                      </Link>
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
