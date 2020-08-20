import React from "react";
import ComponentHeader from "./component/component-header.jsx";
import Background from "./component/background";
import { DataContext } from "./data";
import Card from "./component/card";
import End from "./component/end";
import { Dropdown, Pagination } from "react-bootstrap";
import ComponentMenu from "./component/component-menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import CardGround from "./component/card-ground";
import queryString from "query-string";
import PageLogIn from "./component/pageLogIn";
class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.Reload = this.Reload.bind(this);
  }
  state = {
    trans: "Default sorting",
    firstItem: "block",
    lastItem: "block",
    nextUrlPage: () => {
      const a = queryString.parse(this.props.location.search);
      const b = Number(a.page) + 1;
      return `/products/?page=${b}`;
    },
    prevUrlPage: () => {
      const a = queryString.parse(this.props.location.search);
      const b = Number(a.page) - 1;
      return `/products/?page=${b}`;
    },
  };

  static contextType = DataContext;

  componentDidMount() {
    const { ChangeState, Pagination } = this.context;
    ChangeState();
    const a = queryString.parse(this.props.location.search);
    Pagination(Number(a.page));
    if (Number(a.page) === 1) {
      this.setState({ firstItem: "none" });
    }
    if (Number(a.page) === 4) {
      this.setState({ lastItem: "none" });
    }
  }

  Reload = () => {
    setTimeout(() => window.location.reload(), 100);
  };

  render() {
    const {
      filter,
      outItem,
      isDisplay,
      filterItem,
      HighttoLow,
      LowtoHight,
    } = this.context;

    const a = queryString.parse(this.props.location.search);

    if (!a.page) {
      this.Reload();
      return <Redirect to="/products/?page=1" />;
    }

    return (
      <>
        <PageLogIn />
        <div
          className="card-ground"
          onClick={() => outItem()}
          style={{ display: isDisplay }}
        >
          <CardGround />
        </div>
        <div className="style-header">
          <ComponentHeader />
          <ComponentMenu />
          <Background title="Shop" />
          <div className="body-page">
            <div className="element">
              <div className="category-style">
                <p>Shop by Categories</p>
                <ul className="category-list">
                  <li onClick={() => filterItem("Actions")}>Actions</li>
                  <li onClick={() => filterItem("Best Seller")}>Best Seller</li>
                  <li onClick={() => filterItem("Boys")}>Boys</li>
                  <li onClick={() => filterItem("CD")}>CD</li>
                  <li onClick={() => filterItem("Drama")}>Drama</li>
                  <li onClick={() => filterItem("EA Games")}>EA Games</li>
                  <li onClick={() => filterItem("Horror")}>Horror</li>
                  <li onClick={() => filterItem("Loved")}>Loved</li>
                  <li onClick={() => filterItem("True Story")}>True Story</li>
                  <li onClick={() => filterItem("Uncategorized")}>
                    Uncategorized
                  </li>
                  <li onClick={() => filterItem("Women")}>Women</li>
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
                      <Dropdown.Item>Default sorting</Dropdown.Item>
                      <Dropdown.Item>Sort by popularity</Dropdown.Item>
                      <Dropdown.Item>Sort by lastest</Dropdown.Item>
                      <Dropdown.Item onClick={LowtoHight}>
                        Sort by price: low to high
                      </Dropdown.Item>
                      <Dropdown.Item onClick={HighttoLow}>
                        Sort by price: high to low
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <h2>Books</h2>
                <div className="products-item">
                  <div className="items">
                    <Card>{filter}</Card>
                  </div>
                </div>
                <Pagination>
                  <Pagination.First
                    style={{ display: this.state.firstItem }}
                    href="/products/?page=1"
                  />
                  <Pagination.Prev
                    style={{ display: this.state.firstItem }}
                    href={this.state.prevUrlPage()}
                  />
                  <Pagination.Item href="/products/?page=1">
                    {1}
                  </Pagination.Item>
                  <Pagination.Item href="/products/?page=2">
                    {2}
                  </Pagination.Item>
                  <Pagination.Item href="/products/?page=3">
                    {3}
                  </Pagination.Item>
                  <Pagination.Item href="/products/?page=4">
                    {4}
                  </Pagination.Item>
                  <Pagination.Next
                    style={{ display: this.state.lastItem }}
                    href={this.state.nextUrlPage()}
                  />

                  <Pagination.Last
                    style={{ display: this.state.lastItem }}
                    href="/products/?page=4"
                  />
                </Pagination>
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
