import React from 'react';
import { AddToCartButton } from './AddToCart';

export const ProductModal = ({ product, onClose }) => {
  if (!product) {
    return null; 
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



import 'bootstrap/dist/css/bootstrap.min.css';

export const CategoryModal = ({ category, onClose }) => {
  if (!category) return null;

  return (
    <div 
      className="modal show" 
      tabIndex="-1" 
      style={{ display: 'block' }}
      onClick={onClose} 
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}> {/* Prevents modal close when clicking inside the modal */}
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{category.categoryName}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <img src={category.categoryImage} alt={category.categoryName} style={{ width: '100%', height: 'auto' }} />
            <p>{category.categroyDescription}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

