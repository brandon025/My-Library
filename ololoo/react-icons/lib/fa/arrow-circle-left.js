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

var FaArrowCircleLeft = function (_React$Component) {
    _inherits(FaArrowCircleLeft, _React$Component);

    function FaArrowCircleLeft() {
        _classCallCheck(this, FaArrowCircleLeft);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaArrowCircleLeft).apply(this, arguments));
    }

    _createClass(FaArrowCircleLeft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.42857142857143 21.42857142857143v-2.8571428571428577q0-0.5800000000000018-0.4242857142857126-1.0042857142857144t-1.004285714285718-0.42428571428571615h-11.205714285714286l4.21857142857143-4.21857142857143q0.4228571428571435-0.4242857142857144 0.4228571428571435-1.0042857142857144t-0.4242857142857126-1.0042857142857144l-2.032857142857143-2.0285714285714285q-0.3999999999999986-0.40285714285714214-1.0042857142857144-0.40285714285714214t-1.0042857142857144 0.40000000000000036l-10.10714285714286 10.115714285714287q-0.40000000000000036 0.3999999999999986-0.40000000000000036 1.0028571428571418t0.40000000000000036 1.0042857142857144l10.11142857142857 10.111428571428572q0.4028571428571439 0.4028571428571439 1.0057142857142871 0.4028571428571439t1.0042857142857144-0.3999999999999986l2.0314285714285703-2.032857142857143q0.3999999999999986-0.4028571428571439 0.3999999999999986-1.0057142857142871t-0.3999999999999986-1.0042857142857144l-4.222857142857144-4.2214285714285715h11.207142857142859q0.5799999999999983 0 1.0042857142857144-0.4242857142857126t0.42428571428571615-1.0042857142857144z m5.714285714285715-1.428571428571427q0 4.665714285714284-2.299999999999997 8.604285714285712t-6.237142857142857 6.238571428571426-8.605714285714292 2.3000000000000043-8.6-2.3000000000000043-6.242857142857143-6.238571428571426-2.295714285714286-8.604285714285716 2.3000000000000003-8.604285714285714 6.234285714285714-6.238571428571428 8.604285714285714-2.3000000000000003 8.605714285714285 2.3000000000000003 6.238571428571426 6.238571428571428 2.298571428571435 8.604285714285714z' })
                )
            );
        }
    }]);

    return FaArrowCircleLeft;
}(React.Component);

exports.default = FaArrowCircleLeft;
module.exports = exports['default'];