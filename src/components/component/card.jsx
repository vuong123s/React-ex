import React, { Component } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { DataContext } from "../data";

export default class card extends Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
  }
  state = {
    isDisplay: "none",
  };

  getData(i) {
    const { data } = this.context;
    data.push(i);
    if (this.state.isDisplay === "none") {
      this.setState({
        isDisplay: "block",
      });
    }
  }

  render() {
    const { children } = this.props;
    const {
      addCardProduct,
      getDataItemCart,
      outItem,
      isDisplay,
    } = this.context;
    return (
      <>
        {children.map((item) => {
          return (
            <div className="card-style">
              <div className="Card">
                <div className="hover-card">
                  <img src={item.img} alt="Img" />

                  <div className="hover-img">
                    <BsEye
                      className="see-icon"
                      onClick={() => getDataItemCart(item)}
                    />
                  </div>
                </div>
                <Link to={`/card/${item._id}`}>
                  <h6>{item.name}</h6>
                </Link>
                <Link to="/">
                  <p>{item.author}</p>
                </Link>
                <div className="price-book">
                  <span>£{item.price}.00</span>
                  <span>
                    <RiShoppingBagLine
                      onClick={() => addCardProduct(item._id)}
                      className="Icon-buy"
                    />
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
