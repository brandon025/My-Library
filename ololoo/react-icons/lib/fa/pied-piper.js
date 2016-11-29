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

var FaPiedPiper = function (_React$Component) {
    _inherits(FaPiedPiper, _React$Component);

    function FaPiedPiper() {
        _classCallCheck(this, FaPiedPiper);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaPiedPiper).apply(this, arguments));
    }

    _createClass(FaPiedPiper, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.205714285714286 22.767142857142858q0 1.428571428571427-0.8485714285714288 2.4328571428571415t-2.0314285714285703 1.0042857142857144q-0.9600000000000009 0-1.562857142857144-0.33428571428571274v-6.185714285714287q0.6257142857142846-0.3785714285714299 1.562857142857144-0.3785714285714299 1.1828571428571415 0 2.0314285714285703 1.014285714285716t0.8485714285714288 2.445714285714285z m-7.657142857142858-9.552857142857144q0 1.4285714285714288-0.8485714285714288 2.442857142857143t-2.031428571428572 1.017142857142856q-0.9600000000000009 0-1.5628571428571423-0.33428571428571274v-6.1828571428571415q0.6257142857142863-0.3800000000000008 1.5628571428571423-0.3800000000000008 1.1828571428571433 0 2.031428571428572 1.0042857142857144t0.8485714285714288 2.4328571428571433z m12.545714285714286 9.62q0-2.991428571428571-1.9642857142857153-5.111428571428572t-4.752857142857142-2.120000000000001q-0.4471428571428575 0-0.8714285714285701 0.06714285714285673-0.5114285714285707 1.7400000000000002-1.7399999999999984 3.034285714285714-1.942857142857143 2.120000000000001-4.710000000000001 2.2542857142857144v14.197142857142858l4.710000000000001-0.914285714285711v-4.600000000000001q1.138571428571428 0.4242857142857126 2.611428571428572 0.4242857142857126 2.789999999999999 0 4.7542857142857144-2.120000000000001t1.9657142857142844-5.111428571428572z m-7.657142857142858-9.531428571428572q0-2.991428571428571-1.975714285714286-5.11142857142857t-4.765714285714285-2.119999999999999q-1.6514285714285712 0-3.147142857142857 0.8028571428571425h-4.1514285714285695v18.75l4.709999999999999-0.9142857142857146v-4.600000000000001q1.2285714285714278 0.4242857142857126 2.59 0.4242857142857126 2.789999999999999 0 4.765714285714285-2.120000000000001t1.975714285714286-5.111428571428572z m13.70571428571429-4.017142857142854v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-21.42857142857143q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.885714285714284-4.5428571428571445v-21.42857142857143q0-2.6571428571428575 1.8857142857142857-4.542857142857144t4.542857142857144-1.885714285714284h21.42857142857143q2.6571428571428584 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144z' })
                )
            );
        }
    }]);

    return FaPiedPiper;
}(React.Component);

exports.default = FaPiedPiper;
module.exports = exports['default'];