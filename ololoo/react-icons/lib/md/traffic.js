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

var MdTraffic = function (_React$Component) {
    _inherits(MdTraffic, _React$Component);

    function MdTraffic() {
        _classCallCheck(this, MdTraffic);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdTraffic).apply(this, arguments));
    }

    _createClass(MdTraffic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 15q1.4066666666666663 0 2.383333333333333-1.0166666666666657t0.9766666666666666-2.341666666666667q0-1.4066666666666663-0.9766666666666666-2.3433333333333337t-2.383333333333333-0.9400000000000013-2.383333333333333 0.9383333333333326-0.9766666666666666 2.341666666666667q0 1.3283333333333331 0.9766666666666666 2.3433333333333337t2.383333333333333 1.0183333333333344z m0 8.36q1.4066666666666663 0 2.383333333333333-1.0166666666666657t0.9766666666666666-2.3416666666666686-1.0166666666666657-2.3416666666666686-2.3416666666666686-1.0166666666666657q-1.4050000000000011 0-2.383333333333333 1.0166666666666657t-0.9749999999999979 2.3400000000000034 0.9766666666666666 2.344999999999999 2.383333333333333 1.0166666666666657z m0 8.280000000000001q1.4066666666666663 0 2.383333333333333-0.9766666666666666t0.9766666666666666-2.3049999999999997-1.0166666666666657-2.3433333333333337-2.3416666666666686-1.0166666666666657q-1.4050000000000011 0-2.383333333333333 1.0166666666666657t-0.9750000000000014 2.3416666666666686 0.9766666666666666 2.3049999999999997 2.383333333333333 0.9766666666666666z m13.36-15q0 2.3433333333333337-1.4066666666666663 4.100000000000001t-3.5933333333333337 2.383333333333333v1.8766666666666652h5q0 2.3433333333333337-1.4066666666666663 4.063333333333333t-3.5933333333333337 2.3433333333333337v1.9533333333333331q0 0.7033333333333331-0.5083333333333329 1.1716666666666669t-1.2100000000000009 0.46666666666666856h-13.283333333333333q-0.6999999999999993 0-1.209999999999999-0.46666666666666856t-0.5083333333333329-1.173333333333332v-1.9533333333333331q-2.1883333333333326-0.625-3.5933333333333337-2.3433333333333337t-1.4083333333333332-4.061666666666667h5v-1.875q-2.1883333333333344-0.625-3.5933333333333337-2.383333333333333t-1.4066666666666663-4.100000000000001h5v-1.8783333333333303q-2.1883333333333326-0.625-3.5933333333333337-2.3433333333333355t-1.4066666666666663-4.063333333333334h5v-1.7166666666666668q0-0.7050000000000001 0.5083333333333329-1.1733333333333338t1.2116666666666678-0.466666666666665h13.283333333333331q0.6999999999999993 0 1.2100000000000009 0.4666666666666668t0.5100000000000016 1.1733333333333338v1.7166666666666668h4.9999999999999964q0 2.3450000000000006-1.4066666666666663 4.066666666666666t-3.5933333333333337 2.341666666666667v1.8733333333333348h5z' })
                )
            );
        }
    }]);

    return MdTraffic;
}(React.Component);

exports.default = MdTraffic;
module.exports = exports['default'];