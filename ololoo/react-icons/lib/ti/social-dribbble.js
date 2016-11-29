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

var TiSocialDribbble = function (_React$Component) {
    _inherits(TiSocialDribbble, _React$Component);

    function TiSocialDribbble() {
        _classCallCheck(this, TiSocialDribbble);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiSocialDribbble).apply(this, arguments));
    }

    _createClass(TiSocialDribbble, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 5c-8.27 0-15 6.7283333333333335-15 15s6.73 15 15 15 15-6.728333333333332 15-15-6.73-15-15-15z m11.603333333333332 13.791666666666668c-2.9416666666666664-0.4833333333333343-5.890000000000001-0.3116666666666674-8.675 0.4366666666666674-0.3000000000000007-0.7266666666666666-0.6383333333333319-1.4333333333333336-0.9833333333333343-2.138333333333332 2.370000000000001-1.3499999999999996 4.475000000000001-3.1866666666666674 6.188333333333333-5.436666666666667 1.9050000000000011 1.8550000000000004 3.1833333333333336 4.350000000000001 3.469999999999999 7.138333333333335z m-4.719999999999999-8.191666666666666c-1.5666666666666664 2.073333333333334-3.5 3.7666666666666657-5.666666666666668 5.016666666666666-1.3049999999999997-2.408333333333333-2.883333333333333-4.666666666666668-4.68-6.760000000000002 1.0966666666666676-0.3399999999999981 2.258333333333333-0.5233333333333317 3.4633333333333347-0.5233333333333317 2.5749999999999993 0 4.949999999999999 0.8499999999999996 6.883333333333333 2.2666666666666675z m-11.971666666666668-1.083333333333334c1.8666666666666671 2.110000000000001 3.4883333333333333 4.41 4.82 6.863333333333335-3.4366666666666674 1.5949999999999989-7.328333333333333 2.1566666666666663-11.196666666666667 1.5 0.6799999999999997-3.6883333333333326 3.0999999999999996-6.766666666666666 6.375000000000002-8.361666666666668z m-6.578333333333331 10.483333333333333c0-0.16666666666666785 0.016666666666667496-0.3249999999999993 0.025000000000000355-0.48999999999999844 1.126666666666667 0.18333333333333357 2.254999999999999 0.3133333333333326 3.373333333333333 0.3133333333333326 3.043333333333333 0 6.01-0.7100000000000009 8.726666666666668-1.9783333333333353 0.30333333333333456 0.6216666666666661 0.6083333333333343 1.2399999999999984 0.875 1.8783333333333339-4.046666666666667 1.4433333333333316-7.636666666666667 4.143333333333334-10.166666666666666 7.876666666666669-1.7600000000000016-2.0450000000000017-2.8333333333333357-4.696666666666665-2.8333333333333357-7.600000000000001z m3.9883333333333333 8.761666666666667c2.383333333333333-3.5500000000000007 5.775-6.121666666666666 9.606666666666667-7.478333333333335 1.1383333333333319 3.09 1.8716666666666661 6.324999999999999 2.1533333333333324 9.633333333333333-1.2733333333333334 0.47666666666666657-2.6466666666666683 0.75-4.083333333333332 0.75-2.9416666666666664 0-5.625-1.1000000000000014-7.678333333333335-2.905000000000001z m13.356666666666667 1.4199999999999982c-0.326666666666668-3.2216666666666676-1.0500000000000007-6.371666666666666-2.155000000000001-9.388333333333335 2.6066666666666656-0.673333333333332 5.370000000000001-0.8099999999999987 8.116666666666667-0.31666666666666643-0.16666666666666785 4.169999999999998-2.5249999999999986 7.780000000000001-5.961666666666666 9.703333333333333z' })
                )
            );
        }
    }]);

    return TiSocialDribbble;
}(React.Component);

exports.default = TiSocialDribbble;
module.exports = exports['default'];