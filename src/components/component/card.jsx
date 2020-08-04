import React, { Component } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardGround from "./card-ground";

export default class card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <>
        {children.map((item) => {
          return (
            <div className="card-style">
              <div className="Card">
                <div className="hover-card">
                  <img src={item.img} alt="Img" />
                  <Link to="/">
                    <label id="get-data-card" className="hover-img">
                      <BsEye className="see-icon" />
                    </label>
                  </Link>
                </div>
                <Link to="/">
                  <h6>{item.name}</h6>
                </Link>
                <Link to="/">
                  <p>{item.author}</p>
                </Link>
                <div className="price-book">
                  <span>${item.price}</span>
                  <span>
                    <RiShoppingBagLine className="Icon-buy" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
