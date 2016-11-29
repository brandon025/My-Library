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

var GoTools = function (_React$Component) {
    _inherits(GoTools, _React$Component);

    function GoTools() {
        _classCallCheck(this, GoTools);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoTools).apply(this, arguments));
    }

    _createClass(GoTools, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.19375 18.165c0.6575000000000006 0.65625 3.192500000000001 3.3312500000000007 3.192500000000001 3.3312500000000007l1.4037500000000005-1.4499999999999993-2.2025000000000006-2.2749999999999986 4.22875-4.487500000000001s-1.9075000000000006-1.8625000000000007-1.0725000000000016-1.120000000000001c0.8000000000000007-2.9625000000000004 0.07124999999999915-6.27125-2.1812500000000004-8.6025-2.2324999999999964-2.313750000000001-5.404999999999999-3.071250000000001-8.254999999999999-2.276250000000001l4.83 4.989999999999999-1.2712500000000002 4.8950000000000005-4.728749999999999 1.3050000000000015-4.827500000000001-4.987500000000001c-0.7699999999999996 2.9450000000000003-0.03749999999999959 6.2225 2.2000000000000006 8.537499999999998 2.3474999999999997 2.4250000000000007 5.727500000000001 3.1374999999999993 8.685 2.1412499999999994z m16.103749999999998 4.850000000000001l-5.824999999999999 5.754999999999999 9.60625 9.953749999999996c0.7837500000000013 0.8125 1.8162499999999966 1.2175000000000011 2.8462499999999977 1.2175000000000011 1.0249999999999986 0 2.0562499999999986-0.40500000000000114 2.84375-1.21875 1.572499999999998-1.6274999999999977 1.572499999999998-4.258749999999999 0-5.884999999999998l-9.4725-9.825000000000003z m12.689999999999998-16.692500000000003l-6.1175-6.322499999999998-18.0325 18.645 2.200000000000003 2.2749999999999986-10.7925 11.156250000000004-2.4674999999999994 1.3200000000000003-3.485 5.6875 0.8874999999999997 0.9187500000000028 5.5-3.602499999999999 1.2750000000000004-2.549999999999997 10.79625-11.15625 2.205000000000002 2.2749999999999986 18.031249999999993-18.647500000000008z' })
                )
            );
        }
    }]);

    return GoTools;
}(React.Component);

exports.default = GoTools;
module.exports = exports['default'];