'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFreeStyle = require('react-free-style');

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (styles, Component) {
  var Style = (0, _reactFreeStyle.create)();
  var globalStyles = {};

  function createStyles(styleProps) {
    return Object.keys(styleProps || {}).reduce(function (result, id) {
      // register global styles when id is "registerRule"
      if (id === ":global") {
        Object.keys(styleProps[id]).forEach(function (rule) {
          if (globalStyles[rule]) {
            // remove existing global styles
            var existing = Object.keys(Style._children).filter(function (childId) {
              return Style._children[childId].rule === rule;
            }).forEach(function (ruleId) {
              Style.remove(Style._children[ruleId]);
            });
          }
          // merge new global styles with existing styles
          globalStyles[rule] = _extends({}, globalStyles[rule], styleProps[id][rule]);
          Style.registerRule(rule, globalStyles[rule]);
        });
        return result;
      } else {
        return _extends({}, result, _defineProperty({}, id, Style.registerStyle(styleProps[id])));
      }
    }, {});
  }

  function concatenateClassnames(componentStyles) {
    var userStyles = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    return Object.keys(componentStyles).reduce(function (result, id) {
      return _extends({}, result, _defineProperty({}, id, [componentStyles[id], userStyles[id]].filter(Boolean).join(" ")));
    }, {});
  }

  var stylesProp = createStyles(styles);

  var StyledComponent = function (_React$Component) {
    _inherits(StyledComponent, _React$Component);

    function StyledComponent(props) {
      _classCallCheck(this, StyledComponent);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StyledComponent).call(this, props));

      _this.state = { userStyles: {} };
      return _this;
    }

    _createClass(StyledComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (this.props.styles) {
          this.setState({ userStyles: createStyles(this.props.styles) });
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.styles !== this.props.styles) {
          this.setState({ userStyles: createStyles(nextProps.styles) });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, {
          styles: concatenateClassnames(stylesProp, this.state.userStyles)
        }));
      }
    }]);

    return StyledComponent;
  }(_react2.default.Component);

  return (0, _hoistNonReactStatics2.default)(Style.component(StyledComponent), Component);
};