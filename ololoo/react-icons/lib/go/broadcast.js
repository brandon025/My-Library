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

var GoBroadcast = function (_React$Component) {
    _inherits(GoBroadcast, _React$Component);

    function GoBroadcast() {
        _classCallCheck(this, GoBroadcast);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoBroadcast).apply(this, arguments));
    }

    _createClass(GoBroadcast, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 7.5c5.547499999999999 0 10 4.4925 10 10 0 2.6950000000000003-1.09375 5.15625-2.8125 6.953749999999999l-0.625 3.6325000000000003c3.5549999999999997-2.186250000000001 5.9375-6.094999999999999 5.9375-10.58625 0-6.912500000000001-5.587499999999999-12.5-12.5-12.5s-12.5 5.5875-12.5 12.5c0 4.4925 2.3825000000000003 8.399999999999999 5.9375 10.587499999999999l-0.625-3.633749999999999c-1.7574999999999985-1.7974999999999994-2.8125-4.2575-2.8125-6.953749999999999 0-5.547499999999999 4.453749999999999-10 10-10z m-2.5 12.5c-1.40625 0-2.5 1.1325000000000003-2.5 2.5v5c0 1.40625 1.1724999999999994 2.5 2.5 2.5v10h5v-10c1.3287499999999994 0 2.5-1.09375 2.5-2.5v-5c0-1.3674999999999997-1.09375-2.5-2.5-2.5h-5z m7.5-5c0-2.7750000000000004-2.2250000000000014-5-5-5s-5 2.2249999999999996-5 5 2.2250000000000014 5 5 5 5-2.2250000000000014 5-5z m-5-15c-9.649999999999999 0-17.5 7.8500000000000005-17.5 17.5 0 7.695 5 14.18 11.9125 16.525000000000006l-0.46749999999999936-2.8125c-5.275-2.346250000000005-8.945-7.581250000000004-8.945-13.712500000000006 0-8.28125 6.71875-15 15-15s15 6.71875 15 15c0 6.1325-3.6724999999999994 11.3675-8.945 13.712499999999999l-0.46875 2.8125c6.91375-2.3462499999999977 11.91375-8.791249999999998 11.91375-16.525 0-9.65-7.850000000000001-17.5-17.5-17.5z' })
                )
            );
        }
    }]);

    return GoBroadcast;
}(React.Component);

exports.default = GoBroadcast;
module.exports = exports['default'];