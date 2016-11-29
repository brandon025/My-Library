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

var TiRssOutline = function (_React$Component) {
    _inherits(TiRssOutline, _React$Component);

    function TiRssOutline() {
        _classCallCheck(this, TiRssOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiRssOutline).apply(this, arguments));
    }

    _createClass(TiRssOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.333333333333334 8.333333333333334c-2.7616666666666667 0-5.016666666666666 2.2366666666666664-5.016666666666666 5l0.0066666666666659324 15.000000000000002c0 3.6799999999999997 2.9883333333333333 6.666666666666664 6.67 6.666666666666664h15.006666666666666c2.7566666666666677 0 5-2.2433333333333323 5-5 0-11.966666666666669-9.700000000000003-21.666666666666668-21.666666666666668-21.666666666666668z m1.666666666666666 23.333333333333336c-1.8399999999999999 0-3.333333333333334-1.4916666666666671-3.333333333333334-3.333333333333332-0.0033333333333338544-1.841666666666665 1.4900000000000002-3.333333333333332 3.333333333333334-3.333333333333332 1.8433333333333337-0.004999999999999005 3.336666666666666 1.4883333333333333 3.333333333333332 3.333333333333332 0.0033333333333338544 1.841666666666665-1.4899999999999984 3.333333333333332-3.333333333333334 3.333333333333332z m7.5 0c-1.3833333333333329 0-2.5-1.120000000000001-2.5-2.5 0-3.219999999999999-2.616666666666667-5.833333333333336-5.833333333333334-5.833333333333336-1.3833333333333329 0-2.5-1.120000000000001-2.5-2.5s1.1166666666666671-2.5 2.5000000000000018-2.5c5.973333333333333 0 10.833333333333332 4.858333333333334 10.833333333333332 10.833333333333336 0 1.379999999999999-1.1166666666666671 2.5-2.5 2.5z m6.666666666666668 0c-1.3833333333333329 0-2.5-1.120000000000001-2.5-2.5 0-6.895-5.606666666666666-12.5-12.5-12.5-1.3833333333333346-3.552713678800501e-15-2.5-1.1216666666666715-2.5-2.5000000000000036s1.1166666666666654-2.5 2.5-2.5c9.649999999999999 0 17.5 7.850000000000001 17.5 17.5 0 1.379999999999999-1.1166666666666671 2.5-2.5 2.5z' })
                )
            );
        }
    }]);

    return TiRssOutline;
}(React.Component);

exports.default = TiRssOutline;
module.exports = exports['default'];