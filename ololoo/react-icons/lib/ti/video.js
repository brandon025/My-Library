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

var TiVideo = function (_React$Component) {
    _inherits(TiVideo, _React$Component);

    function TiVideo() {
        _classCallCheck(this, TiVideo);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiVideo).apply(this, arguments));
    }

    _createClass(TiVideo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.541666666666664 11.916666666666668c-0.2666666666666657-0.16666666666666607-0.5700000000000003-0.25-0.875-0.25-0.25500000000000256 0-0.509999999999998 0.05833333333333357-0.7449999999999974 0.1750000000000007l-4.254999999999999 2.128333333333332v-0.6366666666666667c0-2.756666666666666-2.2433333333333323-5-5-5h-18.333333333333336c-2.756666666666665 0-4.999999999999998 2.243333333333334-4.999999999999998 5v13.333333333333334c-4.440892098500626e-16 2.7566666666666677 2.243333333333333 5 5 5h18.333333333333336c2.7566666666666677 0 5-2.2433333333333323 5-5v-0.6366666666666667l4.255000000000003 2.126666666666665c0.23333333333333428 0.11666666666666714 0.490000000000002 0.17666666666666586 0.7449999999999974 0.17666666666666586 0.3049999999999997 0 0.6083333333333343-0.08333333333333215 0.875-0.25 0.49166666666666714-0.30333333333333456 0.7916666666666643-0.8383333333333347 0.7916666666666643-1.4166666666666679v-13.33333333333333c0-0.5783333333333331-0.29999999999999716-1.1133333333333333-0.7916666666666643-1.416666666666666z m-25.874999999999996 10.583333333333332c-1.3833333333333329 0-2.5-1.1166666666666671-2.5-2.5s1.1166666666666671-2.5 2.5-2.5 2.5 1.1166666666666671 2.5 2.5-1.1166666666666671 2.5-2.5 2.5z' })
                )
            );
        }
    }]);

    return TiVideo;
}(React.Component);

exports.default = TiVideo;
module.exports = exports['default'];