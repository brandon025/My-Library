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

var FaVine = function (_React$Component) {
    _inherits(FaVine, _React$Component);

    function FaVine() {
        _classCallCheck(this, FaVine);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaVine).apply(this, arguments));
    }

    _createClass(FaVine, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.27142857142857 18.46v4.420000000000002q-2.2528571428571453 0.5142857142857125-4.418571428571429 0.5142857142857125-1.451428571428572 3.0342857142857156-3.6942857142857157 6.047142857142859t-4.050000000000001 4.808571428571426-2.8571428571428577 2.3771428571428572q-1.7857142857142847 1.0042857142857144-3.614285714285714-0.06714285714285495-0.6285714285714299-0.38000000000000256-1.3514285714285705-0.9714285714285751t-1.9000000000000004-1.8642857142857139-2.2857142857142865-2.8685714285714283-2.4000000000000004-4.107142857142858-2.3571428571428577-5.4471428571428575-2.0428571428571427-7.02-1.5714285714285716-8.705714285714286h6.314285714285713q0.581428571428571 4.8657142857142865 1.564285714285715 8.895714285714286t2.3328571428571436 7.077142857142858 2.71142857142857 5.257142857142856 3.1257142857142846 4.352857142857143q3.7714285714285722-3.7714285714285722 6.405714285714286-9.061428571428571-3.171428571428571-1.6071428571428577-4.977142857142859-4.91t-1.8085714285714296-7.432857142857143q0-4.285714285714286 2.321428571428573-7.02t6.338571428571434-2.734285714285713q3.9742857142857133 0 6.095714285714287 2.3528571428571428t2.1199999999999974 6.639999999999999q0 3.548571428571428-1.2928571428571445 6.385714285714284-0.15714285714285836 0.02142857142857224-0.4357142857142833 0.06571428571428584t-1.028571428571432 0.04571428571428626-1.404285714285713-0.13428571428571345-1.3857142857142861-0.5685714285714294-1.1257142857142846-1.1500000000000004q0.6900000000000013-2.3000000000000007 0.6900000000000013-4.107142857142858 0-1.942857142857143-0.6471428571428568-2.9471428571428575t-1.7628571428571433-1.0042857142857144q-1.1828571428571415 0-1.8971428571428568 1.104285714285714t-0.7142857142857153 3.135714285714286q0 4.151428571428573 2.3428571428571416 6.551428571428572t5.96142857142857 2.3999999999999986q1.3857142857142861 0 2.702857142857141-0.31428571428571317z' })
                )
            );
        }
    }]);

    return FaVine;
}(React.Component);

exports.default = FaVine;
module.exports = exports['default'];