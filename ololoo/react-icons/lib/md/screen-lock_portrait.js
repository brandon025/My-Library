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

var MdScreenLockPortrait = function (_React$Component) {
    _inherits(MdScreenLockPortrait, _React$Component);

    function MdScreenLockPortrait() {
        _classCallCheck(this, MdScreenLockPortrait);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdScreenLockPortrait).apply(this, arguments));
    }

    _createClass(MdScreenLockPortrait, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.36 31.640000000000004v-23.28333333333334h-16.71666666666667v23.283333333333335h16.71666666666667z m0-30q1.3283333333333331 0 2.3049999999999997 1.0166666666666666t0.9750000000000014 2.341666666666667v29.999999999999996q0 1.326666666666668-0.9766666666666666 2.3416666666666686t-2.306666666666665 1.0166666666666657h-16.71333333333334q-1.3299999999999983 0-2.306666666666665-1.0166666666666657t-0.9766666666666648-2.3400000000000034v-30q0-1.33 0.9766666666666666-2.345t2.3049999999999997-1.0166666666666666h16.71666666666667z m-10.391666666666666 15v1.716666666666665h4.066666666666666v-1.7166666666666686q0-0.7833333333333332-0.5883333333333347-1.3666666666666671t-1.4466666666666654-0.5866666666666678-1.4450000000000003 0.586666666666666-0.586666666666666 1.3666666666666654z m-1.326666666666668 10q-0.7033333333333331 0-1.1716666666666669-0.466666666666665t-0.46999999999999886-1.1733333333333391v-5q0-0.7033333333333331 0.4666666666666668-1.1716666666666669t1.1733333333333338-0.466666666666665v-1.7216666666666676q0-1.3283333333333331 0.9766666666666666-2.3049999999999997t2.383333333333333-0.9749999999999996 2.383333333333333 0.9383333333333326 0.9766666666666666 2.341666666666667v1.7166666666666686q0.7033333333333331 0 1.1716666666666669 0.46999999999999886t0.4683333333333337 1.173333333333332v5q0 0.7033333333333331-0.466666666666665 1.1716666666666669t-1.173333333333332 0.466666666666665h-6.716666666666669z' })
                )
            );
        }
    }]);

    return MdScreenLockPortrait;
}(React.Component);

exports.default = MdScreenLockPortrait;
module.exports = exports['default'];