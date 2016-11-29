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

var MdGesture = function (_React$Component) {
    _inherits(MdGesture, _React$Component);

    function MdGesture() {
        _classCallCheck(this, MdGesture);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdGesture).apply(this, arguments));
    }

    _createClass(MdGesture, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.125 30.938333333333333q1.0933333333333337 0 2.1883333333333326-1.4450000000000003t1.4066666666666663-4.413333333333334q-2.3433333333333337 0.625-3.5933333333333337 2.1099999999999994t-1.25 2.5q0 0.5466666666666669 0.39000000000000057 0.8999999999999986t0.8599999999999994 0.3500000000000014z m-15.466666666666667-19.455l-2.8916666666666666-2.8100000000000005q0.7833333333333332-0.9383333333333335 1.4066666666666672-1.5633333333333335 2.1099999999999994-2.1100000000000003 4.533333333333333-2.1100000000000003 1.4833333333333343 0 2.8499999999999996 1.17t1.3666666666666671 3.5933333333333337q0 2.3433333333333337-2.1883333333333344 5.466666666666667-2.1866666666666674 3.0500000000000007-3.045 5.861666666666668-0.4666666666666668 1.3283333333333331-0.27333333333333343 2.2666666666666657t0.8166666666666664 0.9366666666666674q0.7050000000000001 0 1.876666666666667-1.4066666666666663 1.7166666666666668-1.7166666666666686 3.828333333333333-4.533333333333335 3.75-4.686666666666667 8.203333333333333-4.686666666666667 3.2833333333333314 0 4.883333333333333 2.1500000000000004t1.836666666666666 4.8050000000000015h4.138333333333335v4.140000000000001h-4.061666666666667q-0.466666666666665 5.390000000000001-2.8900000000000006 7.813333333333333t-5 2.421666666666667q-2.1900000000000013 0-3.75-1.5233333333333334t-1.5666666666666664-3.633333333333333q0-2.578333333333333 2.344999999999999-5.390000000000001t6.640000000000001-3.5933333333333337q-0.07666666666666799-0.625-0.11666666666666714-0.8599999999999994t-0.23333333333333428-0.7416666666666671-0.466666666666665-0.7416666666666671-0.8216666666666654-0.4299999999999997-1.3283333333333331-0.19500000000000028q-2.1883333333333326 0-6.796666666666667 5.703333333333333-1.3283333333333331 1.6400000000000006-1.836666666666666 2.2266666666666666t-1.4450000000000003 1.3666666666666671-1.7966666666666669 1.0166666666666657q-2.7333333333333343 0.8599999999999994-4.6883333333333335-1.0166666666666657t-1.9533333333333331-4.686666666666667q0-1.1716666666666669 0.4299999999999997-2.578333333333333t1.1333333333333337-2.7333333333333343 1.3283333333333331-2.383333333333333 1.211666666666666-1.913333333333334 0.663333333333334-0.9416666666666647q1.3283333333333331-2.1899999999999995 0.4666666666666668-2.5-0.5449999999999999-0.23666666666666636-2.8116666666666674 2.0299999999999994z' })
                )
            );
        }
    }]);

    return MdGesture;
}(React.Component);

exports.default = MdGesture;
module.exports = exports['default'];