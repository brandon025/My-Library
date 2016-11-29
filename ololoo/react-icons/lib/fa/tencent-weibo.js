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

var FaTencentWeibo = function (_React$Component) {
    _inherits(FaTencentWeibo, _React$Component);

    function FaTencentWeibo() {
        _classCallCheck(this, FaTencentWeibo);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaTencentWeibo).apply(this, arguments));
    }

    _createClass(FaTencentWeibo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.50857142857143 12.767142857142856q0 1.7857142857142865-1.2714285714285722 3.047142857142857t-3.0371428571428574 1.2614285714285707q-1.3399999999999999 0-2.4771428571428586-0.7814285714285703-1.3857142857142861 1.4957142857142856-2.5671428571428567 3.2571428571428562-5.514285714285714 8.282857142857143-4.51 19.17571428571428 0.02285714285714313 0.490000000000002-0.27857142857142847 0.8571428571428541t-0.7714285714285722 0.41428571428571104h-0.10999999999999943q-0.44571428571428484 0-0.7799999999999994-0.29999999999999716t-0.3800000000000008-0.7485714285714309q-0.31428571428571495-2.8142857142857167-0.07857142857142918-5.5242857142857105t0.6571428571428566-4.845714285714287 1.2071428571428573-4.151428571428571 1.5399999999999991-3.4714285714285715 1.6514285714285712-2.789999999999999q1.361428571428572-2.0100000000000016 2.9471428571428575-3.685714285714287-0.35714285714285765-0.7799999999999994-0.35714285714285765-1.717142857142857 0-1.7857142857142865 1.2614285714285707-3.047142857142857t3.0471428571428554-1.2614285714285725 3.048571428571428 1.2614285714285707 1.2614285714285707 3.047142857142857z m8.504285714285714 0.24571428571428555q0 3.525714285714285-1.7428571428571438 6.514285714285714t-4.742857142857144 4.734285714285715-6.5285714285714285 1.7428571428571438q-1.428571428571427 0-2.9242857142857126-0.31428571428571317-0.46857142857142975-0.1114285714285721-0.725714285714286-0.524285714285714t-0.14428571428571502-0.8800000000000026q0.1114285714285721-0.4471428571428575 0.514285714285716-0.7028571428571411t0.8685714285714283-0.16714285714285637q1.1400000000000006 0.2914285714285718 2.411428571428573 0.2914285714285718 2.1657142857142873 0 4.151428571428571-0.8485714285714288t3.4142857142857146-2.277142857142856 2.2785714285714285-3.4142857142857146 0.8471428571428561-4.152857142857144-0.8485714285714288-4.152857142857144-2.2785714285714285-3.4142857142857146-3.4142857142857146-2.2785714285714285-4.152857142857144-0.8485714285714288-4.151428571428571 0.8485714285714288-3.4142857142857146 2.2771428571428576-2.2785714285714285 3.4142857142857146-0.8485714285714288 4.152857142857142q0 2.5428571428571427 1.1600000000000001 4.864285714285714 0.22285714285714242 0.4471428571428575 0.07857142857142918 0.8928571428571423t-0.5685714285714294 0.6714285714285708-0.8814285714285717 0.06571428571428584-0.6814285714285706-0.5800000000000018q-1.4285714285714288-2.7457142857142856-1.4285714285714288-5.914285714285715 0-2.6571428571428584 1.0385714285714283-5.0685714285714285t2.780000000000001-4.149999999999997 4.151428571428573-2.765714285714286 5.042857142857143-1.0285714285714285q3.5285714285714285 0 6.5285714285714285 1.7428571428571429t4.742857142857144 4.742857142857143 1.7428571428571402 6.52857142857143z' })
                )
            );
        }
    }]);

    return FaTencentWeibo;
}(React.Component);

exports.default = FaTencentWeibo;
module.exports = exports['default'];