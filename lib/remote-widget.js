"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RemoteWidget = void 0;
exports.render = render;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var RemoteWidget = function RemoteWidget() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Hello from Remote Widget.");
};
exports.RemoteWidget = RemoteWidget;
function render(container) {
  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(RemoteWidget, null), container);
}
var _default = RemoteWidget;
exports["default"] = _default;