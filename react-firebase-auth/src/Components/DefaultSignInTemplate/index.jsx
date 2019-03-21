import React from "react";
import "./style.css";
const signInTemplate = () => {
  return (
    <div className="rfa-default-sign-in-template">
    <div className="rfa-default-sign-in-template__title">SignIn</div>
      <div className="rfa-default-sign-in-template__body">
        <div className="rfa-default-sign-in-template__row">
          <div className="rfa-default-sign-in-template__cell">
            <label>Login</label>
          </div>
          <div className="rfa-default-sign-in-template__cell">
            <input name="login" />
          </div>
        </div>
        <div className="rfa-default-sign-in-template__row">
          <div className="rfa-default-sign-in-template__cell">
          <label>Password</label>
          </div>
          <div className="rfa-default-sign-in-template__cell">
          <input name="password" type="password" />
          </div>
        </div>
        <div className="rfa-default-sign-in-template__row">
          <div className="rfa-default-sign-in-template__cell">
          <label>RePassword</label>
          </div>
          <div className="rfa-default-sign-in-template__cell">
          <input name="rePassword" type="password" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default signInTemplate;
