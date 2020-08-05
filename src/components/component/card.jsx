import React, { Component } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardGround from "./card-ground";
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

  outItem() {
    if (this.state.isDisplay === "block") {
      this.setState({
        isDisplay: "none",
      });
    }
  }

  render() {
    const { children } = this.props;
    const { data } = this.context;

    console.log(data);
    return (
      <>
        <div
          className="card-ground"
          onClick={() => this.outItem()}
          style={{ display: this.state.isDisplay }}
        >
          <CardGround data={data} />
        </div>

        {children.map((item) => {
          return (
            <div className="card-style" key={item._id}>
              <div className="Card">
                <div className="hover-card">
                  <img src={item.img} alt="Img" />

                  <div className="hover-img">
                    <BsEye
                      onClick={() => this.getData(item)}
                      className="see-icon"
                    />
                  </div>
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
