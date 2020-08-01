import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class card3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [
        {
          urlImg:
            "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/Feature-6-500x500.jpg",
          title: "Be an Artist in 100 Days",
          number: 3,
        },
        {
          urlImg:
            "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/Feature-7-500x500.jpg",
          title: "Music to My Ear",
          number: 1,
        },
        {
          urlImg:
            "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-5-500x500.jpg",
          title: "Sience Fiction Series",
          number: 3,
        },
      ],
    };
  }
  render() {
    const { card } = this.state;
    return (
      <div className="book-collection-style">
        {card.map((item) => {
          return (
            <div className="card3">
              <div className="card3-style">
                <div className="img-card3">
                  <img src={item.urlImg} alt="Card3" />
                </div>
                <div className="content-card3">
                  <div className="title">
                    <h2>
                      <Link to="/">{item.title}</Link>
                    </h2>
                  </div>
                  <div className="number">
                    <p>{item.number} Books</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
