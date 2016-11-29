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

var FaContao = function (_React$Component) {
    _inherits(FaContao, _React$Component);

    function FaContao() {
        _classCallCheck(this, FaContao);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaContao).apply(this, arguments));
    }

    _createClass(FaContao, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.08 2.857142857142857h4.397142857142857q-1.5628571428571432 1.4285714285714284-2.814285714285714 3.325714285714286-0.7999999999999998 1.25-1.314285714285714 2.5671428571428567t-0.6714285714285713 2.8000000000000007-0.18999999999999995 2.6799999999999997 0.23571428571428577 2.94857142857143 0.4685714285714284 2.814285714285713 0.6257142857142859 3.0457142857142863l0.13571428571428568 0.6257142857142846q1.1385714285714283 5.314285714285713 1.8085714285714292 7.342857142857142 1.274285714285714 3.8185714285714276 3.3942857142857132 6.139999999999997h-6.071428571428571q-1.0714285714285712 0-1.8285714285714287-0.7571428571428598t-0.7657142857142858-1.8328571428571365v-29.107142857142858q5.551115123125783e-17-1.0714285714285703 0.7571428571428573-1.8285714285714278t1.8314285714285714-0.7600000000000002z m26.962857142857146 0h6.877142857142857q1.0714285714285694 0 1.8285714285714292 0.7571428571428571t0.759999999999998 1.8314285714285714v29.107142857142858q0 1.0714285714285694-0.7571428571428598 1.8285714285714292t-1.8328571428571365 0.7614285714285742h-3.971428571428568q4.731428571428573-4.688571428571429 4.374285714285712-12.614285714285714l-10.46857142857143 2.2571428571428562q-0.04285714285714448 1.0028571428571418-0.2671428571428578 1.8285714285714292t-0.6900000000000013 1.6071428571428577-1.3285714285714292 1.3285714285714292-2.0857142857142854 0.8142857142857167q-2.747142857142858 0.5799999999999983-4.442857142857143-0.8928571428571423-0.7142857142857153-0.6028571428571432-1.1828571428571415-1.361428571428572t-1.1514285714285712-2.879999999999999-1.4399999999999995-5.757142857142856q-0.781428571428572-3.638571428571428-1.0142857142857142-5.871428571428572t-0.12428571428571367-3.0999999999999996 0.5114285714285707-1.7200000000000006q0.4471428571428575-0.9142857142857146 1.395714285714286-1.6285714285714281t2.28857142857143-1.0057142857142853q1.0042857142857144-0.2671428571428569 1.8642857142857139-0.1457142857142859t1.4957142857142856 0.3800000000000008 1.2042857142857137 0.781428571428572 0.9600000000000009 1.0714285714285712 0.7714285714285722 1.2614285714285725l10.445714285714285-2.232857142857142q-1.5128571428571433-3.9057142857142964-4.012857142857147-6.405714285714296z' })
                )
            );
        }
    }]);

    return FaContao;
}(React.Component);

exports.default = FaContao;
module.exports = exports['default'];