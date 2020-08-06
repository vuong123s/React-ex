import React from "react";
import Logo from "../../img/logo.png";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import AddProduct from "./add-product";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  Carousel,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

export default function ComponentHeader() {
  return (
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
            <input type="text" placeholder="Search" className="search-bar" />
            <label htmlFor="check-search-bar">
              <BsSearch className="Search-icon" />
            </label>
          </div>
          <Link to="/" className="Login-style">
            Log In
          </Link>
          <div className="card-buy">
            <span>Card</span>
            <AddProduct />
          </div>
        </div>
      </div>
    </div>
  );
}
