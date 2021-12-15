import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProductList from "./containers/ProductList";
import ProdDetails from "./components/ProdDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products/:id" component={ProdDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
