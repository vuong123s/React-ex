import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/homepage";
import ProductPage from "./components/product-page";
import ErrPage from "./components/err-page";
import { Data } from "./components/data";

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
import "./css/card-ground.css";

/* * ProductPage * */
import "./css/product-page.css";

/* * ErrPage * */
import "./css/err-component.css";

/* Card-page*/
import CardPage from "./components/addProductCard";
import "./css/addProductCard.css";
import "./css/card-animation.css";
import "./css/review.css";

/* Product-Page */
import AddProductPage from "./components/add-product-page";
import "./css/add-page.css";

/* Card Buy Page */
import "./css/card-buy.css";

/* Search Page */
import SearchPage from "./components/search-page";
import "./css/search.css";
/* Login Tap */

import "./css/login.css";

/* PageSign */
import PageSign from "./components/pageSign";

function App() {
  return (
    <Data>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" component={ProductPage} />
          <Route path="/card/:id" component={CardPage} />
          <Route
            path="/add-product-card"
            exact
            component={AddProductPage}
          ></Route>
          <Route path="/search" component={SearchPage} />
          <Route path="/sign" component={PageSign} />
          <Route component={ErrPage} />
        </Switch>
      </div>
    </Data>
  );
}

export default App;
