/* React */
import React from "react";
import Slice from "./slice";
import ComponentHeader from "./component-header";
/* CSS */
import "../css/header.css";
import "../css/bootstrap-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
/*
  
*/
export default function Header() {
  return (
    <div className="Component">
      <div className="style-header">
        <ComponentHeader />
      </div>
      <div className="Slice">
        <Slice />
      </div>
    </div>
  );
}
