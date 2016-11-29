'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var TiCameraOutline = function (_React$Component) {
    _inherits(TiCameraOutline, _React$Component);

    function TiCameraOutline() {
        _classCallCheck(this, TiCameraOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiCameraOutline).apply(this, arguments));
    }

    _createClass(TiCameraOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.666666666666668 33.333333333333336h-23.333333333333336c-2.756666666666665 0-4.999999999999998-2.2433333333333323-4.999999999999998-5v-13.333333333333336c0-2.7566666666666677 2.243333333333334-5 5-5h2.6433333333333326l1.666666666666666-1.666666666666666c0.9666666666666668-0.9666666666666668 2.66-1.666666666666667 4.023333333333332-1.666666666666667h6.666666666666668c1.3633333333333333 0 3.0583333333333336 0.7000000000000002 4.023333333333333 1.666666666666667l1.6666666666666679 1.666666666666666h2.6433333333333344c2.756666666666664 0 5.0000000000000036 2.243333333333334 5.0000000000000036 5v13.333333333333336c0 2.7566666666666677-2.2433333333333323 5-5 5z m-23.333333333333336-20c-0.9199999999999982-1.7763568394002505e-15-1.6666666666666652 0.7466666666666644-1.6666666666666652 1.6666666666666643v13.333333333333336c0 0.9200000000000017 0.746666666666667 1.6666666666666679 1.666666666666667 1.6666666666666679h23.333333333333336c0.9200000000000017 0 1.6666666666666643-0.7466666666666661 1.6666666666666643-1.6666666666666679v-13.333333333333336c0-0.9199999999999999-0.7466666666666697-1.666666666666666-1.6666666666666679-1.666666666666666h-3.333333333333332c-0.44333333333333513 0-0.8666666666666671-0.1750000000000007-1.1783333333333346-0.4883333333333333l-2.155000000000001-2.155000000000001c-0.33333333333333215-0.3333333333333339-1.1916666666666664-0.6899999999999995-1.6666666666666679-0.6899999999999995h-6.666666666666668c-0.4750000000000014 0-1.333333333333334 0.3550000000000004-1.666666666666666 0.6899999999999995l-2.1549999999999976 2.155000000000001c-0.3116666666666674 0.3133333333333326-0.7333333333333325 0.4883333333333333-1.1783333333333328 0.4883333333333333h-3.333333333333334z m11.666666666666668 3.333333333333332c2.3000000000000007 0 4.166666666666668 1.8666666666666671 4.166666666666668 4.166666666666668s-1.8666666666666671 4.166666666666664-4.166666666666668 4.166666666666664-4.166666666666668-1.8666666666666671-4.166666666666668-4.166666666666668 1.8666666666666671-4.166666666666664 4.166666666666668-4.166666666666664z m0-1.666666666666666c-3.2233333333333327 0-5.833333333333334 2.610000000000001-5.833333333333334 5.833333333333334 0 3.219999999999999 2.610000000000001 5.833333333333336 5.833333333333334 5.833333333333336s5.833333333333336-2.6133333333333333 5.833333333333336-5.833333333333336c0-3.2233333333333327-2.6099999999999994-5.833333333333334-5.833333333333336-5.833333333333334z m10-0.5000000000000018c-1.1999999999999993 0-2.166666666666668 0.9666666666666668-2.166666666666668 2.166666666666668s0.966666666666665 2.166666666666668 2.166666666666668 2.166666666666668 2.1666666666666643-0.966666666666665 2.1666666666666643-2.166666666666668-0.966666666666665-2.166666666666668-2.166666666666668-2.166666666666668z' })
                )
            );
        }
    }]);

    return TiCameraOutline;
}(React.Component);

exports.default = TiCameraOutline;
module.exports = exports['default'];