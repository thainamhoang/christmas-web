"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActionArea = _interopRequireDefault(require("@material-ui/core/CardActionArea"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _textInfo = _interopRequireDefault(require("@mui-treasury/components/content/textInfo"));

var _fourThree = require("@mui-treasury/styles/cardMedia/fourThree");

var _n = require("@mui-treasury/styles/textInfoContent/n04");

var _over = require("@mui-treasury/styles/shadow/over");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      margin: "auto",
      borderRadius: 16,
      padding: theme.spacing(3)
    },
    actionArea: {
      margin: "auto",
      borderRadius: 16,
      transition: "0.3s",
      "&:hover": {
        // transform: "scale(1.025)",
        transform: "translateY(-10px)"
      },
      WebkitBoxShadow: "5px 5px 20px 5px rgba(0,0,0,0.2)"
    },
    media: {
      borderRadius: 16
    }
  };
});
var CustomCard = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var _ref$url = _ref.url,
      url = _ref$url === void 0 ? "" : _ref$url,
      source = _ref.source,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? {} : _ref$content,
      _ref$stylesAction = _ref.stylesAction,
      stylesAction = _ref$stylesAction === void 0 ? {} : _ref$stylesAction,
      _ref$stylesCard = _ref.stylesCard,
      stylesCard = _ref$stylesCard === void 0 ? {} : _ref$stylesCard;
  var styles = useStyles();
  var mediaStyles = (0, _fourThree.useFourThreeCardMediaStyles)();
  var textCardContentStyles = (0, _n.useN04TextInfoContentStyles)();
  var shadowStyles = (0, _over.useOverShadowStyles)({
    inactive: true
  });
  var overline = content.overline,
      heading = content.heading,
      body = content.body;

  var _onClick = function onClick() {
    if (url !== "") {
      window.open(url, "_blank");
    }
  };

  return /*#__PURE__*/_react.default.createElement(_CardActionArea.default, {
    className: styles.actionArea,
    onClick: function onClick() {
      return _onClick === null || _onClick === void 0 ? void 0 : _onClick();
    },
    style: stylesAction
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: (0, _clsx.default)(styles.root, shadowStyles.root),
    style: stylesCard
  }, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    className: (0, _clsx.default)(mediaStyles.root, styles.media),
    image: source
  }), /*#__PURE__*/_react.default.createElement(_CardContent.default, null, /*#__PURE__*/_react.default.createElement(_textInfo.default, {
    classes: textCardContentStyles,
    overline: overline,
    heading: heading,
    body: body
  }))));
});
var _default = CustomCard;
exports.default = _default;