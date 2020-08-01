import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function card4() {
  return (
    <div className="card4">
      <div className="card4-style">
        <div className="card4-title">
          <div className="card4-text">
            <p>
              <b>Stay In Touch</b>
              <br />
              with Our Updates
            </p>
          </div>
        </div>
        <div className="card4-content">
          <div className="card4-form">
            <form action="" className="email-bar-form">
              <div className="style-form">
                <input
                  type="text"
                  name="EMAIL"
                  placeholder="Your email address"
                  className="email-bar"
                  required
                />
                <input type="submit" value="Sign up" className="email-submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
