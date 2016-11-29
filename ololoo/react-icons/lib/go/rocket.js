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

var GoRocket = function (_React$Component) {
    _inherits(GoRocket, _React$Component);

    function GoRocket() {
        _classCallCheck(this, GoRocket);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoRocket).apply(this, arguments));
    }

    _createClass(GoRocket, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.9975 4.8462499999999995c-2.8099999999999987 1.6287500000000001-5.782500000000002 3.75375-8.532499999999999 6.506250000000001-1.7575000000000003 1.758750000000001-3.1724999999999994 3.4674999999999994-4.3125 5.0699999999999985l-6.967499999999999 1.2875000000000014-8.185 8.1875 7.3 0.22875000000000156 5.1375-5.137499999999999c-1.8125 3.758749999999999-1.9749999999999996 6.25-1.9749999999999996 6.25l2.3000000000000007 2.2974999999999994s2.571250000000001-0.24374999999999858 6.3575-2.0749999999999993l-5.25 5.241249999999997 0.2312499999999993 7.299999999999997 8.1875-8.18375 1.2937499999999993-7.002500000000001c1.6174999999999997-1.1325000000000003 3.3275000000000006-2.539999999999999 5.067499999999999-4.2775 2.75-2.7525000000000013 4.875-5.725 6.505000000000003-8.53375-1.7962500000000006-0.3625000000000007-3.442499999999999-1.1125000000000007-4.7425-2.4075000000000006-1.3000000000000007-1.3037500000000009-2.0524999999999984-2.9499999999999993-2.4125000000000014-4.74625z m2.7124999999999986-1.4537500000000003c0.19500000000000028 1.7574999999999994 0.7787499999999987 3.175 1.7499999999999964 4.14 0.9662500000000023 0.9749999999999996 2.3812500000000014 1.5587499999999999 4.144999999999996 1.75 2.5775000000000077-5.2075 3.3950000000000102-9.282499999999999 3.3950000000000102-9.282499999999999s-4.075000000000003 0.8150000000000001-9.29 3.3925z' })
                )
            );
        }
    }]);

    return GoRocket;
}(React.Component);

exports.default = GoRocket;
module.exports = exports['default'];