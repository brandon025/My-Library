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

var FaUpload = function (_React$Component) {
    _inherits(FaUpload, _React$Component);

    function FaUpload() {
        _classCallCheck(this, FaUpload);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaUpload).apply(this, arguments));
    }

    _createClass(FaUpload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 32.85714285714286q0-0.5799999999999983-0.4242857142857126-1.0042857142857144t-1.0042857142857144-0.42428571428571615-1.0042857142857144 0.4242857142857126-0.42428571428571615 1.004285714285718 0.4242857142857126 1.0042857142857144 1.004285714285718 0.42428571428570905 1.0042857142857144-0.42428571428571615 0.4242857142857126-1.0042857142857073z m5.714285714285715 0q0-0.5799999999999983-0.42428571428571615-1.0042857142857144t-1.0042857142857144-0.42428571428571615-1.0042857142857144 0.4242857142857126-0.42428571428570905 1.004285714285718 0.42428571428571615 1.0042857142857144 1.0042857142857073 0.42428571428570905 1.0042857142857144-0.42428571428571615 0.42428571428571615-1.0042857142857073z m2.857142857142854-5v7.142857142857146q0 0.8928571428571459-0.6257142857142881 1.5171428571428578t-1.5171428571428507 0.625714285714281h-32.85714285714286q-0.8928571428571428 0-1.5171428571428573-0.6257142857142881t-0.6257142857142834-1.5171428571428578v-7.142857142857142q0-0.8928571428571423 0.6257142857142857-1.5171428571428578t1.5171428571428573-0.6257142857142846h9.531428571428572q0.468571428571428 1.25 1.5742857142857147 2.0528571428571425t2.4657142857142844 0.8042857142857152h5.714285714285715q1.3628571428571412 0 2.4685714285714297-0.8042857142857152t1.5742857142857112-2.0528571428571425h9.53142857142857q0.8928571428571459 0 1.5171428571428578 0.6257142857142846t0.6257142857142881 1.5171428571428578z m-7.254285714285711-14.464285714285719q-0.38000000000000256 0.8928571428571441-1.3171428571428585 0.8928571428571441h-5.714285714285715v9.999999999999998q0 0.5799999999999983-0.4242857142857126 1.0042857142857144t-1.0042857142857144 0.42428571428571615h-5.714285714285715q-0.5800000000000018 0-1.0042857142857144-0.4242857142857126t-0.4242857142857126-1.004285714285718v-10h-5.714285714285715q-0.9371428571428577 0-1.3171428571428567-0.8928571428571423-0.3800000000000008-0.8714285714285719 0.31428571428571495-1.5399999999999991l10-10q0.39857142857142946-0.4242857142857146 1.0028571428571418-0.4242857142857146t1.0042857142857144 0.42428571428571416l10 10q0.6914285714285704 0.6714285714285708 0.31428571428571317 1.5399999999999991z' })
                )
            );
        }
    }]);

    return FaUpload;
}(React.Component);

exports.default = FaUpload;
module.exports = exports['default'];