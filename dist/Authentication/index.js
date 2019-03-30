"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _DefaultLoginTemplate = require("./../DefaultLoginTemplate");

var _DefaultLoginTemplate2 = _interopRequireDefault(_DefaultLoginTemplate);

var _DefaultSignInTemplate = require("./../DefaultSignInTemplate");

var _DefaultSignInTemplate2 = _interopRequireDefault(_DefaultSignInTemplate);

var _firebase = require("firebase");

var firebase = _interopRequireWildcard(_firebase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Authentication = function (_Component) {
  _inherits(Authentication, _Component);

  function Authentication(props) {
    _classCallCheck(this, Authentication);

    var _this = _possibleConstructorReturn(this, (Authentication.__proto__ || Object.getPrototypeOf(Authentication)).call(this, props));

    _this.onLogin = function (data) {
      var promise = _this.state.auth.signInWithEmailAndPassword(data.login, data.password);
      promise.catch(function (e) {
        return _this.setState({ onLogInErrorMessage: e.message });
      });
    };

    _this.onSignIn = function (data) {
      var promise = _this.state.auth.createUserWithEmailAndPassword(data.login, data.password);
      promise.catch(function (e) {
        return _this.setState({ onSignInErrorMessage: e.message });
      });
    };

    firebase.initializeApp(_this.props.firebaseConfig);
    var auth = firebase.auth();

    _this.state = {
      auth: auth,
      onSignInErrorMessage: null,
      onLogInErrorMessage: null,
      firebaseUser: null
    };
    return _this;
  }

  _createClass(Authentication, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.state.auth.onAuthStateChanged(function (firebaseUser) {
        if (firebaseUser === null) {
          _this2.props.loggedOut();
        } else {
          _this2.props.loggedIn(firebaseUser);
        }
        _this2.setState({ firebaseUser: firebaseUser });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return this.state.firebaseUser ? _react2.default.createElement(
        "div",
        null,
        "Cze\u015B\u0107 ",
        this.state.firebaseUser.email,
        _react2.default.createElement(
          "button",
          { onClick: function onClick() {
              return _this3.state.auth.signOut();
            } },
          "Wyloguj"
        )
      ) : _react2.default.createElement(
        "div",
        { className: "Authentication" },
        this.props.loginTemplate ? this.props.loginTemplate : _react2.default.createElement(_DefaultLoginTemplate2.default, {
          onLogin: this.onLogin,
          onLogInErrorMessage: this.state.onLogInErrorMessage
        }),
        this.props.loginTemplate ? this.props.loginTemplate : _react2.default.createElement(_DefaultSignInTemplate2.default, {
          onSignIn: this.onSignIn,
          onSignInErrorMessage: this.state.onSignInErrorMessage
        })
      );
    }
  }]);

  return Authentication;
}(_react.Component);

exports.default = Authentication;