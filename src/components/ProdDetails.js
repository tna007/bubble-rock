import React, { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, add, decrease } from "../actions/actions";

import { Col, Container, Row, Image, Button } from "react-bootstrap";

const ProdDetails = () => {
  const dispatch = useDispatch();
  const prodId = useParams();
  useEffect(() => {
    dispatch(fetchProducts(prodId.id));
  }, [dispatch]);

  const { products } = useSelector(({ products }) => products);

  const prodDetail = products.filter((product) => product.id === prodId.id);
  const product = prodDetail[0];

  //   function remove() {
  //     dispatch({
  //       type: actions.REMOVE_PRODUCT,
  //       name: product.name,
  //     });
  //   }
  const addProd = (item) => {
    dispatch(add(item));
  };
  const decreaseProd = (item) => {
    dispatch(decrease(item));
  };

  return (
    <div>
      <Container>
        <Row className="my-5">
          <Col className="xs-6 md-4 my-5 d-flex justify-content-center product">
            <Image src={product.img} alt={product.name} height="500px"></Image>
          </Col>
          <Col className="xs-6 md-4 my-5 d-flex flex-column ">
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>

            <Col className="xs-6 md-4 my-5">
              <Button className="my-5 ms-5" onClick={() => addProd(product)}>
                Add To Cart
              </Button>
              <Button
                className="my-5 ms-5"
                onClick={() => decreaseProd(product)}
              >
                -
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProdDetails;
