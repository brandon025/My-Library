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

var MdLaptopMac = function (_React$Component) {
    _inherits(MdLaptopMac, _React$Component);

    function MdLaptopMac() {
        _classCallCheck(this, MdLaptopMac);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdLaptopMac).apply(this, arguments));
    }

    _createClass(MdLaptopMac, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 31.640000000000004q0.7033333333333331 0 1.1716666666666669-0.466666666666665t0.466666666666665-1.173333333333332-0.466666666666665-1.1716666666666669-1.1716666666666669-0.466666666666665-1.1716666666666669 0.466666666666665-0.466666666666665 1.1716666666666669 0.466666666666665 1.1716666666666669 1.1716666666666669 0.466666666666665z m-13.36-23.28v18.283333333333335h26.71666666666667v-18.285000000000004h-26.715000000000003z m26.72 21.639999999999997h6.640000000000001q0 1.3283333333333331-1.0166666666666657 2.3433333333333337t-2.3416666666666686 1.0166666666666657h-33.28333333333333q-1.326666666666667 0-2.3416666666666672-1.0166666666666657t-1.016666666666667-2.3433333333333337h6.641666666666667q-1.3283333333333331 0-2.3050000000000006-1.0166666666666657t-0.9766666666666666-2.3416666666666686v-18.28333333333333q0-1.3266666666666689 0.9766666666666666-2.3416666666666686t2.3050000000000006-1.0166666666666657h26.71666666666667q1.3299999999999983 0 2.306666666666665 1.0166666666666666t0.9750000000000014 2.343333333333333v18.283333333333335q0 1.326666666666668-0.9766666666666666 2.341666666666665t-2.306666666666665 1.0166666666666657z' })
                )
            );
        }
    }]);

    return MdLaptopMac;
}(React.Component);

exports.default = MdLaptopMac;
module.exports = exports['default'];