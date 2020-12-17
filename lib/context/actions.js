"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDHeight = void 0;

var _types = _interopRequireDefault(require("./types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDHeight = function setDHeight(_ref) {
  var dispatch = _ref.dispatch,
      payload = _ref.payload;
  return dispatch({
    type: _types.default.SET_DHEIGHT,
    payload: payload
  });
};

exports.setDHeight = setDHeight;