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

var FaSellsy = function (_React$Component) {
    _inherits(FaSellsy, _React$Component);

    function FaSellsy() {
        _classCallCheck(this, FaSellsy);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaSellsy).apply(this, arguments));
    }

    _createClass(FaSellsy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.2975 29.2775v-14.315q0-0.41249999999999964-0.2925000000000004-0.7037499999999994t-0.6837499999999999-0.2925000000000004h-1.8162500000000001q-0.39124999999999943 0-0.6837499999999999 0.2925000000000004t-0.2925000000000004 0.7025000000000006v14.31375q0 0.39124999999999943 0.2925000000000004 0.6837499999999999t0.6837499999999999 0.29125000000000156h1.8162500000000001q0.39124999999999943 0 0.6837499999999999-0.2925000000000004t0.2925000000000004-0.6849999999999987z m-5.547499999999999 0v-10.37125q0-0.39124999999999943-0.2925000000000004-0.6837499999999999t-0.6837499999999999-0.2925000000000004h-1.9750000000000014q-0.39000000000000057 0-0.682500000000001 0.2925000000000004t-0.2925000000000004 0.6837499999999999v10.37125q0 0.39124999999999943 0.2925000000000004 0.6837499999999999t0.6837499999999999 0.29125000000000156h1.9750000000000014q0.39000000000000057 0 0.682500000000001-0.2925000000000004t0.2925000000000004-0.6849999999999987z m-5.702500000000001 0v-8.377500000000001q0-0.3924999999999983-0.2925000000000004-0.6849999999999987t-0.6837499999999999-0.2925000000000004h-1.9712499999999995q-0.39250000000000007 0-0.6850000000000005 0.2925000000000004t-0.2925000000000004 0.6837499999999999v8.377499999999998q0 0.39124999999999943 0.2925000000000004 0.6837499999999999t0.6837499999999999 0.29125000000000156h1.9712500000000013q0.39124999999999943 0 0.6837499999999999-0.2925000000000004t0.2925000000000004-0.6849999999999987z m-5.703749999999999 0v-7.07q0-0.39124999999999943-0.2925000000000004-0.6837499999999999t-0.682500000000001-0.2937499999999993h-1.973749999999999q-0.39124999999999943 0-0.6837499999999999 0.2925000000000004t-0.2937499999999993 0.682500000000001v7.07q0 0.39124999999999943 0.2925000000000004 0.6837499999999999t0.682500000000001 0.29125000000000156h1.9725000000000001q0.39124999999999943 0 0.6837499999999999-0.2925000000000004t0.2937499999999993-0.6849999999999987z m27.65625-2.8500000000000014q0 3.241250000000001-2.3049999999999997 5.546250000000001t-5.547499999999999 2.3037499999999973h-24.2975q-3.241250000000001 0-5.5462500000000015-2.3049999999999997t-2.30375-5.547499999999996q0-2.2650000000000006 1.22875-4.1875t3.28125-2.8999999999999986q-0.19500000000000028-0.6649999999999991-0.19500000000000028-1.4274999999999984 0-2.2074999999999996 1.5724999999999998-3.7787500000000005t3.7787500000000005-1.5724999999999998q1.9924999999999997 0 3.514999999999999 1.3087499999999999 0.8787500000000001-3.5749999999999993 3.7875000000000014-5.859999999999999t6.602499999999999-2.285q2.91 0 5.37125 1.4349999999999996t3.8962499999999984 3.896250000000001 1.4375 5.37125q0 1.2875000000000014-0.2749999999999986 2.3825000000000003 2.637500000000003 0.6449999999999996 4.316249999999997 2.7837500000000013t1.6799999999999997 4.833749999999998z' })
                )
            );
        }
    }]);

    return FaSellsy;
}(React.Component);

exports.default = FaSellsy;
module.exports = exports['default'];