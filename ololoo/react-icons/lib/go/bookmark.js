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

var GoBookmark = function (_React$Component) {
    _inherits(GoBookmark, _React$Component);

    function GoBookmark() {
        _classCallCheck(this, GoBookmark);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GoBookmark).apply(this, arguments));
    }

    _createClass(GoBookmark, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.5 5v30l7.5-5 7.5 5v-30h-15z m12.353749999999998 7.684999999999999l-2.8074999999999974 2.0275 1.0625 3.258749999999999c0.1075000000000017 0.32750000000000057-0.02499999999999858 0.432500000000001-0.2950000000000017 0.2575000000000003l-2.813749999999999-2.0349999999999966-2.8125 2.03125c-0.26624999999999943 0.1750000000000007-0.3999999999999986 0.07124999999999915-0.2937499999999993-0.2562500000000014l1.0625-3.2575000000000003-2.8062500000000004-2.0275c-0.2524999999999995-0.1999999999999993-0.19500000000000028-0.35999999999999943 0.15249999999999986-0.35999999999999943l3.4375000000000018-0.005000000000000782 1.0599999999999987-3.24625c0.10999999999999943-0.34500000000000064 0.2950000000000017-0.34500000000000064 0.40500000000000114 0l1.0625 3.244999999999999 3.4349999999999987 0.005000000000000782c0.3500000000000014 0 0.40500000000000114 0.16000000000000014 0.15374999999999872 0.35999999999999943z' })
                )
            );
        }
    }]);

    return GoBookmark;
}(React.Component);

exports.default = GoBookmark;
module.exports = exports['default'];