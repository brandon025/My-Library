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

var MdClosedCaption = function (_React$Component) {
    _inherits(MdClosedCaption, _React$Component);

    function MdClosedCaption() {
        _classCallCheck(this, MdClosedCaption);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdClosedCaption).apply(this, arguments));
    }

    _createClass(MdClosedCaption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 18.36v-1.7166666666666686q0-0.7050000000000001-0.466666666666665-1.1733333333333338t-1.173333333333332-0.4666666666666668h-5q-0.7033333333333331 0-1.211666666666666 0.4666666666666668t-0.5100000000000016 1.171666666666665v6.716666666666669q0 0.7049999999999983 0.5083333333333329 1.173333333333332t1.2100000000000009 0.466666666666665h5q0.7033333333333331 0 1.1716666666666669-0.466666666666665t0.466666666666665-1.173333333333332v-1.716666666666665h-2.5v0.8583333333333343h-3.3599999999999994v-5h3.3649999999999984v0.8616666666666681h2.5z m-11.64 0v-1.7166666666666686q0-0.7050000000000001-0.5083333333333329-1.1733333333333338t-1.2100000000000009-0.4666666666666668h-5q-0.7033333333333331 0-1.1716666666666669 0.4666666666666668t-0.46999999999999886 1.1716666666666686v6.716666666666669q0 0.7049999999999983 0.4666666666666668 1.173333333333332t1.1733333333333338 0.466666666666665h5q0.7033333333333331 0 1.211666666666666-0.466666666666665t0.5100000000000016-1.173333333333332v-1.7166666666666686h-2.5v0.8583333333333343h-3.361666666666668v-5h3.3599999999999994v0.8616666666666681h2.5z m13.280000000000001-11.72q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.3400000000000025v20q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-23.28333333333333q-1.405000000000002 0-2.3833333333333346-1.0166666666666657t-0.9733333333333345-2.3383333333333383v-20q0-1.33 0.9749999999999996-2.3450000000000006t2.383333333333333-1.0166666666666666h23.28333333333333z' })
                )
            );
        }
    }]);

    return MdClosedCaption;
}(React.Component);

exports.default = MdClosedCaption;
module.exports = exports['default'];