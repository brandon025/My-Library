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

var GoMortarBoard = function (_React$Component) {
    _inherits(GoMortarBoard, _React$Component);

    function GoMortarBoard() {
        _classCallCheck(this, GoMortarBoard);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoMortarBoard).apply(this, arguments));
    }

    _createClass(GoMortarBoard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.57 22.96875l-9.57-2.96875v6.25s4.4925 3.75 10 3.75 10-1.25 10-3.75v-6.25l-9.57 2.96875c-0.2749999999999986 0.07874999999999943-0.5874999999999986 0.07874999999999943-0.8999999999999986 0h0.03999999999999915z m0.7037499999999994-15.975c-0.15749999999999886-0.040000000000000036-0.35249999999999915-0.040000000000000036-0.5087499999999991 0l-19.099999999999998 5.9375c-0.82125 0.27250000000000085-0.82125 1.4049999999999994 0 1.678749999999999l4.334999999999997 1.3674999999999997v4.412500000000001c-0.74125 0.4312499999999986-1.25 1.25-1.25 2.1499999999999986 0 0.46875 0.11874999999999991 0.8999999999999986 0.35250000000000004 1.25-0.19499999999999984 0.3500000000000014-0.3500000000000001 0.78125-0.3500000000000001 1.25v6.445c0 1.3674999999999997 5 1.3674999999999997 5 0v-6.445c0-0.46875-0.11875000000000036-0.8999999999999986-0.35249999999999915-1.25 0.19500000000000028-0.3500000000000014 0.34999999999999964-0.78125 0.34999999999999964-1.25 0-0.9375-0.5062499999999996-1.71875-1.25-2.1499999999999986v-3.6312500000000014l12.2275 3.8287499999999994c0.15625 0.03750000000000142 0.3500000000000014 0.03750000000000142 0.5075000000000003 0l19.099999999999994-5.9375c0.8212499999999991-0.27500000000000036 0.8212499999999991-1.40625 0-1.6799999999999997l-19.0625-5.9750000000000005z m-0.2362499999999983 8.00625c-1.3662500000000009 0-2.5-0.5474999999999994-2.5-1.25s1.1337499999999991-1.25 2.5-1.25 2.5 0.5474999999999994 2.5 1.25-1.1312500000000014 1.25-2.5 1.25z' })
                )
            );
        }
    }]);

    return GoMortarBoard;
}(React.Component);

exports.default = GoMortarBoard;
module.exports = exports['default'];