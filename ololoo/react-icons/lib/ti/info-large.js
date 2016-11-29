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

var TiInfoLarge = function (_React$Component) {
    _inherits(TiInfoLarge, _React$Component);

    function TiInfoLarge() {
        _classCallCheck(this, TiInfoLarge);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiInfoLarge).apply(this, arguments));
    }

    _createClass(TiInfoLarge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.066666666666666 29.208333333333332c-0.011666666666666714 0.0033333333333338544-0.9333333333333336 0.3099999999999987-1.7333333333333343 0.3099999999999987-0.44166666666666643 0-0.620000000000001-0.08999999999999986-0.6766666666666659-0.129999999999999-0.28000000000000114-0.19500000000000028-0.8000000000000007-0.5599999999999987 0.08999999999999986-2.333333333333332l1.6666666666666679-3.323333333333334c0.9883333333333333-1.9733333333333327 1.1333333333333329-3.883333333333333 0.408333333333335-5.375-0.5933333333333337-1.2216666666666676-1.7333333333333343-2.0599999999999987-3.1999999999999993-2.3599999999999994-0.5283333333333324-0.1083333333333325-1.0666666666666664-0.16166666666666707-1.5966666666666676-0.16166666666666707-3.083333333333334 0-5.156666666666666 1.799999999999999-5.243333333333332 1.876666666666667-0.3000000000000007 0.26333333333333186-0.3699999999999992 0.6999999999999993-0.17166666666666686 1.043333333333333 0.1999999999999993 0.3433333333333337 0.6116666666666664 0.5 0.9916666666666671 0.370000000000001 0.00833333333333286-0.0033333333333338544 0.9333333333333336-0.3116666666666674 1.7333333333333343-0.3116666666666674 0.4366666666666674 0 0.6133333333333333 0.09166666666666501 0.6666666666666679 0.129999999999999 0.283333333333335 0.19666666666666544 0.8049999999999997 0.5666666666666664-0.08333333333333393 2.336666666666666l-1.666666666666666 3.3249999999999993c-0.9900000000000002 1.9750000000000014-1.1333333333333329 3.883333333333333-0.4083333333333332 5.375 0.5933333333333337 1.2216666666666676 1.7300000000000004 2.0600000000000023 3.200000000000001 2.3599999999999994 0.5249999999999986 0.10499999999999687 1.0616666666666674 0.16166666666666885 1.591666666666665 0.16166666666666885 3.083333333333332 0 5.16-1.8000000000000007 5.246666666666666-1.8766666666666652 0.3000000000000007-0.2616666666666667 0.36666666666666714-0.6999999999999993 0.1700000000000017-1.043333333333333-0.1999999999999993-0.341666666666665-0.6166666666666671-0.495000000000001-0.9883333333333333-0.37166666666666615z m2.7666666666666693-19.208333333333332c0 2.303333333333333-1.8666666666666671 4.166666666666668-4.166666666666668 4.166666666666668s-4.166666666666668-1.8616666666666681-4.166666666666668-4.166666666666668c0-2.3 1.8666666666666671-4.166666666666667 4.166666666666668-4.166666666666667s4.166666666666668 1.8666666666666671 4.166666666666668 4.166666666666667z' })
                )
            );
        }
    }]);

    return TiInfoLarge;
}(React.Component);

exports.default = TiInfoLarge;
module.exports = exports['default'];