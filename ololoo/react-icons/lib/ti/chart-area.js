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

var TiChartArea = function (_React$Component) {
    _inherits(TiChartArea, _React$Component);

    function TiChartArea() {
        _classCallCheck(this, TiChartArea);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiChartArea).apply(this, arguments));
    }

    _createClass(TiChartArea, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.333333333333336 10c0-0.9783333333333335-0.42833333333333456-1.9450000000000003-1.25-2.6033333333333335-1.4383333333333326-1.1500000000000004-3.533333333333335-0.916666666666667-4.686666666666667 0.5199999999999996l-4.649999999999999 5.8100000000000005-4.080000000000002-3.0599999999999987c-1.4400000000000013-1.08-3.4783333333333335-0.8216666666666672-4.6033333333333335 0.5833333333333339l-6.666666666666667 8.333333333333334c-0.4900000000000002 0.6166666666666636-0.7300000000000004 1.3550000000000004-0.7300000000000004 2.083333333333332v5h26.666666666666668v-16.666666666666668z m0 21.666666666666668h-26.666666666666668c-0.9200000000000008 0-1.6666666666666679 0.745000000000001-1.6666666666666679 1.6666666666666679s0.746666666666667 1.6666666666666643 1.666666666666667 1.6666666666666643h26.666666666666668c0.9200000000000017 0 1.6666666666666643-0.7449999999999974 1.6666666666666643-1.6666666666666643s-0.7466666666666697-1.6666666666666679-1.6666666666666643-1.6666666666666679z' })
                )
            );
        }
    }]);

    return TiChartArea;
}(React.Component);

exports.default = TiChartArea;
module.exports = exports['default'];