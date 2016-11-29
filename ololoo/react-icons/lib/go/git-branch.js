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

var GoGitBranch = function (_React$Component) {
    _inherits(GoGitBranch, _React$Component);

    function GoGitBranch() {
        _classCallCheck(this, GoGitBranch);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoGitBranch).apply(this, arguments));
    }

    _createClass(GoGitBranch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 7.5c-2.7749999999999986 0-5 2.2249999999999996-5 5 0 1.8375000000000004 1.0162499999999994 3.4375 2.5 4.297499999999999v0.7025000000000006c0 2.5-2.5 5-5 5-2.0700000000000003 0-3.7124999999999986 0.4312499999999986-5 1.1337499999999991v-11.8375c1.4849999999999994-0.8587499999999988 2.5-2.4587499999999984 2.5-4.296249999999999 0-2.7750000000000004-2.2249999999999996-5-5-5s-5 2.2249999999999996-5 5c0 1.8375000000000004 1.0162499999999994 3.4375 2.5 4.297499999999999v16.3675c-1.4849999999999994 0.8599999999999994-2.5 2.4624999999999986-2.5 4.297499999999999 0 2.7749999999999986 2.2249999999999996 5 5 5s5-2.2250000000000014 5-5c0-1.3287499999999994-0.5075000000000003-2.5-1.3287499999999994-3.3999999999999986 0.7424999999999997-0.8975000000000009 1.9125000000000014-1.6000000000000014 3.8287499999999994-1.6000000000000014 5 0 10-5 10-10v-0.7037499999999994c1.4849999999999994-0.8599999999999994 2.5-2.4625000000000004 2.5-4.297499999999999 0-2.7750000000000004-2.2250000000000014-5-5-5z m-15-2.5c1.3674999999999997 0 2.5 1.1325000000000003 2.5 2.5s-1.1325000000000003 2.5-2.5 2.5-2.5-1.1325000000000003-2.5-2.5 1.1325000000000003-2.5 2.5-2.5z m0 30c-1.3674999999999997 0-2.5-1.1325000000000003-2.5-2.5s1.1325000000000003-2.5 2.5-2.5 2.5 1.1325000000000003 2.5 2.5-1.1325000000000003 2.5-2.5 2.5z m15-20c-1.3674999999999997 0-2.5-1.1325000000000003-2.5-2.5s1.1325000000000003-2.5 2.5-2.5 2.5 1.1325000000000003 2.5 2.5-1.1325000000000003 2.5-2.5 2.5z' })
                )
            );
        }
    }]);

    return GoGitBranch;
}(React.Component);

exports.default = GoGitBranch;
module.exports = exports['default'];