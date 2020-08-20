import React, { Component } from "react";
import { TiDeleteOutline, TiDelete } from "react-icons/ti";
import { DataContext } from "../data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class PageLogIn extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.handChangeUser = this.handChangeUser.bind(this);
    this.handChangePass = this.handChangePass.bind(this);
  }

  state = {
    userName: "",
    passWord: "",
  };

  handChangeUser = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handChangePass = (event) => {
    this.setState({
      passWord: event.target.value,
    });
  };

  checkLogIn = () => {
    const { userLogin, Reload } = this.context;
    const { userName, passWord } = this.state;
    const a = userLogin[0].loginData.filter((i) => {
      return (i.pass === passWord) & (i.user === userName);
    });
    if (a.length === 1) {
      Reload();
    } else {
      alert("Xin hay dang nhap lai");
    }
  };

  render() {
    const { isDisplayComponent, onClickNone, Reload } = this.context;
    return (
      <div className="page-log-in" style={{ display: isDisplayComponent }}>
        <div className="log-in-tap">
          <div className="login-tap-form">
            <div className="login-form">
              <div className="form-content">
                <span className="span-line" onClick={() => onClickNone()}>
                  <TiDelete size={70} className="icon-return" />
                </span>

                <h3>Great to have you back</h3>
                <div className="user-tap">
                  <p>Username or email address *</p>
                  <input
                    type="text"
                    placeholder="Your Username/Email"
                    className="input-login-tap"
                    value={this.state.userName}
                    onChange={this.handChangeUser}
                  />
                </div>
                <div className="password-tap">
                  <p>Password *</p>
                  <input
                    type="text"
                    placeholder="Your Password"
                    className="input-login-tap"
                    value={this.state.passWord}
                    onChange={this.handChangePass}
                  />
                </div>
                <div className="element-Data">
                  <div className="check-box">
                    <input type="checkbox" name="checkData" id="checkData" />
                    <p>Remember me</p>
                  </div>
                  <button
                    className="add-product x1"
                    onClick={() => this.checkLogIn()}
                  >
                    Login
                  </button>
                </div>
                <Link to="/sign" onClick={() => Reload()}>
                  Sign In
                </Link>
                <span className="lost-pass">Lost your password?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
