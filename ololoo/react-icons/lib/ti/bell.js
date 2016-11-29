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

var TiBell = function (_React$Component) {
    _inherits(TiBell, _React$Component);

    function TiBell() {
        _classCallCheck(this, TiBell);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiBell).apply(this, arguments));
    }

    _createClass(TiBell, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.858333333333334 28.833333333333336c-0.028333333333335986-0.028333333333332433-2.861666666666668-3.0883333333333347-2.883333333333333-10.533333333333335-0.01666666666666572-4.343333333333334-2.8166666666666664-8.038333333333334-6.699999999999999-9.4 0.03333333333333499-0.18333333333333357 0.05833333333333357-0.37166666666666615 0.05833333333333357-0.5666666666666664 0-1.838333333333333-1.4933333333333323-3.333333333333334-3.333333333333332-3.333333333333334s-3.333333333333332 1.495-3.333333333333332 3.333333333333334c0 0.19333333333333336 0.026666666666667282 0.3800000000000008 0.05666666666666842 0.5633333333333326-3.8933333333333326 1.3599999999999994-6.699999999999999 5.0600000000000005-6.699999999999999 9.409999999999998 0 7.436666666666667-2.8499999999999996 10.493333333333332-2.866666666666667 10.509999999999998-0.4783333333333335 0.47666666666666657-0.6233333333333331 1.1933333333333351-0.36666666666666714 1.8166666666666664s0.8666666666666671 1.033333333333335 1.543333333333333 1.033333333333335h5.238333333333333c0.7449999999999992 2.866666666666667 3.333333333333332 5 6.428333333333335 5s5.683333333333334-2.133333333333333 6.428333333333335-5h5.238333333333326c0.6666666666666679 0 1.2633333333333319-0.40500000000000114 1.5250000000000021-1.0166666666666657s0.12666666666666515-1.3333333333333321-0.3333333333333357-1.8166666666666664z m-12.858333333333334-17.166666666666668c3.6499999999999986 0 6.630000000000003 2.9833333333333343 6.640000000000001 6.645 0.0033333333333338544 1.2133333333333347 0.07666666666666799 2.326666666666668 0.19666666666666544 3.3550000000000004h-13.666666666666666c0.11666666666666714-1.0283333333333324 0.18833333333333258-2.1433333333333344 0.18833333333333258-3.3599999999999994 1.7763568394002505e-15-3.66 2.980000000000002-6.640000000000001 6.6416666666666675-6.640000000000001z m0 21.666666666666668c-1.2283333333333317 0-2.291666666666668-0.6749999999999972-2.870000000000001-1.6666666666666679h5.738333333333333c-0.5749999999999993 0.9916666666666636-1.6383333333333319 1.6666666666666679-2.866666666666667 1.6666666666666679z m-8.643333333333334-5c0.586666666666666-1.2266666666666666 1.1750000000000007-2.883333333333333 1.5633333333333326-5h14.170000000000002c0.39000000000000057 2.116666666666667 0.9800000000000004 3.7733333333333334 1.5633333333333326 5h-17.296666666666667z' })
                )
            );
        }
    }]);

    return TiBell;
}(React.Component);

exports.default = TiBell;
module.exports = exports['default'];