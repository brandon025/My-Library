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

var GoDeviceCamera = function (_React$Component) {
    _inherits(GoDeviceCamera, _React$Component);

    function GoDeviceCamera() {
        _classCallCheck(this, GoDeviceCamera);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoDeviceCamera).apply(this, arguments));
    }

    _createClass(GoDeviceCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 15c-2.7624999999999993 0-5 2.2375000000000007-5 5s2.2375000000000007 5 5 5c0.22500000000000142 0 0.442499999999999-0.015000000000000568 0.6587500000000013-0.04374999999999929-1.8099999999999987-0.2749999999999986-3.1975000000000016-1.8374999999999986-3.1975000000000016-3.7250000000000014 0-2.0824999999999996 1.6875-3.7712499999999984 3.7687500000000007-3.7712499999999984 1.8874999999999993 0 3.4499999999999993 1.3874999999999993 3.7250000000000014 3.197499999999998 0.030000000000001137-0.21499999999999986 0.045000000000001705-0.4349999999999987 0.045000000000001705-0.6587500000000013 0-2.7624999999999993-2.2375000000000007-5-5-5z m15-5h-5l-5-5h-10l-5 5h-5c-1.38125 0-2.5 1.1187500000000004-2.5 2.5v17.5c0 1.3812500000000014 1.11875 2.5 2.5 2.5h30c1.3812500000000014 0 2.5-1.1187499999999986 2.5-2.5v-17.5c0-1.3812499999999996-1.1187499999999986-2.5-2.5-2.5z m-18.75-2.5h7.5l2.5 2.5h-12.5l2.5-2.5z m-9.995000000000001 22.5c-0.692499999999999 0-1.254999999999999-0.5625-1.254999999999999-1.2550000000000026v-11.244999999999997h2.5v-2.5h-2.5v-1.245000000000001c0-0.692499999999999 0.5625-1.254999999999999 1.254999999999999-1.254999999999999h7.129999999999999c-0.15499999999999936 0.1374999999999993-0.3074999999999992 0.27999999999999936-0.4562500000000007 0.42875000000000085-3.905000000000001 3.905000000000001-3.905000000000001 10.237499999999997 0 14.142499999999998l2.9287500000000026 2.928750000000001h-9.602500000000001z m13.745000000000001-2.5c-4.1425 0-7.5-3.3575000000000017-7.5-7.5s3.3575-7.5 7.5-7.5 7.5 3.3575 7.5 7.5-3.3575000000000017 7.5-7.5 7.5z m12.5-8.75l-5.887499999999999-6.25h5.887499999999999v6.25z' })
                )
            );
        }
    }]);

    return GoDeviceCamera;
}(React.Component);

exports.default = GoDeviceCamera;
module.exports = exports['default'];