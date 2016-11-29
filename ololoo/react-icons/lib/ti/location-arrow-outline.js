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

var TiLocationArrowOutline = function (_React$Component) {
    _inherits(TiLocationArrowOutline, _React$Component);

    function TiLocationArrowOutline() {
        _classCallCheck(this, TiLocationArrowOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiLocationArrowOutline).apply(this, arguments));
    }

    _createClass(TiLocationArrowOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.478333333333335 34.85666666666667c-0.5883333333333347 0-2.033333333333335-0.2433333333333323-2.7799999999999994-2.4933333333333323l-2.0150000000000006-6.04666666666667-6.046666666666667-2.013333333333332c-2.0733333333333333-0.6916666666666664-2.45-1.9533333333333331-2.4883333333333333-2.6449999999999996s0.18833333333333346-1.9883333333333333 2.166666666666667-2.9116666666666653l18.96-8.85c1.716666666666665-0.7966666666666669 3.203333333333333-0.5133333333333336 3.913333333333334 0.6050000000000004 0.37333333333333485 0.586666666666666 0.6600000000000001 1.6166666666666671-0.08833333333333471 3.2233333333333327l-8.844999999999999 18.958333333333336c-0.8833333333333329 1.8900000000000006-2.120000000000001 2.173333333333332-2.7749999999999986 2.173333333333332z m-8.983333333333333-13.446666666666665l6.821666666666664 2.2733333333333334 2.2766666666666673 6.82 7.956666666666667-17.053333333333335-17.053333333333335 7.958333333333332z' })
                )
            );
        }
    }]);

    return TiLocationArrowOutline;
}(React.Component);

exports.default = TiLocationArrowOutline;
module.exports = exports['default'];