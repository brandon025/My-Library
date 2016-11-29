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

var FaChrome = function (_React$Component) {
    _inherits(FaChrome, _React$Component);

    function FaChrome() {
        _classCallCheck(this, FaChrome);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaChrome).apply(this, arguments));
    }

    _createClass(FaChrome, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.93285714285714 0q5.357142857142858-0.04285714285714286 10.067142857142859 2.678571428571429 5.178571428571431 2.991428571428571 7.857142857142861 8.302857142857144l-16.562857142857144-0.8714285714285719q-3.571428571428573-0.1999999999999993-6.562857142857144 1.6642857142857146t-4.12857142857143 5.1228571428571446l-6.162857142857143-9.464285714285717q2.8571428571428568-3.5485714285714285 6.939999999999999-5.4799999999999995t8.551428571428573-1.9528571428571437z m-16.675714285714285 9.040000000000001l7.524285714285716 14.799999999999999q1.6071428571428577 3.1900000000000013 4.709999999999999 4.842857142857145t6.539999999999999 1.0042857142857144l-5.1342857142857135 10.068571428571431q-4.732857142857142-0.7371428571428567-8.594285714285714-3.5142857142857125t-6.082857142857142-7.055714285714291-2.2200000000000006-9.185714285714287q0-5.960000000000001 3.257142857142857-10.959999999999999z m35.402857142857144 3.7714285714285722q1.2942857142857207 3.3499999999999996 1.3285714285714363 6.932857142857143t-1.0828571428571436 6.831428571428571-3.414285714285718 6.071428571428573-5.492857142857144 4.675714285714285q-5.135714285714286 2.9685714285714297-11.117142857142856 2.6571428571428584l9.04-13.907142857142858q1.9642857142857153-2.924285714285716 1.8428571428571416-6.4857142857142875t-2.378571428571423-6.192857142857145z m-18.659999999999997 0.4485714285714266q2.789999999999999 0 4.765714285714285 1.9771428571428569t1.977142857142855 4.762857142857143-1.9771428571428586 4.765714285714285-4.765714285714282 1.977142857142855-4.765714285714285-1.9771428571428586-1.9771428571428586-4.765714285714282 1.9771428571428569-4.765714285714285 4.765714285714287-1.9771428571428586z' })
                )
            );
        }
    }]);

    return FaChrome;
}(React.Component);

exports.default = FaChrome;
module.exports = exports['default'];