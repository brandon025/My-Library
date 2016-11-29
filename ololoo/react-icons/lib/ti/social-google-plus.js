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

var TiSocialGooglePlus = function (_React$Component) {
    _inherits(TiSocialGooglePlus, _React$Component);

    function TiSocialGooglePlus() {
        _classCallCheck(this, TiSocialGooglePlus);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiSocialGooglePlus).apply(this, arguments));
    }

    _createClass(TiSocialGooglePlus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.5 22.5l-1.1999999999999993-0.8000000000000007c-0.3000000000000007-0.3999999999999986-0.8000000000000007-0.6999999999999993-0.8000000000000007-1.3999999999999986s0.5-1.1000000000000014 1-1.6000000000000014c1.3000000000000007-1 2.8000000000000007-2.1999999999999993 2.8000000000000007-4.699999999999999s-1.5-3.8000000000000007-2.3000000000000007-4.5h2l2-1.1999999999999993h-6.800000000000001c-1.6999999999999993 0-4 0.40000000000000036-5.9 1.9000000000000004-1.3000000000000007 1.0999999999999996-2 2.799999999999999-2 4.299999999999999 0 2.5 2 5.199999999999999 5.5 5.199999999999999h0.9999999999999982c-0.10000000000000142 0.3000000000000007-0.3000000000000007 0.6000000000000014-0.3000000000000007 1.1000000000000014 0 1 0.5 1.6999999999999993 1 2.1999999999999993-1.5 0.1999999999999993-4.199999999999999 0.3000000000000007-6.300000000000001 1.5-2 1.1999999999999993-2.5 2.8000000000000007-2.5 4 0 2.5 2.3000000000000007 4.700000000000003 7 4.700000000000003 5.600000000000001 0 8.600000000000001-3.1999999999999993 8.600000000000001-6.199999999999999 0-2.1999999999999993-1.3000000000000007-3.1999999999999993-2.8000000000000007-4.5z m-4.199999999999999-3.6999999999999993c-2.8000000000000007 0-4.1-3.5999999999999996-4.1-5.800000000000001 0-0.8000000000000007 0.09999999999999964-1.6999999999999993 0.5999999999999996-2.5 0.5-0.6999999999999993 1.5-1.1999999999999993 2.3999999999999986-1.1999999999999993 2.6000000000000014 0 4.099999999999998 3.6999999999999993 4.099999999999998 6 0 0.6999999999999993 0 1.6999999999999993-0.8000000000000007 2.3999999999999986-0.5 0.6000000000000014-1.5 1.1000000000000014-2.1999999999999993 1.1000000000000014z m0 13.2c-3.5 0-5.800000000000001-1.6999999999999993-5.800000000000001-4s2.1999999999999993-3.1999999999999993 2.8000000000000007-3.3000000000000007c1.4000000000000004-0.5 3.1999999999999993-0.5 3.5-0.5h0.8999999999999986c2.5 1.8000000000000007 3.5 2.6000000000000014 3.5 4.300000000000001 0 2-1.6999999999999993 3.5-4.900000000000002 3.5z m11-12h-3.3000000000000007v-1.6999999999999993h3.3000000000000007v-3.0999999999999996l1.6999999999999993-0.20000000000000107v3.3000000000000007h3.299999999999997v1.6999999999999993h-3.299999999999997v3.3000000000000007h-1.6999999999999993z' })
                )
            );
        }
    }]);

    return TiSocialGooglePlus;
}(React.Component);

exports.default = TiSocialGooglePlus;
module.exports = exports['default'];