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

var TiChevronRightOutline = function (_React$Component) {
    _inherits(TiChevronRightOutline, _React$Component);

    function TiChevronRightOutline() {
        _classCallCheck(this, TiChevronRightOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiChevronRightOutline).apply(this, arguments));
    }

    _createClass(TiChevronRightOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.666666666666668 33.333333333333336c-1.336666666666666 0-2.591666666666667-0.5200000000000031-3.536666666666667-1.4666666666666686-0.9433333333333334-0.9399999999999977-1.463333333333333-2.1999999999999993-1.463333333333333-3.5333333333333314s0.5199999999999996-2.5916666666666686 1.4666666666666668-3.5366666666666653l4.793333333333335-4.79666666666667-4.7933333333333366-4.800000000000001c-0.9499999999999993-0.9399999999999995-1.466666666666665-2.1999999999999993-1.466666666666665-3.5333333333333314s0.5199999999999996-2.591666666666667 1.4666666666666668-3.536666666666667c1.8866666666666667-1.8866666666666667 5.1800000000000015-1.8883333333333336 7.0699999999999985 0l11.866666666666667 11.87-11.866666666666667 11.866666666666667c-0.9450000000000003 0.9466666666666654-2.1999999999999993 1.4666666666666686-3.5366666666666653 1.4666666666666686z m0-23.333333333333336c-0.44666666666666544 0-0.8633333333333333 0.17333333333333378-1.1783333333333328 0.48666666666666636-0.31666666666666643 0.31666666666666643-0.4883333333333333 0.7333333333333325-0.4883333333333333 1.1799999999999997s0.17333333333333378 0.8633333333333333 0.4883333333333333 1.1783333333333328l7.153333333333334 7.155000000000001-7.153333333333332 7.155000000000001c-0.31666666666666643 0.31666666666666643-0.4883333333333333 0.7333333333333343-0.4883333333333333 1.1783333333333346s0.17333333333333378 0.8633333333333333 0.4883333333333333 1.1783333333333346c0.629999999999999 0.6333333333333329 1.7283333333333317 0.629999999999999 2.3566666666666656 0l9.513333333333332-9.51166666666667-9.513333333333335-9.511666666666667c-0.31666666666666643-0.31666666666666643-0.7333333333333307-0.4883333333333333-1.178333333333331-0.4883333333333333z' })
                )
            );
        }
    }]);

    return TiChevronRightOutline;
}(React.Component);

exports.default = TiChevronRightOutline;
module.exports = exports['default'];