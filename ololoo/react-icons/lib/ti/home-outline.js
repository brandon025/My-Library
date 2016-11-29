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

var TiHomeOutline = function (_React$Component) {
    _inherits(TiHomeOutline, _React$Component);

    function TiHomeOutline() {
        _classCallCheck(this, TiHomeOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiHomeOutline).apply(this, arguments));
    }

    _createClass(TiHomeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.10333333333334 17.44666666666667c-5.649999999999999-4.756666666666668-15.91-13.616666666666667-16.011666666666667-13.708333333333334l-1.0916666666666721-0.9383333333333352-1.086666666666666 0.9383333333333335c-0.10333333333333172 0.08833333333333337-10.366666666666667 8.946666666666667-16.1 13.746666666666666-0.7299999999999991 0.658333333333335-1.1466666666666658 1.576666666666668-1.1466666666666658 2.5150000000000006 0 1.8399999999999999 1.4933333333333334 3.333333333333332 3.333333333333333 3.333333333333332h1.666666666666667v9.999999999999996c0 1.8400000000000034 1.4933333333333332 3.3333333333333357 3.333333333333333 3.3333333333333357h20c1.8399999999999999 0 3.3333333333333357-1.4933333333333323 3.3333333333333357-3.3333333333333357v-10h1.6666666666666643c1.8400000000000034 0 3.3333333333333357-1.4933333333333323 3.3333333333333357-3.333333333333332 0-0.9966666666666661-0.4583333333333357-1.9333333333333336-1.2299999999999969-2.5533333333333346z m-13.770000000000003 15.886666666666667h-6.666666666666668v-8.333333333333336h6.666666666666668v8.333333333333336z m6.666666666666668-13.333333333333336l0.0033333333333338544 13.333333333333336h-5.003333333333337v-10h-10v10h-5v-13.333333333333336h-5c4.606666666666666-3.8533333333333317 12.190000000000001-10.378333333333334 15-12.8 2.8099999999999987 2.421666666666667 10.39 8.945 15 12.8h-5z' })
                )
            );
        }
    }]);

    return TiHomeOutline;
}(React.Component);

exports.default = TiHomeOutline;
module.exports = exports['default'];