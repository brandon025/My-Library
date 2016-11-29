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

var MdTabletMac = function (_React$Component) {
    _inherits(MdTabletMac, _React$Component);

    function MdTabletMac() {
        _classCallCheck(this, MdTabletMac);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdTabletMac).apply(this, arguments));
    }

    _createClass(MdTabletMac, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.640000000000004 31.640000000000004v-26.640000000000004h-25v26.64h25z m-12.5 6.720000000000002q1.0166666666666657 0 1.7583333333333329-0.7416666666666671t0.7399999999999984-1.7566666666666677-0.7416666666666671-1.7583333333333329-1.7600000000000016-0.740000000000002-1.7583333333333329 0.7416666666666671-0.7433333333333323 1.759999999999998 0.7416666666666671 1.7583333333333329 1.7566666666666677 0.7433333333333323z m11.719999999999995-38.36000000000001q1.7166666666666686 0 2.9299999999999997 1.2116666666666667t1.2100000000000009 2.9299999999999997v31.71666666666667q0 1.7199999999999989-1.2100000000000009 2.933333333333337t-2.9299999999999997 1.2083333333333286h-23.36q-1.7166666666666668 0-2.9299999999999997-1.2100000000000009t-1.211666666666667-2.9299999999999997v-31.716666666666665q0-1.720000000000001 1.211666666666667-2.9333333333333345t2.9299999999999997-1.21h23.36z' })
                )
            );
        }
    }]);

    return MdTabletMac;
}(React.Component);

exports.default = MdTabletMac;
module.exports = exports['default'];