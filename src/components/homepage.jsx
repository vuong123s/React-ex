/* React */
import React from "react";
import Slice from "./slice";
import ComponentHeader from "./component-header";
import Card from "./card";
import Card1 from "./card1";
import Slice1 from "./slice1";
import Card2 from "./card2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* CSS */
import "../css/header.css";
import "../css/bootstrap-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/card.css";
import "../css/button-go-product.css";
import "../css/card1.css";
import "../css/slice1.css";
import "../css/card2.css";

/* Icon */

import { BsTools } from "react-icons/bs";
import { FaWallet, FaShoppingBasket } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="Component">
        <div className="style-header">
          <ComponentHeader />
        </div>
        <div className="Slice">
          <Slice />
        </div>
      </div>
      <div className="Latest-book">
        <h3>Latest Book</h3>
        <p>Vivamus ac lacinia libero efficitur lorem.</p>
        <div className="Card-Style">
          <Card />
        </div>
        <Link to="/products" className="go-product">
          Start Shop Now
        </Link>
      </div>
      <div className="introduce">
        <Card1 />
      </div>
      <div className="slice1">
        <div className="all">
          <div className="space"></div>
          <div className="slice1-style">
            <Slice1 />
          </div>
        </div>
      </div>
      <div className="card2">
        <div className="card2-component">
          <Card2
            color="#fd8aaa"
            className="card2-style e1"
            title="High Qualty Book"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            icon={<BsTools />}
          />
          <Card2
            color="#f6b8a2"
            className="card2-style e2"
            boder="5px solid rgba(113, 220, 199, 0.58);"
            title="Best Price"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            icon={<FaWallet />}
          />
          <Card2
            color="#30cfff"
            className="card2-style e3"
            boder=" 5px solid rgba(113, 220, 133, 0.58"
            title="Easy Buy and Download"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            icon={<FaShoppingBasket />}
          />
        </div>
      </div>
    </div>
  );
}
