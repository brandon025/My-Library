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

var FaMicrophoneSlash = function (_React$Component) {
    _inherits(FaMicrophoneSlash, _React$Component);

    function FaMicrophoneSlash() {
        _classCallCheck(this, FaMicrophoneSlash);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaMicrophoneSlash).apply(this, arguments));
    }

    _createClass(FaMicrophoneSlash, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10.334285714285715 21.094285714285714l-2.2542857142857144 2.2542857142857144q-0.9371428571428568-2.3000000000000007-0.9371428571428568-4.777142857142856v-2.8571428571428577q0-0.5800000000000001 0.4242857142857144-1.0042857142857144t1.0042857142857136-0.4242857142857144 1.0042857142857144 0.4242857142857144 0.4242857142857144 1.0042857142857144v2.8571428571428577q0 1.1828571428571415 0.3342857142857145 2.522857142857145z m24.86571428571429-13.437142857142856l-8.05714285714286 8.057142857142857v2.8571428571428577q0 2.9471428571428575-2.1000000000000014 5.042857142857141t-5.042857142857141 2.1000000000000014q-1.2285714285714278 0-2.4328571428571415-0.4242857142857126l-2.1428571428571423 2.1428571428571423q2.1657142857142837 1.138571428571428 4.575714285714284 1.138571428571428 4.12857142857143 0 7.064285714285717-2.935714285714287t2.9357142857142833-7.064285714285713v-2.8571428571428577q0-0.5800000000000001 0.4242857142857126-1.0042857142857144t1.004285714285718-0.4242857142857144 1.0042857142857144 0.4242857142857144 0.42428571428571615 1.0042857142857144v2.8571428571428577q0 4.9328571428571415-3.2928571428571445 8.582857142857144t-8.135714285714286 4.185714285714283v2.945714285714285h5.714285714285715q0.5799999999999983 0 1.0042857142857144 0.42571428571428527t0.4242857142857126 1.0028571428571453-0.4242857142857126 1.0057142857142836-1.004285714285718 0.42285714285714704h-14.285714285714285q-0.5800000000000001 0-1.0042857142857144-0.42285714285713993t-0.4242857142857144-1.0057142857142907 0.4242857142857144-1.0028571428571453 1.0042857142857144-0.42571428571428527h5.714285714285715v-2.9428571428571395q-2.789999999999999-0.28999999999999915-5.2457142857142856-1.8085714285714296l-5.671428571428572 5.671428571428571q-0.22142857142857153 0.22142857142856798-0.5114285714285716 0.22142857142856798t-0.5142857142857142-0.2228571428571442l-1.82857142857143-1.8328571428571365q-0.22285714285714242-0.2228571428571442-0.22285714285714242-0.5142857142857125t0.2228571428571433-0.5114285714285742l27.54285714285714-27.542857142857144q0.2242857142857133-0.2242857142857142 0.5142857142857125-0.2242857142857142t0.5142857142857125 0.2228571428571433l1.8285714285714292 1.831428571428571q0.2228571428571442 0.22285714285714242 0.2228571428571442 0.5142857142857142t-0.2228571428571442 0.5114285714285716z m-8.481428571428573-2.9471428571428584l-13.861428571428572 13.861428571428572v-11.42857142857143q0-2.9471428571428566 2.0999999999999996-5.042857142857142t5.042857142857143-2.1000000000000005q2.277142857142856 0 4.118571428571428 1.3171428571428572t2.6000000000000014 3.392857142857143z' })
                )
            );
        }
    }]);

    return FaMicrophoneSlash;
}(React.Component);

exports.default = FaMicrophoneSlash;
module.exports = exports['default'];