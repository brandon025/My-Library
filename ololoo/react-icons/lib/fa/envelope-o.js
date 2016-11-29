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

var FaEnvelopeO = function (_React$Component) {
    _inherits(FaEnvelopeO, _React$Component);

    function FaEnvelopeO() {
        _classCallCheck(this, FaEnvelopeO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaEnvelopeO).apply(this, arguments));
    }

    _createClass(FaEnvelopeO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.142857142857146 33.57142857142857v-17.142857142857142q-0.7142857142857153 0.8028571428571425-1.5399999999999991 1.4714285714285715-5.982857142857142 4.600000000000001-9.508571428571429 7.545714285714286-1.138571428571428 0.9600000000000009-1.8528571428571432 1.4957142857142856t-1.9328571428571415 1.081428571428571-2.28857142857143 0.5471428571428589h-0.04285714285714448q-1.071428571428573 0-2.289999999999999-0.5471428571428589t-1.9314285714285724-1.0828571428571436-1.8528571428571432-1.4971428571428582q-3.5285714285714285-2.9471428571428575-9.508571428571429-7.5428571428571445-0.8228571428571434-0.6714285714285637-1.5371428571428578-1.4714285714285644v17.14285714285714q0 0.28999999999999915 0.20999999999999996 0.5028571428571453t0.5042857142857144 0.21142857142856997h32.85714285714286q0.28857142857143003 0 0.5-0.21142857142856997t0.2142857142857153-0.5028571428571453z m0-23.46v-0.5471428571428572l-0.01142857142857423-0.2900000000000009-0.06714285714285495-0.27857142857142847-0.12285714285714278-0.1999999999999993-0.20285714285714107-0.16857142857142904-0.3142857142857167-0.05714285714285694h-32.85714285714286q-0.2885714285714287 0-0.5 0.21142857142857174t-0.2142857142857144 0.5028571428571436q0 3.75 3.282857142857143 6.34 4.308571428571429 3.3928571428571423 8.951428571428572 7.075714285714287 0.13428571428571345 0.11428571428571388 0.781428571428572 0.6600000000000001t1.025714285714285 0.8371428571428581 0.9928571428571438 0.7028571428571411 1.12857142857143 0.6142857142857139 0.9571428571428555 0.1999999999999993h0.04571428571428626q0.4471428571428575 0 0.9600000000000009-0.1999999999999993t1.12857142857143-0.6142857142857139 0.9914285714285711-0.7028571428571411 1.0285714285714285-0.8371428571428581 0.7814285714285703-0.6571428571428584q4.642857142857142-3.685714285714287 8.951428571428572-7.0771428571428565 1.2057142857142864-0.9600000000000009 2.24285714285714-2.578571428571429t1.0400000000000063-2.9357142857142833z m2.857142857142854-0.8257142857142856v24.285714285714285q0 1.471428571428575-1.048571428571428 2.5228571428571414t-2.5228571428571414 1.0485714285714351h-32.85714285714286q-1.4714285714285715 0-2.522857142857143-1.048571428571428t-1.0485714285714263-2.5228571428571485v-24.285714285714285q0-1.4714285714285715 1.0485714285714285-2.522857142857143t2.522857142857143-1.0485714285714272h32.85714285714286q1.471428571428575 0 2.5228571428571414 1.048571428571429t1.048571428571428 2.522857142857143z' })
                )
            );
        }
    }]);

    return FaEnvelopeO;
}(React.Component);

exports.default = FaEnvelopeO;
module.exports = exports['default'];