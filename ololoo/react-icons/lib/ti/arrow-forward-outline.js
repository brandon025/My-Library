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

var TiArrowForwardOutline = function (_React$Component) {
    _inherits(TiArrowForwardOutline, _React$Component);

    function TiArrowForwardOutline() {
        _classCallCheck(this, TiArrowForwardOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiArrowForwardOutline).apply(this, arguments));
    }

    _createClass(TiArrowForwardOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.666666666666667 33.333333333333336c-0.16000000000000014 0-0.31666666666666643-0.02666666666666373-0.47666666666666657-0.07166666666666544-0.706666666666667-0.2116666666666731-1.1900000000000004-0.8616666666666646-1.1900000000000004-1.5950000000000024v-1.6666666666666679c0-8 5.633333333333333-14.775 13.333333333333336-16.328333333333337v-2.8383333333333294c0-0.8916666666666675 0.34666666666666757-1.7283333333333335 0.9750000000000014-2.3583333333333325 1.2600000000000016-1.2616666666666667 3.4583333333333357-1.2599999999999998 4.716666666666669 0l10.478333333333332 10.336666666666666c0.31666666666667 0.3133333333333326 0.4966666666666697 0.7383333333333333 0.4966666666666697 1.1866666666666674s-0.17833333333333456 0.8716666666666661-0.4966666666666697 1.1833333333333336l-10.486666666666668 10.35166666666667c-1.245000000000001 1.2433333333333323-3.4466666666666654 1.25-4.706666666666667-0.00833333333333286-0.629999999999999-0.629999999999999-0.9766666666666666-1.4666666666666686-0.9766666666666666-2.3566666666666656v-2.4016666666666744c-4.158333333333335 0.33333333333333215-7.538333333333334 1.6416666666666657-10.273333333333333 5.806666666666665-0.31666666666666643 0.4799999999999969-0.8416666666666668 0.7550000000000026-1.3933333333333335 0.7550000000000026z m13.333333333333332-9.983333333333334c0.4366666666666674 0 1.6666666666666679-0.01666666666666572 1.6666666666666679-0.01666666666666572v5.833333333333336l9.293333333333333-9.166666666666668-9.293333333333333-9.163333333333338v5.830000000000002s-0.6400000000000006-0.006666666666667709-1.4833333333333343 0.086666666666666c-5.695 0.629999999999999-10.21 4.773333333333333-11.488333333333333 10.133333333333336 3.533333333333333-2.879999999999999 7.583333333333332-3.443333333333335 11.305-3.5366666666666653z' })
                )
            );
        }
    }]);

    return TiArrowForwardOutline;
}(React.Component);

exports.default = TiArrowForwardOutline;
module.exports = exports['default'];