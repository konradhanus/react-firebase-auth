import React from "react";
const loginTemplate = () => {
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
      </div>
    );
  };

  export default loginTemplate;