"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalTest;
var _react = _interopRequireDefault(require("react"));
require("./ModalLibAA.css");
function ModalTest(_ref) {
  var setOpenModal = _ref.setOpenModal,
    modalStyle = _ref.modalStyle,
    messageStyle = _ref.messageStyle,
    message = _ref.message,
    closeModalStyle = _ref.closeModalStyle;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    style: modalStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: messageStyle
  }, message), /*#__PURE__*/_react.default.createElement("button", {
    className: "close-modal",
    style: closeModalStyle,
    onClick: function onClick() {
      return setOpenModal(false);
    }
  }, "\u2716")))));
}