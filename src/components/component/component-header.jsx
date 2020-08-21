import React from "react";
import Logo from "../../img/logo.png";
import { BsSearch, BsPersonSquare } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
/*import AddProduct from "./add-product";*/
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import { DataContext } from "../data";
import Cookie from "js-cookie";
import queryString from "query-string";

export default class ComponentHeader extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.Reload = this.Reload.bind();
  }

  state = {
    value: "",
    isShow: "none",
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  Reload = () => {
    setTimeout(() => window.location.reload(), 100);
  };

  componentDidMount() {
    const { logIn } = this.context;
    const getUser = Cookie.get("username");
    if (getUser) {
      logIn();
    }
  }

  ShowMenu() {
    if (this.state.isShow === "none") {
      this.setState({ isShow: "block" });
    } else {
      this.setState({ isShow: "none" });
    }
  }

  logOut() {
    Cookie.remove("username");
    this.Reload();
  }

  render() {
    const { dataAddProduct, onClickBlock, isLogin, isNotLogin } = this.context;

    return (
      <>
        <div className="Header-Component">
          <div className="Header">
            <div className="nav-checkbox">
              <label htmlFor="check">
                <GiHamburgerMenu className="menu-icon-style" />
              </label>
            </div>
            <div className="Logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="Header-menu">
              <ul className="Header-menu-list">
                <li key="1">
                  <Link to="/">Homepage</Link>
                </li>
                <li key="2">
                  <Link to="/products">Shop</Link>
                </li>
                <li key="3">
                  <Link to="/">Pages</Link>
                </li>
                <li key="4">
                  <Link to="/">Books</Link>
                </li>
                <li key="5">
                  <Link to="/">Landing</Link>
                </li>
              </ul>
            </div>
            <div className="Header-D">
              <div className="Login-Search">
                <input type="checkbox" id="check-search-bar" />
                <div className="search-bar-form">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-bar"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                  <Link
                    to={`/search/?filter=${this.state.value}`}
                    className="bar-menu-search"
                  >
                    <BsSearch
                      className="icon-bar-menu-search"
                      onClick={this.Reload}
                    />
                  </Link>
                </div>
                <label htmlFor="check-search-bar">
                  <BsSearch className="Search-icon" />
                </label>
              </div>
              <div
                className="Login-style"
                style={{ display: isNotLogin }}
                onClick={() => onClickBlock()}
              >
                Log In
              </div>
              <div className="avatar Login-style" style={{ display: isLogin }}>
                <BsPersonSquare
                  size={35}
                  color="#eb8367"
                  onClick={() => this.ShowMenu()}
                />
                <div
                  className="menu-login"
                  style={{ display: this.state.isShow }}
                >
                  <ul className="menu-avatar">
                    <li onClick={() => this.logOut()}>Log Out</li>
                    <li>Avatar</li>
                  </ul>
                </div>
              </div>

              <Link to="/add-product-card" className="card-style-product">
                <div className="card-buy">
                  <span>Card</span>
                  <span id="amount">{dataAddProduct.length}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
