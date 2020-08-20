import React, { Component } from "react";
import ComponentHeader from "./component/component-header";
import BackGround from "./component/background";
import SearchCard from "./component/search-card";
import ComponentMenu from "./component/component-menu";
import { DataContext } from "./data";
import { BsSearch } from "react-icons/bs";
import queryString from "query-string";
import PageLogIn from "./component/pageLogIn";

export default class SearchPage extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind();
  }

  state = {
    value: "",
  };

  componentDidMount() {
    const { ChangeState1, products } = this.context;
    const a = queryString.parse(this.props.location.search);
    const b = products.filter((i) => {
      const c = i.name.toLowerCase();
      return c.indexOf(a.filter) !== -1;
    });
    ChangeState1(b);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    let { items, filterItem, SearchItem, filter } = this.context;

    return (
      <div>
        <PageLogIn />
        <ComponentHeader />
        <ComponentMenu />
        <BackGround title="Search Result" />
        <div className="all-component-search">
          <div className="search-component">
            <SearchCard data={filter} />

            <div className="menu-categories">
              <div className="menu-search-bar">
                <div className="menu-search">
                  <div className="search-bar-input">
                    <div className="search-input">
                      <input
                        className="menu-search"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Search ... "
                      />
                    </div>
                    <button className="add-product">
                      <BsSearch onClick={() => SearchItem(this.state.value)} />
                    </button>
                  </div>
                </div>
                <div className="category-style x">
                  <p>Shop by Categories</p>
                  <ul className="category-list">
                    <li onClick={() => filterItem("Actions")}>Actions</li>
                    <li onClick={() => filterItem("Best Seller")}>
                      Best Seller
                    </li>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
