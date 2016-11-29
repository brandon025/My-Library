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

var FaCertificate = function (_React$Component) {
    _inherits(FaCertificate, _React$Component);

    function FaCertificate() {
        _classCallCheck(this, FaCertificate);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaCertificate).apply(this, arguments));
    }

    _createClass(FaCertificate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.57142857142857 20l3.0799999999999983 3.0142857142857125q0.6714285714285708 0.6242857142857154 0.4471428571428575 1.5614285714285714-0.2685714285714269 0.9142857142857146-1.1614285714285728 1.138571428571428l-4.1971428571428575 1.071428571428573 1.1814285714285688 4.151428571428571q0.2671428571428578 0.9142857142857146-0.42428571428571615 1.562857142857144-0.6471428571428568 0.691428571428574-1.562857142857144 0.42428571428571615l-4.151428571428571-1.1828571428571415-1.071428571428573 4.195714285714285q-0.2228571428571442 0.8928571428571459-1.138571428571428 1.1599999999999966-0.2671428571428578 0.04285714285714448-0.4242857142857126 0.04285714285714448-0.6914285714285704 0-1.138571428571428-0.4914285714285711l-3.009999999999991-3.07714285714286-3.0142857142857125 3.0799999999999983q-0.6242857142857154 0.6714285714285708-1.5614285714285714 0.4471428571428575-0.9142857142857146-0.24714285714285467-1.138571428571428-1.1614285714285728l-1.0714285714285712-4.1971428571428575-4.151428571428573 1.1814285714285688q-0.9142857142857146 0.2671428571428578-1.5628571428571432-0.42428571428571615-0.6914285714285713-0.6471428571428568-0.4242857142857144-1.562857142857144l1.1828571428571424-4.151428571428571-4.195714285714286-1.068571428571417q-0.8928571428571428-0.2228571428571442-1.1600000000000001-1.138571428571428-0.22142857142857153-0.937142857142856 0.4485714285714284-1.562857142857144l3.0771428571428574-3.0128571428571433-3.0800000000000005-3.0142857142857125q-0.6714285714285713-0.6242857142857154-0.44714285714285706-1.5614285714285714 0.2685714285714287-0.9142857142857146 1.161428571428571-1.138571428571428l4.1971428571428575-1.0714285714285712-1.1814285714285715-4.151428571428573q-0.2671428571428569-0.9142857142857146 0.4242857142857144-1.5628571428571432 0.6471428571428577-0.6914285714285713 1.5628571428571432-0.4242857142857144l4.151428571428571 1.1828571428571424 1.0685714285714294-4.195714285714286q0.22285714285714242-0.9142857142857146 1.138571428571428-1.1385714285714288 0.9142857142857128-0.2671428571428569 1.5628571428571423 0.4242857142857144l3.0128571428571433 3.1014285714285705 3.0142857142857125-3.102857142857143q0.6457142857142841-0.6714285714285713 1.5614285714285714-0.4242857142857144 0.9142857142857146 0.22285714285714286 1.138571428571428 1.1385714285714288l1.071428571428573 4.197142857142858 4.151428571428571-1.1814285714285715q0.9142857142857146-0.2671428571428569 1.562857142857144 0.4242857142857144 0.691428571428574 0.6471428571428577 0.42428571428571615 1.5628571428571432l-1.181428571428576 4.15 4.195714285714288 1.0714285714285712q0.8928571428571459 0.22285714285714242 1.1600000000000037 1.138571428571428 0.22142857142856798 0.9371428571428577-0.4485714285714266 1.5628571428571423z' })
                )
            );
        }
    }]);

    return FaCertificate;
}(React.Component);

exports.default = FaCertificate;
module.exports = exports['default'];