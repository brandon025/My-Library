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

var GoTrashcan = function (_React$Component) {
    _inherits(GoTrashcan, _React$Component);

    function GoTrashcan() {
        _classCallCheck(this, GoTrashcan);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoTrashcan).apply(this, arguments));
    }

    _createClass(GoTrashcan, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 5h-10v-1.25c0-0.69-0.5599999999999987-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v1.25h-10c-1.3812499999999996 0-2.5 1.1187500000000004-2.5 2.5v2.5c0 1.3812499999999996 1.1187500000000004 2.5 2.5 2.5v22.5c0 1.3812500000000014 1.1187500000000004 2.5 2.5 2.5h17.5c1.3812500000000014 0 2.5-1.1187499999999986 2.5-2.5v-22.5c1.3812500000000014 0 2.5-1.1187500000000004 2.5-2.5v-2.5c0-1.3812499999999996-1.1187499999999986-2.5-2.5-2.5z m-2.5 28.75c0 0.6899999999999977-0.5599999999999987 1.25-1.25 1.25h-15c-0.6899999999999995 0-1.25-0.5600000000000023-1.25-1.25v-21.25h2.5v18.75c0 0.6900000000000013 0.5600000000000005 1.25 1.25 1.25s1.25-0.5599999999999987 1.25-1.25l0.015000000000000568-18.75h2.4849999999999994v18.75c0 0.6900000000000013 0.5599999999999987 1.25 1.25 1.25s1.25-0.5599999999999987 1.25-1.25l0.015000000000000568-18.75h2.5l-0.015000000000000568 18.75c0 0.6900000000000013 0.5599999999999987 1.25 1.25 1.25s1.25-0.5599999999999987 1.25-1.25v-18.75h2.5v21.25z m2.5-24.375c0 0.34500000000000064-0.28000000000000114 0.625-0.625 0.625h-21.25c-0.34500000000000064 0-0.625-0.27999999999999936-0.625-0.625v-1.25c0-0.34499999999999975 0.27999999999999936-0.625 0.625-0.625h21.25c0.34499999999999886 0 0.625 0.28000000000000025 0.625 0.625v1.25z' })
                )
            );
        }
    }]);

    return GoTrashcan;
}(React.Component);

exports.default = GoTrashcan;
module.exports = exports['default'];