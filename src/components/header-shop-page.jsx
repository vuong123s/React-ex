import React from "react";
import ComponentHeader from "./component-header.jsx";
import Background from "./background";

function headerShopPage() {
  return (
    <div>
      <div className="style-header">
        <ComponentHeader />
        <Background />
      </div>
    </div>
  );
}

export default headerShopPage;
