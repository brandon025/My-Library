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

var FaMoney = function (_React$Component) {
    _inherits(FaMoney, _React$Component);

    function FaMoney() {
        _classCallCheck(this, FaMoney);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaMoney).apply(this, arguments));
    }

    _createClass(FaMoney, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16 25.333333333333332h8v-2h-2.666666666666668v-9.333333333333332h-2.3733333333333313l-3.0839999999999996 2.8533333333333317 1.6039999999999992 1.6666666666666679q0.8746666666666663-0.7693333333333321 1.1466666666666647-1.1866666666666674h0.03999999999999915v6h-2.666666666666666v2z m10.666666666666664-5.333333333333332q0 1.458666666666666-0.4373333333333349 2.960000000000001t-1.2399999999999984 2.7906666666666666-2.1146666666666682 2.103999999999999-2.8746666666666627 0.8119999999999976-2.8746666666666663-0.8133333333333326-2.1146666666666665-2.102666666666668-1.2400000000000002-2.791999999999998-0.4373333333333349-2.958666666666666 0.43733333333333313-2.960000000000001 1.2400000000000002-2.7906666666666666 2.1146666666666647-2.103999999999999 2.87466666666667-0.8120000000000012 2.8746666666666663 0.8133333333333326 2.1146666666666682 2.102666666666666 1.2399999999999984 2.792 0.43733333333333135 2.9586666666666694z m10.666666666666664 5.333333333333332v-10.666666666666666q-2.2079999999999984 0-3.7706666666666635-1.5626666666666669t-1.562666666666665-3.770666666666667h-24q0 2.208-1.5626666666666669 3.770666666666667t-3.7706666666666666 1.5626666666666669v10.666666666666666q2.2079999999999997 0 3.7706666666666666 1.562666666666665t1.5626666666666669 3.770666666666667h24q0-2.2079999999999984 1.562666666666665-3.770666666666667t3.7706666666666635-1.562666666666665z m2.6666666666666643-17.333333333333332v24q0 0.5413333333333341-0.3960000000000008 0.9373333333333349t-0.9373333333333278 0.3959999999999937h-37.33333333333333q-0.5413333333333358 0-0.9373333333333357-0.3960000000000008t-0.396-0.9373333333333278v-24q0-0.5413333333333332 0.39599999999999996-0.9373333333333331t0.9373333333333334-0.3960000000000008h37.33333333333333q0.5413333333333341 0 0.9373333333333349 0.3959999999999999t0.3960000000000008 0.937333333333334z' })
                )
            );
        }
    }]);

    return FaMoney;
}(React.Component);

exports.default = FaMoney;
module.exports = exports['default'];