import React from "react";
import ComponentHeader from "./component/component-header.jsx";
import Background from "./component/background";
import "../css/delete-err.css";

function ProductPage() {
  return (
    <div>
      <div className="style-header">
        <ComponentHeader />
        <Background />
      </div>
    </div>
  );
}

export default ProductPage;
