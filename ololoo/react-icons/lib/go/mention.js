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

var GoMention = function (_React$Component) {
    _inherits(GoMention, _React$Component);

    function GoMention() {
        _classCallCheck(this, GoMention);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoMention).apply(this, arguments));
    }

    _createClass(GoMention, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.98 3.87125c-8.9075-1.09375-17.015 5.241250000000001-18.10875 14.149999999999999s5.241249999999999 17.0125 14.150000000000002 18.107499999999998c2.7875000000000014 0.34250000000000114 5.6675-0.03750000000000142 8.33125-1.1700000000000017 0.9537499999999994-0.40625 1.3975000000000009-1.5062500000000014 0.9937499999999986-2.460000000000001s-1.504999999999999-1.3999999999999986-2.4587499999999984-0.995000000000001c-2.0500000000000007 0.8724999999999987-4.262499999999999 1.1624999999999979-6.41 0.9000000000000021-6.852499999999999-0.8399999999999999-11.725000000000001-7.077500000000001-10.883750000000001-13.92875s7.077499999999999-11.724999999999994 13.931249999999997-10.881249999999994c6.850000000000001 0.8412500000000005 11.725000000000001 7.077500000000001 10.8825 13.93-0.16875000000000284 1.370000000000001-0.8412499999999987 2.1750000000000007-2.40625 2.1750000000000007-1.6587500000000013 0-2.5-1.7912500000000016-2.5-3.1712500000000006v-4.9025c0-1.0374999999999996-0.8374999999999986-1.875-1.875-1.875-0.3775000000000013 0-0.7300000000000004 0.11250000000000071-1.0249999999999986 0.3049999999999997-1.0037500000000001-0.7912499999999998-2.2437499999999986-1.3224999999999998-3.6849999999999987-1.5-4.112500000000001-0.5050000000000008-7.853750000000002 2.4187499999999993-8.3575 6.530000000000001s2.418750000000001 7.853750000000002 6.529999999999999 8.357500000000002c2.241250000000001 0.2749999999999986 4.539999999999999-0.5749999999999993 6.166250000000002-2.0749999999999993 0.9750000000000014 1.1000000000000014 2.3374999999999986 1.8599999999999994 3.9125000000000014 2.053750000000001 3.424999999999997 0.42125000000000057 6.543750000000003-2.0162499999999994 6.962499999999999-5.44125 1.0949999999999989-8.9075-5.240000000000002-17.015-14.1475-18.10875z m1.7424999999999997 16.5875c-0.2525000000000013 2.053750000000001-2.125 3.5162499999999994-4.178750000000001 3.2624999999999993s-3.517500000000002-2.1224999999999987-3.2650000000000006-4.177500000000002c0.2525000000000013-2.0549999999999997 2.125-3.5174999999999983 4.178750000000001-3.2650000000000006s3.517500000000002 2.125 3.2650000000000006 4.178750000000001z' })
                )
            );
        }
    }]);

    return GoMention;
}(React.Component);

exports.default = GoMention;
module.exports = exports['default'];