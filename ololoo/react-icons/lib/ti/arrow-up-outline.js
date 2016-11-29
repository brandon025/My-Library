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

var TiArrowUpOutline = function (_React$Component) {
    _inherits(TiArrowUpOutline, _React$Component);

    function TiArrowUpOutline() {
        _classCallCheck(this, TiArrowUpOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiArrowUpOutline).apply(this, arguments));
    }

    _createClass(TiArrowUpOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 35c-2.7566666666666677 0-5-2.2433333333333323-5-5v-7.940000000000001c-1.9049999999999994 1.706666666666667-5.041666666666668 1.6333333333333329-6.866666666666667-0.19166666666666643-1.9500000000000002-1.9466666666666654-1.9500000000000002-5.120000000000001 0-7.066666666666666l11.866666666666667-11.873333333333333 11.866666666666667 11.866666666666667c1.9500000000000028 1.950000000000001 1.9500000000000028 5.123333333333333 0 7.071666666666667-1.8216666666666654 1.826666666666668-4.963333333333335 1.8999999999999986-6.866666666666667 0.19333333333333513v7.939999999999998c0 2.7566666666666677-2.2433333333333323 5-5 5z m-1.6666666666666643-20.976666666666667v15.976666666666667c0 0.9166666666666679 0.7466666666666661 1.6666666666666679 1.6666666666666679 1.6666666666666679s1.6666666666666679-0.75 1.6666666666666679-1.6666666666666679v-15.976666666666667l5.488333333333333 5.488333333333333c0.6333333333333329 0.629999999999999 1.7250000000000014 0.629999999999999 2.3566666666666656 0 0.6499999999999986-0.6499999999999986 0.6499999999999986-1.7049999999999983 0-2.3566666666666656l-9.51166666666667-9.511666666666667-9.511666666666667 9.511666666666667c-0.6500000000000004 0.6499999999999986-0.6500000000000004 1.7049999999999983 0 2.3566666666666656 0.6333333333333329 0.629999999999999 1.7249999999999996 0.629999999999999 2.3566666666666656 0l5.488333333333337-5.488333333333333z' })
                )
            );
        }
    }]);

    return TiArrowUpOutline;
}(React.Component);

exports.default = TiArrowUpOutline;
module.exports = exports['default'];