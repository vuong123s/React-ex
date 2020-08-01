import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function end() {
  return (
    <div className="end">
      <div className="end-homepage">
        <span className="end-homepage-style">
          Copyright © 2020 <Link to="/">Livre</Link>. Powered by{" "}
          <Link to="/">WordPress</Link> and <Link to="/">Livre</Link>.
        </span>
      </div>
    </div>
  );
}
