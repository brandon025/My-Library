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

var GoMegaphone = function (_React$Component) {
    _inherits(GoMegaphone, _React$Component);

    function GoMegaphone() {
        _classCallCheck(this, GoMegaphone);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoMegaphone).apply(this, arguments));
    }

    _createClass(GoMegaphone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 1.25c-5.078749999999999 0-4.84375 5.078749999999999-27.5 5-2.7600000000000002 0-5 4.477499999999999-5 10s2.24 10 5 10c0.8899999999999997 0 1.6875 0.019999999999999574 2.5075000000000003 0.03375000000000128l2.4924999999999997 11.216249999999999 7.5 1.25 2.5-3.75-1.7624999999999993-7.934999999999999c9.4725 1.416249999999998 10.425 4.184999999999999 14.2625 4.184999999999999 4.141249999999999 0 7.5-6.71875 7.5-15s-3.3599999999999994-15-7.5-15z m-24.805 17.615000000000002c-1.5312500000000009-0.057500000000000995-3.210000000000001-0.08749999999999858-4.982500000000001-0.10249999999999915-0.13374999999999915-0.7700000000000031-0.21249999999999947-1.6175000000000033-0.21249999999999947-2.512500000000003 0-3.4525000000000006 1.1212499999999999-7.5 2.5-7.5 1.5250000000000004 0.005000000000000782 2.9299999999999997-0.01750000000000007 4.2575-0.054999999999999716-1.0675000000000008 1.834999999999999-1.7575000000000003 4.52-1.7575000000000003 7.555 0 0.9125000000000014 0.08000000000000007 1.7749999999999986 0.19500000000000028 2.615000000000002z m2.5124999999999993 0.11749999999999972c-0.12499999999999822-0.870000000000001-0.20749999999999957-1.7800000000000011-0.20749999999999957-2.7325000000000017 0-3.1050000000000004 0.7200000000000006-5.84 1.8324999999999996-7.664999999999999 6.0625-0.3249999999999993 9.84-1.1124999999999998 12.462500000000002-1.96-1.1075000000000017 2.612499999999998-1.7950000000000017 5.939999999999999-1.7950000000000017 9.625 0 1.5625 0.14999999999999858 3.0474999999999994 0.37124999999999986 4.465-2.818749999999998-0.7300000000000004-6.745000000000001-1.3949999999999996-12.662500000000001-1.7337500000000006z m22.2925 8.517499999999998c-0.4750000000000014 0-0.9250000000000007-0.19750000000000156-1.3599999999999994-0.4750000000000014-0.5962500000000013-2.62875-3.258749999999999-16.34 4.587499999999999-19.302500000000002 1.0750000000000028 2.0625000000000036 1.7725000000000009 5.097500000000004 1.7725000000000009 8.527500000000003 0 6.212499999999999-2.241250000000001 11.25-5 11.25z' })
                )
            );
        }
    }]);

    return GoMegaphone;
}(React.Component);

exports.default = GoMegaphone;
module.exports = exports['default'];