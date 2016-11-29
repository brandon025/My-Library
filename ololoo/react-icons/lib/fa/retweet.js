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

var FaRetweet = function (_React$Component) {
    _inherits(FaRetweet, _React$Component);

    function FaRetweet() {
        _classCallCheck(this, FaRetweet);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaRetweet).apply(this, arguments));
    }

    _createClass(FaRetweet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.666666666666664 32.666666666666664q0 0.2706666666666635-0.19733333333333292 0.4693333333333314t-0.4693333333333314 0.19733333333333292h-20q-0.16666666666666696 0-0.28000000000000025-0.03999999999999915t-0.1893333333333329-0.14666666666666828-0.11466666666666647-0.1666666666666643-0.06266666666666687-0.240000000000002-0.02133333333333365-0.240000000000002v-12.499999999999993h-3.998666666666667q-0.5426666666666664 0-0.9386666666666663-0.3960000000000008t-0.3946666666666667-0.9373333333333349q0-0.5 0.31066666666666665-0.8533333333333317l6.666666666666666-8q0.3959999999999999-0.46000000000000085 1.0213333333333328-0.46000000000000085t1.0199999999999996 0.4586666666666659l6.666666666666666 8q0.3119999999999994 0.3533333333333317 0.3119999999999994 0.8533333333333317 0 0.5413333333333341-0.397333333333334 0.9373333333333349t-0.93333333333333 0.39733333333333576h-4v8h11.999999999999998q0.33333333333333215 0 0.5199999999999996 0.22933333333333294l3.333333333333332 3.9999999999999964q0.14666666666666828 0.2293333333333365 0.14666666666666828 0.4373333333333349z m13.333333333333336-8.666666666666664q0 0.5-0.3119999999999976 0.8533333333333317l-6.666666666666664 8q-0.4173333333333389 0.4799999999999969-1.021333333333338 0.4799999999999969t-1.0213333333333345-0.4799999999999969l-6.666666666666668-8q-0.3119999999999976-0.35199999999999676-0.3119999999999976-0.8533333333333317 0-0.5413333333333341 0.3960000000000008-0.9373333333333349t0.9373333333333314-0.3960000000000008h4v-8h-12q-0.33333333333333215 0-0.5199999999999996-0.24933333333333252l-3.333333333333332-4q-0.14666666666666828-0.18666666666666565-0.14666666666666828-0.4173333333333318 0-0.27066666666666706 0.19733333333333292-0.46933333333333316t0.46933333333333493-0.1973333333333347h20q0.1666666666666643 0 0.28000000000000114 0.03999999999999915t0.18933333333333024 0.1466666666666665 0.1146666666666647 0.16666666666666607 0.0626666666666651 0.2400000000000002 0.021333333333330984 0.2400000000000002v12.5h4q0.5426666666666691 0 0.9386666666666699 0.3960000000000008t0.393333333333338 0.9373333333333349z' })
                )
            );
        }
    }]);

    return FaRetweet;
}(React.Component);

exports.default = FaRetweet;
module.exports = exports['default'];