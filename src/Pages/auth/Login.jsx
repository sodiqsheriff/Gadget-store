import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, signupUser } from '../../Pages/auth/account_repository.js'; 

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginUser(username, password);
      navigate.push('/user/home'); // Redirect after successful login
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await signupUser(username, password, email);
      setIsLogin(true); // Switch to login after successful signup
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section
      className="register_section section_space"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        border: 'none',
        padding: '0',
        margin: '0',
        height: '100vh',
      }}
    >
      <div
        className=""
        style={{ backgroundColor: '#2563EB', width: '100%' }}
      ></div>
      <div className="container" style={{ margin: 'auto 0' }}>
        <div
          className="row justify-content-start w-100"
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
            outline: 'none',
          }}
        >
          <div className="col-lg-" style={{ border: 'none' }}>
            <ul className="nav register_tabnav ul_li_center" role="tablist">
              <li role="presentation">
                <button
                  className={isLogin ? 'active' : ''}
                  type="button"
                  role="tab"
                  aria-selected={isLogin}
                  onClick={() => setIsLogin(true)}
                >
                  Sign In
                </button>
              </li>
              <li role="presentation">
                <button
                  className={!isLogin ? 'active' : ''}
                  type="button"
                  role="tab"
                  aria-selected={!isLogin}
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </button>
              </li>
            </ul>

            <div
              className="register_wrap tab-content"
              style={{ border: 'none' }}
            >
              {isLogin ? (
                <div
                  className="tab-pane fade show active"
                  id="signin_tab"
                  role="tabpanel"
                  style={{ border: 'none' }}
                >
                  <form onSubmit={handleLogin} style={{ border: 'none' }}>
                    <div className="form_item">
                      <label htmlFor="username_input">
                        <i className="fas fa-user"></i>
                      </label>
                      <input
                        id="username_input"
                        type="text"
                        name="username"
                        placeholder="User Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form_item">
                      <label htmlFor="password_input">
                        <i className="fas fa-lock"></i>
                      </label>
                      <input
                        id="password_input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div className="checkbox_item">
                        <input id="remember_checkbox" type="checkbox" />
                        <label htmlFor="remember_checkbox">Remember Me</label>
                      </div>
                      <Link to="/reset" className="cursor-pointer" style={{ color: '#2563EB', fontWeight: 'bold', textDecoration: 'none' }}>
                        Forget password?
                      </Link>
                    </div>

                    <div className="form_item w-100">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: '#2563EB',
                          color: 'white',
                          fontWeight: '600',
                          border: 'none',
                          height: '2.5em',
                          width: '100%',
                        }}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="tab-pane fade show active" id="signup_tab" role="tabpanel">
                  <form onSubmit={handleSignup}>
                    <div className="form_item">
                      <label htmlFor="username_input2">
                        <i className="fas fa-user"></i>
                      </label>
                      <input
                        id="username_input2"
                        type="text"
                        name="username"
                        placeholder="User Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form_item">
                      <label htmlFor="password_input2">
                        <i className="fas fa-lock"></i>
                      </label>
                      <input
                        id="password_input2"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form_item">
                      <label htmlFor="email_input">
                        <i className="fas fa-envelope"></i>
                      </label>
                      <input
                        id="email_input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form_item w-100">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: '#2563EB',
                          color: 'white',
                          fontWeight: '600',
                          border: 'none',
                          height: '2.5em',
                          width: '100%',
                        }}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
