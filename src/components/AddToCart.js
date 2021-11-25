import React from "react";
import { NavLink } from "react-router-dom";

const AddToCart = () => {
  return (
    <>
      <NavLink to="/cart" className="btn btn-ouline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart(0)
      </NavLink>
    </>
  );
};

export default AddToCart;
