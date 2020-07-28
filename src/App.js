import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header";
import headerShopPage from "./components/header-shop-page";

function App() {
  return (
    <header>
      <Router>
        <Route path="/" exact component={Header}></Route>
        <Route path="/products" exact component={headerShopPage}></Route>
      </Router>
    </header>
  );
}

export default App;
