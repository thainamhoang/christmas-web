"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _NowPlaying = _interopRequireDefault(require("../components/NowPlaying"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    gridContainer: {
      paddingRight: theme.spacing(15),
      paddingLeft: theme.spacing(15),
      paddingTop: theme.spacing(15)
    },
    nowPlaying: {
      height: 120,
      flexDirection: "row",
      padding: theme.spacing(0)
    }
  };
});
var Header = /*#__PURE__*/(0, _react.memo)(function () {
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    className: classes.gridContainer,
    container: true,
    spacing: 3
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 7
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h3",
    gutterBottom: true
  }, "IT'S THE CHRISTMAS SEASON"), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h3",
    gutterBottom: true
  }, "OF THE YEAR!")), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 1
  }), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react.default.createElement(_NowPlaying.default, null))));
}, function (prev, next) {
  return _react.default.isEqual(prev, next);
});
var _default = Header;
exports.default = _default;