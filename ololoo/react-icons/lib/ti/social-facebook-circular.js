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

var TiSocialFacebookCircular = function (_React$Component) {
    _inherits(TiSocialFacebookCircular, _React$Component);

    function TiSocialFacebookCircular() {
        _classCallCheck(this, TiSocialFacebookCircular);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiSocialFacebookCircular).apply(this, arguments));
    }

    _createClass(TiSocialFacebookCircular, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.59 9.373333333333333c-2.916666666666668-2.8999999999999995-6.48-4.373333333333333-10.59-4.373333333333333-4.15 0-7.721666666666668 1.4733333333333336-10.621666666666668 4.375-2.9049999999999985 2.9000000000000004-4.378333333333332 6.478333333333335-4.378333333333332 10.625 0 4.108333333333334 1.4716666666666667 7.671666666666667 4.373333333333335 10.59 2.8999999999999986 2.926666666666666 6.476666666666665 4.41 10.626666666666665 4.41 4.111666666666668 0 7.675000000000001-1.4833333333333343 10.593333333333334-4.405000000000001 2.923333333333332-2.921666666666667 4.406666666666666-6.486666666666665 4.406666666666666-10.594999999999999 0-4.1466666666666665-1.4833333333333343-7.7233333333333345-4.41-10.626666666666667z m-2.3533333333333353 18.866666666666667c-1.894999999999996 1.8933333333333309-4.059999999999995 2.9766666666666666-6.569999999999997 3.3049999999999997v-8.211666666666666h3.333333333333332v-3.333333333333332h-3.333333333333332v-2.333333333333332c0-0.5500000000000007 0.4499999999999993-1 1-1h2.333333333333332v-3.3333333333333375h-2.328333333333333c-1.2366666666666681 0-2.2666666666666657 0.45500000000000007-3.094999999999999 1.3699999999999992-0.826666666666668 0.9133333333333322-1.2433333333333323 2.025000000000002-1.2433333333333323 3.3466666666666676v1.9499999999999993h-3.3333333333333357v3.333333333333332h3.333333333333332v8.216666666666665c-2.536666666666667-0.3249999999999993-4.710000000000001-1.408333333333335-6.594999999999999-3.306666666666665-2.291666666666666-2.306666666666665-3.4049999999999994-5.00333333333333-3.4049999999999994-8.243333333333332 0-3.2766666666666673 1.1116666666666664-5.98 3.403333333333334-8.266666666666667 2.283333333333333-2.288333333333332 4.986666666666668-3.3999999999999986 8.263333333333332-3.3999999999999986 3.241666666666667 0 5.936666666666667 1.1133333333333333 8.241666666666667 3.4049999999999994 2.3049999999999997 2.2866666666666653 3.4250000000000007 4.990000000000002 3.4250000000000007 8.261666666666667 0 3.2333333333333343-1.1216666666666661 5.933333333333334-3.4299999999999997 8.238333333333333z' })
                )
            );
        }
    }]);

    return TiSocialFacebookCircular;
}(React.Component);

exports.default = TiSocialFacebookCircular;
module.exports = exports['default'];