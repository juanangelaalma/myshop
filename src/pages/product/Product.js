import React from "react";

import "./product.css";

const Product = () => {
  return (
    <div className="product section__padding">
      <div className="product__image">
        <img
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="Clothes"
        />
      </div>
      <div className="product__content">
        <div className="product__content-attr">
          <h5 className="product__content-attr_category">men's clothing</h5>
          <h1 className="product__content-attr_name">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h1>
          <p className="product__content-attr_description">
            Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>
          <h4 className="product__content-attr_price">$128.9</h4>
        </div>
        <div className="product__content-action">
          <div className="product__content-action_count">
            <button className="product__content-action_count-decre">-</button>
            <h4>1</h4>
            <button className="product__content-action_count-incre">+</button>
          </div>
          <button className="btn-main product__content-action_addtocart">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
