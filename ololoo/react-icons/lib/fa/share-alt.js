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

var FaShareAlt = function (_React$Component) {
    _inherits(FaShareAlt, _React$Component);

    function FaShareAlt() {
        _classCallCheck(this, FaShareAlt);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaShareAlt).apply(this, arguments));
    }

    _createClass(FaShareAlt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 22.857142857142858q2.9685714285714297 0 5.057142857142857 2.0857142857142854t2.085714285714289 5.057142857142857-2.085714285714289 5.057142857142857-5.057142857142857 2.085714285714289-5.057142857142857-2.085714285714289-2.0857142857142854-5.057142857142857q0-0.2671428571428578 0.04285714285714448-0.7571428571428562l-8.034285714285714-4.0185714285714305q-2.051428571428575 1.918571428571429-4.865714285714288 1.918571428571429-2.968571428571428 0-5.057142857142857-2.0857142857142854t-2.085714285714286-5.057142857142857 2.085714285714286-5.054285714285715 5.057142857142857-2.0857142857142836q2.814285714285715 0 4.8657142857142865 1.918571428571429l8.035714285714288-4.017142857142856q-0.04428571428571715-0.490000000000002-0.04428571428571715-0.7571428571428598 0-2.9714285714285715 2.0857142857142854-5.057142857142857t5.057142857142857-2.085714285714286 5.057142857142857 2.085714285714286 2.085714285714289 5.057142857142857-2.085714285714289 5.054285714285715-5.057142857142857 2.088571428571427q-2.814285714285713 0-4.8657142857142865-1.92l-8.034285714285712 4.015714285714287q0.04285714285714448 0.4914285714285711 0.04285714285714448 0.7571428571428562t-0.04285714285714448 0.7600000000000016l8.034285714285716 4.017142857142858q2.05142857142857-1.9200000000000017 4.865714285714283-1.9200000000000017z' })
                )
            );
        }
    }]);

    return FaShareAlt;
}(React.Component);

exports.default = FaShareAlt;
module.exports = exports['default'];