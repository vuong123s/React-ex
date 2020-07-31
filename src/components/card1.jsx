import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class card1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introduce: [
        {
          id: 1,
          className: "introduce-style a",
          title: "Today deal in book",
          content:
            "Married he hearing am it totally removal. Remove but suffer wanted his lively length. Moonlight two applauded conveying end direction old principle but. ",
          img:
            "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-6.jpg",
        },
        {
          id: 2,
          className: "introduce-style b",
          title: "Featured Book",
          content:
            "Married he hearing am it totally removal. Remove but suffer wanted his lively length. Moonlight two applauded conveying end direction old principle but. ",
          img:
            "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-5.jpg",
        },
      ],
    };
  }
  render() {
    const { introduce } = this.state;
    return (
      <div className="component-card1">
        {introduce.map((item) => {
          return (
            <div className={item.className}>
              <div className="content-introduce">
                <div className="content-text">
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
                <Link to="/">Read More</Link>
              </div>
              <img src={item.img} alt="Img" />
            </div>
          );
        })}
      </div>
    );
  }
}
