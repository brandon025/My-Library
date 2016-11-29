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

var FaPauseCircleO = function (_React$Component) {
    _inherits(FaPauseCircleO, _React$Component);

    function FaPauseCircleO() {
        _classCallCheck(this, FaPauseCircleO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaPauseCircleO).apply(this, arguments));
    }

    _createClass(FaPauseCircleO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 2.857142857142857q4.665714285714287 0 8.604285714285716 2.3000000000000003t6.238571428571426 6.2371428571428575 2.3000000000000043 8.605714285714285-2.299999999999997 8.602857142857143-6.238571428571429 6.238571428571429-8.60428571428572 2.297142857142859-8.604285714285714-2.299999999999997-6.238571428571428-6.237142857142857-2.3000000000000003-8.601428571428578 2.3000000000000003-8.605714285714287 6.238571428571428-6.237142857142856 8.604285714285714-2.3000000000000003z m0 29.28571428571428q3.3028571428571425 0 6.094285714285714-1.62857142857143t4.419999999999998-4.421428571428571 1.6285714285714334-6.092857142857138-1.62857142857143-6.095714285714287-4.419999999999998-4.42-6.094285714285718-1.63142857142857-6.094285714285714 1.6285714285714281-4.42 4.424285714285714-1.6285714285714281 6.094285714285714 1.6285714285714281 6.092857142857142 4.42 4.420000000000002 6.094285714285714 1.6300000000000026z m2.1428571428571423-5q-0.31428571428571317 0-0.514285714285716-0.1999999999999993t-0.19999999999999574-0.5142857142857089v-12.857142857142858q0-0.31428571428571495 0.1999999999999993-0.5142857142857142t0.5142857142857125-0.20000000000000107h4.285714285714285q0.31428571428571317 0 0.514285714285716 0.1999999999999993t0.1999999999999993 0.5142857142857142v12.85714285714286q0 0.31428571428571317-0.1999999999999993 0.5142857142857125t-0.5142857142857125 0.1999999999999993h-4.285714285714285z m-8.571428571428571 0q-0.31428571428571495 0-0.5142857142857142-0.1999999999999993t-0.1999999999999993-0.5142857142857089v-12.857142857142858q0-0.31428571428571495 0.1999999999999993-0.5142857142857142t0.5142857142857142-0.20000000000000107h4.2857142857142865q0.31428571428571317 0 0.514285714285716 0.1999999999999993t0.1999999999999993 0.5142857142857142v12.85714285714286q0 0.31428571428571317-0.1999999999999993 0.5142857142857125t-0.5142857142857125 0.1999999999999993h-4.285714285714285z' })
                )
            );
        }
    }]);

    return FaPauseCircleO;
}(React.Component);

exports.default = FaPauseCircleO;
module.exports = exports['default'];