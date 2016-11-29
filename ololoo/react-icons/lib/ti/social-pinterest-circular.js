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

var TiSocialPinterestCircular = function (_React$Component) {
    _inherits(TiSocialPinterestCircular, _React$Component);

    function TiSocialPinterestCircular() {
        _classCallCheck(this, TiSocialPinterestCircular);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiSocialPinterestCircular).apply(this, arguments));
    }

    _createClass(TiSocialPinterestCircular, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 35c-8.271666666666667 0-15-6.728333333333332-15-15s6.7283333333333335-15 15-15 15 6.7283333333333335 15 15-6.728333333333332 15-15 15z m0-26.666666666666668c-6.433333333333334 0-11.666666666666668 5.233333333333334-11.666666666666668 11.666666666666668s5.233333333333334 11.666666666666668 11.666666666666668 11.666666666666668 11.666666666666668-5.233333333333334 11.666666666666668-11.666666666666668-5.233333333333334-11.666666666666668-11.666666666666668-11.666666666666668z m0.5583333333333371 5.000000000000002c-4.113333333333333 0-6.186666666666667 2.950000000000001-6.186666666666667 5.406666666666668 0 1.4916666666666671 0.5633333333333326 2.8133333333333326 1.7716666666666683 3.306666666666665 0.1999999999999993 0.08333333333333215 0.37666666666666515 0.0033333333333338544 0.43333333333333357-0.216666666666665 0.03999999999999915-0.14999999999999858 0.13333333333333286-0.533333333333335 0.17666666666666586-0.6950000000000003 0.05833333333333357-0.2133333333333347 0.03333333333333499-0.28999999999999915-0.12333333333333485-0.4800000000000004-0.3500000000000014-0.41000000000000014-0.5733333333333341-0.9433333333333316-0.5733333333333341-1.6999999999999993 0-2.1833333333333336 1.6366666666666667-4.143333333333334 4.263333333333332-4.143333333333334 2.326666666666668 0 3.6000000000000014 1.4216666666666669 3.6000000000000014 3.3166666666666664 0 2.496666666666666-1.1000000000000014 4.603333333333335-2.741666666666667 4.603333333333335-0.9050000000000011 0-1.5833333333333321-0.75-1.3666666666666671-1.6666666666666679 0.26000000000000156-1.1000000000000014 0.7666666666666657-2.283333333333335 0.7666666666666657-3.073333333333334 0-0.7100000000000009-0.38333333333333286-1.3000000000000007-1.1666666666666679-1.3000000000000007-0.9283333333333346 0-1.6716666666666669 0.9583333333333321-1.6716666666666669 2.241666666666667 0 0.8166666666666664 0.2766666666666673 1.3666666666666671 0.2766666666666673 1.3666666666666671l-1.1166666666666671 4.716666666666665c-0.32833333333333314 1.3999999999999986-0.046666666666666856 3.116666666666667-0.023333333333333428 3.291666666666668 0.013333333333331865 0.10333333333333172 0.14499999999999957 0.12833333333333385 0.2049999999999983 0.05000000000000071 0.08333333333333215-0.11166666666666814 1.1866666666666674-1.4750000000000014 1.5616666666666674-2.833333333333332 0.10666666666666558-0.38333333333333286 0.6099999999999994-2.378333333333334 0.6099999999999994-2.378333333333334 0.3000000000000007 0.5733333333333341 1.1783333333333346 1.076666666666668 2.1133333333333333 1.076666666666668 2.783333333333335 0 4.673333333333332-2.533333333333335 4.673333333333332-5.933333333333334 0-2.5633333333333326-2.176666666666666-4.956666666666667-5.483333333333334-4.956666666666667z' })
                )
            );
        }
    }]);

    return TiSocialPinterestCircular;
}(React.Component);

exports.default = TiSocialPinterestCircular;
module.exports = exports['default'];