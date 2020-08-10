import React from "react";
import { render } from "@testing-library/react";

export default class CardAnimation extends React.Component {
  render() {
    const { img } = this.props;
    return (
      <div className="card-animation">
        <div className="card-animation-img">
          <div className="card-animation-img-style">
            <div className="book-page card-animation-img-start">
              <img src={img} alt="" />
            </div>
            <div className="book-page card-animation-page-1"></div>
            <div className="book-page card-animation-page-2">
              <div className="book-page card-animation-page-side-paper"></div>
            </div>

            <div className="book-page card-animation-img-end">
              <img
                src="https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_002_1-300x463.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
