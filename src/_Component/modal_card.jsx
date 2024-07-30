import React from 'react';
import { AddToCartButton } from './AddToCart';

export const ProductModal = ({ product, onClose }) => {
  if (!product) {
    return null; // Or you can return a loading spinner or some placeholder
  }

  return (
    <div className="modal fade show" id="quickview_popup" tabIndex="-1" aria-hidden="true" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalToggleLabel2">
              product Quick View
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="product_details">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-6">
                    <div className="product_details_image p-0">
                      <img src={product.productImage} alt={product.productName} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="product_details_content">
                      <h2 className="item_title">{product.productName}</h2>
                      <p>{product.productDescription}</p>
                      <div className="item_price">
                        <span>{product.productStatus ? "Available" : "Not Available"}</span>
                      </div>
                      <ul className="default_btns_group ul_li">
                        <li>
                          <AddToCartButton product={product} />
                        </li>
                        <li>
                          <a className="btn btn_primary" href="#!">
                            Add to Wishlist
                          </a>
                        </li>
                      </ul>
                      <ul className="default_btns_group ul_li">
                        <li>
                          <a className="btn btn_secondary" href="#!">
                            View product Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
