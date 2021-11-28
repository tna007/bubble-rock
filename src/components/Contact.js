import React from "react";
import { useState } from "react";
import { Col, Container, Row, Form, InputGroup, Button } from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="py-4 my-4">
        <Col className="md-5 text-center">
          <h1>Contact</h1>
        </Col>
      </Row>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 d-flex justify-content-center">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Name" />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 d-flex justify-content-center">
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control required type="email" placeholder="Email" />
              <Form.Control.Feedback type="invalid">
                Need your email but not gonna spam you.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3 d-flex justify-content-center">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Leave a message here"
              style={{ height: "100px" }}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3 d-flex justify-content-center">
          <Col className="md-2 d-flex justify-content-center">
            <Button variant="success" type="submit">
              Send <span className="fa fa-paper-plane"></span>
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Contact;
