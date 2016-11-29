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

var FaApple = function (_React$Component) {
    _inherits(FaApple, _React$Component);

    function FaApple() {
        _classCallCheck(this, FaApple);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaApple).apply(this, arguments));
    }

    _createClass(FaApple, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.379999999999995 27.120000000000005q-0.8714285714285737 2.789999999999999-2.7457142857142856 5.579999999999998-2.879999999999999 4.375714285714288-5.737142857142857 4.375714285714288-1.0942857142857143 0-3.1257142857142846-0.7142857142857153-1.9200000000000017-0.7142857142857153-3.37142857142857-0.7142857142857153-1.3599999999999994 0-3.168571428571429 0.7371428571428567-1.8085714285714278 0.7585714285714289-2.945714285714283 0.7585714285714289-3.3942857142857132 0-6.72-5.78142857142857-3.280000000000001-5.825714285714291-3.280000000000001-11.228571428571431 0-5.088571428571427 2.5214285714285714-8.347142857142858 2.5000000000000018-3.2142857142857153 6.34-3.2142857142857153 1.6071428571428577 0 3.951428571428572 0.6714285714285708 2.3200000000000003 0.668571428571429 3.078571428571429 0.668571428571429 1.0042857142857144 0 3.1914285714285704-0.757142857142858 2.2757142857142867-0.7599999999999998 3.8599999999999994-0.7599999999999998 2.6571428571428584 0 4.7542857142857144 1.451428571428572 1.1599999999999966 0.8028571428571425 2.3214285714285694 2.232857142857142-1.7628571428571433 1.4957142857142856-2.5428571428571445 2.6342857142857152-1.452857142857141 2.097142857142856-1.452857142857141 4.618571428571428 0 2.767142857142858 1.5399999999999991 4.977142857142855t3.528571428571432 2.814285714285713z m-8.394285714285708-26.18285714285715q0 1.3614285714285725-0.6457142857142841 3.035714285714287-0.6714285714285708 1.6757142857142857-2.0757142857142874 3.0814285714285714-1.2057142857142864 1.2057142857142855-2.41 1.6071428571428568-0.8257142857142838 0.24571428571428555-2.321428571428573 0.3800000000000008 0.0671428571428585-3.3257142857142856 1.7428571428571438-5.7371428571428575 1.6485714285714295-2.3899999999999997 5.5771428571428565-3.3042857142857143 0.022857142857141355 0.06714285714285714 0.05714285714285694 0.2457142857142857t0.05428571428571516 0.2457142857142857q0 0.09000000000000002 0.011428571428570677 0.2228571428571428t0.011428571428570677 0.22285714285714286z' })
                )
            );
        }
    }]);

    return FaApple;
}(React.Component);

exports.default = FaApple;
module.exports = exports['default'];