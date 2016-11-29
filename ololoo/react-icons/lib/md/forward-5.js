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

var MdForward5 = function (_React$Component) {
    _inherits(MdForward5, _React$Component);

    function MdForward5() {
        _classCallCheck(this, MdForward5);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdForward5).apply(this, arguments));
    }

    _createClass(MdForward5, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.533333333333335 22.656666666666666q-0.5500000000000007 0.23333333333333428-0.5500000000000007 0.3133333333333326l-0.15500000000000114 0.23333333333333428h-1.0166666666666657l0.3916666666666657-3.6700000000000017h3.9833333333333343v1.1716666666666669h-2.8866666666666667l-0.158333333333335 1.4833333333333343q0.1566666666666663 0 0.1566666666666663-0.15500000000000114 0-0.07833333333333314 0.11666666666666714-0.11666666666666714t0.11666666666666714-0.11666666666666714h0.6233333333333348q0.625 0 0.8599999999999994 0.23333333333333428 0.07833333333333314 0.0799999999999983 0.3133333333333326 0.23666666666666814t0.3133333333333326 0.23333333333333428q0.7033333333333331 0.7049999999999983 0.7033333333333331 1.8000000000000007 0 0.6999999999999993-0.1566666666666663 0.8583333333333343-0.07833333333333314 0.07833333333333314-0.23333333333333428 0.39000000000000057t-0.31666666666666643 0.46999999999999886q-0.6233333333333348 0.625-1.7949999999999982 0.625-0.7033333333333331 0-0.8599999999999994-0.1566666666666663-0.07666666666666799-0.07833333333333314-0.3500000000000014-0.1566666666666663t-0.4299999999999997-0.158333333333335q-0.7033333333333331-0.39000000000000057-0.7033333333333331-1.4833333333333343h1.3283333333333331q0 0.7800000000000011 1.0166666666666657 0.7800000000000011 0.3116666666666674 0 0.466666666666665-0.1566666666666663l0.39000000000000057-0.31666666666666643q0.158333333333335-0.3116666666666674 0.158333333333335-0.466666666666665v-1.0166666666666657l-0.1566666666666663-0.3116666666666674-0.38833333333333186-0.39000000000000057q-0.3133333333333326-0.158333333333335-0.466666666666665-0.158333333333335h-0.31666666666666643z m-12.893333333333333-1.0166666666666657q0-5.466666666666669 3.9066666666666663-9.375t9.453333333333331-3.908333333333333v-6.715000000000001l8.36 8.358333333333334-8.36 8.36v-6.716666666666669q-4.063333333333333 0-7.033333333333333 2.928333333333333t-2.966666666666667 7.070000000000002 2.966666666666667 7.07 7.033333333333333 2.9299999999999997 7.033333333333331-2.9299999999999997 2.9666666666666686-7.07h3.3599999999999994q0 5.546666666666667-3.9450000000000003 9.453333333333333t-9.415 3.905000000000001-9.411666666666667-3.905000000000001-3.9450000000000003-9.453333333333333z' })
                )
            );
        }
    }]);

    return MdForward5;
}(React.Component);

exports.default = MdForward5;
module.exports = exports['default'];