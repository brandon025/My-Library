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

var FaDotCircleO = function (_React$Component) {
    _inherits(FaDotCircleO, _React$Component);

    function FaDotCircleO() {
        _classCallCheck(this, FaDotCircleO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaDotCircleO).apply(this, arguments));
    }

    _createClass(FaDotCircleO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.714285714285715 20q0 2.3657142857142865-1.6742857142857126 4.039999999999999t-4.040000000000003 1.6742857142857162-4.039999999999999-1.6742857142857126-1.6742857142857144-4.040000000000003 1.6742857142857144-4.039999999999999 4.039999999999999-1.6742857142857144 4.039999999999999 1.6742857142857144 1.6742857142857162 4.039999999999999z m-5.714285714285715-12.142857142857142q-3.3028571428571425 0-6.094285714285714 1.6285714285714281t-4.42 4.4228571428571435-1.6285714285714281 6.091428571428571 1.6285714285714281 6.095714285714287 4.42 4.420000000000002 6.094285714285714 1.6314285714285717 6.094285714285714-1.62857142857143 4.419999999999998-4.421428571428571 1.6285714285714334-6.09714285714286-1.62857142857143-6.092857142857142-4.419999999999998-4.42-6.094285714285718-1.6300000000000008z m17.142857142857146 12.142857142857142q0 4.665714285714287-2.299999999999997 8.604285714285716t-6.237142857142857 6.238571428571426-8.605714285714292 2.3000000000000043-8.6-2.3000000000000043-6.242857142857143-6.238571428571426-2.295714285714286-8.604285714285716 2.3000000000000003-8.604285714285714 6.234285714285714-6.238571428571428 8.604285714285714-2.3000000000000003 8.605714285714285 2.3000000000000003 6.238571428571426 6.238571428571428 2.298571428571435 8.604285714285714z' })
                )
            );
        }
    }]);

    return FaDotCircleO;
}(React.Component);

exports.default = FaDotCircleO;
module.exports = exports['default'];