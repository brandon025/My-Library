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

var FaRotateLeft = function (_React$Component) {
    _inherits(FaRotateLeft, _React$Component);

    function FaRotateLeft() {
        _classCallCheck(this, FaRotateLeft);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaRotateLeft).apply(this, arguments));
    }

    _createClass(FaRotateLeft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.142857142857146 20q0 3.482857142857142-1.3614285714285685 6.651428571428571t-3.6599999999999966 5.468571428571426-5.46857142857143 3.6599999999999966-6.652857142857151 1.3628571428571519q-3.838571428571427 0-7.297142857142857-1.6199999999999974t-5.892857142857143-4.565714285714289q-0.15714285714285747-0.22142857142857153-0.1457142857142859-0.5t0.1900000000000004-0.4571428571428555l3.057142857142857-3.081428571428571q0.2242857142857151-0.1999999999999993 0.5600000000000005-0.1999999999999993 0.35714285714285765 0.04285714285714448 0.5142857142857142 0.2657142857142851 1.6285714285714281 2.1185714285714283 3.9942857142857147 3.280000000000001t5.022857142857145 1.1600000000000001q2.321428571428573 0 4.431428571428572-0.904285714285713t3.650000000000002-2.442857142857143 2.442857142857143-3.6514285714285712 0.904285714285713-4.432857142857145-0.904285714285713-4.431428571428572-2.442857142857143-3.6500000000000004-3.6514285714285712-2.442857142857143-4.431428571428572-0.9057142857142857q-2.185714285714287 0-4.1971428571428575 0.7928571428571427t-3.571428571428571 2.267142857142858l3.057142857142857 3.08q0.6928571428571431 0.6714285714285708 0.31428571428571495 1.540000000000001-0.3800000000000008 0.894285714285715-1.3171428571428567 0.894285714285715h-10q-0.5800000000000001 0-1.0042857142857144-0.4242857142857126t-0.42571428571429104-1.0057142857142942v-10q0-0.9371428571428568 0.8928571428571428-1.3171428571428567 0.8714285714285719-0.3799999999999999 1.54 0.31428571428571406l2.8999999999999995 2.878571428571429q2.3900000000000006-2.257142857142857 5.457142857142857-3.4942857142857147t6.3514285714285705-1.2385714285714284q3.485714285714284 0 6.652857142857144 1.3614285714285712t5.468571428571426 3.66 3.6599999999999966 5.46857142857143 1.3614285714285685 6.651428571428571z' })
                )
            );
        }
    }]);

    return FaRotateLeft;
}(React.Component);

exports.default = FaRotateLeft;
module.exports = exports['default'];