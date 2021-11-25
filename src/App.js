import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductList from "./containers/ProductList";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductList} />
      </Switch>
      <p></p>
      <div>here will be cart</div>
      <Cart />
    </Router>
  );
}

export default App;
