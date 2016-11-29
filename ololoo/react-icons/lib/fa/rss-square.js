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

var FaRssSquare = function (_React$Component) {
    _inherits(FaRssSquare, _React$Component);

    function FaRssSquare() {
        _classCallCheck(this, FaRssSquare);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaRssSquare).apply(this, arguments));
    }

    _createClass(FaRssSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.285714285714286 28.571428571428573q0-1.1828571428571415-0.8371428571428563-2.0199999999999996t-2.0200000000000014-0.8371428571428581-2.0199999999999996 0.8371428571428581-0.8371428571428581 2.0199999999999996 0.8371428571428563 2.0199999999999996 2.0200000000000014 0.8371428571428581 2.0199999999999996-0.8371428571428581 0.8371428571428581-2.0199999999999996z m7.8342857142857145 2.1000000000000014q-0.28999999999999915-5.18-3.951428571428572-8.842857142857145t-8.84-3.94857142857143q-0.31428571428571495-0.022857142857141355-0.5357142857142865 0.1999999999999993t-0.22285714285714242 0.5142857142857125v2.8571428571428577q0 0.28999999999999915 0.1885714285714286 0.4914285714285711t0.4800000000000004 0.22142857142857153q3.4371428571428577 0.24571428571428555 5.892857142857142 2.6999999999999993t2.6999999999999993 5.894285714285715q0.024285714285714022 0.2914285714285718 0.2242857142857133 0.4814285714285731t0.4914285714285711 0.19000000000000128h2.8571428571428577q0.28999999999999915 0 0.5142857142857125-0.2228571428571442t0.1999999999999993-0.5357142857142847z m8.571428571428573 0.019999999999999574q-0.1114285714285721-3.437142857142856-1.25-6.640000000000001t-3.114285714285714-5.8028571428571425-4.5771428571428565-4.575714285714286-5.8028571428571425-3.1142857142857157-6.640000000000001-1.248571428571429q-0.31428571428571495-0.02285714285714313-0.5142857142857142 0.1999999999999993-0.22142857142857153 0.2242857142857151-0.22142857142857153 0.5142857142857142v2.8571428571428577q0 0.28999999999999915 0.20285714285714285 0.4914285714285711t0.4914285714285711 0.22285714285714242q4.5528571428571425 0.15714285714285658 8.43714285714286 2.4885714285714275t6.217142857142857 6.217142857142857 2.4885714285714293 8.437142857142856q0.022857142857141355 0.28999999999999915 0.2228571428571442 0.4914285714285711t0.4914285714285711 0.1999999999999993h2.8571428571428577q0.28999999999999915 0 0.514285714285716-0.22142857142857153 0.24285714285714377-0.1999999999999993 0.1999999999999993-0.5142857142857125z m6.451428571428572-21.40571428571429v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-21.42857142857143q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.885714285714284-4.5428571428571445v-21.42857142857143q0-2.6571428571428575 1.8857142857142857-4.542857142857144t4.542857142857144-1.885714285714284h21.42857142857143q2.6571428571428584 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144z' })
                )
            );
        }
    }]);

    return FaRssSquare;
}(React.Component);

exports.default = FaRssSquare;
module.exports = exports['default'];