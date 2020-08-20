import React, { Component } from "react";
import ComponentMenu from "./component/component-menu";
import ComponentHeader from "./component/component-header";
import PageLogIn from "./component/pageLogIn";
import BackGround from "./component/background";

export default class PageSign extends Component {
  render() {
    return (
      <div>
        <PageLogIn />
        <ComponentHeader />
        <ComponentMenu />
        <BackGround title="Sign" />
      </div>
    );
  }
}
