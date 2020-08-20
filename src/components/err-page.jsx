import React from "react";
import ComponentHeader from "./component/component-header";
import ErrComponent from "./component/err-component";
import ComponentMenu from "./component/component-menu";
import End from "./component/end";
import PageLogIn from "./component/pageLogIn";

export default function Errpage() {
  return (
    <>
      <PageLogIn />
      <div className="err-page">
        <ComponentHeader />
        <ComponentMenu />
        <div className="background-404">
          <ErrComponent />
        </div>
        <End />
      </div>
    </>
  );
}
