import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <section>
        <Link to="/">Home</Link>
        <Link to="/products">products</Link>
      </section>
    </nav>
  );
};

export default NavBar;
