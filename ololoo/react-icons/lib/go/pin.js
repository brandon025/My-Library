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

var GoPin = function (_React$Component) {
    _inherits(GoPin, _React$Component);

    function GoPin() {
        _classCallCheck(this, GoPin);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoPin).apply(this, arguments));
    }

    _createClass(GoPin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.65625 27.5l2.5 12.5 2.5-12.5c-0.78125 0.07874999999999943-1.6799999999999997 0.11749999999999972-2.5 0.11749999999999972s-1.71875-0.03750000000000142-2.5-0.11749999999999972z m9.9225-11.68c-1.2875000000000014-0.6624999999999996-2.4224999999999994-2.3049999999999997-2.4224999999999994-3.3200000000000003v-2.5c0-0.8599999999999994 0.46875-1.5250000000000004 0.8999999999999986-2.03125 0.5850000000000009-0.5075000000000003 0.9375-1.1325000000000003 0.9375-1.7575000000000003 0-2.07125-2.383749999999999-3.7125000000000004-6.837499999999999-3.7125000000000004s-6.837499999999999 1.6412499999999994-6.837499999999999 3.7125000000000004c0 0.625 0.35249999999999915 1.25 0.9375 1.7562499999999996 0.43125000000000036 0.5075000000000003 0.9000000000000004 1.1724999999999994 0.9000000000000004 2.03125v2.5c0 1.0162499999999994-1.1325000000000003 2.65625-2.4224999999999994 3.3200000000000003-1.4837500000000023 0.7437500000000004-2.7337500000000023 2.11125-2.7337500000000023 3.4387500000000006 0 2.8912499999999994 3.9437499999999996 5.78125 10.155000000000001 5.78125s10.15625-2.8500000000000014 10.15625-5.780000000000001c0-1.2875000000000014-1.2124999999999986-2.65625-2.7375000000000007-3.4375z' })
                )
            );
        }
    }]);

    return GoPin;
}(React.Component);

exports.default = GoPin;
module.exports = exports['default'];