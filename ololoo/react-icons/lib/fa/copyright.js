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

var FaCopyright = function (_React$Component) {
    _inherits(FaCopyright, _React$Component);

    function FaCopyright() {
        _classCallCheck(this, FaCopyright);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaCopyright).apply(this, arguments));
    }

    _createClass(FaCopyright, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.52857142857143 23.971428571428575v2.434285714285714q0 1.1142857142857139-0.8142857142857132 1.985714285714284t-2.1000000000000014 1.3514285714285705-2.6342857142857135 0.725714285714286-2.6228571428571428 0.24571428571428555q-4.575714285714286 0-7.645714285714286-3.102857142857143t-3.0685714285714294-7.722857142857141q0-4.531428571428572 3.0357142857142847-7.567142857142857t7.5671428571428585-3.0357142857142883q0.7571428571428562 0 1.6857142857142868 0.09999999999999964t2.0757142857142874 0.40000000000000036 2.064285714285713 0.7599999999999998 1.5399999999999991 1.2614285714285707 0.6257142857142846 1.8085714285714296v2.434285714285714q0 0.35714285714285765-0.35714285714285765 0.35714285714285765h-2.6342857142857135q-0.35714285714285765 0-0.35714285714285765-0.35714285714285765v-1.5642857142857132q0-0.9600000000000009-1.46142857142857-1.5071428571428562t-3.071428571428573-0.5471428571428572q-3.1242857142857154 0-5.1 2.0428571428571427t-1.9699999999999989 5.299999999999997q0 3.37142857142857 2.0428571428571427 5.571428571428573t5.21142857142857 2.1971428571428575q1.5171428571428578 0 3.0799999999999983-0.5357142857142847t1.562857142857144-1.4714285714285715v-1.5642857142857132q0-0.15714285714285836 0.10000000000000142-0.25714285714285623t0.23428571428571487-0.10000000000000142h2.6571428571428584q0.13285714285714434 0 0.24285714285714377 0.10000000000000142t0.11428571428571388 0.25714285714285623z m-8.528571428571428-18.25714285714286q-2.8999999999999986-8.881784197001252e-16-5.547142857142857 1.138571428571428t-4.5528571428571425 3.047142857142857-3.047142857142857 4.5528571428571425-1.1385714285714288 5.547142857142857 1.1385714285714288 5.547142857142859 3.047142857142857 4.5528571428571425 4.5528571428571425 3.047142857142859 5.547142857142857 1.1385714285714243 5.547142857142859-1.1385714285714315 4.5528571428571425-3.047142857142859 3.047142857142859-4.5528571428571425 1.1385714285714243-5.547142857142852-1.1385714285714315-5.547142857142857-3.047142857142852-4.5528571428571425-4.5528571428571425-3.047142857142857-5.547142857142859-1.1385714285714288z m17.14285714285714 14.285714285714285q0 4.665714285714287-2.299999999999997 8.604285714285716t-6.237142857142857 6.238571428571426-8.605714285714285 2.3000000000000043-8.6-2.3000000000000043-6.242857142857143-6.238571428571426-2.295714285714286-8.604285714285716 2.3000000000000003-8.604285714285714 6.234285714285714-6.238571428571428 8.604285714285714-2.3000000000000003 8.605714285714285 2.3000000000000003 6.238571428571426 6.238571428571428 2.298571428571435 8.604285714285714z' })
                )
            );
        }
    }]);

    return FaCopyright;
}(React.Component);

exports.default = FaCopyright;
module.exports = exports['default'];