import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/homepage";
import headerShopPage from "./components/header-shop-page";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/products" exact component={headerShopPage}></Route>
      </Router>
    </div>
  );
}

export default App;
