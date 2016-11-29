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

var FaUser = function (_React$Component) {
    _inherits(FaUser, _React$Component);

    function FaUser() {
        _classCallCheck(this, FaUser);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaUser).apply(this, arguments));
    }

    _createClass(FaUser, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.714285714285715 31.361428571428572q0 2.678571428571427-1.6285714285714263 4.228571428571431t-4.332857142857144 1.5528571428571425h-19.50714285714286q-2.6999999999999993 0-4.328571428571428-1.5514285714285734t-1.6314285714285717-4.228571428571428q0-1.1857142857142868 0.07857142857142829-2.3114285714285714t0.31428571428571406-2.4328571428571415 0.5899999999999999-2.421428571428571 0.96-2.1757142857142853 1.3857142857142861-1.8085714285714296 1.9071428571428566-1.1957142857142848 2.4885714285714293-0.4457142857142884q0.1999999999999993 0 0.9371428571428577 0.4800000000000004t1.662857142857142 1.071428571428573 2.41 1.071428571428573 2.9800000000000004 0.4800000000000004 2.9800000000000004-0.4800000000000004 2.41-1.071428571428573 1.662857142857142-1.071428571428573 0.937142857142856-0.4800000000000004q1.361428571428572 0 2.4885714285714293 0.4471428571428575t1.9085714285714275 1.1942857142857157 1.3857142857142861 1.807142857142857 0.9600000000000009 2.1757142857142853 0.5914285714285725 2.421428571428571 0.3142857142857167 2.4328571428571415 0.07714285714286007 2.3099999999999987z m-7.142857142857142-19.932857142857145q0 3.54857142857143-2.5114285714285707 6.060000000000002t-6.060000000000002 2.5114285714285707-6.0600000000000005-2.5114285714285707-2.5114285714285707-6.0600000000000005 2.5114285714285725-6.0600000000000005 6.059999999999999-2.511428571428571 6.060000000000002 2.511428571428571 2.5114285714285707 6.0600000000000005z' })
                )
            );
        }
    }]);

    return FaUser;
}(React.Component);

exports.default = FaUser;
module.exports = exports['default'];