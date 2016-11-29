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

var GoLaw = function (_React$Component) {
    _inherits(GoLaw, _React$Component);

    function GoLaw() {
        _classCallCheck(this, GoLaw);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoLaw).apply(this, arguments));
    }

    _createClass(GoLaw, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.07875 7.5c1.3287499999999994-0.037499999999999645 2.3825000000000003-1.09375 2.4224999999999994-2.4224999999999994 0.03999999999999915-1.4449999999999998-1.1312500000000014-2.6174999999999997-2.5775000000000006-2.5787500000000003-1.3287499999999994 0.03750000000000009-2.3825000000000003 1.0925000000000002-2.4224999999999994 2.4212499999999997-0.03750000000000142 1.4450000000000003 1.1325000000000003 2.6174999999999997 2.5787499999999994 2.5787500000000003z m18.125 15h-0.7037499999999994l-4.962499999999999-9.61c0.7049999999999983-0.07874999999999943 1.4074999999999989-0.34999999999999964 2.032499999999999-0.625 0.9375-0.4299999999999997 1.1325000000000003-1.6799999999999997 0.4299999999999997-2.4224999999999994l-0.03750000000000142-0.037499999999999645c-0.4312499999999986-0.43125000000000036-1.0949999999999989-0.5875000000000004-1.6812499999999986-0.3125-0.5474999999999994 0.23375000000000057-1.3287499999999994 0.5062499999999996-2.0700000000000003 0.5062499999999996-2.1875 0-3.164999999999999-2.5-11.212499999999999-2.5s-9.023750000000001 2.501249999999999-11.211250000000001 2.501249999999999c-0.7799999999999994 0-1.5225-0.2375000000000007-2.0687499999999996-0.5087499999999991-0.5875000000000004-0.23499999999999943-1.25-0.11749999999999972-1.6799999999999997 0.3125l-0.037499999999999645 0.037499999999999645c-0.7037499999999994 0.7437500000000004-0.5075000000000003 1.955 0.4299999999999997 2.424999999999999 0.625 0.3125 1.3287499999999994 0.5462500000000006 2.03125 0.625l-4.9625 9.60875h-0.7037499999999999c-0.3125 0-0.5474999999999999 0.2749999999999986-0.5075000000000001 0.5874999999999986 0.4312499999999997 2.5 3.5949999999999998 4.412500000000001 7.46125 4.412500000000001s7.03125-1.9125000000000014 7.462499999999999-4.412500000000001c0.03750000000000142-0.3125-0.19624999999999915-0.5874999999999986-0.5087499999999991-0.5874999999999986h-0.7037499999999994l-4.9625-9.57c3.2437500000000004-0.27500000000000036 4.9625-1.9124999999999996 7.4625-1.9124999999999996v18.9825c-1.3674999999999997 0-2.5 1.1337499999999991-2.5 2.5h-2.7750000000000004c-1.0912500000000005 0-2.2249999999999996 1.1350000000000051-2.2249999999999996 2.5h20c0-1.3662500000000009-1.1325000000000003-2.5-2.7749999999999986-2.5h-2.2250000000000014c0-1.3662500000000009-1.1325000000000003-2.5-2.5-2.5v-18.9825c2.5 1.7763568394002505e-15 4.21875 1.6412500000000012 7.462499999999999 1.9125000000000014l-4.962499999999999 9.57h-0.7037499999999994c-0.3125 0-0.5474999999999994 0.2749999999999986-0.5075000000000003 0.5874999999999986 0.4312499999999986 2.5 3.594999999999999 4.412500000000001 7.462499999999999 4.412500000000001s7.03125-1.9125000000000014 7.462499999999999-4.412500000000001c0.03750000000000142-0.3125-0.19624999999999915-0.5874999999999986-0.5087499999999991-0.5874999999999986z m-25.70375 0h-7.5l3.75-7.03125 3.75 7.03125z m15 0l3.75-7.03125 3.75 7.03125h-7.5z' })
                )
            );
        }
    }]);

    return GoLaw;
}(React.Component);

exports.default = GoLaw;
module.exports = exports['default'];