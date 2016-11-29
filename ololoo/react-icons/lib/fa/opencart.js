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

var FaOpencart = function (_React$Component) {
    _inherits(FaOpencart, _React$Component);

    function FaOpencart() {
        _classCallCheck(this, FaOpencart);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaOpencart).apply(this, arguments));
    }

    _createClass(FaOpencart, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.457777777777782 31.544444444444448q0 1.181111111111111-0.8333333333333321 2.0155555555555544t-2.014444444444443 0.8333333333333357-2.022222222222222-0.8333333333333357-0.844444444444445-2.014444444444443 0.844444444444445-2.022222222222222 2.022222222222222-0.8411111111111111 2.0133333333333354 0.8422222222222224 0.8333333333333321 2.022222222222222z m-13.003333333333334 0q0 1.181111111111111-0.844444444444445 2.0155555555555544t-2.022222222222222 0.8333333333333357-2.0133333333333336-0.8333333333333357-0.833333333333333-2.014444444444443 0.833333333333333-2.022222222222222 2.014444444444445-0.8411111111111111 2.022222222222222 0.8422222222222224 0.844444444444445 2.022222222222222z m-13.454444444444448-25.93555555555556q0.9888888888888889 1.0422222222222235 1.918888888888889 1.8144444444444456t2.1 1.4222222222222225 2.362222222222222 1.094444444444445 2.8822222222222225 0.7888888888888896 3.472222222222223 0.5477777777777781 4.34 0.32222222222222285 5.277777777777779 0.163333333333334 6.466666666666669 0.04444444444444429q2.413333333333334 0 4.244444444444444 0.08555555555555472t3.142222222222223 0.28666666666666707 2.152222222222221 0.47777777777777786 1.2333333333333343 0.6855555555555561 0.41555555555555657 0.8944444444444439-0.3388888888888886 1.1111111111111107-0.9811111111111117 1.3277777777777775-1.5555555555555571 1.5800000000000018-2.0133333333333354 1.8133333333333326-2.413333333333334 2.0666666666666664q-3.211111111111112 2.724444444444444-4.966666666666669 4.286666666666665 0.5044444444444451-0.8855555555555554 1.3288888888888906-1.8922222222222231t1.6333333333333329-1.8311111111111096 1.6400000000000006-1.7111111111111121 1.4411111111111126-1.5888888888888886 0.9377777777777752-1.397777777777776 0.224444444444444-1.2155555555555573-0.7888888888888914-0.9633333333333329-2.0222222222222257-0.7111111111111104-3.5422222222222217-0.4077777777777776-5.277777777777779-0.086666666666666q-2.916666666666668 0.033333333333333215-5.451111111111111-0.10444444444444478t-4.444444444444445-0.3977777777777778-3.549999999999999-0.7111111111111104-2.768888888888889-0.8955555555555552-2.1255555555555556-1.0855555555555547-1.5888888888888886-1.155555555555555-1.1800000000000002-1.2411111111111115-0.8777777777777778-1.206666666666667-0.6933333333333334-1.1799999999999997-0.6333333333333333-1.0333333333333332z' })
                )
            );
        }
    }]);

    return FaOpencart;
}(React.Component);

exports.default = FaOpencart;
module.exports = exports['default'];