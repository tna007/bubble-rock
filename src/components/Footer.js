import React from "react";
import { Col } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <footer className="text-center my-5 bg-light">
        <Col>
          <p>
            Made by <a href="https://github.com/tna007">Anh To</a>. Copyright{" "}
            {new Date().getFullYear()}
          </p>
        </Col>
      </footer>
    </>
  );
};

export default Footer;
