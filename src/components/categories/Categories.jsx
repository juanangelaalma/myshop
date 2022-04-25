import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsApi from "../../apis/productsApi";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const params = useParams()

  useEffect(() => {
    productsApi
      .get("/categories")
      .then((response) => setCategories(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="catalog__categories">
      <Link to="/products">
        <li className={!(params.category) ? "active" : ""}>All</li>
      </Link>
      {categories.map((category, id) => (
        <Link key={id} to={`/products/category/${category}`}>
          <li className={params.category === category ? "active" : ""}>{category}</li>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
