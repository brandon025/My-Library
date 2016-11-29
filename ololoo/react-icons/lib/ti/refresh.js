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

var TiRefresh = function (_React$Component) {
    _inherits(TiRefresh, _React$Component);

    function TiRefresh() {
        _classCallCheck(this, TiRefresh);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiRefresh).apply(this, arguments));
    }

    _createClass(TiRefresh, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.453333333333333 21.983333333333334h8.546666666666667v-8.541666666666668c-0.013333333333331865-1.8916666666666675-1.1166666666666671-2.3466666666666676-2.4549999999999983-1.0083333333333329l-1.923333333333332 1.9283333333333328c-1.6916666666666664-1.325000000000001-3.7616666666666667-2.0500000000000007-5.943333333333335-2.0500000000000007-2.583333333333332 0-5.016666666666666 1.006666666666666-6.84 2.833333333333334-1.833333333333334 1.821666666666669-2.8383333333333347 4.258333333333333-2.8383333333333347 6.841666666666669 0 2.59 1.006666666666666 5.021666666666665 2.833333333333334 6.846666666666668 1.833333333333334 1.8249999999999993 4.261666666666665 2.833333333333332 6.846666666666666 2.833333333333332 2.583333333333332 0 5.016666666666666-1.0083333333333329 6.843333333333334-2.8383333333333347 0.4933333333333323-0.495000000000001 0.9299999999999997-1.033333333333335 1.3000000000000007-1.6083333333333343 0.5783333333333331-0.8999999999999986 0.31666666666666643-2.1000000000000014-0.5833333333333321-2.6750000000000007-0.8999999999999986-0.576666666666668-2.0966666666666676-0.31666666666666643-2.673333333333332 0.5833333333333321-0.22333333333333272 0.34499999999999886-0.4883333333333333 0.6666666666666679-0.783333333333335 0.966666666666665-1.0966666666666676 1.0966666666666676-2.5549999999999997 1.6999999999999993-4.105 1.6999999999999993s-3.008333333333333-0.6000000000000014-4.106666666666666-1.6999999999999993c-1.0950000000000006-1.0966666666666676-1.6999999999999993-2.5549999999999997-1.6999999999999993-4.108333333333334 0-1.5500000000000007 0.6033333333333335-3.008333333333333 1.6999999999999993-4.100000000000001 1.1000000000000014-1.1000000000000014 2.5566666666666684-1.7033333333333331 4.106666666666666-1.7033333333333331 1.1466666666666683 0 2.2433333333333323 0.33333333333333215 3.1833333333333336 0.9533333333333331l-2.416666666666668 2.416666666666668c-1.336666666666666 1.3383333333333347-0.8833333333333329 2.4333333333333336 1.0083333333333329 2.4333333333333336z' })
                )
            );
        }
    }]);

    return TiRefresh;
}(React.Component);

exports.default = TiRefresh;
module.exports = exports['default'];