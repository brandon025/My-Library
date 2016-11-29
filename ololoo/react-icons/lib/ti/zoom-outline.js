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

var TiZoomOutline = function (_React$Component) {
    _inherits(TiZoomOutline, _React$Component);

    function TiZoomOutline() {
        _classCallCheck(this, TiZoomOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiZoomOutline).apply(this, arguments));
    }

    _createClass(TiZoomOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.333333333333336 13.333333333333334c2.759999999999998 0 5 2.24 5 5.000000000000002s-2.240000000000002 5-5 5-5-2.240000000000002-5-5 2.240000000000002-5 5-5z m0-1.666666666666666c-3.676666666666666 0-6.666666666666668 2.99-6.666666666666668 6.666666666666668s2.9899999999999984 6.666666666666668 6.666666666666668 6.666666666666668 6.666666666666668-2.9899999999999984 6.666666666666668-6.666666666666668-2.9899999999999984-6.666666666666668-6.666666666666668-6.666666666666668z m-16.34166666666667 17.79c0 2.878333333333334 2.34 5.216666666666665 5.216666666666667 5.216666666666665 1.2616666666666667 0 2.506666666666666-0.46000000000000085 3.508333333333333-1.3033333333333346l3.994999999999999-3.9766666666666666c1.1416666666666657 0.37833333333333385 2.3533333333333317 0.6066666666666656 3.621666666666666 0.6066666666666656 6.433333333333334 0 11.666666666666668-5.233333333333334 11.666666666666668-11.666666666666668s-5.233333333333334-11.666666666666668-11.666666666666668-11.666666666666668-11.666666666666668 5.233333333333334-11.666666666666668 11.666666666666668c0 1.2666666666666657 0.22666666666666657 2.4766666666666666 0.6066666666666674 3.621666666666666l-3.7399999999999984 3.805000000000007c-0.9950000000000001 0.9833333333333343-1.541666666666667 2.296666666666667-1.541666666666667 3.6966666666666654z m10.766666666666666-2.823333333333334l-4.191666666666665 4.183333333333334c-0.37166666666666615 0.3133333333333326-0.8399999999999999 0.5233333333333334-1.3599999999999994 0.5233333333333334-1.040000000000001 0-1.8833333333333329-0.8433333333333337-1.8833333333333329-1.8833333333333329 0-0.5199999999999996 0.21000000000000085-0.9916666666666671 0.5500000000000007-1.3300000000000018l4.154999999999999-4.216666666666669c0.7233333333333327 1.0733333333333341 1.6499999999999986 2 2.7233333333333327 2.7233333333333327z m5.575000000000003 0.03333333333333499c-4.594999999999999 0-8.333333333333334-3.7383333333333333-8.333333333333334-8.333333333333332s3.738333333333335-8.333333333333334 8.333333333333334-8.333333333333334 8.333333333333336 3.7383333333333333 8.333333333333336 8.333333333333334-3.7383333333333333 8.333333333333336-8.333333333333336 8.333333333333336z' })
                )
            );
        }
    }]);

    return TiZoomOutline;
}(React.Component);

exports.default = TiZoomOutline;
module.exports = exports['default'];