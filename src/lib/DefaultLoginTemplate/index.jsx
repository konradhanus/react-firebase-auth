import React, { Component } from "react";
import "./style.css";

class loginTemplate extends Component {

  constructor() {
    super();

    this.state = {
      login: "",
      password: "",
    };
  }

  onChangeValue(target, value) {
    this.setState({ [target]: value });
  }

  render() {
  return (
    <div className="rfa-default-login-template">
      <div className="rfa-default-login-template__title">Login</div>
      <div className="rfa-default-login-template__body">
        <div className="rfa-default-login-template__row">
          <div className="rfa-default-login-template__cell">
            <label>Login:</label>
          </div>
          <div className="rfa-default-login-template__cell">
            <input name="login" onChange={e => this.onChangeValue("login", e.target.value)} />
          </div>
        </div>
        <div className="rfa-default-login-template__row">
          <div className="rfa-default-login-template__cell">
            <label>Password:</label>
          </div>
          <div className="rfa-default-login-template__cell">
            <input name="password" type="password" onChange={e => this.onChangeValue("password", e.target.value)} />
          </div>
        </div>
        <div className="rfa-default-login-template__row">
          <div className="rfa-default-login-template__cell" />
          <button onClick={() => this.props.onLogin(this.state)}> Log In</button>
        </div>
        <div className="rfa-default-login-template__row">
            <div className="rfa-default-login-template__cell" />
            <div className="rfa-error-message">{this.props.onLogInErrorMessage}</div>
          </div>
      </div>
    </div>
  );}
};

export default loginTemplate;
