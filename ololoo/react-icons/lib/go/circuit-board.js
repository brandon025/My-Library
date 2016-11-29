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

var GoCircuitBoard = function (_React$Component) {
    _inherits(GoCircuitBoard, _React$Component);

    function GoCircuitBoard() {
        _classCallCheck(this, GoCircuitBoard);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoCircuitBoard).apply(this, arguments));
    }

    _createClass(GoCircuitBoard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.5 10c1.3812499999999996 0 2.5 1.1187500000000004 2.5 2.5s-1.1187500000000004 2.5-2.5 2.5-2.5-1.1187500000000004-2.5-2.5 1.1187500000000004-2.5 2.5-2.5z m25 20c0 4.142499999999998-3.3575000000000017 7.5-7.5 7.5h-17.5l7.5-7.5h3.1687499999999993c0.8649999999999984 1.495000000000001 2.4800000000000004 2.5 4.331250000000001 2.5 2.7624999999999993 0 5-2.2375000000000007 5-5s-2.2375000000000007-5-5-5c-1.8500000000000014 0-3.4662499999999987 1.004999999999999-4.331250000000001 2.5h-5.668749999999999l-11.405000000000001 11.405000000000001c-2.157499999999999-1.3175000000000026-3.594999999999999-3.6924999999999955-3.594999999999999-6.405000000000001v-20c0-4.1425 3.3575-7.5 7.5-7.5v5.668749999999999c-1.4949999999999992 0.865000000000002-2.5 2.4812499999999993-2.5 4.331250000000001 0 2.7624999999999993 2.2375000000000007 5 5 5 1.8462499999999995 0 3.460000000000001-1 4.324999999999999-2.49l6.34375-0.009999999999999787c0.8649999999999984 1.495000000000001 2.4800000000000004 2.5 4.330000000000002 2.5 2.7600000000000016 0 5-2.2375000000000007 5-5s-2.240000000000002-5-5-5c-1.8524999999999991 0-3.46875 1.0062499999999996-4.3325 2.5l-6.3325 0.009999999999999787c-0.4375-0.7624999999999993-1.0749999999999993-1.4000000000000004-1.8375000000000004-1.8399999999999999v-5.67h15.000000000000002c4.143749999999997 0 7.5 3.3587499999999997 7.5 7.5v20z m-12.5-2.5c0-1.3812500000000014 1.1187499999999986-2.5 2.5-2.5s2.5 1.1187499999999986 2.5 2.5-1.1187499999999986 2.5-2.5 2.5-2.5-1.1187499999999986-2.5-2.5z m0-15c0-1.3812499999999996 1.1187499999999986-2.5 2.5-2.5s2.5 1.1187500000000004 2.5 2.5-1.1187499999999986 2.5-2.5 2.5-2.5-1.1187500000000004-2.5-2.5z' })
                )
            );
        }
    }]);

    return GoCircuitBoard;
}(React.Component);

exports.default = GoCircuitBoard;
module.exports = exports['default'];