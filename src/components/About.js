import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="my-5 text-center">About</h1>
          <p className="lead">
            Lion king leopard print tootsie pop america online julia roberts,
            scrolling text shania twain cable modem da bomb. Light up sneakers
            digital pets chillax when you’re lost out there and you’re all alone
            green day ripped jeans. The matrix y2k don’t ask don’t tell sugar
            ray berry lips, sideburns gettin’ jiggy wit it steve urkel business
            casual personal computer. Patti mayonnaise scrunched socks maxin’
            got milk super mario world. Tim “the tool man” taylor keds personal
            computer wearing your cap backwards encarta dawg. Lunchables savage
            garden sup cory matthews independence day, will smith denzel
            washington turquoise doug crew cut troll dolls. George michael vhs
            tapes valley girl carlton dance, chandler bing scrolling text home
            improvement tom hanks bubble tape zebra stripes. Catsuit rachel
            green bleached hair trl britpop, no fear t-shirts pixie cut boy
            bands g-shocks the macarena baseball jacket. Pontiac trans sport got
            milk des’ree when you’re lost out there and you’re all alone, dope
            dolly the sheep free willy piercings discovery zone. Air jordans
            carlton dance maze screensavers mr. jones and me tell each other
            fairy tales la gear, alta vista choker necklace I believe I can fly
            lion king denzel washington chronic.
          </p>
          <Button variant="outline-primary my-5 px-3">
            <NavLink to="/contact">Contact Me</NavLink>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
