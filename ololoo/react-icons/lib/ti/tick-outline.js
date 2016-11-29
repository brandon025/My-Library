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

var TiTickOutline = function (_React$Component) {
    _inherits(TiTickOutline, _React$Component);

    function TiTickOutline() {
        _classCallCheck(this, TiTickOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiTickOutline).apply(this, arguments));
    }

    _createClass(TiTickOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.333333333333336 33.333333333333336c-1.3333333333333321 0-2.591666666666667-0.5200000000000031-3.533333333333333-1.4666666666666686l-6.666666666666666-6.666666666666668c-0.9500000000000037-0.9400000000000013-1.4666666666666694-2.1999999999999957-1.4666666666666694-3.5333333333333314s0.5200000000000005-2.591666666666665 1.466666666666666-3.5366666666666653c1.8866666666666667-1.8883333333333319 5.18-1.8883333333333319 7.066666666666666 0l1.9833333333333343 1.9800000000000004 5.113333333333333-9.205c0.8766666666666687-1.5883333333333365 2.5533333333333346-2.571666666666669 4.373333333333331-2.571666666666669 0.8449999999999989 0 1.6866666666666674 0.21666666666666679 2.426666666666666 0.6283333333333339 1.1666666666666679 0.6500000000000004 2.0100000000000016 1.713333333333333 2.378333333333334 2.996666666666668s0.211666666666666 2.633333333333333-0.4383333333333326 3.8033333333333346l-8.333333333333332 15c-0.7566666666666677 1.3633333333333297-2.133333333333333 2.306666666666665-3.676666666666666 2.5233333333333334-0.23333333333333428 0.03333333333333144-0.461666666666666 0.04999999999999716-0.6933333333333316 0.04999999999999716z m-6.666666666666668-13.333333333333336c-0.4466666666666672 0-0.8633333333333333 0.173333333333332-1.1783333333333328 0.4883333333333333s-0.48833333333333506 0.7333333333333343-0.48833333333333506 1.1783333333333346 0.17333333333333378 0.8633333333333333 0.4883333333333333 1.1783333333333346l6.666666666666668 6.666666666666668c0.37166666666666615 0.36666666666666714 0.8716666666666661 0.5500000000000007 1.4066666666666663 0.47166666666666757 0.5199999999999996-0.07166666666666544 0.9766666666666666-0.3866666666666667 1.2283333333333317-0.8399999999999999l8.333333333333336-15c0.216666666666665-0.38833333333333364 0.2666666666666657-0.8383333333333329 0.14666666666666828-1.2666666666666675s-0.40500000000000114-0.7833333333333332-0.7966666666666669-1c-0.788333333333334-0.4399999999999995-1.8333333333333321-0.13000000000000078-2.2616666666666667 0.6466666666666665l-7.261666666666667 13.066666666666666-5.1033333333333335-5.100000000000001c-0.31666666666667-0.31833333333333513-0.7333333333333361-0.490000000000002-1.1800000000000015-0.490000000000002z' })
                )
            );
        }
    }]);

    return TiTickOutline;
}(React.Component);

exports.default = TiTickOutline;
module.exports = exports['default'];