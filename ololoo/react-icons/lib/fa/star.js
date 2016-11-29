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

var FaStar = function (_React$Component) {
    _inherits(FaStar, _React$Component);

    function FaStar() {
        _classCallCheck(this, FaStar);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaStar).apply(this, arguments));
    }

    _createClass(FaStar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38.57142857142857 14.442857142857143q0 0.4900000000000002-0.5799999999999983 1.0714285714285712l-8.102857142857143 7.9 1.9200000000000017 11.16q0.022857142857141355 0.15714285714285836 0.022857142857141355 0.4471428571428575 0 0.46857142857142975-0.23428571428571487 0.7928571428571445t-0.6814285714285724 0.32428571428571473q-0.4228571428571435 0-0.8914285714285732-0.2671428571428578l-10.02428571428571-5.267142857142861-10.022857142857143 5.267142857142861q-0.4914285714285711 0.2671428571428578-0.8928571428571423 0.2671428571428578-0.47142857142857153 0-0.7042857142857137-0.32428571428571473t-0.23428571428571487-0.7928571428571445q0-0.134285714285717 0.042857142857142705-0.4471428571428575l1.9257142857142853-11.16-8.128571428571428-7.9q-0.5571428571428572-0.605714285714285-0.5571428571428572-1.0714285714285712 0-0.8285714285714292 1.2485714285714284-1.0285714285714285l11.205714285714286-1.6285714285714281 5.022857142857145-10.157142857142858q0.42285714285713993-0.9142857142857138 1.0942857142857108-0.9142857142857138t1.0942857142857143 0.9142857142857143l5.022857142857145 10.157142857142858 11.205714285714286 1.6285714285714281q1.25 0.1999999999999993 1.25 1.0285714285714285z' })
                )
            );
        }
    }]);

    return FaStar;
}(React.Component);

exports.default = FaStar;
module.exports = exports['default'];