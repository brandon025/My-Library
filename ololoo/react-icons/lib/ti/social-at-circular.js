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

var TiSocialAtCircular = function (_React$Component) {
    _inherits(TiSocialAtCircular, _React$Component);

    function TiSocialAtCircular() {
        _classCallCheck(this, TiSocialAtCircular);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiSocialAtCircular).apply(this, arguments));
    }

    _createClass(TiSocialAtCircular, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.74 12.5c-4.133333333333333 0-7.3966666666666665 3.366666666666667-7.3966666666666665 7.5s3.416666666666666 7.5 7.549999999999999 7.5c1.5166666666666657 0 3-0.4499999999999993 4.246666666666666-1.2966666666666669 0.379999999999999-0.25833333333333286 0.49166666666666714-0.7766666666666673 0.23333333333333428-1.1566666666666663-0.26000000000000156-0.38333333333333286-0.7716666666666683-0.4783333333333317-1.1533333333333324-0.21999999999999886-0.966666666666665 0.6600000000000001-2.0966666666666676 1.0066666666666677-3.2749999999999986 1.0066666666666677-3.2166666666666686 0-5.833333333333334-2.616666666666667-5.833333333333334-5.833333333333336s2.411666666666667-5.833333333333334 5.628333333333332-5.833333333333334 5.625 2.6166666666666654 5.625 5.833333333333334v0.41666666666666785c0 0.6900000000000013-0.5616666666666674 1.25-1.25 1.25s-1.25-0.5599999999999987-1.25-1.25v-2.916666666666668c0-0.46000000000000085-0.16666666666666785-0.8333333333333321-0.6266666666666652-0.8333333333333321-0.341666666666665 0-0.5300000000000011 0.206666666666667-0.6600000000000001 0.5-0.504999999999999-0.3116666666666674-1.0466666666666669-0.5-1.6833333333333336-0.5-1.8399999999999999 0-3.3066666666666684 1.4933333333333323-3.3066666666666684 3.333333333333332s1.5066666666666677 3.333333333333332 3.3466666666666676 3.333333333333332c0.9366666666666674 0 1.788333333333334-0.3916666666666657 2.3966666666666647-1.0166666666666657 0.533333333333335 0.6166666666666671 1.1066666666666656 1.0166666666666657 1.9866666666666681 1.0166666666666657 1.6083333333333343 0 2.711666666666666-1.3083333333333336 2.711666666666666-2.916666666666668v-0.4166666666666643c0-4.133333333333333-3.158333333333335-7.5-7.293333333333333-7.5z m0.20833333333333215 9.166666666666668c-0.9200000000000017 0-1.6666666666666679-0.75-1.6666666666666679-1.6666666666666679s0.7466666666666661-1.6666666666666679 1.6666666666666679-1.6666666666666679 1.6666666666666679 0.75 1.6666666666666679 1.6666666666666679-0.75 1.6666666666666679-1.6666666666666679 1.6666666666666679z m0.051666666666669414 13.333333333333332c-8.271666666666667 0-15-6.728333333333332-15-15s6.7283333333333335-15 15-15 15 6.7283333333333335 15 15-6.728333333333332 15-15 15z m0-26.666666666666668c-6.433333333333334 0-11.666666666666668 5.233333333333334-11.666666666666668 11.666666666666668s5.233333333333334 11.666666666666668 11.666666666666668 11.666666666666668 11.666666666666668-5.233333333333334 11.666666666666668-11.666666666666668-5.233333333333334-11.666666666666668-11.666666666666668-11.666666666666668z' })
                )
            );
        }
    }]);

    return TiSocialAtCircular;
}(React.Component);

exports.default = TiSocialAtCircular;
module.exports = exports['default'];