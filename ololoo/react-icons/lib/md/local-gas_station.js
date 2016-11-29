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

var MdLocalGasStation = function (_React$Component) {
    _inherits(MdLocalGasStation, _React$Component);

    function MdLocalGasStation() {
        _classCallCheck(this, MdLocalGasStation);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdLocalGasStation).apply(this, arguments));
    }

    _createClass(MdLocalGasStation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 16.64q0.7033333333333331 0 1.1716666666666669-0.466666666666665t0.466666666666665-1.1733333333333338-0.466666666666665-1.1716666666666669-1.1716666666666669-0.4666666666666668-1.1716666666666669 0.4666666666666668-0.466666666666665 1.1716666666666669 0.466666666666665 1.171666666666665 1.1716666666666669 0.466666666666665z m-10 0v-8.283333333333333h-10v8.283333333333333h10z m12.966666666666669-4.608333333333334q1.173333333333332 1.17 1.173333333333332 2.966666666666667v15.860000000000001q0 1.7166666666666686-1.211666666666666 2.9299999999999997t-2.9283333333333346 1.211666666666666-2.9333333333333336-1.2100000000000009-1.2100000000000009-2.9299999999999997v-8.36h-2.5v12.5h-16.716666666666665v-26.64q0-1.3283333333333314 1.0133333333333336-2.343333333333332t2.3433333333333337-1.0166666666666675h10.000000000000002q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0166666666666657 2.343333333333333v11.64h1.6383333333333319q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3416666666666686v7.5q0 0.7033333333333331 0.466666666666665 1.1716666666666669t1.1716666666666669 0.46666666666666856 1.1716666666666669-0.46666666666666856 0.466666666666665-1.1716666666666669v-12.033333333333331q-0.7033333333333331 0.31666666666666643-1.6400000000000006 0.31666666666666643-1.716666666666665 0-2.9299999999999997-1.2133333333333347t-1.2116666666666625-2.9283333333333346q0-2.8166666666666664 2.6583333333333314-3.908333333333333l-3.5166666666666657-3.5166666666666666 1.8000000000000007-1.7166666666666668z' })
                )
            );
        }
    }]);

    return MdLocalGasStation;
}(React.Component);

exports.default = MdLocalGasStation;
module.exports = exports['default'];