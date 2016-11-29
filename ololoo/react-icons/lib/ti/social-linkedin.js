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

var TiSocialLinkedin = function (_React$Component) {
    _inherits(TiSocialLinkedin, _React$Component);

    function TiSocialLinkedin() {
        _classCallCheck(this, TiSocialLinkedin);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiSocialLinkedin).apply(this, arguments));
    }

    _createClass(TiSocialLinkedin, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.333333333333334 31.666666666666668h-5v-16.666666666666668h5v16.666666666666668z m18.333333333333336 0h-5v-8.903333333333332c0-2.3200000000000003-0.826666666666668-3.4750000000000014-2.4666666666666686-3.4750000000000014-1.2966666666666669 0-2.120000000000001 0.6466666666666683-2.533333333333335 1.9416666666666664v10.436666666666667h-5s0.06666666666666643-15 0-16.666666666666668h3.9466666666666654l0.3049999999999997 3.333333333333332h0.10500000000000043c1.0249999999999986-1.6666666666666679 2.663333333333334-2.796666666666667 4.91-2.796666666666667 1.706666666666667 0 3.0883333333333347 0.4750000000000014 4.143333333333334 1.6666666666666679 1.0616666666666674 1.1966666666666654 1.5899999999999999 2.8000000000000007 1.5899999999999999 5.050000000000001v9.413333333333334z m-18.250000000000004-20.833333333333336c0 1.3800000000000026-1.1566666666666663 2.5000000000000018-2.583333333333334 2.5000000000000018s-2.583333333333334-1.1199999999999992-2.583333333333334-2.5 1.156666666666668-2.5 2.583333333333334-2.5 2.583333333333334 1.1199999999999992 2.583333333333334 2.5z' })
                )
            );
        }
    }]);

    return TiSocialLinkedin;
}(React.Component);

exports.default = TiSocialLinkedin;
module.exports = exports['default'];