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

var FaPencilSquare = function (_React$Component) {
    _inherits(FaPencilSquare, _React$Component);

    function FaPencilSquare() {
        _classCallCheck(this, FaPencilSquare);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaPencilSquare).apply(this, arguments));
    }

    _createClass(FaPencilSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.874285714285715 24.732857142857142l3.3928571428571423 3.3928571428571423-1.1600000000000001 1.1600000000000001h-1.25v-2.1428571428571423h-2.1428571428571423v-1.25z m9.242857142857144-8.705714285714286q0.3114285714285714 0.28857142857143003-0.06857142857142762 0.668571428571429l-6.4957142857142856 6.4957142857142856q-0.3800000000000008 0.379999999999999-0.6714285714285708 0.0671428571428585-0.3114285714285714-0.28999999999999915 0.0685714285714294-0.6714285714285708l6.495714285714284-6.494285714285716q0.379999999999999-0.3800000000000008 0.6714285714285708-0.0671428571428585z m-6.117142857142859 15.401428571428575l12.142857142857142-12.142857142857142-6.428571428571427-6.428571428571431-12.142857142857144 12.142857142857142v6.428571428571431h6.428571428571429z m13.57142857142857-13.57142857142857l2.0528571428571425-2.0528571428571425q0.6257142857142846-0.6257142857142863 0.6257142857142846-1.5171428571428578t-0.6257142857142846-1.5142857142857142l-3.3928571428571423-3.3942857142857132q-0.6257142857142846-0.6257142857142863-1.5171428571428578-0.6257142857142863t-1.5171428571428578 0.6257142857142863l-2.0542857142857116 2.0499999999999954z m8.57142857142857-8.571428571428571v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.542857142857137 1.885714285714279h-21.42857142857143q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.885714285714284-4.5428571428571445v-21.42857142857143q0-2.6571428571428575 1.8857142857142857-4.542857142857144t4.542857142857144-1.885714285714284h21.42857142857143q2.6571428571428584 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144z' })
                )
            );
        }
    }]);

    return FaPencilSquare;
}(React.Component);

exports.default = FaPencilSquare;
module.exports = exports['default'];