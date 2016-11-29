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

var FaMedium = function (_React$Component) {
    _inherits(FaMedium, _React$Component);

    function FaMedium() {
        _classCallCheck(this, FaMedium);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaMedium).apply(this, arguments));
    }

    _createClass(FaMedium, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.325714285714286 9.397142857142859v26.182857142857138q0 0.5571428571428569-0.27857142857142847 0.9485714285714266t-0.814285714285715 0.39000000000000057q-0.3800000000000008 0-0.7371428571428567-0.1785714285714306l-10.381428571428572-5.199999999999996q-0.46714285714285675-0.2242857142857133-0.791428571428571-0.7485714285714273t-0.32285714285714284-1.0385714285714265v-25.44714285714286q0-0.4471428571428562 0.22142857142857142-0.7571428571428562t0.6471428571428571-0.31428571428571406q0.3142857142857143 0 0.9828571428571429 0.3342857142857145l11.405714285714286 5.714285714285714q0.06714285714285673 0.06714285714285673 0.06714285714285673 0.1114285714285721z m1.4285714285714288 2.2542857142857144l11.920000000000002 19.32857142857143-11.92-5.935714285714287v-13.391428571428573z m25.245714285714286 0.3999999999999986v23.528571428571425q0 0.5571428571428569-0.3142857142857167 0.904285714285713t-0.8471428571428561 0.34285714285714164-1.048571428571428-0.28857142857143003l-9.842857142857142-4.91z m-0.06714285714285495-2.6757142857142853q0 0.06714285714285673-5.7257142857142895 9.364285714285716t-6.7071428571428555 10.881428571428572l-8.705714285714286-14.151428571428573 7.232857142857142-11.764285714285714q0.3785714285714299-0.6257142857142859 1.1571428571428584-0.6257142857142859 0.31428571428571317 0 0.581428571428571 0.13428571428571434l12.075714285714287 6.0285714285714285q0.09000000000000341 0.042857142857142705 0.09000000000000341 0.13428571428571345z' })
                )
            );
        }
    }]);

    return FaMedium;
}(React.Component);

exports.default = FaMedium;
module.exports = exports['default'];