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

var TiTicket = function (_React$Component) {
    _inherits(TiTicket, _React$Component);

    function TiTicket() {
        _classCallCheck(this, TiTicket);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiTicket).apply(this, arguments));
    }

    _createClass(TiTicket, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.80833333333334 13.450000000000001l-8.941666666666666-8.936666666666667c-1.8783333333333339-1.88-5.183333333333334-1.8933333333333335-7.078333333333333-0.03000000000000025l-15.246666666666666 15c-0.9500000000000002 0.9383333333333326-1.4783333333333335 2.1900000000000013-1.4833333333333334 3.5266666666666673-0.006666666666666821 1.3383333333333347 0.5099999999999998 2.5933333333333337 1.4533333333333331 3.533333333333335l8.94166666666667 8.943333333333335c0.9450000000000003 0.9450000000000003 2.208333333333334 1.4666666666666686 3.5549999999999997 1.4666666666666686 1.3333333333333321 0 2.583333333333332-0.5116666666666632 3.5249999999999986-1.4366666666666674l15.244999999999997-15.005000000000003c0.9500000000000028-0.9366666666666674 1.4799999999999969-2.1883333333333326 1.4833333333333343-3.5249999999999986s-0.509999999999998-2.591666666666667-1.4533333333333331-3.533333333333333z m-2.366666666666667 4.686666666666666l-15.245000000000001 15.004999999999999c-0.6333333333333329 0.6216666666666697-1.7600000000000016 0.6166666666666671-2.3866666666666667-0.00999999999999801l-2.126666666666667-2.126666666666665c1.1833333333333336-1.3083333333333336 1.1566666666666663-3.323333333333334-0.09999999999999964-4.586666666666666-1.2666666666666675-1.2616666666666667-3.283333333333333-1.288333333333334-4.588333333333335-0.10500000000000043l-2.125-2.125c-0.3099999999999996-0.3116666666666674-0.4800000000000004-0.7250000000000014-0.4783333333333335-1.1666666666666679s0.17499999999999982-0.8533333333333317 0.4883333333333333-1.1600000000000001l15.246666666666664-15.005c0.31666666666666643-0.3099999999999996 0.7333333333333343-0.4800000000000004 1.1883333333333326-0.4800000000000004 0.45333333333333314 0 0.879999999999999 0.17166666666666686 1.1966666666666654 0.4883333333333333l2.125 2.125c-1.1833333333333336 1.3083333333333336-1.1566666666666663 3.3233333333333324 0.10333333333333172 4.583333333333334 1.2633333333333319 1.2633333333333336 3.2783333333333324 1.2899999999999991 4.586666666666666 0.10666666666666735l2.123333333333335 2.123333333333333c0.3133333333333326 0.3116666666666674 0.4833333333333343 0.7250000000000014 0.4799999999999969 1.1666666666666679s-0.17499999999999716 0.8500000000000014-0.490000000000002 1.1600000000000001z m-14.108333333333338 10.26666666666667l-7.76-7.759999999999998 9.41666666666667-9.05 7.759999999999998 7.761666666666667-9.416666666666668 9.05z m-5.383333333333333-7.736666666666668l5.406666666666666 5.400000000000002 7.010000000000002-6.733333333333334-5.399999999999999-5.403333333333332-7.016666666666666 6.733333333333334z' })
                )
            );
        }
    }]);

    return TiTicket;
}(React.Component);

exports.default = TiTicket;
module.exports = exports['default'];