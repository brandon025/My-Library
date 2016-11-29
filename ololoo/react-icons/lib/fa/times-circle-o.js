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

var FaTimesCircleO = function (_React$Component) {
    _inherits(FaTimesCircleO, _React$Component);

    function FaTimesCircleO() {
        _classCallCheck(this, FaTimesCircleO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaTimesCircleO).apply(this, arguments));
    }

    _createClass(FaTimesCircleO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.342857142857145 24.085714285714285l-3.2571428571428562 3.2571428571428562q-0.2228571428571442 0.2228571428571442-0.5142857142857125 0.2228571428571442t-0.5114285714285707-0.2228571428571442l-3.0571428571428605-3.057142857142857-3.0600000000000023 3.0571428571428605q-0.2228571428571442 0.2228571428571442-0.5142857142857125 0.2228571428571442t-0.5114285714285707-0.2228571428571442l-3.2571428571428562-3.2571428571428562q-0.2242857142857151-0.2242857142857133-0.2242857142857151-0.5142857142857125t0.22285714285714242-0.5142857142857125l3.0599999999999987-3.057142857142864-3.057142857142857-3.057142857142857q-0.2242857142857151-0.2242857142857133-0.2242857142857151-0.5142857142857125t0.22285714285714242-0.5142857142857142l3.26-3.257142857142858q0.22285714285714242-0.22285714285714242 0.5142857142857142-0.22285714285714242t0.5114285714285707 0.22285714285714242l3.054285714285715 3.057142857142857 3.0599999999999987-3.057142857142857q0.2228571428571442-0.22285714285714242 0.514285714285716-0.22285714285714242t0.5114285714285707 0.22285714285714242l3.2571428571428562 3.2571428571428562q0.2242857142857133 0.2242857142857133 0.2242857142857133 0.514285714285716t-0.2228571428571442 0.5142857142857125l-3.058571428571426 3.057142857142857 3.057142857142857 3.057142857142857q0.2242857142857133 0.2242857142857133 0.2242857142857133 0.5142857142857125t-0.2228571428571442 0.5142857142857125z m4.800000000000001-4.085714285714285q0-3.3028571428571425-1.62857142857143-6.094285714285714t-4.4228571428571435-4.42-6.0914285714285725-1.6285714285714281-6.097142857142858 1.6285714285714281-4.417142857142856 4.42-1.6328571428571426 6.094285714285714 1.6285714285714281 6.094285714285714 4.421428571428573 4.419999999999998 6.097142857142856 1.6285714285714334 6.092857142857142-1.62857142857143 4.420000000000002-4.419999999999998 1.6300000000000026-6.094285714285718z m5 0q0 4.665714285714287-2.299999999999997 8.604285714285716t-6.237142857142857 6.238571428571426-8.605714285714292 2.3000000000000043-8.6-2.3000000000000043-6.242857142857143-6.238571428571426-2.295714285714286-8.604285714285716 2.3000000000000003-8.604285714285714 6.234285714285714-6.238571428571428 8.604285714285714-2.3000000000000003 8.605714285714285 2.3000000000000003 6.238571428571426 6.238571428571428 2.298571428571435 8.604285714285714z' })
                )
            );
        }
    }]);

    return FaTimesCircleO;
}(React.Component);

exports.default = FaTimesCircleO;
module.exports = exports['default'];