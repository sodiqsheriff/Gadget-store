import React from 'react'
import { Wrapper } from '../_Component/Wrapper'

export const Account = () => {
  return (
    <Wrapper>
          <section className="account_section section_space">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3">
                            <div className="account_menu">
                                <ul className="account_menu_list ul_li_block">
                                    <li className="active"><a href="#!">Account Dashboard</a></li>
                                    <li><a href="#!">Account Information</a></li>
                                    <li><a href="#!">Address Book</a></li>
                                    <li><a href="#!">My Orders</a></li>
                                    <li><a href="#!">Billing Agreements</a></li>
                                    <li><a href="#!">Recurring Profiles</a></li>
                                    <li><a href="#!">My Product Reviews</a></li>
                                    <li><a href="#!">My Tags</a></li>
                                    <li><a href="#!">My Wishlist</a></li>
                                    <li><a href="#!">My Applications</a></li>
                                    <li><a href="#!">Newsletter Subscriptions</a></li>
                                    <li><a href="#!">My Downloadable Products</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-9">
                            <div className="account_content_area">
                                <h3>My Dashboard</h3>
                                <ul className="content_layout ul_li_block">
                                    <li>
                                        <h4><strong>Hello, Elena Velykorodnova!</strong></h4>
                                        <p className="mb-0">From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</p>
                                    </li>
                                    <li>
                                        <h4>Contact Information</h4>
                                        <p className="mb-0">John Doe</p>
                                        <a className="mb-3" href="#!">info@example.com</a>
                                        <ul className="btns_group ul_li">
                                            <li><a className="btn" href="#!">Edit Account Information</a></li>
                                            <li><a className="btn" href="#!">Change Password</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h4>Newsletter</h4>
                                        <p>You are currently not subscribed to any newsletter. </p>
                                        <a className="btn" href="#!">Edit Subscription</a>
                                    </li>
                                    <li>
                                        <h4 className="mb-3">Address Book</h4>
                                        <a className="btn" href="#!">Manage Addresses</a>
                                    </li>
                                    <li>
                                        <h4>Default Billing Address</h4>
                                        <p>You have not set a default billing address.</p>
                                        <a className="btn" href="#!">Edit Address</a>
                                    </li>
                                    <li>
                                        <h4>Default Shipping Address</h4>
                                        <p>You have not set a default shipping address.</p>
                                        <a className="btn" href="#!">Edit Address</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </Wrapper>
  )
}
