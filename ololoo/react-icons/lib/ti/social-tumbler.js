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

var TiSocialTumbler = function (_React$Component) {
    _inherits(TiSocialTumbler, _React$Component);

    function TiSocialTumbler() {
        _classCallCheck(this, TiSocialTumbler);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiSocialTumbler).apply(this, arguments));
    }

    _createClass(TiSocialTumbler, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.878333333333334 29.86666666666667v-3.4416666666666664c-1.1166666666666671 0.7466666666666661-2.1999999999999993 1.1166666666666671-3.253333333333334 1.1166666666666671-0.49666666666666615 0-1.0500000000000007-0.1566666666666663-1.673333333333332-0.461666666666666-0.370000000000001-0.25-0.5883333333333347-0.5283333333333324-0.6533333333333324-0.8383333333333347-0.18333333333333357-0.37333333333333485-0.29666666666666686-1.1799999999999997-0.29666666666666686-2.423333333333332v-5.485000000000003h5v-3.3333333333333357h-5v-5.593333333333332h-2.953333333333333c-0.25 1.3033333333333328-0.49666666666666615 2.2300000000000004-0.7466666666666661 2.788333333333334-0.30666666666666664 0.6833333333333336-0.8033333333333328 1.3033333333333328-1.4833333333333343 1.8600000000000012-0.6866666666666674 0.5616666666666674-1.3966666666666665 0.961666666666666-2.1433333333333344 1.208333333333334v3.0699999999999985h2.3249999999999993v7.533333333333331c0 0.8666666666666671 0.12166666666666615 1.6083333333333343 0.37166666666666615 2.2300000000000004 0.18333333333333357 0.49666666666666615 0.5566666666666666 0.9916666666666671 1.1166666666666671 1.4883333333333333 0.43333333333333357 0.4383333333333326 1.0533333333333346 0.8083333333333336 1.8599999999999994 1.1166666666666671 0.9899999999999984 0.25 1.8550000000000004 0.37333333333333485 2.6000000000000014 0.37333333333333485 0.8666666666666671 0 1.6750000000000007-0.09333333333333371 2.416666666666668-0.27833333333333243 0.870000000000001-0.18666666666666742 1.706666666666667-0.49666666666666615 2.5116666666666667-0.9266666666666659z' })
                )
            );
        }
    }]);

    return TiSocialTumbler;
}(React.Component);

exports.default = TiSocialTumbler;
module.exports = exports['default'];