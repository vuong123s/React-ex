import React from "react";
import Logo from "../../img/logo.png";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
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
          <img src={Logo} alt="Logo" />
        </div>
        <input type="checkbox" id="check" />
        <div className="Header-menu">
          <ul className="Header-menu-list">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>
              <Link to="/">Pages</Link>
            </li>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/">Landing</Link>
            </li>
            <input type="text" placeholder="Search" className="delete" />
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
          <a href="#" className="Login-style">
            Log In
          </a>
          <div className="card-buy">
            <span>Card</span>
            <span className="amount">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
