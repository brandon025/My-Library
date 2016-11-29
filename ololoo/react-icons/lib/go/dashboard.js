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

var GoDashboard = function (_React$Component) {
    _inherits(GoDashboard, _React$Component);

    function GoDashboard() {
        _classCallCheck(this, GoDashboard);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoDashboard).apply(this, arguments));
    }

    _createClass(GoDashboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 18.145c-2.405000000000001 0-4.355 1.9499999999999993-4.355 4.355s1.9499999999999993 4.355 4.355 4.355 4.355-1.9499999999999993 4.355-4.355c0-0.3324999999999996-0.04374999999999929-0.6537499999999987-0.11749999999999972-0.9624999999999986 3.1875-3.712500000000002 8.124999999999996-9.493750000000002 10.7625-12.787500000000001 0.9025000000000034-1.1274999999999995-0.09125000000000227-2.1950000000000003-1.25-1.25-3.3287499999999994 2.710000000000001-9.075 7.605-12.771250000000002 10.765-0.3150000000000013-0.07499999999999929-0.6437500000000007-0.12124999999999986-0.9800000000000004-0.12124999999999986z m1.245000000000001-8.149999999999999c0-0.6899999999999995-0.5599999999999987-1.25-1.25-1.25s-1.25 0.5600000000000005-1.25 1.25 0.5599999999999987 1.25 1.25 1.25 1.25-0.5600000000000005 1.25-1.25z m7.5 10c0 0.6900000000000013 0.5625 1.25 1.25 1.25s1.25-0.5599999999999987 1.25-1.25-0.5625-1.25-1.25-1.25-1.25 0.5599999999999987-1.25 1.25z m-13.75-10c-0.6899999999999995 0-1.25 0.5600000000000005-1.25 1.25s0.5600000000000005 1.25 1.25 1.25 1.25-0.5600000000000005 1.25-1.25-0.5600000000000005-1.25-1.25-1.25z m-2.5 5c0-0.6899999999999995-0.5600000000000005-1.25-1.25-1.25s-1.25 0.5600000000000005-1.25 1.25 0.5600000000000005 1.25 1.25 1.25 1.25-0.5600000000000005 1.25-1.25z m-3.75 5c0 0.6900000000000013 0.5600000000000005 1.25 1.25 1.25s1.25-0.5599999999999987 1.25-1.25-0.5600000000000005-1.25-1.25-1.25-1.25 0.5599999999999987-1.25 1.25z m17.5-8.75c0-0.6899999999999995-0.5625-1.25-1.25-1.25s-1.25 0.5600000000000005-1.25 1.25 0.5625 1.25 1.25 1.25 1.25-0.5600000000000005 1.25-1.25z m8.474999999999998 1.90625l-2.6837500000000034 3.5150000000000006c0.291249999999998 1.0625 0.4624999999999986 2.1774999999999984 0.4624999999999986 3.335000000000001 0 6.903749999999999-5.600000000000001 12.499999999999996-12.5 12.499999999999996s-12.498749999999994-5.5975-12.498749999999994-12.501249999999999c0-6.899999999999999 5.600000000000001-12.5 12.5-12.5 2.5749999999999993 0 4.962499999999999 0.7799999999999994 6.949999999999999 2.1125000000000007l3.094999999999999-2.3687500000000004c-2.7624999999999993-2.1812500000000004-6.245000000000001-3.4937500000000004-10.044999999999998-3.4937500000000004-8.975 0-16.25 7.275-16.25 16.25s7.275 16.25 16.25 16.25 16.25-7.274999999999999 16.25-16.25c0-2.4499999999999993-0.5549999999999997-4.7675-1.5275000000000034-6.850000000000001z' })
                )
            );
        }
    }]);

    return GoDashboard;
}(React.Component);

exports.default = GoDashboard;
module.exports = exports['default'];