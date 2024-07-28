import React from 'react'
import image1 from "../assets/wactch.svg";
import image2 from "../assets/wactch.svg";
import image3 from "../assets/wactch.svg";

export const SideCart = () => {
  return (
    <>
 {/* Sidebar Cart Section */}

 <div className="sidebar-menu-wrapper">
          <div className="cart_sidebar">
            <button type="button" className="close_btn">
              <i className="fal fa-times"></i>
            </button>
            <ul className="cart_items_list ul_li_block mb_30 clearfix">
              <li>
                <div className="item_image">
                  <img src={image1} alt='alt' />
                </div>
                <div className="item_content">
                  <h4 className="item_title">Yellow Blouse</h4>
                  <span className="item_price">$30.00</span>
                </div>
                <button type="button" className="remove_btn">
                  <i className="fal fa-trash-alt"></i>
                </button>
              </li>
              <li>
                <div className="item_image">
                  <img src={image2} alt='alt' />
                </div>
                <div className="item_content">
                  <h4 className="item_title">Yellow Blouse</h4>
                  <span className="item_price">$30.00</span>
                </div>
                <button type="button" className="remove_btn">
                  <i className="fal fa-trash-alt"></i>
                </button>
              </li>
              <li>
                <div className="item_image">
                  <img src={image3} alt='alt' />
                </div>
                <div className="item_content">
                  <h4 className="item_title">Yellow Blouse</h4>
                  <span className="item_price">$30.00</span>
                </div>
                <button type="button" className="remove_btn">
                  <i className="fal fa-trash-alt"></i>
                </button>
              </li>
            </ul>

            <ul className="total_price ul_li_block mb_30 clearfix">
              <li>
                <span>Subtotal:</span>
                <span>$90</span>
              </li>
              <li>
                <span>Vat 5%:</span>
                <span>$4.5</span>
              </li>
              <li>
                <span>Discount 20%:</span>
                <span>- $18.9</span>
              </li>
              <li>
                <span>Total:</span>
                <span>$75.6</span>
              </li>
            </ul>

            <ul className="btns_group ul_li_block clearfix">
              <li>
                <a className="btn btn_primary" href="cart.html">
                  View Cart
                </a>
              </li>
              <li>
                <a className="btn btn_secondary" href="checkout.html">
                  Checkout
                </a>
              </li>
            </ul>
          </div>

          <div className="cart_overlay"></div>
        </div>
        {/* End Sidebar cart conent */}
    </>
  )
}
