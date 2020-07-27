/* React */
import React from "react";
import Slice from "./slice";
/* CSS */
import "../css/header.css";
import "../css/slice.css";
import "bootstrap/dist/css/bootstrap.min.css";
/* Img */
import Logo from "../img/logo.png";
/* Icon */
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <div className="Component">
      <div className="Header-Component">
        <div className="Header">
          <div className="Logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="Header-menu">
            <ul className="Header-menu-list">
              <li>Homepage</li>
              <li>Shop</li>
            </ul>
          </div>
          <div className="Header-D">
            <BsSearch className="Search-icon" />
            <ul className="Header-menu-list">
              <li>Log In</li>
              <li>Card</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Slice">
        <Slice />
      </div>
    </div>
  );
}
