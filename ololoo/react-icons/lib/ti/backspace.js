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

var TiBackspace = function (_React$Component) {
    _inherits(TiBackspace, _React$Component);

    function TiBackspace() {
        _classCallCheck(this, TiBackspace);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiBackspace).apply(this, arguments));
    }

    _createClass(TiBackspace, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 8.333333333333334h-16.666666666666668c-2.1099999999999994 0-4.723333333333333 1.3450000000000006-5.949999999999999 3.0616666666666656l-4.35 6.088333333333335-2 2.8000000000000007c-0.20000000000000018 0.28999999999999915-0.20000000000000018 0.8166666666666664 0.006666666666666821 1.1050000000000004l1.9799999999999995 2.7733333333333334 4.366666666666667 6.111666666666665c1.2216666666666676 1.716666666666665 3.830000000000002 3.0600000000000023 5.946666666666667 3.0600000000000023h16.666666666666664c2.299999999999997 0 4.166666666666664-1.870000000000001 4.166666666666664-4.166666666666668v-16.666666666666668c7.105427357601002e-15-2.296666666666667-1.8666666666666671-4.166666666666666-4.166666666666664-4.166666666666666z m-3.8216666666666654 16.321666666666665c0.6499999999999986 0.6499999999999986 0.6499999999999986 1.7049999999999983 0 2.3566666666666656-0.3249999999999993 0.3249999999999993-0.75 0.4883333333333333-1.1783333333333346 0.4883333333333333s-0.8533333333333317-0.163333333333334-1.1783333333333346-0.4883333333333333l-3.8216666666666654-3.8216666666666654-3.8216666666666654 3.821666666666669c-0.3249999999999993 0.3249999999999993-0.75 0.4883333333333333-1.1783333333333346 0.4883333333333333s-0.8533333333333317-0.163333333333334-1.1783333333333346-0.4883333333333333c-0.6500000000000004-0.6499999999999986-0.6500000000000004-1.7049999999999983 0-2.3566666666666656l3.8216666666666654-3.821666666666669-3.8216666666666654-3.8216666666666654c-0.6500000000000004-0.6499999999999986-0.6500000000000004-1.705 0-2.3566666666666656s1.7049999999999983-0.6500000000000004 2.3566666666666656 0l3.821666666666669 3.821666666666669 3.8216666666666654-3.821666666666667c0.6499999999999986-0.6500000000000004 1.7049999999999983-0.6500000000000004 2.3566666666666656 0s0.6499999999999986 1.705 0 2.3566666666666674l-3.8216666666666654 3.821666666666662 3.821666666666669 3.8216666666666654z' })
                )
            );
        }
    }]);

    return TiBackspace;
}(React.Component);

exports.default = TiBackspace;
module.exports = exports['default'];