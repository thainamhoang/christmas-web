"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "StateProvider", {
  enumerable: true,
  get: function get() {
    return _useHookKits.StateProvider;
  }
});
Object.defineProperty(exports, "useSelector", {
  enumerable: true,
  get: function get() {
    return _useHookKits.useSelector;
  }
});
Object.defineProperty(exports, "useDispatch", {
  enumerable: true,
  get: function get() {
    return _useHookKits.useDispatch;
  }
});
exports.actions = exports.keySelector = exports.Stores = void 0;

var _react = _interopRequireDefault(require("react"));

var _useHookKits = require("use-hook-kits");

var _stores = _interopRequireDefault(require("./stores"));

var _reducers = _interopRequireDefault(require("./reducers"));

var actions = _interopRequireWildcard(require("./actions"));

exports.actions = actions;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keySelector = {
  dHeight: "dHeight"
};
exports.keySelector = keySelector;

var Stores = function Stores(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_useHookKits.StateProvider, {
    reducer: _reducers.default,
    stores: _stores.default
  }, children);
};

exports.Stores = Stores;