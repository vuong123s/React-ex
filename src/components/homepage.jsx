/* React */
import React from "react";
import Slice from "./slice";
import ComponentHeader from "./component-header";
import Card from "./card";
import Card1 from "./card1";
import Slice1 from "./slice1";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* CSS */
import "../css/header.css";
import "../css/bootstrap-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/card.css";
import "../css/button-go-product.css";
import "../css/card1.css";
import "../css/slice1.css";

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
    </div>
  );
}
