import React from "react";
import ReactDOM from "react-dom";
import Authentication from "./Components/Authentication";
import * as serviceWorker from "./serviceWorker";

function success() {
  alert("Success");
}

function error() {
  alert("error");
}


const loginTemplate = undefined;
const signInTemplate = undefined;


ReactDOM.render(
  <Authentication
    loginTemplate={loginTemplate}
    signInTemplate={signInTemplate}
    facebookSettings="facebookSettings"
    firebaseSettings="firebaseSettings"
    onSuccess={success}
    onError={error}
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
