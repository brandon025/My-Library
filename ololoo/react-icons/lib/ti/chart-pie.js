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

var TiChartPie = function (_React$Component) {
    _inherits(TiChartPie, _React$Component);

    function TiChartPie() {
        _classCallCheck(this, TiChartPie);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiChartPie).apply(this, arguments));
    }

    _createClass(TiChartPie, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.35666666666667 23.3l8.18 8.203333333333333c0.6499999999999986 0.6500000000000021 1.6499999999999986 0.5999999999999979 2.1433333333333344-0.17666666666666586 1.466666666666665-2.323333333333334 2.321666666666669-5.073333333333334 2.321666666666669-8.024999999999999 0-3.5500000000000007-1.2333333333333343-6.808333333333334-3.2833333333333314-9.383333333333333l-9.36 9.383333333333333z m-4.356666666666669 0.6933333333333351v-12.260000000000002c-5.65 0.8133333333333326-10 5.676666666666666-10 11.56666666666667 0 6.460000000000001 5.2233333333333345 11.699999999999996 11.666666666666668 11.699999999999996 2.620000000000001 0 5.030000000000001-0.8766666666666652 6.976666666666667-2.338333333333331l-8.643333333333334-8.666666666666668z m12.216666666666665-13.638333333333335c0.6499999999999986-0.6500000000000004 0.6099999999999994-1.666666666666666-0.14666666666666828-2.1883333333333326-2.0883333333333347-1.4466666666666672-4.491666666666667-2.466666666666667-7.083333333333332-2.9416666666666664-0.908333333333335-0.16666666666666696-1.6533333333333324 0.5199999999999996-1.6533333333333324 1.4416666666666664v12.599999999999998l8.883333333333336-8.911666666666667z' })
                )
            );
        }
    }]);

    return TiChartPie;
}(React.Component);

exports.default = TiChartPie;
module.exports = exports['default'];