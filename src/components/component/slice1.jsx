import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

export default class slice1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSlice: [
        "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_019.jpg",
        "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/book_025.png",
        "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_015.jpg",
        "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_016.jpg",
        "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/05/book-3.jpg",
        "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/05/book-4.jpg",
      ],
    };
  }
  render() {
    const { imgSlice } = this.state;
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
            {imgSlice.map((item) => {
              return (
                <div className="img-slice1">
                  <Link to="/">
                    <img src={item} alt="Slice-Img" />
                  </Link>
                  <div className="hover-img-slice1">
                    <div className="hover-icon-slice1">
                      <Link to="">
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
