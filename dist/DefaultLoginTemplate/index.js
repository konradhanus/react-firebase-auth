"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var loginTemplate = function (_Component) {
  _inherits(loginTemplate, _Component);

  function loginTemplate() {
    _classCallCheck(this, loginTemplate);

    var _this = _possibleConstructorReturn(this, (loginTemplate.__proto__ || Object.getPrototypeOf(loginTemplate)).call(this));

    _this.state = {
      login: "",
      password: ""
    };
    return _this;
  }

  _createClass(loginTemplate, [{
    key: "onChangeValue",
    value: function onChangeValue(target, value) {
      this.setState(_defineProperty({}, target, value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "rfa-default-login-template" },
        _react2.default.createElement(
          "div",
          { className: "rfa-default-login-template__title" },
          "Login"
        ),
        _react2.default.createElement(
          "div",
          { className: "rfa-default-login-template__body" },
          _react2.default.createElement(
            "div",
            { className: "rfa-default-login-template__row" },
            _react2.default.createElement(
              "div",
              { className: "rfa-default-login-template__cell" },
              _react2.default.createElement(
                "label",
                null,
                "!Login:"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "rfa-default-login-template__cell" },
              _react2.default.createElement("input", { name: "login", onChange: function onChange(e) {
                  return _this2.onChangeValue("login", e.target.value);
                } })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "rfa-default-login-template__row" },
            _react2.default.createElement(
              "div",
              { className: "rfa-default-login-template__cell" },
              _react2.default.createElement(
                "label",
                null,
                "Password:"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "rfa-default-login-template__cell" },
              _react2.default.createElement("input", { name: "password", type: "password", onChange: function onChange(e) {
                  return _this2.onChangeValue("password", e.target.value);
                } })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "rfa-default-login-template__row" },
            _react2.default.createElement("div", { className: "rfa-default-login-template__cell" }),
            _react2.default.createElement(
              "button",
              { onClick: function onClick() {
                  return _this2.props.onLogin(_this2.state);
                } },
              " Log In"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "rfa-default-login-template__row" },
            _react2.default.createElement("div", { className: "rfa-default-login-template__cell" }),
            _react2.default.createElement(
              "div",
              { className: "rfa-error-message" },
              this.props.onLogInErrorMessage
            )
          )
        )
      );
    }
  }]);

  return loginTemplate;
}(_react.Component);

;

exports.default = loginTemplate;