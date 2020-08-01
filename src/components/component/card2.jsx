import React, { Component } from "react";

/* */
export default class card2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { color, className, title, content, icon } = this.props;
    return (
      <div className="style-all-card2">
        <div className={className}>
          <div className="style-element">
            <div className="icon-card2" style={{ color: color }}>
              {icon}
            </div>
            <div className="content-card2">
              <div className="content-title">{title}</div>
              <div className="content-content">{content}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
