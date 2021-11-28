import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const cart = useSelector(({ cart }) => cart);

  let qnt = 0;
  cart.forEach((el) => {
    qnt += el.quantity;
  });

  return (
    <>
      <NavLink to="/cart" className="btn btn-ouline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart({qnt})
      </NavLink>
    </>
  );
};

export default AddToCart;
