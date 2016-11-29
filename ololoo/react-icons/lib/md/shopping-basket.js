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

var MdShoppingBasket = function (_React$Component) {
    _inherits(MdShoppingBasket, _React$Component);

    function MdShoppingBasket() {
        _classCallCheck(this, MdShoppingBasket);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdShoppingBasket).apply(this, arguments));
    }

    _createClass(MdShoppingBasket, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 28.36q1.3283333333333331 0 2.3433333333333337-1.0166666666666657t1.0166666666666657-2.3416666666666686-1.0166666666666657-2.3416666666666686-2.3433333333333337-1.0166666666666657-2.3433333333333337 1.0166666666666657-1.0166666666666657 2.3400000000000034 1.0166666666666657 2.344999999999999 2.3433333333333337 1.0166666666666657z m-5-13.36h10l-5-7.343333333333333z m13.671666666666667 0h7.966666666666669q0.7049999999999983 0 1.2133333333333312 0.4666666666666668t0.509999999999998 1.1733333333333338q-0.7833333333333314 3.125-2.3433333333333337 8.788333333333334t-1.9533333333333331 7.149999999999999q-0.7033333333333331 2.4200000000000017-3.203333333333333 2.4200000000000017h-21.718333333333334q-2.4999999999999982 0-3.2049999999999983-2.423333333333332l-4.216666666666667-15.466666666666669q-0.08000000000000007-0.158333333333335-0.08000000000000007-0.46999999999999886 0-0.7033333333333331 0.5083333333333333-1.1716666666666669t1.2116666666666678-0.46666666666666856h7.966666666666669l7.2666666666666675-10.938333333333333q0.466666666666665-0.7033333333333331 1.4066666666666663-0.7033333333333331t1.408333333333335 0.7033333333333331z' })
                )
            );
        }
    }]);

    return MdShoppingBasket;
}(React.Component);

exports.default = MdShoppingBasket;
module.exports = exports['default'];