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

var TiDatabase = function (_React$Component) {
    _inherits(TiDatabase, _React$Component);

    function TiDatabase() {
        _classCallCheck(this, TiDatabase);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiDatabase).apply(this, arguments));
    }

    _createClass(TiDatabase, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.638333333333335 14.649999999999999c-0.29333333333333655-6.169999999999998-5.393333333333334-11.106666666666666-11.638333333333335-11.106666666666666s-11.345 4.9350000000000005-11.638333333333332 11.106666666666666c-0.0033333333333338544 0.05000000000000071-0.02833333333333421 0.09166666666666679-0.02833333333333421 0.1416666666666675v10.41666666666667c0 6.433333333333334 5.2333333333333325 11.666666666666664 11.666666666666666 11.666666666666664s11.666666666666668-5.233333333333334 11.666666666666668-11.666666666666668v-10.416666666666668c0-0.05000000000000071-0.02499999999999858-0.09166666666666679-0.028333333333332433-0.14000000000000057z m-11.638333333333335 14.72666666666667c-3.6999999999999993 0-6.886666666666667-2.206666666666667-8.333333333333334-5.370000000000001v-0.6466666666666683c2.116666666666667 2.166666666666668 5.0699999999999985 3.5166666666666657 8.333333333333334 3.5166666666666657s6.216666666666669-1.3500000000000014 8.333333333333336-3.5166666666666657v0.6466666666666683c-1.4466666666666654 3.163333333333334-4.633333333333333 5.370000000000001-8.333333333333336 5.370000000000001z m0-22.5c4.594999999999999 0 8.333333333333336 3.7383333333333333 8.333333333333336 8.333333333333334s-3.7383333333333333 8.333333333333334-8.333333333333336 8.333333333333334-8.333333333333334-3.7383333333333333-8.333333333333334-8.333333333333334 3.7383333333333333-8.333333333333334 8.333333333333334-8.333333333333334z m0 26.666666666666668c-3.783333333333335 0-6.953333333333333-2.5533333333333346-7.963333333333333-6.016666666666666 1.9800000000000004 2.1566666666666663 4.813333333333334 3.5166666666666657 7.963333333333333 3.5166666666666657s5.983333333333334-1.3599999999999994 7.963333333333331-3.5166666666666657c-1.0100000000000016 3.4633333333333347-4.178333333333335 6.016666666666666-7.963333333333331 6.016666666666666z' })
                )
            );
        }
    }]);

    return TiDatabase;
}(React.Component);

exports.default = TiDatabase;
module.exports = exports['default'];