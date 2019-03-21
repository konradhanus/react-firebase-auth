import React from "react";
const signInTemplate = () => {
    return (
      <div>
        <div>
          <label>Login</label>
          <input name="login" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <div>
          <label>RePassword</label>
          <input name="rePassword" type="password" />
        </div>
      </div>
    );
  };
  export default signInTemplate;
  