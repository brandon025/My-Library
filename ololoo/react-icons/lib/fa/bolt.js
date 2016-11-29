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

var FaBolt = function (_React$Component) {
    _inherits(FaBolt, _React$Component);

    function FaBolt() {
        _classCallCheck(this, FaBolt);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaBolt).apply(this, arguments));
    }

    _createClass(FaBolt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.754285714285714 12.634285714285713q0.3999999999999986 0.4471428571428575 0.15714285714285836 0.9828571428571422l-12.054285714285715 25.825714285714287q-0.28999999999999915 0.5571428571428569-0.937142857142856 0.5571428571428569-0.08999999999999986 0-0.31428571428571317-0.04285714285714448-0.3785714285714299-0.11142857142856855-0.5671428571428585-0.42428571428571615t-0.09999999999999964-0.6714285714285708l4.397142857142855-18.03285714285714-9.064285714285715 2.251428571428569q-0.08857142857142897 0.022857142857141355-0.2657142857142851 0.022857142857141355-0.40000000000000036 0-0.6914285714285722-0.24571428571428555-0.40000000000000036-0.33285714285714363-0.28999999999999915-0.8685714285714283l4.485714285714286-18.414285714285715q0.09142857142857075-0.31428571428571406 0.35714285714285765-0.5142857142857142t0.6285714285714281-0.20000000000000018h7.318571428571431q0.42571428571428527 0 0.7142857142857153 0.27714285714285714t0.2914285714285718 0.657142857142857q0 0.18000000000000016-0.1114285714285721 0.402857142857143l-3.8171428571428585 10.334285714285715 8.84-2.185714285714285q0.17857142857142705-0.04571428571428626 0.2671428571428578-0.04571428571428626 0.4228571428571435 0 0.7571428571428562 0.3342857142857145z' })
                )
            );
        }
    }]);

    return FaBolt;
}(React.Component);

exports.default = FaBolt;
module.exports = exports['default'];