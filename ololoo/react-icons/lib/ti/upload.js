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

var TiUpload = function (_React$Component) {
    _inherits(TiUpload, _React$Component);

    function TiUpload() {
        _classCallCheck(this, TiUpload);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiUpload).apply(this, arguments));
    }

    _createClass(TiUpload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.97833333333333 26.666666666666668c0-0.1750000000000007-0.006666666666667709-0.3500000000000014-0.06666666666666998-0.5266666666666673l-3.333333333333332-10c-0.22333333333332916-0.6833333333333353-0.8583333333333307-1.1400000000000006-1.5783333333333296-1.1400000000000006h-6.666666666666668v3.333333333333332h5.466666666666665l2.7766666666666673 8.333333333333332h-23.15333333333333l2.7783333333333324-8.333333333333336h5.465v-3.3333333333333286h-6.666666666666668c-0.7166666666666668 0-1.3533333333333335 0.4583333333333339-1.58 1.1400000000000006l-3.333333333333334 10c-0.05833333333333357 0.1750000000000007-0.06666666666666643 0.3500000000000014-0.06666666666666643 0.5266666666666673-0.019999999999999574 0-0.019999999999999574 8.333333333333332-0.019999999999999574 8.333333333333332 0 0.9216666666666669 0.7450000000000001 1.6666666666666643 1.666666666666667 1.6666666666666643h26.666666666666668c0.9216666666666669 0 1.6666666666666643-0.7449999999999974 1.6666666666666643-1.6666666666666643 0 0 0-8.333333333333336-0.021666666666668277-8.333333333333336z m-8.311666666666664-13.493333333333334c0.43333333333333357 0 0.8633333333333333-0.15833333333333321 1.1783333333333346-0.4716666666666658 0.6499999999999986-0.6500000000000004 0.6499999999999986-1.705 0-2.3550000000000004l-7.845000000000002-7.846666666666668-7.844999999999999 7.845000000000001c-0.6500000000000004 0.6500000000000004-0.6500000000000004 1.706666666666667 0 2.3566666666666674 0.31666666666666643 0.31666666666666643 0.7466666666666661 0.4733333333333327 1.1783333333333328 0.4733333333333327s0.8633333333333333-0.1566666666666663 1.1783333333333328-0.4716666666666658l3.821666666666669-3.8200000000000003v11.116666666666665c0 0.9200000000000017 0.7466666666666661 1.6666666666666679 1.6666666666666679 1.6666666666666679s1.6666666666666679-0.7466666666666661 1.6666666666666679-1.6666666666666679v-11.12l3.8216666666666654 3.821666666666667c0.31666666666666643 0.31666666666666643 0.7466666666666661 0.4733333333333327 1.1783333333333346 0.4733333333333327z' })
                )
            );
        }
    }]);

    return TiUpload;
}(React.Component);

exports.default = TiUpload;
module.exports = exports['default'];