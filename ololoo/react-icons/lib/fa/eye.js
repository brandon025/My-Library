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

var FaEye = function (_React$Component) {
    _inherits(FaEye, _React$Component);

    function FaEye() {
        _classCallCheck(this, FaEye);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaEye).apply(this, arguments));
    }

    _createClass(FaEye, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.142857142857146 21.42857142857143q-3.392857142857146-5.267142857142858-8.504285714285714-7.879999999999999 1.3614285714285685 2.3228571428571385 1.3614285714285685 5.022857142857141 0 4.12857142857143-2.935714285714287 7.064285714285713t-7.064285714285713 2.935714285714287-7.064285714285715-2.935714285714287-2.935714285714285-7.064285714285713q0-2.6999999999999993 1.361428571428572-5.022857142857143-5.111428571428572 2.6114285714285703-8.504285714285714 7.880000000000001 2.968571428571428 4.575714285714284 7.442857142857143 7.28857142857143t9.7 2.71142857142857 9.700000000000003-2.71142857142857 7.442857142857143-7.28857142857143z m-16.071428571428573-8.571428571428573q0-0.4471428571428575-0.31428571428571317-0.757142857142858t-0.7571428571428598-0.31428571428571317q-2.789999999999999 0-4.788571428571428 1.9971428571428564t-1.9971428571428564 4.78857142857143q0 0.4471428571428575 0.31428571428571495 0.7571428571428562t0.757142857142858 0.31428571428571317 0.757142857142858-0.31428571428571317 0.31428571428571495-0.7571428571428562q0-1.9200000000000017 1.361428571428572-3.281428571428572t3.2814285714285667-1.361428571428572q0.4471428571428575 0 0.7571428571428562-0.31428571428571495t0.31428571428571317-0.757142857142858z m18.928571428571427 8.571428571428573q0 0.7571428571428562-0.4471428571428575 1.5399999999999991-3.125714285714288 5.1342857142857135-8.404285714285713 8.225714285714286t-11.14857142857143 3.091428571428569-11.151428571428571-3.102857142857143-8.404285714285715-8.214285714285715q-0.44428571428571395-0.7828571428571394-0.44428571428571395-1.5399999999999956t0.4471428571428572-1.5399999999999991q3.1285714285714286-5.111428571428572 8.405714285714286-8.214285714285715t11.147142857142857-3.102857142857145 11.14857142857143 3.102857142857143 8.404285714285713 8.214285714285717q0.4471428571428575 0.7828571428571429 0.4471428571428575 1.5399999999999991z' })
                )
            );
        }
    }]);

    return FaEye;
}(React.Component);

exports.default = FaEye;
module.exports = exports['default'];