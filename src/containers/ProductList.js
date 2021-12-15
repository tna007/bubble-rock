import React from "react";
import products from "../db";
import Product from "../pages/Product";
import { Col, Container, Row } from "react-bootstrap";

const ProductList = () => {
  const list = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5 text-center">
            <h1 className="mt-5">Products</h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-around">{list}</Row>
      </Container>
    </>
  );
};

export default ProductList;
