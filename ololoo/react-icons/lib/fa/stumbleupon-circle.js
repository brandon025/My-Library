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

var FaStumbleuponCircle = function (_React$Component) {
    _inherits(FaStumbleuponCircle, _React$Component);

    function FaStumbleuponCircle() {
        _classCallCheck(this, FaStumbleuponCircle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaStumbleuponCircle).apply(this, arguments));
    }

    _createClass(FaStumbleuponCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.185714285714287 18.728571428571428l2.0100000000000016-0.6042857142857159v-1.3857142857142861q0-1.7614285714285707-1.2942857142857136-3.0114285714285707t-3.078571428571429-1.251428571428571-3.080000000000002 1.2385714285714293-1.2957142857142863 3.0042857142857162v6.317142857142855q0 0.4471428571428575-0.31428571428571495 0.7471428571428582t-0.7357142857142858 0.3000000000000007-0.725714285714286-0.3000000000000007-0.3000000000000007-0.7471428571428582v-2.678571428571427h-3.37142857142857v2.722857142857144q0 1.8285714285714292 1.282857142857143 3.102857142857143t3.114285714285714 1.2714285714285722q1.8085714285714296 0 3.0914285714285725-1.2600000000000016t1.282857142857143-3.0471428571428554v-6.25q0-0.4242857142857126 0.3000000000000007-0.7371428571428567t0.7485714285714273-0.31428571428571495q0.4242857142857126 0 0.725714285714286 0.31428571428571495t0.3000000000000007 0.7371428571428567v1.2057142857142864z m7.434285714285714 4.3514285714285705v-2.7228571428571406h-3.3485714285714288v2.814285714285713q0 0.44571428571428484-0.3000000000000007 0.7457142857142856t-0.7485714285714273 0.3000000000000007q-0.4242857142857126 0-0.725714285714286-0.3114285714285714t-0.3000000000000007-0.7371428571428567v-2.7457142857142856l-2.0100000000000016 0.5800000000000018-1.3385714285714272-0.6257142857142846v2.7457142857142856q0 1.7857142857142847 1.2942857142857136 3.057142857142857t3.1000000000000014 1.274285714285714 3.0928571428571416-1.2714285714285722 1.282857142857143-3.104285714285716z m7.522857142857145-3.0799999999999983q0 4.665714285714287-2.299999999999997 8.604285714285716t-6.237142857142857 6.238571428571426-8.605714285714292 2.3000000000000043-8.6-2.3000000000000043-6.242857142857143-6.238571428571426-2.295714285714286-8.604285714285716 2.3000000000000003-8.604285714285714 6.234285714285714-6.238571428571428 8.604285714285714-2.3000000000000003 8.605714285714285 2.3000000000000003 6.238571428571426 6.238571428571428 2.298571428571435 8.604285714285714z' })
                )
            );
        }
    }]);

    return FaStumbleuponCircle;
}(React.Component);

exports.default = FaStumbleuponCircle;
module.exports = exports['default'];