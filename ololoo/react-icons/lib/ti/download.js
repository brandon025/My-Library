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

var TiDownload = function (_React$Component) {
    _inherits(TiDownload, _React$Component);

    function TiDownload() {
        _classCallCheck(this, TiDownload);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiDownload).apply(this, arguments));
    }

    _createClass(TiDownload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.845000000000002 12.34c-0.31666666666666643-0.3133333333333326-0.7466666666666661-0.4716666666666658-1.1783333333333346-0.4716666666666658s-0.8633333333333333 0.16000000000000014-1.1783333333333346 0.4733333333333327l-3.8216666666666654 3.8199999999999985v-11.161666666666665c0-0.9199999999999999-0.7466666666666661-1.666666666666667-1.6666666666666679-1.666666666666667s-1.6666666666666679 0.746666666666667-1.6666666666666679 1.666666666666667v11.161666666666669l-3.8216666666666637-3.821666666666669c-0.31666666666666643-0.3133333333333326-0.7333333333333325-0.4883333333333333-1.1783333333333328-0.4883333333333333s-0.8633333333333333 0.17666666666666586-1.1783333333333328 0.4900000000000002c-0.6500000000000004 0.6500000000000004-0.6500000000000004 1.706666666666667 0 2.3566666666666674l7.844999999999997 7.801666666666666 7.850000000000001-7.806666666666668c0.6449999999999996-0.6449999999999996 0.6449999999999996-1.7033333333333331-0.004999999999999005-2.3533333333333335z m7.133333333333329 14.326666666666668c0-0.1750000000000007-0.006666666666667709-0.3500000000000014-0.06666666666666998-0.5266666666666673l-3.333333333333332-10c-0.22333333333332916-0.6833333333333353-0.8583333333333307-1.1400000000000006-1.5783333333333296-1.1400000000000006h-0.36666666666666714c-0.15500000000000114 0.3133333333333326-0.3500000000000014 0.6133333333333333-0.6099999999999994 0.875l-2.469999999999999 2.4583333333333357h2.246666666666666l2.7783333333333324 8.333333333333336h-23.155l2.778333333333336-8.333333333333336h2.25l-2.4766666666666683-2.458333333333334c-0.25833333333333286-0.2616666666666667-0.4549999999999983-0.5616666666666674-0.6083333333333325-0.8750000000000018h-0.36666666666666714c-0.7166666666666668 0-1.3533333333333335 0.4583333333333339-1.58 1.1400000000000006l-3.333333333333334 10c-0.05833333333333357 0.1750000000000007-0.06666666666666643 0.3500000000000014-0.06666666666666643 0.5266666666666673-0.019999999999999574 0-0.019999999999999574 8.333333333333332-0.019999999999999574 8.333333333333332 0 0.9216666666666669 0.7450000000000001 1.6666666666666643 1.666666666666667 1.6666666666666643h26.666666666666668c0.9216666666666669 0 1.6666666666666643-0.7449999999999974 1.6666666666666643-1.6666666666666643 0 0 0-8.333333333333336-0.021666666666668277-8.333333333333336z' })
                )
            );
        }
    }]);

    return TiDownload;
}(React.Component);

exports.default = TiDownload;
module.exports = exports['default'];