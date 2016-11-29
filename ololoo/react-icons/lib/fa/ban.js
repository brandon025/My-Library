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

var FaBan = function (_React$Component) {
    _inherits(FaBan, _React$Component);

    function FaBan() {
        _classCallCheck(this, FaBan);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaBan).apply(this, arguments));
    }

    _createClass(FaBan, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.142857142857146 19.93285714285714q0-3.5942857142857143-1.942857142857143-6.585714285714285l-16.828571428571433 16.810000000000002q3.0571428571428605 1.9857142857142875 6.62857142857143 1.9857142857142875 2.4785714285714278 0 4.722857142857144-0.9714285714285715t3.87142857142857-2.6000000000000014 2.5914285714285725-3.894285714285715 0.9599999999999973-4.742857142857144z m-22.300000000000004 6.674285714285716l16.85714285714286-16.82857142857143q-3.0171428571428613-2.0357142857142856-6.700000000000003-2.0357142857142856-3.3028571428571425 0-6.094285714285714 1.628571428571429t-4.42 4.4471428571428575-1.6285714285714281 6.114285714285716q0 3.617142857142859 1.9857142857142858 6.675714285714285z m27.300000000000004-6.674285714285716q0 3.5042857142857144-1.3614285714285685 6.6971428571428575t-3.6499999999999986 5.492857142857144-5.46857142857143 3.6599999999999966-6.662857142857149 1.3600000000000065-6.662857142857142-1.3614285714285685-5.468571428571429-3.6599999999999966-3.6500000000000004-5.492857142857151-1.3614285714285717-6.694285714285716 1.3614285714285717-6.685714285714285 3.6500000000000004-5.4799999999999995 5.468571428571429-3.6599999999999993 6.662857142857142-1.3628571428571448 6.662857142857142 1.3614285714285712 5.46857142857143 3.6599999999999993 3.6499999999999986 5.479999999999999 1.3614285714285685 6.685714285714283z' })
                )
            );
        }
    }]);

    return FaBan;
}(React.Component);

exports.default = FaBan;
module.exports = exports['default'];