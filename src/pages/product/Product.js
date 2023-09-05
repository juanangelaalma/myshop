import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsApi from "../../apis/productsApi";
import Loader from "../../components/loader/Loader";
import products from "../../data/products";

import "./product.css";

const filterProduct = (products, idProduct) => {
  return products.find((product) => product.id === idProduct);
}

const Product = () => {
  const [dataProduct, setDataProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(1);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const idProduct = parseInt(params.idProduct);
    const product = filterProduct(products, idProduct);
    setDataProduct(product);
    setLoading(false);
  }, []);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className="section__padding">
      {loading && (
        <Loader />
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
                {dataProduct.name}
              </h1>
              <p dangerouslySetInnerHTML={{ __html: dataProduct.description }} className="product__content-attr_description">
                
              </p>
            </div>
          </div>
        </div>
      )}
      {error && <p className="loading__bar">{error}</p>}
    </div>
  );
};

export default Product;
