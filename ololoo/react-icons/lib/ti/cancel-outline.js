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

var TiCancelOutline = function (_React$Component) {
    _inherits(TiCancelOutline, _React$Component);

    function TiCancelOutline() {
        _classCallCheck(this, TiCancelOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiCancelOutline).apply(this, arguments));
    }

    _createClass(TiCancelOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 34.16666666666667c-7.813333333333333 0-14.166666666666668-6.353333333333332-14.166666666666668-14.166666666666668s6.3533333333333335-14.166666666666668 14.161666666666665-14.166666666666668c7.816666666666666 0 14.171666666666667 6.3533333333333335 14.171666666666667 14.166666666666668s-6.353333333333332 14.166666666666668-14.166666666666668 14.166666666666668z m0-25c-5.976666666666667 0-10.833333333333334 4.859999999999999-10.833333333333334 10.833333333333336s4.860000000000001 10.833333333333336 10.833333333333334 10.833333333333336 10.833333333333336-4.859999999999999 10.833333333333336-10.833333333333336-4.859999999999999-10.833333333333334-10.833333333333336-10.833333333333334z m0.005000000000002558 4.9999999999999964c3.2166666666666686 0 5.828333333333333 2.616666666666667 5.828333333333333 5.833333333333332 0 0.3433333333333337-0.03333333333333499 0.6866666666666674-0.09499999999999886 1.0249999999999986l-6.761666666666667-6.766666666666666c0.3383333333333347-0.05833333333333357 0.6799999999999997-0.09166666666666679 1.0233333333333334-0.09166666666666679z m0-1.666666666666666c-1.4699999999999989 0-2.826666666666668 0.4366666666666674-3.9833333333333343 1.161666666666667l10.313333333333333 10.313333333333333c0.7333333333333343-1.1533333333333324 1.1666666666666679-2.5133333333333354 1.1666666666666679-3.9783333333333317 0-4.133333333333333-3.3566666666666656-7.496666666666666-7.495000000000001-7.496666666666666z m-5.743333333333334 6.4733333333333345l6.7666666666666675 6.766666666666666c-0.341666666666665 0.05999999999999872-0.6833333333333336 0.09333333333333371-1.0283333333333324 0.09333333333333371-3.216666666666665 0-5.833333333333334-2.616666666666667-5.833333333333334-5.836666666666666 0-0.3433333333333337 0.033333333333333215-0.6866666666666674 0.09500000000000064-1.0233333333333334z m-0.5950000000000024-2.9566666666666706c-0.7266666666666666 1.1583333333333314-1.166666666666666 2.5166666666666657-1.166666666666666 3.9800000000000004 0 4.143333333333334 3.3599999999999994 7.503333333333334 7.5 7.503333333333334 1.4666666666666686 0 2.8216666666666654-0.4400000000000013 3.9783333333333317-1.1666666666666679l-10.311666666666666-10.316666666666666z' })
                )
            );
        }
    }]);

    return TiCancelOutline;
}(React.Component);

exports.default = TiCancelOutline;
module.exports = exports['default'];