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

var FaPrint = function (_React$Component) {
    _inherits(FaPrint, _React$Component);

    function FaPrint() {
        _classCallCheck(this, FaPrint);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaPrint).apply(this, arguments));
    }

    _createClass(FaPrint, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10 34.285714285714285h20v-5.714285714285715h-20v5.714285714285715z m0-14.285714285714285h20v-8.571428571428571h-3.571428571428573q-0.8928571428571423 0-1.5171428571428578-0.6257142857142863t-0.6257142857142846-1.517142857142856v-3.571428571428572h-14.285714285714285v14.285714285714285z m25.714285714285715 1.428571428571427q0-0.5800000000000018-0.42428571428571615-1.0042857142857144t-1.0042857142857144-0.4242857142857126-1.0042857142857144 0.4242857142857126-0.42428571428570905 1.004285714285718 0.42428571428571615 1.0042857142857144 1.0042857142857073 0.4242857142857126 1.0042857142857144-0.4242857142857126 0.42428571428571615-1.0042857142857144z m2.857142857142854 0v9.285714285714288q0 0.28999999999999915-0.21142857142856997 0.5028571428571418t-0.5028571428571382 0.21142857142857352h-5v3.5714285714285694q0 0.8928571428571459-0.6257142857142881 1.5171428571428578t-1.5171428571428578 0.6257142857142881h-21.42857142857143q-0.8928571428571423 0-1.5171428571428578-0.6257142857142881t-0.6257142857142837-1.5171428571428578v-3.5714285714285694h-5q-0.2900000000000005 0-0.5028571428571433-0.21142857142856997t-0.2114285714285713-0.5028571428571453v-9.285714285714285q0-1.7628571428571433 1.2614285714285718-3.024285714285714t3.024285714285714-1.2614285714285742h1.4285714285714288v-12.142857142857142q0-0.8928571428571432 0.6257142857142854-1.5171428571428573t1.5171428571428578-0.6257142857142854h14.999999999999998q0.8928571428571423 0 1.9642857142857153 0.44714285714285706t1.6971428571428575 1.0714285714285712l3.3928571428571423 3.3928571428571432q0.6257142857142846 0.6257142857142863 1.071428571428573 1.6971428571428575t0.4457142857142884 1.9628571428571426v5.7142857142857135h1.4285714285714306q1.7642857142857125 0 3.0257142857142867 1.2628571428571433t1.259999999999991 3.022857142857145z' })
                )
            );
        }
    }]);

    return FaPrint;
}(React.Component);

exports.default = FaPrint;
module.exports = exports['default'];