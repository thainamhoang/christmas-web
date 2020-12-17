"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _SkipPrevious = _interopRequireDefault(require("@material-ui/icons/SkipPrevious"));

var _PlayArrow = _interopRequireDefault(require("@material-ui/icons/PlayArrow"));

var _SkipNext = _interopRequireDefault(require("@material-ui/icons/SkipNext"));

var _Colors = _interopRequireDefault(require("../constants/Colors"));

var _images = _interopRequireDefault(require("../assets/images"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: "flex",
      backgroundColor: _Colors.default.green_middle,
      justifyContent: "space-between"
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto"
    },
    cover: {
      width: 160
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 38,
      width: 38
    }
  };
});
var NowPlaying = /*#__PURE__*/(0, _react.memo)(function () {
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.details
  }, /*#__PURE__*/_react.default.createElement(_CardContent.default, {
    className: classes.content
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "h5",
    variant: "h5",
    style: {
      color: "white"
    }
  }, "Live From Space"), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "subtitle1",
    color: "textSecondary",
    style: {
      color: "white"
    }
  }, "Mac Miller")), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.controls
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "previous"
  }, theme.direction === "rtl" ? /*#__PURE__*/_react.default.createElement(_SkipNext.default, null) : /*#__PURE__*/_react.default.createElement(_SkipPrevious.default, null)), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "play/pause"
  }, /*#__PURE__*/_react.default.createElement(_PlayArrow.default, {
    className: classes.playIcon
  })), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "next"
  }, theme.direction === "rtl" ? /*#__PURE__*/_react.default.createElement(_SkipPrevious.default, null) : /*#__PURE__*/_react.default.createElement(_SkipNext.default, null)))), /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    className: classes.cover,
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
  }));
}, function (prev, next) {
  return _react.default.isEqual(prev, next);
});
var _default = NowPlaying;
exports.default = _default;