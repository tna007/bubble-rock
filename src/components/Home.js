import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Home</h1>
      <Link to="/products"> View products</Link>
    </section>
  );
};

export default Home;
