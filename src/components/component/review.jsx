import React, { useState } from "react";
import { GoStar } from "react-icons/go";
import StarRatingComponent from "react-star-rating-component";

export default function Review(props) {
  const { i } = props;
  return (
    <div className="review">
      <div className="review-text">
        <div className="text-left-review">
          <h2>Reviews</h2>
          <p>There are no reviews yet.</p>
          <h2>Be the first to review “{i.name}”</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <div className="text-right-review">
          <h2>Editorial Review</h2>
          <p>
            Was drawing natural fat respect husband. An as noisy an offer drawn
            blush place. These tried for way joy wrote witty. In mr began music
            weeks after at begin. Education no dejection so direction pretended
            household do to. Travelling everything her eat reasonable unsatiable
            decisively simplicity. Morning request be lasting it fortune demands
            highest of.
          </p>
        </div>
      </div>
      <div className="comment-review">
        <div className="add-review">
          <h2>Add a review</h2>
          <div className="add-review-component">
            <p>Your Rating</p>
            <div className="all-star">
              <StarRatingComponent starColor="#eb8367" />
            </div>
          </div>
          <div className="textarea-review">
            <p>Your Review *</p>
            <textarea name="" id="" cols="60" rows="10"></textarea>
          </div>

          <div className="check-save">
            <input type="checkbox" name="" id="" />
            <p>
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>

          <div className="summit-button">Add Review</div>
        </div>
      </div>
    </div>
  );
}
