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

var FaFeed = function (_React$Component) {
    _inherits(FaFeed, _React$Component);

    function FaFeed() {
        _classCallCheck(this, FaFeed);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaFeed).apply(this, arguments));
    }

    _createClass(FaFeed, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.857142857142858 30q0 1.7857142857142847-1.25 3.0357142857142847t-3.0357142857142865 1.25-3.0357142857142856-1.25-1.25-3.0357142857142847 1.25-3.0357142857142847 3.0357142857142856-1.25 3.0357142857142865 1.25 1.25 3.0357142857142847z m11.428571428571427 2.7457142857142856q0.04285714285714448 0.6257142857142881-0.379999999999999 1.0714285714285694-0.3999999999999986 0.46857142857142975-1.048571428571428 0.46857142857142975h-3.014285714285716q-0.5571428571428569 0-0.9571428571428555-0.36857142857142833t-0.4485714285714302-0.9257142857142853q-0.4914285714285711-5.111428571428572-4.118571428571428-8.73857142857143t-8.738571428571428-4.118571428571428q-0.5571428571428569-0.04285714285714448-0.9257142857142853-0.4471428571428575t-0.3685714285714292-0.9585714285714282v-3.0142857142857125q0-0.6471428571428568 0.46857142857142886-1.048571428571428 0.3799999999999999-0.3800000000000008 0.96-0.3800000000000008h0.11142857142857121q3.571428571428571 0.2900000000000009 6.828571428571429 1.7971428571428572t5.782857142857145 4.051428571428573q2.5428571428571445 2.5228571428571414 4.051428571428573 5.78142857142857t1.7971428571428518 6.831428571428567z m11.42857142857143 0.04285714285714448q0.04285714285714448 0.6042857142857159-0.3999999999999986 1.0499999999999972-0.404285714285713 0.4471428571428575-1.028571428571432 0.4471428571428575h-3.1914285714285704q-0.5800000000000018 0-0.9928571428571438-0.39000000000000057t-0.43428571428571416-0.9485714285714266q-0.2671428571428578-4.800000000000001-2.2542857142857144-9.118571428571428t-5.167142857142856-7.5-7.5-5.167142857142856-9.117142857142856-2.2757142857142867q-0.5571428571428578-0.024285714285714022-0.9485714285714293-0.4371428571428577t-0.394285714285715-0.9714285714285715v-3.1914285714285713q0-0.6257142857142859 0.4485714285714284-1.0285714285714285 0.40000000000000036-0.3999999999999999 0.9828571428571431-0.3999999999999999h0.06714285714285673q5.847142857142858 0.29000000000000004 11.192857142857145 2.6785714285714293t9.497142857142855 6.562857142857142q4.174285714285716 4.149999999999999 6.5628571428571405 9.495714285714286t2.6785714285714306 11.194285714285716z' })
                )
            );
        }
    }]);

    return FaFeed;
}(React.Component);

exports.default = FaFeed;
module.exports = exports['default'];