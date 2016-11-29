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

var FaRefresh = function (_React$Component) {
    _inherits(FaRefresh, _React$Component);

    function FaRefresh() {
        _classCallCheck(this, FaRefresh);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaRefresh).apply(this, arguments));
    }

    _createClass(FaRefresh, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.58571428571429 23.571428571428573q0 0.1114285714285721-0.024285714285717575 0.15714285714285836-1.4285714285714306 5.981428571428573-5.982857142857142 9.697142857142861t-10.67142857142857 3.7171428571428535q-3.2571428571428562 0-6.304285714285715-1.2285714285714278t-5.435714285714285-3.5l-2.8814285714285717 2.8771428571428572q-0.4214285714285717 0.42285714285713993-1.0000000000000009 0.42285714285713993t-1.0042857142857144-0.42285714285713993-0.4271428571428566-1.0057142857142907v-10q0-0.5785714285714292 0.4242857142857144-1.0028571428571418t1.004285714285714-0.42571428571428527h10q0.5800000000000001 0 1.0042857142857144 0.42571428571428527t0.42714285714285793 1.0028571428571418-0.4242857142857144 1.0057142857142871l-3.057142857142857 3.057142857142857q1.5857142857142854 1.4742857142857133 3.5942857142857143 2.2785714285714285t4.174285714285714 0.8000000000000007q2.991428571428571 0 5.580000000000002-1.4499999999999993t4.151428571428571-3.9957142857142856q0.24571428571428555-0.379999999999999 1.1828571428571415-2.611428571428572 0.17857142857142705-0.514285714285716 0.6714285714285708-0.514285714285716h4.285714285714285q0.28857142857143003 0 0.5 0.2142857142857153t0.2142857142857153 0.5z m0.5571428571428569-17.857142857142858v10q0 0.5799999999999983-0.42428571428571615 1.0042857142857144t-1.0042857142857144 0.4242857142857126h-10q-0.5799999999999983 0-1.0042857142857144-0.4242857142857126t-0.42428571428571615-1.0042857142857144 0.4242857142857126-1.0042857142857144l3.080000000000002-3.08q-3.3042857142857116-3.0585714285714296-7.789999999999999-3.0585714285714296-2.991428571428571 0-5.58 1.451428571428572t-4.151428571428571 3.9957142857142873q-0.24571428571428555 0.3800000000000008-1.1828571428571433 2.611428571428572-0.17857142857142883 0.5142857142857125-0.6714285714285708 0.5142857142857125h-4.438571428571429q-0.2900000000000005 0-0.5028571428571436-0.21142857142856997t-0.2128571428571422-0.5042857142857144v-0.15714285714285836q1.4514285714285715-5.981428571428573 6.0285714285714285-9.697142857142858t10.711428571428572-3.7171428571428575q3.2571428571428562 0 6.338571428571427 1.2385714285714289t5.467142857142857 3.492857142857143l2.900000000000002-2.88q0.43142857142856883-0.4228571428571435 1.0114285714285671-0.4228571428571435t1.0057142857142836 0.4228571428571426 0.4200000000000088 1.0057142857142862z' })
                )
            );
        }
    }]);

    return FaRefresh;
}(React.Component);

exports.default = FaRefresh;
module.exports = exports['default'];