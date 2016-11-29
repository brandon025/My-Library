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

var FaSmileO = function (_React$Component) {
    _inherits(FaSmileO, _React$Component);

    function FaSmileO() {
        _classCallCheck(this, FaSmileO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaSmileO).apply(this, arguments));
    }

    _createClass(FaSmileO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.17142857142857 23.995714285714286q-0.8285714285714292 2.6999999999999993-3.081428571428571 4.352857142857143t-5.09 1.6514285714285712-5.09-1.6514285714285712-3.08-4.352857142857143q-0.17714285714285793-0.5571428571428569 0.09142857142857075-1.0828571428571436t0.8485714285714288-0.7042857142857137q0.5571428571428569-0.17857142857142705 1.0828571428571436 0.08999999999999986t0.7028571428571428 0.8485714285714288q0.5571428571428569 1.7857142857142847 2.064285714285715 2.8900000000000006t3.379999999999999 1.105714285714285 3.3814285714285717-1.1042857142857159 2.064285714285713-2.8900000000000006q0.17857142857142705-0.5800000000000018 0.7142857142857153-0.8485714285714288t1.0942857142857143-0.08999999999999986 0.8257142857142838 0.7028571428571446 0.08999999999999986 1.081428571428571z m-11.028571428571428-9.709999999999999q0 1.1828571428571433-0.8371428571428581 2.0200000000000014t-2.019999999999998 0.8371428571428545-2.0199999999999996-0.8371428571428581-0.8371428571428581-2.019999999999998 0.8371428571428563-2.0199999999999996 2.0200000000000014-0.8371428571428581 2.0200000000000014 0.8371428571428563 0.8371428571428545 2.0200000000000014z m11.428571428571427 0q0 1.1828571428571433-0.8371428571428581 2.0200000000000014t-2.019999999999996 0.8371428571428545-2.0199999999999996-0.8371428571428581-0.8371428571428581-2.019999999999998 0.8371428571428581-2.0199999999999996 2.0199999999999996-0.8371428571428581 2.0199999999999996 0.8371428571428563 0.8371428571428581 2.0200000000000014z m5.714285714285715 5.7142857142857135q0-2.8999999999999986-1.1385714285714315-5.547142857142857t-3.047142857142852-4.5528571428571425-4.5528571428571425-3.047142857142857-5.547142857142859-1.1385714285714288-5.547142857142857 1.1385714285714288-4.5528571428571425 3.047142857142857-3.047142857142857 4.5528571428571425-1.1385714285714288 5.547142857142857 1.1385714285714288 5.547142857142859 3.047142857142857 4.5528571428571425 4.5528571428571425 3.047142857142859 5.547142857142857 1.1385714285714243 5.547142857142859-1.1385714285714315 4.5528571428571425-3.047142857142859 3.047142857142859-4.5528571428571425 1.1385714285714243-5.547142857142852z m2.857142857142854 0q0 4.665714285714287-2.299999999999997 8.604285714285716t-6.237142857142857 6.238571428571426-8.605714285714285 2.3000000000000043-8.6-2.3000000000000043-6.242857142857143-6.238571428571426-2.295714285714286-8.604285714285716 2.3000000000000003-8.604285714285714 6.234285714285714-6.238571428571428 8.604285714285714-2.3000000000000003 8.605714285714285 2.3000000000000003 6.238571428571426 6.238571428571428 2.298571428571435 8.604285714285714z' })
                )
            );
        }
    }]);

    return FaSmileO;
}(React.Component);

exports.default = FaSmileO;
module.exports = exports['default'];