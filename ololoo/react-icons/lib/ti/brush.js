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

var TiBrush = function (_React$Component) {
    _inherits(TiBrush, _React$Component);

    function TiBrush() {
        _classCallCheck(this, TiBrush);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiBrush).apply(this, arguments));
    }

    _createClass(TiBrush, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.62833333333334 6.371666666666667c-0.6366666666666632-0.6383333333333336-1.490000000000002-0.9766666666666666-2.3583333333333343-0.9766666666666666-0.41666666666666785 0-0.8383333333333347 0.07833333333333314-1.2399999999999984 0.2400000000000002-7.416666666666671 2.9816666666666665-12.986666666666668 7.9316666666666675-17.530000000000005 15.598333333333333-0.16666666666666607 0.2866666666666653-0.2699999999999996 0.591666666666665-0.34666666666666757 0.9033333333333324-2.3000000000000007 0.3583333333333343-4.333333333333334 1.504999999999999-5.736666666666667 3.3216666666666654-1.5266666666666664 1.9750000000000014-2.158333333333333 4.491666666666667-1.7766666666666664 7.09l0.3600000000000012 2.451666666666668 2.455 0.3616666666666646c0.4883333333333333 0.07166666666666544 0.9833333333333325 0.10666666666666913 1.4666666666666668 0.10666666666666913 4.571666666666665 0 8.25-3.1799999999999997 8.945-7.605 0.3133333333333326-0.07833333333333314 0.6166666666666671-0.19166666666666643 0.9066666666666663-0.3633333333333333 7.663333333333334-4.550000000000001 12.616666666666667-10.116666666666667 15.591666666666669-17.53 0.49499999999999744-1.2383333333333333 0.20333333333333314-2.6550000000000002-0.7383333333333368-3.6000000000000005z m-24.70666666666667 25.761666666666674c-0.3200000000000003 0-0.6500000000000004-0.02499999999999858-0.9833333333333334-0.07166666666666544-0.5166666666666666-3.5066666666666677 1.7583333333333337-6.350000000000001 4.999999999999999-6.699999999999999l1.6999999999999993 1.6999999999999993c-0.31666666666666643 2.9333333333333336-2.673333333333334 5.073333333333331-5.716666666666667 5.073333333333331z m8.149999999999999-7.5l-1.6999999999999993-1.7033333333333331c0.6333333333333329-1.0666666666666664 1.288333333333334-2.0549999999999997 1.961666666666666-3.0066666666666677 0.045000000000001705 0.06666666666666643 2.7333333333333343 2.754999999999999 2.7333333333333343 2.754999999999999-0.9499999999999993 0.6666666666666679-1.9333333333333336 1.3233333333333341-2.995000000000001 1.9533333333333331z m4.346666666666668-2.956666666666667s-3.033333333333335-3-3.129999999999999-3.039999999999999c3.578333333333333-4.640000000000001 7.75-7.808333333333334 12.983333333333334-9.905-2.09 5.209999999999999-5.238333333333333 9.37-9.850000000000001 12.943333333333333z' })
                )
            );
        }
    }]);

    return TiBrush;
}(React.Component);

exports.default = TiBrush;
module.exports = exports['default'];