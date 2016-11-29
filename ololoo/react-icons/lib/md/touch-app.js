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

var MdTouchApp = function (_React$Component) {
    _inherits(MdTouchApp, _React$Component);

    function MdTouchApp() {
        _classCallCheck(this, MdTouchApp);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdTouchApp).apply(this, arguments));
    }

    _createClass(MdTouchApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.40666666666667 26.483333333333334q1.4833333333333307 0.7049999999999983 1.4833333333333307 2.2666666666666657v0.3133333333333326l-1.25 8.828333333333333q-0.07666666666666799 0.9383333333333326-0.7800000000000011 1.5233333333333334t-1.6400000000000006 0.5833333333333357h-11.328333333333333q-1.0166666666666657 0-1.7166666666666686-0.7000000000000028l-8.283333333333333-8.283333333333331 1.3283333333333331-1.3283333333333331q0.5466666666666669-0.5466666666666669 1.3283333333333331-0.5466666666666669 0.07666666666666622 0 0.19333333333333336 0.038333333333333997t0.19500000000000028 0.038333333333333997l5.703333333333333 1.173333333333332v-17.89q0-1.0933333333333337 0.7416666666666671-1.7966666666666669t1.7600000000000016-0.7033333333333331 1.7583333333333329 0.7033333333333331 0.7416666666666671 1.7966666666666669v10h1.3283333333333331q0.23333333333333428 0 0.8599999999999994 0.1566666666666663z m-16.40666666666667-7.733333333333334q-3.3599999999999994-2.1883333333333326-3.3599999999999994-6.25 0-3.125 2.1883333333333326-5.3133333333333335t5.313333333333333-2.1866666666666665 5.313333333333333 2.1866666666666674 2.188333333333336 5.313333333333333q0 4.140000000000001-3.283333333333335 6.25v-6.25q0-1.7166666666666668-1.25-2.9299999999999997t-2.9666666666666686-1.211666666666666-2.9299999999999997 1.211666666666666-1.2133333333333312 2.9299999999999997v6.25z' })
                )
            );
        }
    }]);

    return MdTouchApp;
}(React.Component);

exports.default = MdTouchApp;
module.exports = exports['default'];