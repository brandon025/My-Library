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

var FaMedkit = function (_React$Component) {
    _inherits(FaMedkit, _React$Component);

    function FaMedkit() {
        _classCallCheck(this, FaMedkit);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaMedkit).apply(this, arguments));
    }

    _createClass(FaMedkit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.571428571428573 25v-4.285714285714285q0-0.31428571428571317-0.1999999999999993-0.5142857142857125t-0.514285714285716-0.20000000000000284h-5v-5q0-0.31428571428571495-0.1999999999999993-0.5142857142857142t-0.514285714285716-0.1999999999999993h-4.285714285714285q-0.31428571428571317 0-0.514285714285716 0.1999999999999993t-0.1999999999999993 0.5142857142857142v5h-5q-0.31428571428571495 0-0.5142857142857142 0.1999999999999993t-0.1999999999999993 0.514285714285716v4.285714285714285q0 0.31428571428571317 0.1999999999999993 0.5142857142857125t0.5142857142857142 0.1999999999999993h5v5q0 0.31428571428571317 0.1999999999999993 0.514285714285716t0.5142857142857125 0.1999999999999993h4.285714285714285q0.31428571428571317 0 0.5142857142857125-0.1999999999999993t0.1999999999999993-0.5142857142857125v-5h5q0.31428571428571317 0 0.514285714285716-0.1999999999999993t0.1999999999999993-0.514285714285716z m-14.285714285714286-16.42857142857143h11.428571428571429v-2.857142857142855h-11.428571428571429v2.8571428571428568z m-8.571428571428573 1.7763568394002505e-15v28.571428571428577h-0.7142857142857135q-2.052857142857143 0-3.528571428571429-1.471428571428568t-1.471428571428571-3.528571428571432v-18.571428571428573q0-2.0528571428571425 1.4714285714285715-3.5285714285714285t3.5285714285714285-1.4714285714285733h0.7142857142857144z m26.42857142857143 0v28.571428571428577h-24.285714285714285v-28.571428571428577h3.5714285714285676v-3.5714285714285694q0-0.8928571428571432 0.6257142857142863-1.5171428571428573t1.517142857142856-0.6257142857142854h12.85714285714286q0.8928571428571423 0 1.5171428571428578 0.6257142857142859t0.6257142857142846 1.517142857142857v3.571428571428571h3.571428571428573z m7.857142857142854 5v18.571428571428577q0 2.0528571428571425-1.471428571428575 3.528571428571432t-3.528571428571425 1.471428571428568h-0.7142857142857153v-28.571428571428577h0.7142857142857153q2.0528571428571425 1.7763568394002505e-15 3.528571428571432 1.4714285714285733t1.471428571428568 3.5285714285714285z' })
                )
            );
        }
    }]);

    return FaMedkit;
}(React.Component);

exports.default = FaMedkit;
module.exports = exports['default'];