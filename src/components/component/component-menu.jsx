import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../css/component-menu.css";
import { FiLock } from "react-icons/fi";

export default function ComponentMenu() {
  return (
    <div>
      <input type="checkbox" id="check" />
      <div className="component-menu">
        <input type="text" placeholder="Search" />
        <div className="menu-list">
          <ul className="ul-list">
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
            <li>
              <Link to="/">
                <FiLock className="lock-icon" />
                Log In
              </Link>
            </li>
            <input type="text" placeholder="Search" className="delete" />
          </ul>
        </div>
      </div>
    </div>
  );
}
