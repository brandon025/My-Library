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

var TiInfoOutline = function (_React$Component) {
    _inherits(TiInfoOutline, _React$Component);

    function TiInfoOutline() {
        _classCallCheck(this, TiInfoOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiInfoOutline).apply(this, arguments));
    }

    _createClass(TiInfoOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 9.183333333333334c0.9333333333333336 0 1.8666666666666671 0.5916666666666668 2.573333333333334 1.7716666666666665l9.853333333333335 16.423333333333332c1.4166666666666643 2.3583333333333343 0.3233333333333306 4.2883333333333375-2.4266666666666694 4.2883333333333375h-20c-2.75 0-3.8450000000000006-1.9333333333333336-2.4266666666666667-4.288333333333334l9.853333333333332-16.423333333333332c0.7066666666666706-1.1800000000000015 1.6400000000000006-1.7716666666666683 2.573333333333334-1.7716666666666683z m0-3.333333333333334c-2.16 0-4.136666666666667 1.2333333333333334-5.433333333333334 3.3866666666666667l-9.850000000000001 16.42666666666667c-1.3116666666666665 2.1833333333333336-1.455 4.508333333333333-0.39333333333333353 6.383333333333333s3.1333333333333355 2.953333333333333 5.6766666666666685 2.953333333333333h20c2.5450000000000017 0 4.616666666666667-1.076666666666668 5.676666666666669-2.950000000000003s0.9166666666666643-4.203333333333333-0.3916666666666657-6.383333333333333l-9.850000000000001-16.425c-1.3016666666666659-2.1583333333333297-3.2766666666666673-3.391666666666664-5.435000000000002-3.391666666666664z m2.5 22.06333333333334s-1.1833333333333336 0.5999999999999979-1.7916666666666679 0.303333333333331c-0.6033333333333317-0.3066666666666684-0.7233333333333327-0.8999999999999986-0.38333333333333286-1.9199999999999982l0.6783333333333346-2.0333333333333314c0.6716666666666669-2.0366666666666653-0.1999999999999993-3.461666666666666-1.8033333333333346-3.5533333333333346-2.0966666666666676-0.11666666666666714-3.366666666666667 1.3766666666666652-3.366666666666667 1.3766666666666652s1.1833333333333336-0.6083333333333343 1.7916666666666679-0.30333333333333456c0.6033333333333317 0.3066666666666684 0.7199999999999989 0.8999999999999986 0.38333333333333286 1.9200000000000017l-0.6783333333333346 2.0333333333333314c-0.6750000000000007 2.0366666666666653 0.1999999999999993 3.4583333333333357 1.8033333333333346 3.5533333333333346 2.0966666666666676 0.11666666666666714 3.366666666666667-1.3766666666666652 3.366666666666667-1.3766666666666652z m-0.33333333333333215-11.246666666666673c0 1.1999999999999993-0.966666666666665 2.166666666666668-2.166666666666668 2.166666666666668s-2.166666666666668-0.966666666666665-2.166666666666668-2.166666666666668c0-1.1999999999999993 0.966666666666665-2.166666666666668 2.166666666666668-2.166666666666668s2.166666666666668 0.9666666666666668 2.166666666666668 2.166666666666668z' })
                )
            );
        }
    }]);

    return TiInfoOutline;
}(React.Component);

exports.default = TiInfoOutline;
module.exports = exports['default'];