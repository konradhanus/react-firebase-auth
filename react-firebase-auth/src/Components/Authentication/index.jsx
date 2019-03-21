import React, { Component } from "react";
import DefaultLoginTemplate from './../DefaultLoginTemplate';
import DefaultSignInTemplate from './../DefaultSignInTemplate';

class Authentication extends Component {

  render() {
    return (
      <div className="Authentication">
        {this.props.loginTemplate ? this.props.loginTemplate: <DefaultLoginTemplate />}
        {this.props.loginTemplate ? this.props.loginTemplate: <DefaultSignInTemplate />}
      </div>
    );
  }
}

export default Authentication;
