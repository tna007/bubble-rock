import React from "react";
import { Carousel } from "react-bootstrap";
import ProductList from "../containers/ProductList";

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/assets/img/tea1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>The best</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="/assets/img/tea2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Bubble Rock</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/img/tea3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>In Town</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ProductList />
    </>
  );
};

export default Home;
