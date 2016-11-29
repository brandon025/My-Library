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

var FaCab = function (_React$Component) {
    _inherits(FaCab, _React$Component);

    function FaCab() {
        _classCallCheck(this, FaCab);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaCab).apply(this, arguments));
    }

    _createClass(FaCab, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.625 20q1.8162499999999966 0 3.0962499999999977 1.2787499999999987t1.2787500000000023 3.0962500000000013v7.5q0 0.2749999999999986-0.17499999999999716 0.45000000000000284t-0.45000000000000284 0.17499999999999716h-1.875v1.25q0 1.5625-1.09375 2.65625t-2.65625 1.09375-2.65625-1.09375-1.09375-2.65625v-1.25h-20v1.25q0 1.5625-1.09375 2.65625t-2.65625 1.09375-2.65625-1.09375-1.09375-2.65625v-1.25h-1.875q-0.275 0-0.44999999999999996-0.17499999999999716t-0.17500000000000004-0.45000000000000284v-7.5q0-1.8162500000000001 1.2787499999999998-3.0962500000000013t3.0962500000000004-1.2787499999999987h0.5475000000000003l2.05-8.18375q0.4500000000000002-1.8375000000000004 2.032499999999999-3.0749999999999993t3.495000000000001-1.2412500000000009h2.5v-4.375q0-0.2749999999999999 0.1775000000000002-0.4500000000000002t0.4499999999999993-0.17499999999999982h8.749999999999998q0.27250000000000085 0 0.44750000000000156 0.17499999999999982t0.1750000000000007 0.4500000000000002v4.375h2.5q1.9149999999999991 0 3.4974999999999987 1.2400000000000002t2.0312500000000036 3.075000000000001l2.049999999999997 8.184999999999999h0.5499999999999972z m-29.375 9.375q1.2874999999999996 0 2.2074999999999996-0.9175000000000004t0.9175000000000004-2.2074999999999996-0.9175000000000004-2.2074999999999996-2.2074999999999996-0.9175000000000004-2.2074999999999996 0.9175000000000004-0.9175000000000004 2.2074999999999996 0.9175000000000004 2.2074999999999996 2.2074999999999996 0.9175000000000004z m3.827499999999999-9.375h19.84375l-1.7375000000000007-6.9725q-0.03999999999999915-0.15625-0.2749999999999986-0.3412500000000005t-0.4087500000000013-0.18624999999999936h-15q-0.1775000000000002 0-0.41249999999999964 0.1875t-0.27250000000000085 0.33999999999999986z m23.6725 9.375q1.2875000000000014 0 2.207500000000003-0.9175000000000004t0.9174999999999969-2.2074999999999996-0.9174999999999969-2.2074999999999996-2.207500000000003-0.9175000000000004-2.2074999999999996 0.9175000000000004-0.9175000000000004 2.2074999999999996 0.9175000000000004 2.2074999999999996 2.2074999999999996 0.9175000000000004z' })
                )
            );
        }
    }]);

    return FaCab;
}(React.Component);

exports.default = FaCab;
module.exports = exports['default'];