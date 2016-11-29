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

var TiSocialLastFmCircular = function (_React$Component) {
    _inherits(TiSocialLastFmCircular, _React$Component);

    function TiSocialLastFmCircular() {
        _classCallCheck(this, TiSocialLastFmCircular);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiSocialLastFmCircular).apply(this, arguments));
    }

    _createClass(TiSocialLastFmCircular, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 35c-4.15 0-7.725-1.4833333333333343-10.626666666666667-4.41-2.8999999999999995-2.916666666666668-4.373333333333333-6.483333333333331-4.373333333333333-10.59 0-4.15 1.4733333333333336-7.721666666666668 4.378333333333334-10.625 2.9000000000000004-2.9000000000000004 6.475000000000001-4.375 10.621666666666666-4.375 4.109999999999999 0 7.673333333333332 1.4716666666666667 10.59 4.373333333333335 2.926666666666666 2.9033333333333324 4.41 6.476666666666665 4.41 10.626666666666665 0 4.106666666666666-1.4833333333333343 7.673333333333332-4.406666666666666 10.594999999999999-2.9166666666666643 2.921666666666667-6.483333333333334 4.405000000000001-10.593333333333334 4.405000000000001z m0-26.666666666666668c-3.2766666666666673 0-5.98 1.1116666666666664-8.263333333333334 3.4000000000000004-2.289999999999999 2.286666666666669-3.4033333333333324 4.990000000000004-3.4033333333333324 8.266666666666667 0 3.240000000000002 1.1133333333333333 5.936666666666667 3.4049999999999994 8.241666666666667 2.2866666666666653 2.3049999999999997 4.988333333333333 3.4250000000000007 8.261666666666667 3.4250000000000007 3.2383333333333333 0 5.933333333333334-1.1216666666666661 8.233333333333334-3.426666666666666 2.3133333333333326-2.3066666666666684 3.4333333333333336-5.003333333333334 3.4333333333333336-8.240000000000002 0-3.2716666666666683-1.120000000000001-5.975000000000001-3.4250000000000007-8.261666666666667-2.3049999999999997-2.291666666666666-5-3.4049999999999994-8.241666666666667-3.4049999999999994z m3.666666666666668 15.555000000000003c2.2233333333333327 0 3.333333333333332-0.7399999999999984 3.333333333333332-2.2216666666666676 0-1.2216666666666676-0.7049999999999983-2-2.1133333333333333-2.333333333333332l-1.0533333333333346-0.22166666666666757c-0.5899999999999999-0.14999999999999858-0.8900000000000006-0.461666666666666-0.8900000000000006-0.9433333333333316 0-0.5549999999999997 0.37333333333333485-0.8333333333333321 1.1099999999999994-0.8333333333333321 0.8166666666666664 0 1.2433333333333323 0.31666666666666643 1.2783333333333324 0.9433333333333316l1.6099999999999994-0.16666666666666785c-0.10500000000000043-1.370000000000001-1.0366666666666653-2.0549999999999997-2.7766666666666673-2.0549999999999997-1.8900000000000006 0-2.833333333333332 0.7783333333333324-2.833333333333332 2.333333333333332 0 1.1099999999999994 0.6099999999999994 1.8166666666666664 1.8333333333333321 2.1133333333333333l1.1133333333333333 0.22333333333333272c0.7383333333333333 0.18333333333333357 1.1099999999999994 0.5199999999999996 1.1099999999999994 1 0 0.591666666666665-0.5749999999999993 0.8883333333333319-1.7233333333333327 0.8883333333333319-1.4066666666666663 0-2.330000000000002-0.6833333333333336-2.7766666666666673-2.0549999999999997l-0.5566666666666684-1.6116666666666681c-0.33333333333333215-1.0733333333333341-0.75-1.8249999999999993-1.25-2.25-0.5-0.4250000000000007-1.283333333333335-0.6400000000000006-2.3599999999999994-0.6400000000000006-1 0-1.879999999999999 0.37166666666666615-2.6400000000000006 1.1116666666666681-0.7599999999999998 0.7416666666666671-1.1383333333333336 1.7216666666666676-1.1383333333333336 2.9450000000000003 0 1.1466666666666683 0.35999999999999943 2.0666666666666664 1.083333333333334 2.75 0.7233333333333327 0.6866666666666674 1.583333333333334 1.0266666666666673 2.583333333333332 1.0266666666666673 1 0 1.7950000000000017-0.23999999999999844 2.3883333333333354-0.7216666666666676l-0.5-1.3900000000000006c-0.5166666666666657 0.5199999999999996-1.129999999999999 0.7800000000000011-1.8333333333333321 0.7800000000000011-0.5899999999999999 0-1.1033333333333335-0.23333333333333428-1.5266666666666673-0.6950000000000003-0.4283333333333328-0.461666666666666-0.6416666666666675-1.0666666666666664-0.6416666666666675-1.8066666666666684 0-0.9266666666666659 0.23000000000000043-1.6000000000000014 0.6933333333333334-2.0283333333333324s0.9899999999999984-0.6383333333333319 1.5833333333333321-0.6383333333333319c0.6333333333333329 0 1.0833333333333321 0.16666666666666785 1.3616666666666681 0.5 0.27833333333333243 0.33333333333333215 0.5249999999999986 0.8500000000000014 0.75 1.5566666666666684l0.5 1.6116666666666681c0.5933333333333337 1.8883333333333319 2.0199999999999996 2.833333333333332 4.276666666666667 2.833333333333332z' })
                )
            );
        }
    }]);

    return TiSocialLastFmCircular;
}(React.Component);

exports.default = TiSocialLastFmCircular;
module.exports = exports['default'];