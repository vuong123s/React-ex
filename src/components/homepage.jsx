/* React */
import React from "react";
import Slice from "./slice";
import ComponentHeader from "./component-header";
import Card from "./card";
/* CSS */
import "../css/header.css";
import "../css/bootstrap-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/card.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="Component">
        <div className="style-header">
          <ComponentHeader />
        </div>
        <div className="Slice">
          <Slice />
        </div>
      </div>
      <div className="Card-Style"></div>
    </div>
  );
}
