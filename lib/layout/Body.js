"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _CustomCard = _interopRequireDefault(require("../components/CustomCard"));

var _images = _interopRequireDefault(require("../assets/images"));

var _url = _interopRequireDefault(require("../assets/url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    grid: {
      paddingRight: theme.spacing(15),
      paddingLeft: theme.spacing(15),
      paddingTop: theme.spacing(15)
    },
    item: {
      justifyContent: "center"
    }
  };
});
var Body = /*#__PURE__*/(0, _react.memo)(function () {
  var styles = useStyles();
  var contentAB = {
    overline: "AIRBNB",
    heading: "Scandi Shelter",
    body: "That year, collection of songs, review melodies, memories full, this is a long and warm journey"
  };
  var contentST = {
    overline: "GAME",
    heading: "Santa Tracker",
    body: "That year, collection of songs, review melodies, memories full, this is a long and warm journey"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: styles.root
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    className: styles.grid,
    container: true,
    spacing: 10
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 6,
    className: styles.item
  }, /*#__PURE__*/_react.default.createElement(_CustomCard.default, {
    url: _url.default.airbnb,
    source: _images.default.airbnb,
    content: contentAB,
    stylesAction: {
      maxWidth: 650
    },
    stylesCard: {
      maxWidth: 650
    }
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 6,
    className: styles.item
  }, /*#__PURE__*/_react.default.createElement(_CustomCard.default, {
    url: _url.default.santa_tracker,
    source: _images.default.santa_tracker,
    content: contentST,
    stylesAction: {
      maxWidth: 650
    },
    stylesCard: {
      maxWidth: 650
    }
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 6,
    className: styles.item
  }, /*#__PURE__*/_react.default.createElement(_CustomCard.default, {
    url: _url.default.santa_tracker,
    source: _images.default.santa_tracker,
    content: contentST,
    stylesAction: {
      maxWidth: 650
    },
    stylesCard: {
      maxWidth: 650
    }
  })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 6,
    className: styles.item
  }, /*#__PURE__*/_react.default.createElement(_CustomCard.default, {
    url: _url.default.airbnb,
    source: _images.default.airbnb,
    content: contentAB,
    stylesAction: {
      maxWidth: 650
    },
    stylesCard: {
      maxWidth: 650
    }
  }))));
}, function (prev, next) {
  return _react.default.isEqual(prev, next);
});
var _default = Body;
exports.default = _default;