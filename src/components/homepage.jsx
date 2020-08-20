/* React */
import React from "react";
import Slice from "./component/slice";
import ComponentHeader from "./component/component-header";
import Card from "./component/card";
import Card1 from "./component/card1";
import Slice1 from "./component/slice1";
import Card2 from "./component/card2";
import Card3 from "./component/card3";
import Card4 from "./component/card4";
import PageLogIn from "./component/pageLogIn";
import End from "./component/end";
import ComponentMenu from "./component/component-menu";
import { DataContext } from "./data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardGround from "./component/card-ground";

/* Icon */

import { BsTools } from "react-icons/bs";
import { FaWallet, FaShoppingBasket } from "react-icons/fa";

/* CSS */

export default class HomePage extends React.Component {
  static contextType = DataContext;

  render() {
    const { products, data, dataAddProduct, outItem, isDisplay } = this.context;
    let items = [];
    for (let i = 0; i < 5; i++) {
      items.push(products[i]);
    }
    return (
      <>
        <PageLogIn />
        <div className="homepage">
          <div
            className="card-ground"
            onClick={() => outItem()}
            style={{ display: isDisplay }}
          >
            <CardGround />
          </div>
          <div className="Component">
            <div className="style-header">
              <ComponentHeader />
              <ComponentMenu />
            </div>
            <div className="Slice">
              <Slice />
            </div>
          </div>
          <div className="Latest-book">
            <h3>Latest Book</h3>
            <p>Vivamus ac lacinia libero efficitur lorem.</p>
            <div className="Card-Style">
              <div className="all-cards">
                <Card>{items}</Card>
              </div>
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
          <div className="book-collection">
            <div className="collection">
              <div className="collection-style">
                <div className="book-collection-title">
                  <h2>Book Collection</h2>
                  <p>Vivamus ac lacinia libero efficitur lorem.</p>
                </div>
                <div className="book-collection-content">
                  <Card3 />
                </div>
              </div>
            </div>
          </div>
          <div className="card4-component">
            <Card4 />
          </div>
          <End />
        </div>
      </>
    );
  }
}
