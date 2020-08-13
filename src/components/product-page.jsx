import React from "react";
import ComponentHeader from "./component/component-header.jsx";
import Background from "./component/background";
import { DataContext } from "./data";
import Card from "./component/card";
import End from "./component/end";
import { Dropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ProductPage extends React.Component {
  state = {
    trans: "Default sorting",
  };

  static contextType = DataContext;

  render() {
    const { products } = this.context;
    let items = [];
    for (let i = 0; i < 10; i++) {
      items.push(products[i]);
    }

    const a = items.filter((i) => {
      return i.categories[0] === "Actions";
    });
    console.log(a);
    return (
      <>
        <div className="style-header">
          <ComponentHeader />
          <Background title="Shop" />
          <div className="body-page">
            <div className="element">
              <div className="category-style">
                <p>Shop by Categories</p>
                <ul className="category-list">
                  <li>
                    <Link to="/">Action</Link>
                  </li>
                  <li>
                    <Link to="/">Best Seller</Link>
                  </li>
                  <li>
                    <Link to="/">Boys</Link>
                  </li>
                  <li>
                    <Link to="/">CD</Link>
                  </li>
                  <li>
                    <Link to="/">Drama</Link>
                  </li>
                  <li>
                    <Link to="/">EA Games</Link>
                  </li>
                  <li>
                    <Link to="/">Horror</Link>
                  </li>
                  <li>
                    <Link to="/">Loved</Link>
                  </li>
                  <li>
                    <Link to="/">True Story</Link>
                  </li>
                  <li>
                    <Link to="/">Uncategorized</Link>
                  </li>
                  <li>
                    <Link to="/">Women</Link>
                  </li>
                </ul>
              </div>
              <div className="products">
                <div className="filter-products">
                  <p>Showing 1–10 of 66 results</p>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {this.state.trans}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Default sorting
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Sort by popularity
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Sort by average rating
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        Sort by lastest
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-5">
                        Sort by price: low to high
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-6">
                        Sort by price: high to low
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <h2>Books</h2>
                <div className="products-item">
                  <div className="items">
                    <Card>{items}</Card>
                  </div>
                </div>
                <Link to="/" className="button-view-all">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
        <End />
      </>
    );
  }
}

export default ProductPage;
