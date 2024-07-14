import React from 'react'
import { Wrapper } from '../_Component/Wrapper'

export const Order_tracking = () => {
  return (
    <Wrapper>
           <div className="breadcrumb_section">
                <div className="container">
                    <ul className="breadcrumb_nav ul_li">
                        <li><a href="index-2.html">Home</a></li>
                        <li>Order Tracking</li>
                    </ul>
                </div>
            </div>
          <section className="order_tracking_section section_space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-lg-10">
                            <div className="order_tracking_form text-center">
                                <h2 className="title_text">Track Your Order</h2>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                                <form action="#">
                                    <div className="row">
                                        <div className="col col-md-6">
                                            <div className="form_item">
                                                <h3 className="form_title">Order ID</h3>
                                                <input type="text" name="order_id" placeholder="Found your order confirmation email" />
                                            </div>
                                        </div>
                                        <div className="col col-md-6">
                                            <div className="form_item">
                                                <h3 className="form_title">Billing Email</h3>
                                                <input type="email" name="billing_email" placeholder="Found your order confirmation email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit_btn_wrap">
                                        <button type="submit" className="btn btn_primary">Track Order</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </Wrapper>
  )
}
