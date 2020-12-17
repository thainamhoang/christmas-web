"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Colors = _interopRequireDefault(require("../constants/Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: "100%",
      textAlign: "center",
      justifyContent: "center",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(2)
    },
    footer: {
      color: _Colors.default.green_dark
    },
    line: {
      color: _Colors.default.green_dark,
      backgroundColor: _Colors.default.green_dark,
      height: 1
    }
  };
});
var Footer = /*#__PURE__*/(0, _react.memo)(function () {
  var footerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var _footerRef$current, _footerRef$current$ge;

    console.log(JSON.stringify(footerRef === null || footerRef === void 0 ? void 0 : (_footerRef$current = footerRef.current) === null || _footerRef$current === void 0 ? void 0 : (_footerRef$current$ge = _footerRef$current.getBoundingClientRect) === null || _footerRef$current$ge === void 0 ? void 0 : _footerRef$current$ge.call(_footerRef$current)));
  }, []);
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: classes.root,
    ref: footerRef
  }, /*#__PURE__*/_react.default.createElement("hr", {
    className: classes.line
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.footer,
    variant: "button",
    display: "block",
    gutterBottom: true
  }, "🎄 Made by Thai-Nam Hoang, with love 🎄"));
}, function (prev, next) {
  return _react.default.isEqual(prev, next);
});
var _default = Footer;
exports.default = _default;