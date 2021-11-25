import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions/actions";

function Product({ product }) {
  const dispatch = useDispatch();

  function add() {
    dispatch({
      type: actions.INCREASE_QUANTITY,
      name: product.name,
      quantity: product.quantity,
      price: product.price,
      totalPrice: product.totalPrice,
    });
  }

  function decrease() {
    dispatch({
      type: actions.DECREASE_QUANTITY,
      name: product.name,
      quantity: product.quantity,
      price: product.price,
      totalPrice: product.totalPrice,
    });
  }

  function remove() {
    dispatch({
      type: actions.REMOVE_PRODUCT,
      name: product.name,
      // quantity: product.quantity,
      // price: product.price,
    });
  }

  return (
    <div>
      {product.name} <span>{product.price}$</span>
      <button onClick={() => add()}>+</button>
      <button onClick={() => decrease()}>-</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
}

export default Product;
