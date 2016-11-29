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

var MdPhoneLocked = function (_React$Component) {
    _inherits(MdPhoneLocked, _React$Component);

    function MdPhoneLocked() {
        _classCallCheck(this, MdPhoneLocked);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdPhoneLocked).apply(this, arguments));
    }

    _createClass(MdPhoneLocked, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.03333333333333 6.640000000000001v-0.7833333333333332q0-1.17-0.8616666666666681-2.0300000000000002t-2.033333333333335-0.8600000000000003-1.9899999999999984 0.8600000000000003-0.8216666666666654 2.033333333333333v0.7800000000000002h5.703333333333337z m1.326666666666668 0q0.7033333333333331 0 1.1716666666666669 0.5083333333333329t0.46666666666666856 1.2100000000000009v6.641666666666666q0 0.7033333333333331-0.46666666666666856 1.1716666666666669t-1.173333333333332 0.466666666666665h-8.358333333333334q-0.7033333333333331 0-1.1716666666666669-0.466666666666665t-0.466666666666665-1.1716666666666669v-6.639999999999999q0-0.7033333333333331 0.466666666666665-1.211666666666667t1.1716666666666669-0.5100000000000007v-0.7833333333333332q0-1.7166666666666668 1.211666666666666-2.966666666666667t2.9299999999999997-1.25 2.9666666666666686 1.25 1.25 2.966666666666667v0.7833333333333332z m0 19.220000000000002q0.7033333333333331 0 1.1716666666666669 0.466666666666665t0.46666666666666856 1.173333333333332v5.859999999999999q0 0.7033333333333331-0.46666666666666856 1.1716666666666669t-1.173333333333332 0.46666666666666856q-11.716666666666669 0-20.038333333333334-8.32t-8.32-20.03666666666667q0-0.7033333333333323 0.46999999999999975-1.171666666666666t1.1716666666666669-0.4666666666666668h5.858333333333333q0.7050000000000001 0 1.1733333333333338 0.4666666666666668t0.4666666666666668 1.1716666666666669q0 3.124999999999999 0.9399999999999995 5.9383333333333335 0.3133333333333326 1.0166666666666675-0.39000000000000057 1.7166666666666668l-3.673333333333332 3.6750000000000007q3.673333333333334 7.188333333333333 11.016666666666667 11.01666666666667l3.671666666666667-3.673333333333332q0.7033333333333331-0.7033333333333331 1.716666666666665-0.39000000000000057 2.8166666666666664 0.9383333333333326 5.939999999999998 0.9383333333333326z' })
                )
            );
        }
    }]);

    return MdPhoneLocked;
}(React.Component);

exports.default = MdPhoneLocked;
module.exports = exports['default'];