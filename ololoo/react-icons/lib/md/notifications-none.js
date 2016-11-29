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

var MdNotificationsNone = function (_React$Component) {
    _inherits(MdNotificationsNone, _React$Component);

    function MdNotificationsNone() {
        _classCallCheck(this, MdNotificationsNone);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdNotificationsNone).apply(this, arguments));
    }

    _createClass(MdNotificationsNone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.64 28.36v-10q0-3.203333333333333-1.7966666666666669-5.350000000000001t-4.843333333333334-2.1516666666666655-4.843333333333334 2.1500000000000004-1.7966666666666669 5.350000000000001v10h13.283333333333331z m3.3599999999999994-1.7199999999999989l3.3599999999999994 3.3599999999999994v1.6400000000000006h-26.716666666666665v-1.6400000000000006l3.3566666666666656-3.3599999999999994v-8.283333333333331q0-3.905000000000001 1.993333333333334-6.795t5.508333333333335-3.75v-1.1716666666666669q0-1.0166666666666666 0.7049999999999983-1.7583333333333329t1.793333333333333-0.7433333333333358 1.8000000000000007 0.7416666666666671 0.6999999999999993 1.7566666666666668v1.1716666666666669q3.5166666666666657 0.8600000000000003 5.510000000000002 3.749999999999999t1.9899999999999984 6.800000000000001v8.283333333333331z m-10 10q-1.3283333333333331 0-2.3433333333333337-0.9766666666666666t-1.0166666666666657-2.3049999999999997h6.719999999999999q0 1.3283333333333331-1.0166666666666657 2.3049999999999997t-2.3416666666666686 0.9766666666666666z' })
                )
            );
        }
    }]);

    return MdNotificationsNone;
}(React.Component);

exports.default = MdNotificationsNone;
module.exports = exports['default'];