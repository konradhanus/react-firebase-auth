import React, { Component } from "react";
import DefaultLoginTemplate from "./../DefaultLoginTemplate";
import DefaultSignInTemplate from "./../DefaultSignInTemplate";
import * as firebase from "firebase";

class Authentication extends Component {
  constructor(props) {
    super(props);

    firebase.initializeApp(this.props.firebaseConfig);
    const auth = firebase.auth();

    this.state = {
      auth: auth,
      onSignInErrorMessage: null,
      onLogInErrorMessage: null,
      firebaseUser: null
    };
  }
  componentDidMount() {
    this.state.auth.onAuthStateChanged(firebaseUser => {
      if(firebaseUser === null)
      {
        this.props.loggedOut();
      }else{
        this.props.loggedIn(firebaseUser);
      }
      this.setState({ firebaseUser });
    });
  }

  onLogin = data => {
    const promise = this.state.auth.signInWithEmailAndPassword(
      data.login,
      data.password
    );
    promise.catch(e => this.setState({ onLogInErrorMessage: e.message }));
  };

  onSignIn = data => {
    const promise = this.state.auth.createUserWithEmailAndPassword(
      data.login,
      data.password
    );
    promise.catch(e => this.setState({ onSignInErrorMessage: e.message }));
  };

  render() {

    return this.state.firebaseUser ? (
      <div>
        Cześć {this.state.firebaseUser.email}
        <button onClick={() => this.state.auth.signOut()}>Wyloguj</button>
      </div>
    ) : (
      <div className="Authentication">
        {this.props.loginTemplate ? (
          this.props.loginTemplate
        ) : (
          <DefaultLoginTemplate
            onLogin={this.onLogin}
            onLogInErrorMessage={this.state.onLogInErrorMessage}
          />
        )}
        {this.props.loginTemplate ? (
          this.props.loginTemplate
        ) : (
          <DefaultSignInTemplate
            onSignIn={this.onSignIn}
            onSignInErrorMessage={this.state.onSignInErrorMessage}
          />
        )}
      </div>
    );
  }
}

export default Authentication;
