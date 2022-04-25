import React, { useEffect, useState } from "react";
import productsApi from "../../apis/productsApi";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    productsApi
      .get("/categories")
      .then((response) => setCategories(response.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="catalog__categories">
      <li className="active">All</li>
      {categories.map((category, id) => (
        <li key={id}>{category}</li>
      ))}
    </div>
  );
};

export default Categories;
