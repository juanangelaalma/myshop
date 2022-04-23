import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsApi from "../../apis/productsApi";

import "./product.css";

const Product = () => {
  const [dataProduct, setDataProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(1);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    productsApi
      .get(`/${params.idProduct}`)
      .then((response) => {
        setLoading(false);
        setDataProduct(response.data);
        setError(null);
        document.scrollTop = 0;
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="section__padding">
      {loading && (
        <div className="loading__bar section__margin">Loading...</div>
      )}
      {dataProduct && !error && !loading && (
        <div className="product section__padding">
          <div className="product__image">
            <img src={dataProduct.image} alt="Clothes" />
          </div>
          <div className="product__content">
            <div className="product__content-attr">
              <h5 className="product__content-attr_category">
                {dataProduct.category}
              </h5>
              <h1 className="product__content-attr_name">
                {dataProduct.title}
              </h1>
              <p className="product__content-attr_description">
                {dataProduct.description}
              </p>
              <h4 className="product__content-attr_price">
                $ {dataProduct.price}
              </h4>
            </div>
            <div className="product__content-action">
              <div className="product__content-action_count">
                <button onClick={decrement} className="product__content-action_count-decre">
                  -
                </button>
                <h4>{ count }</h4>
                <button onClick={increment} className="product__content-action_count-incre">
                  +
                </button>
              </div>
              <button className="btn-main product__content-action_addtocart">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
      {error && <p className="loading__bar">{error}</p>}
    </div>
  );
};

export default Product;
