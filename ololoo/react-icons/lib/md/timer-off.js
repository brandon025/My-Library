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

var MdTimerOff = function (_React$Component) {
    _inherits(MdTimerOff, _React$Component);

    function MdTimerOff() {
        _classCallCheck(this, MdTimerOff);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdTimerOff).apply(this, arguments));
    }

    _createClass(MdTimerOff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 33.36q3.046666666666667 0 5.859999999999999-1.6400000000000006l-15.938333333333333-15.936666666666664q-1.5633333333333326 2.655000000000001-1.5633333333333326 5.858333333333334 0 4.843333333333334 3.4000000000000004 8.283333333333335t8.24 3.4366666666666674z m-15-26.72l29.61 29.61-2.1099999999999994 2.1099999999999994-4.216666666666669-4.216666666666669q-3.908333333333335 2.5-8.283333333333331 2.5-6.25 0-10.625-4.416666666666664t-4.375-10.581666666666667q0-4.533333333333335 2.5-8.283333333333333l-4.609999999999999-4.611666666666666z m13.36 9.063333333333333v-2.343333333333332h3.2833333333333314v5.703333333333335z m6.640000000000001-14.063333333333333v3.3599999999999994h-10v-3.36h10z m6.716666666666669 5.938333333333333l2.344999999999999 2.3433333333333337-2.3433333333333337 2.421666666666667q3.2816666666666663 4.140000000000001 3.2816666666666663 9.296666666666667 0 4.533333333333335-2.5 8.283333333333331l-2.4216666666666633-2.423333333333332q1.5633333333333326-2.6566666666666663 1.5633333333333326-5.859999999999999 0-4.843333333333334-3.400000000000002-8.241666666666667t-8.238333333333333-3.3983333333333334q-3.123333333333335 0-5.780000000000001 1.5633333333333326l-2.5-2.421666666666667q3.75-2.5 8.283333333333335-2.5 5.233333333333334 0 9.373333333333335 3.283333333333333z' })
                )
            );
        }
    }]);

    return MdTimerOff;
}(React.Component);

exports.default = MdTimerOff;
module.exports = exports['default'];