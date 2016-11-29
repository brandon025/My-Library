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

var FaWheelchair = function (_React$Component) {
    _inherits(FaWheelchair, _React$Component);

    function FaWheelchair() {
        _classCallCheck(this, FaWheelchair);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaWheelchair).apply(this, arguments));
    }

    _createClass(FaWheelchair, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.97714285714286 26.495714285714286l2.277142857142856 4.5528571428571425q-1.2942857142857136 3.9957142857142856-4.685714285714287 6.471428571428568t-7.568571428571428 2.480000000000004q-3.482857142857142 0-6.440000000000001-1.731428571428573t-4.685714285714286-4.685714285714283-1.73142857142857-6.444285714285716q0-4.0385714285714265 2.332857142857143-7.364285714285714t6.12857142857143-4.710000000000001l0.3785714285714281 2.9242857142857126q-2.7228571428571424 1.2057142857142864-4.352857142857143 3.694285714285712t-1.6300000000000008 5.460000000000004q0 4.12857142857143 2.935714285714286 7.062857142857144t7.064285714285714 2.9371428571428595q2.814285714285713 0 5.190000000000001-1.452857142857141t3.6828571428571415-3.9171428571428564 1.105714285714285-5.277142857142856z m12.232857142857142 2.231428571428573l1.2942857142857136 2.5428571428571445-5.714285714285715 2.857142857142854q-0.28999999999999915 0.15857142857142748-0.6471428571428532 0.15857142857142748-0.8928571428571423 0-1.2714285714285722-0.7828571428571465l-5.337142857142862-10.64571428571428h-10.534285714285712q-0.5357142857142865 0-0.9485714285714284-0.3714285714285701t-0.4800000000000004-0.9000000000000021l-2.1428571428571423-17.39142857142857q-0.042857142857142705-0.357142857142859 0.13428571428571345-0.937142857142859 0.31428571428571495-1.1385714285714283 1.2714285714285722-1.842857142857143t2.168571428571429-0.6999999999999994q1.474285714285715 0 2.5242857142857122 1.0471428571428572t1.0442857142857171 2.524285714285714q0 1.5385714285714283-1.1571428571428584 2.621428571428571t-2.6799999999999997 0.9257142857142853l0.8257142857142838 6.452857142857145h9.442857142857143v2.857142857142856h-9.088571428571427l0.35714285714285765 2.8571428571428577h10.157142857142858q0.8914285714285697 0 1.2714285714285722 0.7800000000000011l5.090000000000003 10.157142857142858z' })
                )
            );
        }
    }]);

    return FaWheelchair;
}(React.Component);

exports.default = FaWheelchair;
module.exports = exports['default'];