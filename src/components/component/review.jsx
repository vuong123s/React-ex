import React, { useState } from "react";
import { GoStar } from "react-icons/go";
import { BsPersonSquare } from "react-icons/bs";
import StarRatingComponent from "react-star-rating-component";
import { DataContext } from "../data";
import Cookie from "js-cookie";

export default class Review extends React.Component {
  state = {
    rating: null,
    value: "",
    userText: "",
    passText: "",
    errCatch: "",
  };

  static contextType = DataContext;

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  addLocal() {
    const { rating, value } = this.state;
    const { id } = this.props;
    const { Reload, onClickBlock } = this.context;
    const a = Cookie.get("username");
    if (a) {
      if (rating !== null) {
        let a = {
          id: id,
          rating: rating,
          value: value,
        };
        const b = JSON.parse(localStorage.getItem("dataComment"));
        let c;
        if (b === null) {
          c = [];
        } else {
          c = b;
        }
        c.push(a);
        localStorage.setItem("dataComment", JSON.stringify(c));
        Reload();
      }
    } else {
      onClickBlock();
    }
  }

  render() {
    const { i } = this.props;
    const { value } = this.state;
    const a = JSON.parse(Cookie.get("username"));

    return (
      <div className="review">
        <div className="review-text">
          <div className="text-left-review">
            <h2>Reviews</h2>
            {i.review.map((x) => {
              return (
                <div className="user-comment">
                  <BsPersonSquare size={50} />
                  <h5>{a.userName}</h5>
                  <StarRatingComponent starColor="#eb8367" value={x.rating} />
                  <p>{x.value}</p>
                </div>
              );
            })}
            <h2>Be the first to review “{i.name}”</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div className="text-right-review">
            <h2>Editorial Review</h2>
            <p>
              Was drawing natural fat respect husband. An as noisy an offer
              drawn blush place. These tried for way joy wrote witty. In mr
              began music weeks after at begin. Education no dejection so
              direction pretended household do to. Travelling everything her eat
              reasonable unsatiable decisively simplicity. Morning request be
              lasting it fortune demands highest of.
            </p>
          </div>
        </div>
        <div className="comment-review">
          <div className="add-review">
            <h2>Add a review</h2>
            <div className="add-review-component">
              <p>Your Rating</p>
              <div className="all-star">
                <StarRatingComponent
                  starColor="#eb8367"
                  onStarClick={this.onStarClick.bind(this)}
                  value={this.state.rating}
                />
              </div>
            </div>
            <div className="textarea-review">
              <p>Your Review *</p>
              <textarea
                name=""
                id=""
                cols="60"
                rows="10"
                value={value}
                onChange={this.handleChange.bind(this)}
              ></textarea>
            </div>

            <button
              onClick={this.addLocal.bind(this)}
              className="summit-button"
            >
              Add Review
            </button>
          </div>
        </div>
      </div>
    );
  }
}
