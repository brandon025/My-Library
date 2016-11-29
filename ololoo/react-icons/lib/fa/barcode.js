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

var FaBarcode = function (_React$Component) {
    _inherits(FaBarcode, _React$Component);

    function FaBarcode() {
        _classCallCheck(this, FaBarcode);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaBarcode).apply(this, arguments));
    }

    _createClass(FaBarcode, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm1.4057142857142857 34.285714285714285h-1.4057142857142857v-31.428571428571427h1.4057142857142857v31.428571428571427z m1.4071428571428575-0.022857142857141355h-0.7142857142857144v-31.405714285714286h0.7142857142857144v31.405714285714286z m2.095714285714286 0h-0.6914285714285713v-31.405714285714286h0.6914285714285713v31.405714285714286z m3.5057142857142853 0h-0.6899999999999995v-31.405714285714286h0.6914285714285722v31.405714285714286z m3.505714285714287 0h-1.3857142857142861v-31.405714285714286h1.3857142857142861v31.405714285714286z m2.814285714285715 0h-0.6928571428571431v-31.405714285714286h0.6899999999999995v31.405714285714286z m1.4042857142857148 0h-0.6914285714285722v-31.405714285714286h0.6914285714285722v31.405714285714286z m1.4057142857142857 0h-0.6900000000000013v-31.405714285714286h0.6914285714285704v31.405714285714286z m3.505714285714287 0h-1.4057142857142857v-31.405714285714286h1.4057142857142857v31.405714285714286z m3.5042857142857144 0h-1.4057142857142857v-31.405714285714286h1.4057142857142857v31.405714285714286z m2.814285714285713 0h-1.4071428571428584v-31.405714285714286h1.4057142857142857v31.405714285714286z m2.8114285714285714 0h-1.4057142857142857v-31.405714285714286h1.4071428571428584v31.405714285714286z m2.099999999999998 0h-1.4071428571428584v-31.405714285714286h1.4057142857142821v31.405714285714286z m4.217142857142861 0h-2.1000000000000014v-31.405714285714286h2.1000000000000014v31.405714285714286z m1.4057142857142821 0h-0.7142857142857153v-31.405714285714286h0.7142857142857153v31.405714285714286z m2.097142857142856 0.022857142857141355h-1.4057142857142821v-31.428571428571427h1.4057142857142821v31.428571428571427z' })
                )
            );
        }
    }]);

    return FaBarcode;
}(React.Component);

exports.default = FaBarcode;
module.exports = exports['default'];