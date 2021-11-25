import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);
  let total = 0;
  return (
    <div>
      {cart.map((product) => {
        if (product.quantity !== 1) {
          total = Math.round((total += product.totalPrice) * 100) / 100;
        } else {
          total = Math.round((total += product.price) * 100) / 100;
        }
        return (
          <div key={product.name}>
            {product.name} {product.quantity}{" "}
            <strong>
              {product.totalPrice ? product.totalPrice : product.price}
            </strong>
          </div>
        );
      })}
      Total: {total}
      {/* <button>+</button>
      <button>-</button> */}
    </div>
  );
};

export default Cart;
