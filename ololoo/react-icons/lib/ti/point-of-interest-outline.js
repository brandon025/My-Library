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

var TiPointOfInterestOutline = function (_React$Component) {
    _inherits(TiPointOfInterestOutline, _React$Component);

    function TiPointOfInterestOutline() {
        _classCallCheck(this, TiPointOfInterestOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiPointOfInterestOutline).apply(this, arguments));
    }

    _createClass(TiPointOfInterestOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 6.666666666666667c3.2166666666666686 0 5.833333333333336 2.616666666666668 5.833333333333336 5.833333333333333s-2.616666666666667 5.833333333333336-5.833333333333336 5.833333333333336h-2.5v3.333333333333332h2.5c3.2166666666666686 0 5.833333333333336 2.616666666666667 5.833333333333336 5.833333333333332s-2.616666666666667 5.833333333333336-5.833333333333336 5.833333333333336-5.833333333333332-2.616666666666667-5.833333333333332-5.833333333333336v-2.5h-3.333333333333332v2.5c0 3.2166666666666686-2.616666666666667 5.833333333333336-5.833333333333334 5.833333333333336s-5.833333333333335-2.616666666666667-5.833333333333335-5.833333333333336 2.616666666666668-5.833333333333332 5.833333333333333-5.833333333333332h2.5v-3.333333333333332h-2.5c-3.216666666666665 0-5.833333333333333-2.616666666666669-5.833333333333333-5.833333333333336s2.616666666666668-5.833333333333333 5.833333333333333-5.833333333333333 5.833333333333336 2.616666666666668 5.833333333333336 5.833333333333333v2.5h3.333333333333332v-2.5c0-3.216666666666665 2.616666666666667-5.833333333333333 5.833333333333332-5.833333333333333z m-2.5 8.333333333333332h2.5c1.3783333333333339 0 2.5-1.123333333333333 2.5-2.5 0-1.379999999999999-1.1216666666666661-2.5-2.5-2.5s-2.5 1.1199999999999992-2.5 2.5v2.5z m-12.5 0h2.5v-2.5c0-1.3800000000000008-1.1216666666666661-2.5-2.5-2.5s-2.5 1.1199999999999992-2.5 2.5c0 1.3766666666666687 1.121666666666668 2.5 2.5 2.5z m15 15c1.3783333333333339 0 2.5-1.1233333333333348 2.5-2.5 0-1.379999999999999-1.1216666666666661-2.5-2.5-2.5h-2.5v2.5c0 1.3766666666666652 1.1216666666666661 2.5 2.5 2.5z m-15 0c1.3783333333333339 0 2.5-1.1233333333333348 2.5-2.5v-2.5h-2.5c-1.3783333333333339 0-2.5 1.120000000000001-2.5 2.5 0 1.3766666666666652 1.1216666666666661 2.5 2.5 2.5z m15-26.666666666666668c-3.094999999999999 0-5.84 1.543333333333333-7.5 3.9000000000000004-1.6600000000000001-2.3549999999999986-4.405000000000001-3.899999999999999-7.5-3.899999999999999-5.055000000000001 0-9.166666666666666 4.113333333333333-9.166666666666666 9.166666666666666-4.440892098500626e-16 3.0950000000000006 1.543333333333333 5.84 3.8999999999999995 7.5-2.3549999999999995 1.6600000000000001-3.9 4.405000000000001-3.9 7.5 0 5.053333333333335 4.111666666666666 9.166666666666671 9.166666666666666 9.166666666666671 3.0950000000000006 0 5.84-1.5433333333333366 7.5-3.8999999999999986 1.6600000000000001 2.356666666666669 4.405000000000001 3.8999999999999986 7.5 3.8999999999999986 5.055 0 9.166666666666671-4.11333333333333 9.166666666666671-9.166666666666668 0-3.094999999999999-1.5433333333333366-5.84-3.8999999999999986-7.5 2.354999999999997-1.6600000000000037 3.8999999999999986-4.405000000000005 3.8999999999999986-7.5000000000000036 0-5.053333333333333-4.111666666666665-9.166666666666666-9.166666666666671-9.166666666666666z m-5.833333333333332 15.000000000000004h-3.333333333333332v3.333333333333332h3.333333333333332z' })
                )
            );
        }
    }]);

    return TiPointOfInterestOutline;
}(React.Component);

exports.default = TiPointOfInterestOutline;
module.exports = exports['default'];