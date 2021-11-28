import React from "react";
import { add, decrease, remove } from "../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch(remove(item));
  };
  const addItem = (item) => {
    dispatch(add(item));
  };
  const decreaseItem = (item) => {
    dispatch(decrease(item));
  };
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
          <div className="bg-light rounded-3 px-4 my-5" key={product.name}>
            <Container className="py-4">
              <Button
                onClick={() => removeFromCart(product)}
                className="btn-close float-end"
                aria-label="Close"
              />
              <Row className="justify-content-center">
                <Col className="md-4">
                  <Image
                    src={product.img}
                    alt={product.name}
                    height="150px"
                  ></Image>
                </Col>
                <Col className="md-4 d-flex align-items-center justify-content-center">
                  <p>{product.name}</p>
                </Col>
                <Col className="md-4 d-flex align-items-center justify-content-center">
                  <p>
                    <Button
                      variant="outline-none"
                      onClick={() => addItem(product)}
                    >
                      +
                    </Button>
                    <span classname="ms-5">{product.quantity}</span>
                    <Button
                      variant="outline-none"
                      onClick={() => decreaseItem(product)}
                    >
                      -
                    </Button>
                  </p>
                </Col>
                <Col className="md-4 d-flex align-items-center justify-content-center">
                  <p>
                    <strong>
                      {product.totalPrice ? product.totalPrice : product.price}
                    </strong>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        );
      })}
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 6 }} className="text-center lead fw-bold">
            Total: {total}
          </Col>
        </Row>
      </Container>

      {cart.length && (
        <Container>
          <Row>
            <NavLink to="/checkout">
              <Button variant="outline-primary"> Check out </Button>
            </NavLink>
          </Row>
        </Container>
      )}

      {cart.length === 0 && (
        <div className="bg-light rounded-3 px-4 my-5">
          <Container>
            <Row>
              <h3>Your cart is empty.</h3>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Cart;
