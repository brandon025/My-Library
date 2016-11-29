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

var FaBullhorn = function (_React$Component) {
    _inherits(FaBullhorn, _React$Component);

    function FaBullhorn() {
        _classCallCheck(this, FaBullhorn);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaBullhorn).apply(this, arguments));
    }

    _createClass(FaBullhorn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.142857142857146 14.285714285714286q1.182857142857145 0 2.020000000000003 0.8371428571428563t0.837142857142851 2.0199999999999996-0.8371428571428581 2.0199999999999996-2.019999999999996 0.8371428571428581v8.57142857142857q0 1.1600000000000001-0.8485714285714252 2.008571428571429t-2.008571428571436 0.8485714285714323q-9.30857142857143-7.7457142857142856-18.125714285714288-8.482857142857142-1.2942857142857136 0.4242857142857126-2.031428571428572 1.4714285714285715t-0.6914285714285722 2.2428571428571438 0.8928571428571423 2.065714285714286q-0.44571428571428484 0.7371428571428567-0.5114285714285707 1.46142857142857t0.13428571428571345 1.2957142857142863 0.7471428571428564 1.2285714285714313 1.0714285714285712 1.1142857142857139 1.37142857142857 1.1285714285714263q-0.6471428571428568 1.2928571428571445-2.4885714285714293 1.8514285714285705t-3.7614285714285707 0.2571428571428598-2.9471428571428575-1.2385714285714258q-0.15714285714285747-0.5142857142857125-0.6571428571428575-1.952857142857141t-0.7142857142857144-2.111428571428572-0.5142857142857142-1.985714285714284-0.3342857142857145-2.2571428571428562 0.07857142857142829-2.1971428571428575 0.4914285714285711-2.467142857142857h-2.724285714285705q-1.4714285714285715 0-2.5214285714285714-1.048571428571428t-1.0500000000000003-2.5228571428571556v-4.285714285714285q0-1.4714285714285715 1.05-2.522857142857143t2.5214285714285714-1.0471428571428554h10.714285714285715q9.711428571428572 0 20-8.571428571428571 1.1614285714285728 0 2.009999999999998 0.8485714285714288t0.8471428571428632 2.008571428571427v8.571428571428571z m-2.857142857142854 13.481428571428571v-21.295714285714286q-8.794285714285714 6.742857142857144-17.142857142857142 7.657142857142858v6.0285714285714285q8.414285714285715 0.9357142857142868 17.142857142857142 7.609999999999999z' })
                )
            );
        }
    }]);

    return FaBullhorn;
}(React.Component);

exports.default = FaBullhorn;
module.exports = exports['default'];