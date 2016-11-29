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

var MdSettingsRemote = function (_React$Component) {
    _inherits(MdSettingsRemote, _React$Component);

    function MdSettingsRemote() {
        _classCallCheck(this, MdSettingsRemote);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdSettingsRemote).apply(this, arguments));
    }

    _createClass(MdSettingsRemote, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 0q7.733333333333334 0 12.966666666666669 5.390000000000001l-2.34 2.343333333333333q-4.376666666666669-4.375-10.626666666666669-4.375t-10.625 4.375l-2.341666666666667-2.343333333333333q5.386666666666667-5.390000000000001 12.966666666666667-5.390000000000001z m-8.283333333333333 10.078333333333333q3.441666666666668-3.4383333333333326 8.283333333333333-3.4383333333333326t8.283333333333331 3.4383333333333344l-2.344999999999999 2.3433333333333337q-2.421666666666667-2.4216666666666686-5.938333333333333-2.4216666666666686t-5.938333333333334 2.421666666666667z m8.283333333333333 14.921666666666667q1.3283333333333331 0 2.3433333333333337-1.0166666666666657t1.0166666666666657-2.3416666666666686-1.0166666666666657-2.3049999999999997-2.3433333333333337-0.9766666666666666-2.3433333333333337 0.9766666666666666-1.0166666666666657 2.3049999999999997 1.0166666666666657 2.3433333333333337 2.3433333333333337 1.0150000000000006z m5-10q0.7033333333333331 0 1.1716666666666669 0.4666666666666668t0.466666666666665 1.1733333333333338v20q0 0.7033333333333331-0.466666666666665 1.211666666666666t-1.1716666666666669 0.509999999999998h-10q-0.7033333333333331 0-1.1716666666666669-0.5083333333333329t-0.4666666666666668-1.2100000000000009v-20q0-0.7033333333333331 0.4666666666666668-1.1716666666666669t1.1716666666666669-0.471666666666664h10z' })
                )
            );
        }
    }]);

    return MdSettingsRemote;
}(React.Component);

exports.default = MdSettingsRemote;
module.exports = exports['default'];