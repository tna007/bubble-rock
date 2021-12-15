import React from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { add, decrease } from "../actions/actions";
import products from "../db";
import { Col, Container, Row, Image, Button } from "react-bootstrap";

const ProdDetails = () => {
  const dispatch = useDispatch();
  const prodId = useParams();

  const prodDetail = products.filter((product) => product.id === prodId.id);
  const product = prodDetail[0];

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
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.intro}
            </h2>
            <h4 className="title-font font-medium text-2xl text-gray-900">
              {product.price}
            </h4>
            <p className="leading-relaxed">{product.desc}</p>
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
