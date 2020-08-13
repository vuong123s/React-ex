import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { DataContext } from "../data";

export default class slice1 extends Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
  }
  render() {
    const { products } = this.context;
    let slice = [];
    for (let i = 0; i < 6; i++) {
      slice.push(products[i]);
    }

    return (
      <div className="element-slice1">
        <div className="content-slice1">
          <p className="p">Learn From The Best</p>
          <p>
            <em>
              Ask eat questions abilities described elsewhere assurance.
              Appetite in unlocked advanced breeding position concerns as.
              Cheerful get shutters yet for repeated screened. An no am cause
              hopes at three. Prevent behaved fertile he is mistake on.
            </em>
          </p>
        </div>
        <div className="all-img">
          <div className="all-img-slice1">
            {slice.map((item) => {
              return (
                <div className="img-slice1">
                  <Link to="/">
                    <img src={item.img} alt="Slice-Img" />
                  </Link>
                  <div className="hover-img-slice1">
                    <div className="hover-icon-slice1">
                      <Link to={`card/${item._id}`}>
                        <BsBag />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
