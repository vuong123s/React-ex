import React from "react";
import ComponentHeader from "./component/component-header";
import ErrComponent from "./component/err-component";
import End from "./component/end";

export default function Errpage() {
  return (
    <div className="err-page">
      <ComponentHeader />
      <div className="background-404">
        <ErrComponent />
      </div>
      <End />
    </div>
  );
}
