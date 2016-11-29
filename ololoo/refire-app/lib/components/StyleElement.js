'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ReactCurrentOwner = require('react/lib/ReactCurrentOwner');

var _ReactCurrentOwner2 = _interopRequireDefault(_ReactCurrentOwner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // TODO: copied from react-free-style for debugging, also copy ReactFreeStyle


var StyleElement = function (_Component) {
  _inherits(StyleElement, _Component);

  function StyleElement() {
    _classCallCheck(this, StyleElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StyleElement).call(this));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(StyleElement, [{
    key: 'onChange',
    value: function onChange() {
      if (_ReactCurrentOwner2.default.current != null) {
        console.warn('React Free Style: Inline styles can not be registered during `render`. If you want to register styles dynamically, you should use `componentWillMount` and `componentWillUnmount` to manage styles (remember to use `FreeStyle#get(id)` and `FreeStyle#remove(instance)` to remove styles after use)');
      }

      return this.forceUpdate();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.context.freeStyle.addChangeListener(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.context.freeStyle.removeChangeListener(this.onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.context.freeStyle.getStyles() } });
    }
  }]);

  return StyleElement;
}(_react.Component);

StyleElement.contextTypes = {
  freeStyle: _react2.default.PropTypes.object.isRequired
};

exports.default = StyleElement;