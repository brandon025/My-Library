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

var GoOrganization = function (_React$Component) {
    _inherits(GoOrganization, _React$Component);

    function GoOrganization() {
        _classCallCheck(this, GoOrganization);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoOrganization).apply(this, arguments));
    }

    _createClass(GoOrganization, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 15h-25c-2.76 0-5 2.240000000000002-5 5v2.5c0 1.8462500000000013 1.0099999999999998 3.4399999999999977 2.5 4.306249999999999v8.193750000000001h10v5h10v-5h10v-8.193750000000001c1.4874999999999972-0.8662500000000009 2.5-2.458750000000002 2.5-4.306249999999999v-2.5c0-2.7600000000000016-2.241250000000001-5-5-5z m-20 17.5h-5v-10h-2.5v-2.5c0-1.379999999999999 1.1212499999999999-2.5 2.5-2.5h3.192499999999999c-0.42999999999999794 0.7375000000000007-0.692499999999999 1.5850000000000009-0.692499999999999 2.5v5c0 1.8462500000000013 1.0099999999999998 3.4399999999999977 2.5 4.306249999999999v3.1937500000000014z m12.5-5v-5h-2.5v15h-5v-15h-2.5v5c-1.3800000000000008 0-2.5-1.1187499999999986-2.5-2.5v-5c0-1.379999999999999 1.120000000000001-2.5 2.5-2.5h10c1.3812500000000014 0 2.5 1.120000000000001 2.5 2.5v5c0 1.3812500000000014-1.1187499999999986 2.5-2.5 2.5z m10-5h-2.5v10h-5v-3.1937500000000014c1.4875000000000007-0.8662500000000009 2.5-2.458750000000002 2.5-4.306249999999999v-5c0-0.9149999999999991-0.2624999999999993-1.7624999999999993-0.6937500000000014-2.5h3.1937500000000014c1.3812500000000014 0 2.5 1.120000000000001 2.5 2.5v2.5z m-20.6375-10.102500000000001c1.375 1.5824999999999996 3.3775000000000013 2.602500000000001 5.637499999999999 2.602500000000001s4.262499999999999-1.0199999999999996 5.637499999999999-2.602499999999999c0.8525000000000027 1.5449999999999982 2.474999999999998 2.602499999999999 4.362500000000001 2.602499999999999 2.758749999999999 0 5-2.24 5-5s-2.241250000000001-5-5-5c-1 0-1.9287500000000009 0.2999999999999998-2.710000000000001 0.8075000000000001-0.7712499999999984-3.325-3.732499999999998-5.8075-7.289999999999999-5.8075s-6.52 2.4825-7.290000000000001 5.8075c-0.7824999999999989-0.5074999999999994-1.709999999999999-0.8075000000000001-2.709999999999999-0.8075000000000001-2.76 0-5 2.2375-5 5s2.24 5 5 5c1.8874999999999993 0 3.51-1.0587499999999999 4.362500000000001-2.60375z m15.6375-4.897499999999999c1.3812500000000014 0 2.5 1.1174999999999997 2.5 2.5s-1.1187499999999986 2.5-2.5 2.5c-1.379999999999999 0-2.5-1.1174999999999997-2.5-2.5s1.120000000000001-2.5 2.5-2.5z m-10-5c2.758749999999999 0 5 2.24 5 5s-2.241250000000001 5-5 5c-2.7600000000000016 0-5-2.24-5-5s2.240000000000002-5 5-5z m-10 10c-1.3800000000000008 0-2.5-1.1174999999999997-2.5-2.5s1.120000000000001-2.5 2.5-2.5c1.3825000000000003 0 2.5 1.1174999999999997 2.5 2.5s-1.1174999999999997 2.5-2.5 2.5z' })
                )
            );
        }
    }]);

    return GoOrganization;
}(React.Component);

exports.default = GoOrganization;
module.exports = exports['default'];