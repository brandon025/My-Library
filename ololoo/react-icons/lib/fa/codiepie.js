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

var FaCodiepie = function (_React$Component) {
    _inherits(FaCodiepie, _React$Component);

    function FaCodiepie() {
        _classCallCheck(this, FaCodiepie);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaCodiepie).apply(this, arguments));
    }

    _createClass(FaCodiepie, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.29 15.157142857142857q1.2285714285714278 0 1.9085714285714275 0.6342857142857152t0.6799999999999997 1.8642857142857139-0.7571428571428598 1.8285714285714292-2.0328571428571394 0.6028571428571432h-3.0357142857142847v3.951428571428572h-0.5571428571428569v-8.885714285714286h3.7928571428571445z m3.5942857142857108 13.168571428571427l-0.09142857142857252 0.24571428571428555-0.11142857142856855 0.2228571428571442q-2.5228571428571414 5.134285714285717-7.377142857142857 8.17142857142857t-10.589999999999996 3.0342857142857156q-4.062857142857144 0-7.767142857142858-1.585714285714289t-6.385714285714285-4.261428571428574-4.261428571428572-6.385714285714286-1.5857142857142863-7.764285714285705 1.5857142857142859-7.765714285714285 4.262857142857143-6.385714285714285 6.385714285714286-4.261428571428572 7.765714285714285-1.5857142857142892q5.4471428571428575 5.984795992119984e-17 10.145714285714284 2.767142857142858t7.354285714285716 7.542857142857143l0.2228571428571442 0.4471428571428575q-0.6714285714285708 0.3342857142857145-3.047142857142859 1.5285714285714285t-3.6499999999999986 1.8857142857142861q-0.13428571428571345 0.06714285714285673-10.691428571428574 5.98285714285714 8.57142857142857 4.085714285714285 17.83428571428572 8.17142857142857z m-18.169999999999995 11.182857142857145q5.579999999999998 0 10.324285714285715-2.9571428571428555t7.199999999999996-7.98l-6.407142857142858-2.879999999999999q-1.6071428571428577 3.1257142857142846-4.600000000000001 4.9571428571428555t-6.5142857142857125 1.8285714285714292q-3.37142857142857 0-6.251428571428573-1.6742857142857126t-4.551428571428566-4.552857142857146-1.677142857142858-6.25 1.677142857142858-6.25 4.551428571428572-4.5528571428571425 6.248571428571429-1.6742857142857144 6.251428571428573 1.6400000000000006 4.5528571428571425 4.564285714285715l6.2500000000000036-3.192857142857143q-2.5900000000000034-4.642857142857143-7.165714285714287-7.3428571428571425t-9.888571428571431-2.7028571428571446q-2.6571428571428584 1.6653345369377348e-16-5.190000000000001 0.7028571428571431t-4.667142857142856 1.9542857142857144-3.9385714285714286 3.057142857142857-3.0571428571428574 3.942857142857143-1.9542857142857144 4.664285714285715-0.7028571428571431 5.1899999999999995 0.7028571428571428 5.190000000000001 1.9528571428571428 4.667142857142853 3.0571428571428574 3.9385714285714286 3.942857142857142 3.057142857142857 4.664285714285715 1.9542857142857173 5.190000000000001 0.7028571428571411z' })
                )
            );
        }
    }]);

    return FaCodiepie;
}(React.Component);

exports.default = FaCodiepie;
module.exports = exports['default'];