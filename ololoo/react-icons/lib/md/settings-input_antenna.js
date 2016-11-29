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

var MdSettingsInputAntenna = function (_React$Component) {
    _inherits(MdSettingsInputAntenna, _React$Component);

    function MdSettingsInputAntenna() {
        _classCallCheck(this, MdSettingsInputAntenna);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdSettingsInputAntenna).apply(this, arguments));
    }

    _createClass(MdSettingsInputAntenna, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 1.6400000000000001q7.578333333333333 0 12.966666666666669 5.390000000000001t5.391666666666666 12.966666666666669h-3.3583333333333343q0-6.25-4.376666666666665-10.623333333333333t-10.623333333333335-4.373333333333337-10.628333333333332 4.371666666666668-4.371666666666668 10.628333333333332h-3.3633333333333333q0-7.58 5.390000000000001-12.97t12.966666666666665-5.390000000000001z m1.6400000000000006 22.188333333333336v5.466666666666665l5.703333333333333 5.704999999999998-2.3433333333333337 2.3433333333333337-5-5-5 5-2.343333333333332-2.3433333333333337 5.703333333333335-5.703333333333333v-5.466666666666669q-2.5-1.0166666666666657-2.5-3.8299999999999983 0-1.7166666666666686 1.211666666666666-2.9299999999999997t2.928333333333331-1.211666666666666 2.9333333333333336 1.211666666666666 1.2100000000000009 2.9299999999999997q0 2.8133333333333326-2.5 3.828333333333333z m-1.6400000000000006-15.466666666666669q4.843333333333334 0 8.241666666666667 3.3966666666666665t3.3999999999999986 8.241666666666665h-3.2833333333333314q0-3.4383333333333326-2.461666666666666-5.9t-5.899999999999999-2.459999999999999-5.896666666666668 2.460000000000001-2.461666666666668 5.899999999999999h-3.283333333333333q0-4.843333333333334 3.4000000000000004-8.241666666666667t8.241666666666669-3.4000000000000004z' })
                )
            );
        }
    }]);

    return MdSettingsInputAntenna;
}(React.Component);

exports.default = MdSettingsInputAntenna;
module.exports = exports['default'];