import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../css/component-menu.css";
import { FiLock } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

export default class ComponentMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.Reload = this.Reload.bind();
  }
  state = {
    value: "",
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  Reload = () => {
    setTimeout(() => window.location.reload(), 100);
  };

  render() {
    return (
      <div>
        <input type="checkbox" id="check" />
        <div className="component-menu">
          <div className="search-media-bar">
            <input
              type="text"
              placeholder="Search"
              onChange={this.handleChange}
            />
            <Link
              to={`/search/?filter=${this.state.value}`}
              className="bar-menu-search"
            >
              <BsSearch className="icon-media" onClick={this.Reload} />
            </Link>
          </div>

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
              <input
                type="text"
                placeholder="Search"
                className="delete"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
