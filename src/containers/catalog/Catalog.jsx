import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CardProduct } from "../../components";
import Categories from "../../components/categories/Categories";
import Loader from "../../components/loader/Loader";
import products from "../../data/products";

import "./catalog.css";

const Catalog = ({ buttonMore, categories, all }) => {
  const navigate = useNavigate();

  const onClickMore = () => {
    return navigate("/products");
  };

  const max = buttonMore ? 4 : null;

  const willShow = (productId) => {
    if (!max) return true
    return productId <= max;
  }

  return (
    <div
      style={{ backgroundColor: "#F4F4F4" }}
      id="catalog"
      className="catalog section__padding"
    >
      <h1 className="catalog__title">Produk</h1>
      {categories && <Categories />}
      <div className="catalog__products">
          {products.map((product) => (
            willShow(product.id) && <CardProduct
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.name}
            price={`${product.price}$`}
          />
          ))}
      </div>
      {buttonMore && (
        <button onClick={onClickMore} className="btn-main">
          Lihat semua produk
        </button>
      )}
    </div>
  );
};

export default Catalog;
