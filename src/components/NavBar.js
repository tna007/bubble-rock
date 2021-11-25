import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import AddToCart from "./AddToCart";
import Cart from "./Cart";
import Login from "./Login";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Navbar.Brand href="/" className="mx-auto">
            Logo
          </Navbar.Brand>
          <Login />
          <AddToCart />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
