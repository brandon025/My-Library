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

var TiGlobe = function (_React$Component) {
    _inherits(TiGlobe, _React$Component);

    function TiGlobe() {
        _classCallCheck(this, TiGlobe);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiGlobe).apply(this, arguments));
    }

    _createClass(TiGlobe, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.333333333333336 33.333333333333336h-6.666666666666668c-0.9216666666666669 0-1.666666666666666 0.7449999999999974-1.666666666666666 1.6666666666666643s0.7449999999999992 1.6666666666666643 1.666666666666666 1.6666666666666643h16.666666666666668c0.9216666666666669 0 1.6666666666666679-0.7449999999999974 1.6666666666666679-1.6666666666666643s-0.745000000000001-1.6666666666666643-1.6666666666666679-1.6666666666666643h-6.666666666666668v-2.0500000000000007c2.7333333333333343-0.6166666666666671 5.243333333333332-1.9800000000000004 7.271666666666668-4.010000000000002 2.8333333333333286-2.833333333333332 4.395-6.599999999999998 4.395-10.606666666666666 0-3.4450000000000003-1.153333333333336-6.716666666666669-3.280000000000001-9.366666666666667l1.125-1.12c0.6499999999999986-0.6500000000000004 0.6499999999999986-1.705 0-2.3583333333333334-0.6499999999999986-0.6499999999999999-1.7049999999999983-0.6499999999999999-2.3566666666666656 0l-3.421666666666667 3.411666666666666 1.1833333333333336 1.1833333333333327c2.1999999999999993 2.200000000000001 3.4166666666666643 5.133333333333336 3.4166666666666643 8.250000000000002s-1.2166666666666686 6.044999999999998-3.416666666666668 8.25-5.133333333333333 3.416666666666668-8.249999999999996 3.416666666666668-6.045-1.2166666666666686-8.25-3.416666666666668c-0.6500000000000004-0.6533333333333324-1.7033333333333331-0.6533333333333324-2.3550000000000004 0-0.6500000000000004 0.6499999999999986-0.6500000000000004 1.7033333333333331 0 2.3550000000000004 2.833333333333332 2.833333333333332 6.599999999999998 4.395 10.605 4.395v1.6666666666666679z m0-26.666666666666668c2.7616666666666667-8.881784197001252e-16 5.261666666666667 1.1199999999999992 7.071666666666665 2.928333333333333 1.8083333333333336 1.8100000000000005 2.9283333333333346 4.3100000000000005 2.9283333333333346 7.071666666666667 0 2.7600000000000016-1.120000000000001 5.260000000000002-2.9283333333333346 7.07-1.8099999999999987 1.8099999999999987-4.309999999999999 2.9299999999999997-7.071666666666665 2.9299999999999997s-5.261666666666667-1.120000000000001-7.07-2.9283333333333346c-1.8083333333333353-1.8099999999999987-2.9266666666666694-4.309999999999999-2.9266666666666694-7.071666666666665s1.1166666666666671-5.261666666666667 2.926666666666666-7.071666666666667c1.8083333333333353-1.8083333333333345 4.30666666666667-2.9283333333333337 7.070000000000004-2.9283333333333337z' })
                )
            );
        }
    }]);

    return TiGlobe;
}(React.Component);

exports.default = TiGlobe;
module.exports = exports['default'];