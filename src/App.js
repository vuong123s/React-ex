import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/homepage";
import ProductPage from "./components/product-page";
import ErrPage from "./components/err-page";

/* CSS */
/* * HomePage * */
import "./css/homepage.css";
import "./css/bootstrap-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/card.css";
import "./css/button-go-product.css";
import "./css/card1.css";
import "./css/slice1.css";
import "./css/card2.css";
import "./css/card3.css";
import "./css/card4.css";

/* * ProductPage * */

/* * ErrPage * */
import "./css/err-component.css";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/products" exact component={ProductPage}></Route>
        <Route component={ErrPage}></Route>
      </Router>
    </div>
  );
}

export default App;
