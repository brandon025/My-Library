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

var FaRepeat = function (_React$Component) {
    _inherits(FaRepeat, _React$Component);

    function FaRepeat() {
        _classCallCheck(this, FaRepeat);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaRepeat).apply(this, arguments));
    }

    _createClass(FaRepeat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.142857142857146 5.714285714285714v10q0 0.5799999999999983-0.42428571428571615 1.0042857142857144t-1.0042857142857144 0.4242857142857126h-10q-0.937142857142856 0-1.3171428571428585-0.8928571428571423-0.379999999999999-0.8714285714285719 0.31428571428571317-1.5399999999999991l3.078571428571429-3.08q-3.3042857142857116-3.0585714285714296-7.789999999999999-3.0585714285714296-2.321428571428573 0-4.431428571428572 0.9042857142857148t-3.6500000000000004 2.442857142857143-2.442857142857143 3.6514285714285712-0.9057142857142857 4.428571428571431 0.9028571428571421 4.432857142857145 2.442857142857143 3.6499999999999986 3.6514285714285712 2.442857142857143 4.431428571428572 0.9057142857142857q2.6571428571428584 0 5.022857142857145-1.1600000000000001t3.9957142857142856-3.2814285714285703q0.15714285714285836-0.2228571428571442 0.5142857142857125-0.2671428571428578 0.3114285714285714 0 0.5571428571428569 0.1999999999999993l3.057142857142857 3.081428571428571q0.20285714285714107 0.17857142857142705 0.2142857142857153 0.4571428571428555t-0.16857142857142549 0.5028571428571418q-2.4328571428571415 2.947142857142854-5.892857142857142 4.564285714285713t-7.298571428571432 1.6200000000000045q-3.481428571428573 0-6.65-1.3614285714285685t-5.468571428571429-3.6599999999999966-3.6599999999999993-5.468571428571437-1.3614285714285712-6.651428571428571 1.3614285714285712-6.651428571428571 3.6599999999999993-5.468571428571431 5.468571428571429-3.6599999999999993 6.65-1.3614285714285717q3.282857142857143 0 6.3514285714285705 1.2385714285714289t5.4571428571428555 3.492857142857143l2.8999999999999986-2.88q0.6485714285714295-0.6899999999999995 1.5642857142857167-0.3114285714285714 0.8714285714285737 0.3799999999999999 0.8714285714285737 1.3171428571428567z' })
                )
            );
        }
    }]);

    return FaRepeat;
}(React.Component);

exports.default = FaRepeat;
module.exports = exports['default'];