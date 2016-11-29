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

var TiPhoneOutline = function (_React$Component) {
    _inherits(TiPhoneOutline, _React$Component);

    function TiPhoneOutline() {
        _classCallCheck(this, TiPhoneOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiPhoneOutline).apply(this, arguments));
    }

    _createClass(TiPhoneOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.50333333333333 6.12l-2.99166666666666-2.986666666666667c-0.9433333333333316-0.9466666666666668-2.1999999999999993-1.4666666666666668-3.533333333333335-1.4666666666666668s-2.5933333333333337 0.52-3.5366666666666653 1.4666666666666668l-2.6416666666666693 2.64c-1.9499999999999993 1.9500000000000002-1.9499999999999993 5.120000000000001 0 7.07l2.296666666666667 2.3000000000000007-6.953333333333333 6.949999999999999-2.3000000000000007-2.296666666666667c-0.9416666666666664-0.9466666666666654-2.1999999999999993-1.4666666666666686-3.533333333333333-1.4666666666666686s-2.591666666666667 0.5199999999999996-3.533333333333333 1.4666666666666686l-2.645 2.6416666666666657c-1.95 1.9499999999999993-1.95 5.120000000000001 0 7.07l2.988333333333333 2.991666666666667c0.7750000000000004 0.7749999999999986 2.993333333333333 2.575000000000003 6.86 2.575000000000003 4.605 0 9.488333333333333-2.549999999999997 14.51666666666667-7.574999999999999 10.408333333333331-10.41 8.041666666666671-18.33666666666667 5.00333333333333-21.38z m-10.350000000000001 2.0116666666666676l2.6449999999999996-2.6449999999999996c0.32333333333333414-0.3250000000000002 0.75-0.4883333333333333 1.1766666666666659-0.4883333333333333s0.8533333333333317 0.1633333333333331 1.1783333333333346 0.4883333333333333l1.8049999999999997 1.8033333333333337-5 5.000000000000001-1.8049999999999997-1.8033333333333328c-0.6499999999999986-0.6500000000000004-0.6499999999999986-1.705 0-2.3566666666666674z m-16.666666666666668 19.02166666666667c-0.6500000000000004-0.6499999999999986-0.6500000000000004-1.7049999999999983 0-2.3566666666666656l2.6449999999999996-2.6449999999999996c0.32333333333333414-0.3249999999999993 0.75-0.4883333333333333 1.1766666666666659-0.4883333333333333s0.8533333333333335 0.163333333333334 1.1783333333333328 0.4883333333333333l1.8033333333333328 1.8033333333333346-5 5-1.8033333333333337-1.8033333333333346z m19.65666666666667-2.0116666666666667c-5.138333333333335 5.136666666666667-9.25 6.600000000000001-12.161666666666667 6.600000000000001-2.25 0-3.7799999999999994-0.8733333333333348-4.505000000000001-1.6000000000000014-0.0066666666666659324-0.006666666666667709 4.991666666666667-5.006666666666668 4.991666666666667-5.006666666666668l0.4949999999999992 0.495000000000001c0.32333333333333414 0.32333333333333414 0.75 0.48666666666666814 1.1766666666666676 0.48666666666666814s0.8533333333333335-0.163333333333334 1.1783333333333346-0.4883333333333333l9.309999999999999-9.311666666666667c0.6499999999999986-0.6500000000000004 0.6499999999999986-1.705 0-2.3566666666666656l-0.49666666666666615-0.49666666666666615 5-5c1.673333333333332 1.6733333333333338 4.113333333333333 7.566666666666666-4.993333333333332 16.673333333333332z' })
                )
            );
        }
    }]);

    return TiPhoneOutline;
}(React.Component);

exports.default = TiPhoneOutline;
module.exports = exports['default'];