import React from "react";
import { useDispatch } from "react-redux";
import { add, decrease } from "../actions/actions";
import { NavLink } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Product({ product }) {
  const dispatch = useDispatch();
  const addItem = (item) => {
    dispatch(add(item));
  };
  const decreaseItem = (item) => {
    dispatch(decrease(item));
  };

  return (
    <Card className="my-5 py-3" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="lead">{product.price}</Card.Text>

        <Button variant="outline-primary">
          <NavLink to={`/products/${product.id}`}>View</NavLink>
        </Button>

        <Button className="ms-2" onClick={() => addItem(product)}>
          +
        </Button>
        <Button className="ms-2" onClick={() => decreaseItem(product)}>
          -
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
