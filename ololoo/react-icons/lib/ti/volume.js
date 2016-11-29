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

var TiVolume = function (_React$Component) {
    _inherits(TiVolume, _React$Component);

    function TiVolume() {
        _classCallCheck(this, TiVolume);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiVolume).apply(this, arguments));
    }

    _createClass(TiVolume, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.563333333333336 9.706666666666667c-0.75 0-1.5083333333333329 0.25333333333333385-2.2600000000000016 0.7550000000000008l-4.453333333333333 2.966666666666667c-1.2550000000000026 0.841666666666665-3.676666666666666 1.5716666666666654-5.183333333333334 1.5716666666666654-2.7566666666666677 0-5 2.2433333333333323-5 5v3.333333333333332c0 2.7566666666666677 2.243333333333334 5 5 5 1.5066666666666677 0 3.9283333333333346 0.7333333333333343 5.183333333333334 1.5666666666666664l4.449999999999999 2.969999999999999c0.7533333333333339 0.5 1.5133333333333319 0.7550000000000026 2.2616666666666667 0.7550000000000026 1.4966666666666661 0 3.1050000000000004-1.1333333333333329 3.1050000000000004-3.625v-16.666666666666664c0-2.491666666666669-1.6083333333333343-3.6266666666666687-3.1033333333333353-3.6266666666666687z m-5.23 17.203333333333337c-1.821666666666669-1.0833333333333357-4.649999999999999-1.9100000000000037-6.666666666666668-1.9100000000000037-0.9199999999999999 0-1.666666666666666-0.7466666666666661-1.666666666666666-1.6666666666666679v-3.333333333333332c0-0.9200000000000017 0.7466666666666661-1.6666666666666679 1.666666666666666-1.6666666666666679 2.0166666666666657 0 4.845000000000002-0.8249999999999993 6.666666666666668-1.9100000000000001v10.486666666666665z m5 3.0899999999999963c0 0.07666666666666799-0.0033333333333338544 0.14333333333333442-0.010000000000001563 0.1999999999999993-0.05000000000000071-0.026666666666667282-0.10833333333333428-0.05999999999999872-0.173333333333332-0.10333333333333172l-3.150000000000002-2.1000000000000014v-12.659999999999998l3.1499999999999986-2.0999999999999996c0.06666666666666643-0.043333333333333 0.12333333333333485-0.07833333333333314 0.1750000000000007-0.10500000000000043 0.004999999999999005 0.05666666666666664 0.00833333333333286 0.12333333333333307 0.00833333333333286 0.1999999999999993v16.666666666666668z' })
                )
            );
        }
    }]);

    return TiVolume;
}(React.Component);

exports.default = TiVolume;
module.exports = exports['default'];