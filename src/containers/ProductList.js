import React from "react";
import products from "../db";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../actions/actions";

import Product from "../pages/Product";
import { Col, Container, Row } from "react-bootstrap";

const ProductList = () => {
  // const dispatch = useDispatch();
  // const { products, loading, hasErrors } = useSelector(
  //   (initialState) => initialState.products
  // );

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  const list = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <section>
      <Container>
        <Row>
          <Col className="mt-5 text-center">
            <h1 className="mt-5">Products</h1>
          </Col>
        </Row>
      </Container>
      {/* <Container>
        {loading && (
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        )}
        {hasErrors && <p>Error! 404 Page not found</p>}
      </Container> */}
      <Container>
        <Row className="justify-content-around">{list}</Row>
      </Container>
    </section>
  );
};

export default ProductList;
