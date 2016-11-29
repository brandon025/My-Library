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

var FaHourglassO = function (_React$Component) {
    _inherits(FaHourglassO, _React$Component);

    function FaHourglassO() {
        _classCallCheck(this, FaHourglassO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaHourglassO).apply(this, arguments));
    }

    _createClass(FaHourglassO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.285714285714285 2.857142857142857q0 5.825714285714286-2.3771428571428572 10.3t-5.948571428571427 6.842857142857142q3.571428571428573 2.3657142857142865 5.948571428571427 6.842857142857142t2.3771428571428572 10.300000000000004h2.142857142857146q0.3142857142857167 0 0.5142857142857125 0.20000000000000284t0.20000000000000284 0.5142857142857125v1.4285714285714306q0 0.3142857142857167-0.20000000000000284 0.5142857142857125t-0.5142857142857125 0.20000000000000284h-32.85714285714286q-0.3142857142857123 0-0.514285714285712-0.20000000000000284t-0.20000000000000018-0.5142857142857196v-1.4285714285714306q0-0.3142857142857167 0.20000000000000018-0.5142857142857125t0.5142857142857142-0.19999999999999574h2.142857142857143q0-5.825714285714287 2.377142857142858-10.3t5.948571428571427-6.842857142857145q-3.571428571428571-2.3657142857142865-5.948571428571428-6.842857142857143t-2.3771428571428563-10.299999999999999h-2.142857142857143q-0.3142857142857145-4.440892098500626e-16-0.5142857142857142-0.20000000000000062t-0.20000000000000018-0.5142857142857142v-1.4285714285714286q0-0.31428571428571417 0.20000000000000018-0.5142857142857142t0.5142857142857142-0.19999999999999996h32.85714285714286q0.3142857142857167 0 0.5142857142857125 0.2t0.20000000000000284 0.5142857142857142v1.4285714285714286q0 0.3142857142857145-0.20000000000000284 0.5142857142857142t-0.5142857142857125 0.20000000000000018h-2.142857142857146z m-11.920000000000002 15.802857142857142q1.7185714285714297-0.6471428571428568 3.325714285714284-2.064285714285713t2.8900000000000006-3.404285714285715 2.064285714285713-4.685714285714285 0.78285714285715-5.6485714285714295h-22.85714285714286q1.7763568394002505e-15 2.9471428571428575 0.7800000000000011 5.647142857142857t2.064285714285715 4.685714285714287 2.8914285714285715 3.4057142857142857 3.325714285714284 2.064285714285713q0.4242857142857126 0.15714285714285836 0.6814285714285724 0.524285714285714t0.2571428571428598 0.8157142857142858-0.25714285714285623 0.8142857142857132-0.6828571428571415 0.5228571428571414q-1.718571428571428 0.6471428571428568-3.3257142857142856 2.064285714285713t-2.891428571428575 3.4057142857142892-2.0628571428571423 4.685714285714287-0.7800000000000011 5.650000000000002h22.85714285714286q0-2.9471428571428575-0.7828571428571429-5.647142857142857t-2.064285714285713-4.685714285714287-2.8900000000000006-3.4057142857142857-3.325714285714284-2.062857142857144q-0.4242857142857126-0.15714285714285836-0.6814285714285724-0.524285714285714t-0.2557142857142871-0.8171428571428585 0.25714285714285623-0.8142857142857132 0.6799999999999997-0.5257142857142867z' })
                )
            );
        }
    }]);

    return FaHourglassO;
}(React.Component);

exports.default = FaHourglassO;
module.exports = exports['default'];