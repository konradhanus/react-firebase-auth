import React, { Component } from "react";
import "./style.css";
class signInTemplate extends Component {
  constructor() {
    super();

    this.state = {
      login: "",
      password: "",
      rePassword: ""
    };
  }

  onChangeValue(target, value) {
    this.setState({ [target]: value });
  }
  render() {
    return (
      <div className="rfa-default-sign-in-template">
        <div className="rfa-default-sign-in-template__title">SignIn</div>
        <div className="rfa-default-sign-in-template__body">
          <div className="rfa-default-sign-in-template__row">
            <div className="rfa-default-sign-in-template__cell">
              <label>Login</label>
            </div>
            <div className="rfa-default-sign-in-template__cell">
              <input
                name="login"
                onChange={e => this.onChangeValue("login", e.target.value)}
              />
            </div>
          </div>
          <div className="rfa-default-sign-in-template__row">
            <div className="rfa-default-sign-in-template__cell">
              <label>Password</label>
            </div>
            <div className="rfa-default-sign-in-template__cell">
              <input
                name="password"
                type="password"
                onChange={e => this.onChangeValue("password", e.target.value)}
              />
            </div>
          </div>
          <div className="rfa-default-sign-in-template__row">
            <div className="rfa-default-sign-in-template__cell">
              <label>RePassword</label>
            </div>
            <div className="rfa-default-sign-in-template__cell">
              <input
                name="rePassword"
                type="password"
                onChange={e => this.onChangeValue("rePassword", e.target.value)}
              />
            </div>
          </div>
          <div className="rfa-default-sign-in-template__row">
            <div className="rfa-default-sign-in-template__cell" />
            <button onClick={() => this.props.onSignIn(this.state)}>
              SignIn
            </button>
          </div>
          <div className="rfa-default-sign-in-template__row">
            <div className="rfa-default-sign-in-template__cell" />
            <div className="rfa-error-message">{this.props.onSignInErrorMessage}</div>
          </div>
        </div>
       
      </div>
    );
  }
}
export default signInTemplate;
