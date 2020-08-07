import React from "react";
import "../../css/imgBackgroundStyle.css";

export default function Background(props) {
  const { title } = props;
  return (
    <div className="background-style">
      <h5>WORDPRESS THEME</h5>
      <h1>LIVRE</h1>
      <h2>{title}</h2>
    </div>
  );
}
