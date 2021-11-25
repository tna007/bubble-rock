import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../components/Product";
import { fetchProducts } from "../actions/actions";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, hasErrors } = useSelector(
    (initialState) => initialState.products
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const list = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <section>
      <h1>Products</h1>
      {loading && <p>Loading products...</p>}
      {hasErrors && <p>Error! 404 Page not found</p>}
      {list}
    </section>
  );
};

export default ProductList;
