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

var FaInr = function (_React$Component) {
    _inherits(FaInr, _React$Component);

    function FaInr() {
        _classCallCheck(this, FaInr);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaInr).apply(this, arguments));
    }

    _createClass(FaInr, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.042857142857144 10.491428571428573v2.2771428571428576q0 0.31428571428571495-0.1999999999999993 0.5142857142857142t-0.514285714285716 0.1999999999999993h-3.7485714285714273q-0.514285714285716 3.2142857142857135-2.879999999999999 5.222857142857142t-6.16 2.4571428571428555q3.7285714285714278 3.9714285714285715 10.245714285714286 11.962857142857146 0.31428571428571317 0.3571428571428541 0.08999999999999986 0.7571428571428598-0.17857142857142705 0.4028571428571439-0.6471428571428568 0.4028571428571439h-4.352857142857143q-0.35714285714285765 0-0.5571428571428569-0.2671428571428578-6.832857142857144-8.190000000000008-11.118571428571432-12.747142857142862-0.1999999999999993-0.1999999999999993-0.1999999999999993-0.4885714285714293v-2.8342857142857163q0-0.28999999999999915 0.21142857142857174-0.5028571428571418t0.5028571428571436-0.21000000000000085h2.5q2.9471428571428575 0 4.742857142857144-0.9600000000000009t2.2885714285714265-2.7899999999999974h-9.53142857142857q-0.31428571428571495 0-0.5142857142857142-0.1999999999999993t-0.20000000000000107-0.5185714285714305v-2.275714285714283q0-0.31428571428571495 0.1999999999999993-0.5142857142857142t0.5142857142857142-0.1999999999999993h9.218571428571432q-1.2714285714285722-2.522857142857143-5.982857142857142-2.522857142857143h-3.2357142857142875q-0.2914285714285718 0-0.5042857142857144-0.21142857142857174t-0.21000000000000085-0.5028571428571436v-2.9685714285714293q0-0.3142857142857145 0.1999999999999993-0.5142857142857142t0.514285714285716-0.20000000000000018h18.571428571428573q0.3114285714285714 0 0.5114285714285707 0.20000000000000018t0.1999999999999993 0.5142857142857142v2.277142857142857q0 0.31428571428571406-0.1999999999999993 0.5142857142857142t-0.5142857142857125 0.20000000000000018h-5.197142857142861q1.048571428571428 1.3614285714285712 1.428571428571427 3.2142857142857144h3.8171428571428585q0.31428571428571317 0 0.514285714285716 0.1999999999999993t0.1999999999999993 0.5142857142857142z' })
                )
            );
        }
    }]);

    return FaInr;
}(React.Component);

exports.default = FaInr;
module.exports = exports['default'];