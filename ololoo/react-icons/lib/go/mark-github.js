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

var GoMarkGithub = function (_React$Component) {
    _inherits(GoMarkGithub, _React$Component);

    function GoMarkGithub() {
        _classCallCheck(this, GoMarkGithub);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoMarkGithub).apply(this, arguments));
    }

    _createClass(GoMarkGithub, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 0c-11.045 0-20 8.955-20 20 0 8.837499999999999 5.7299999999999995 16.332499999999996 13.6775 18.9775 1 0.18249999999999744 1.3650000000000002-0.4350000000000023 1.3650000000000002-0.9624999999999986 0-0.4750000000000014-0.01875000000000071-2.053750000000001-0.027499999999999858-3.7250000000000014-5.5625 1.2100000000000009-6.737500000000001-2.3575000000000017-6.737500000000001-2.3575000000000017-0.9124999999999996-2.3099999999999987-2.2200000000000006-2.9250000000000007-2.2200000000000006-2.9250000000000007-1.8175-1.2399999999999984 0.13750000000000018-1.2162499999999987 0.13750000000000018-1.2162499999999987 2.007500000000001 0.1374999999999993 3.0650000000000004 2.0599999999999987 3.0650000000000004 2.0599999999999987 1.7850000000000001 3.057500000000001 4.682499999999999 2.1750000000000007 5.8199999999999985 1.6625000000000014 0.18125000000000036-1.2899999999999991 0.6999999999999993-2.1750000000000007 1.2699999999999996-2.6724999999999994-4.440000000000001-0.504999999999999-9.11-2.2212500000000013-9.11-9.885000000000002 0-2.1849999999999987 0.7799999999999994-3.9674999999999994 2.057500000000001-5.3675-0.20374999999999943-0.5075000000000003-0.8925000000000001-2.5425000000000004 0.1974999999999998-5.295 0 0 1.6775000000000002-0.5374999999999996 5.5 2.049999999999999 1.5937499999999982-0.44374999999999964 3.3050000000000015-0.6624999999999996 5.005000000000001-0.6712500000000006 1.6999999999999993 0.007500000000000284 3.4125000000000014 0.23000000000000043 5.0075 0.6750000000000007 3.81625-2.59 5.495000000000001-2.0500000000000007 5.495000000000001-2.0500000000000007 1.09375 2.75375 0.40500000000000114 4.7875 0.1999999999999993 5.29125 1.28125 1.4000000000000004 2.0562499999999986 3.182499999999999 2.0562499999999986 5.3675000000000015 0 7.682500000000001-4.677500000000002 9.375-9.13375 9.869999999999997 0.7199999999999989 0.620000000000001 1.3575000000000017 1.8374999999999986 1.3575000000000017 3.700000000000003 0 2.674999999999997-0.02499999999999858 4.829999999999998-0.02499999999999858 5.490000000000002 0 0.5324999999999989 0.3625000000000007 1.1550000000000011 1.375 0.9600000000000009 7.943750000000001-2.6499999999999986 13.668750000000003-10.14375 13.668750000000003-18.9775 0-11.045-8.95375-20-20-20z' })
                )
            );
        }
    }]);

    return GoMarkGithub;
}(React.Component);

exports.default = GoMarkGithub;
module.exports = exports['default'];