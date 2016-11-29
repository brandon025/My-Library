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

var MdGoat = function (_React$Component) {
    _inherits(MdGoat, _React$Component);

    function MdGoat() {
        _classCallCheck(this, MdGoat);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdGoat).apply(this, arguments));
    }

    _createClass(MdGoat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.92166666666667 15.156666666666666q0.07833333333333314 0.07666666666666799 0.07833333333333314 0.19333333333333513t-0.07833333333333314 0.1966666666666672l-1.9533333333333331 2.4999999999999982q-0.15500000000000114 0.1566666666666663-0.3116666666666674 0.1566666666666663l-1.1716666666666669-0.23333333333333428-0.5466666666666669 1.7166666666666686q-0.1566666666666663 0.3133333333333326-0.5083333333333329 0.3133333333333326t-0.5083333333333329-0.3133333333333326l-1.0933333333333337-2.3433333333333337-1.7966666666666669-0.39000000000000057-3.671666666666667 8.75 1.3283333333333331 10.625q0 0.3133333333333326-0.3133333333333326 0.3133333333333326h-1.5633333333333326q-0.1566666666666663 0-0.3133333333333326-0.23333333333333428l-1.5633333333333326-6.329999999999998-0.783333333333335-1.3283333333333331-1.9499999999999993 7.656666666666666q0 0.23333333333333428-0.31666666666666643 0.23333333333333428h-1.6383333333333319q-0.3133333333333326 0-0.3133333333333326-0.3116666666666674l1.7950000000000017-10.546666666666667h-10.545000000000005l-2.7366666666666664 5.155000000000001 0.625 5.313333333333333q0.1566666666666663 0.3916666666666657-0.3133333333333326 0.3916666666666657h-1.5633333333333326q-0.2333333333333334 0-0.31333333333333346-0.1566666666666663l-2.1900000000000004-7.966666666666669-2.6566666666666667 3.046666666666667 0.4666666666666668 4.688333333333333q0.15833333333333321 0.3916666666666657-0.31166666666666654 0.3916666666666657h-1.7150000000000016q-0.31666666666666665 0-0.31666666666666665-0.1566666666666663l-1.0133333333333334-4.373333333333335 1.6400000000000001-6.406666666666666v-11.25q-1.7950000000000002-0.7083333333333286-1.7950000000000002-2.3483333333333274h21.406666666666666q3.75 0.07833333333333314 7.421666666666667-2.578333333333333-0.625-1.7200000000000006 0.466666666666665-2.8166666666666664 2.1900000000000013 1.5666666666666664 2.81666666666667 1.955 0.5450000000000017 0.3133333333333326 0.8966666666666683-0.11666666666666714t0.19500000000000028-0.9766666666666666q-0.7033333333333331-2.1883333333333335-3.5166666666666657-3.283333333333333-0.07666666666666799 0-0.23333333333333428-0.0766666666666671-0.9383333333333326-0.2333333333333334-0.783333333333335-0.6233333333333335 0-0.2333333333333334 0.31666666666666643-0.2333333333333334 2.2633333333333354 0.31166666666666654 3.866666666666667 1.7566666666666664t2.1466666666666683 2.7733333333333334l0.3133333333333326 0.2333333333333325q0.23666666666666458 0.31666666666666643 0.509999999999998 0.6266666666666669t0.46666666666666856 0.9000000000000004 0.11666666666666714 1.209999999999999q0 0.39000000000000057 0.15833333333333144 0.5466666666666669z' })
                )
            );
        }
    }]);

    return MdGoat;
}(React.Component);

exports.default = MdGoat;
module.exports = exports['default'];