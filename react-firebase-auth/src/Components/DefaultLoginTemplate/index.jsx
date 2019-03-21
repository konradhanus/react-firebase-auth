import React from "react";
import "./style.css";
const loginTemplate = () => {
  return (
    <div className="rfa-default-login-template">
      <div className="rfa-default-login-template__title">Login</div>
      <div className="rfa-default-login-template__body">
        <div className="rfa-default-login-template__row">
          <div className="rfa-default-login-template__cell">
            <label>Login:</label>
          </div>
          <div className="rfa-default-login-template__cell">
            <input name="login" />
          </div>
        </div>
        <div className="rfa-default-login-template__row">
          <div className="rfa-default-login-template__cell">
            <label>Password:</label>
          </div>
          <div className="rfa-default-login-template__cell">
            <input name="password" type="password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginTemplate;
