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

var FaPaperclip = function (_React$Component) {
    _inherits(FaPaperclip, _React$Component);

    function FaPaperclip() {
        _classCallCheck(this, FaPaperclip);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaPaperclip).apply(this, arguments));
    }

    _createClass(FaPaperclip, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.62571428571429 30.914285714285715q0 2.6142857142857174-1.7628571428571433 4.377142857142854t-4.375714285714288 1.7628571428571433q-3.0114285714285707 0-5.242857142857144-2.232857142857142l-17.348571428571425-17.32142857142857q-2.521428571428573-2.5671428571428585-2.521428571428573-6.048571428571428 0-3.548571428571428 2.4571428571428573-6.0285714285714285t6.002857142857143-2.475714285714286q3.5285714285714302 0 6.094285714285716 2.522857142857143l13.504285714285714 13.525714285714285q0.2228571428571442 0.2228571428571442 0.2228571428571442 0.4914285714285711 0 0.35714285714285765-0.6828571428571415 1.03857142857143t-1.03857142857143 0.6799999999999997q-0.28999999999999915 0-0.514285714285716-0.2228571428571442l-13.522857142857145-13.545714285714284q-1.7642857142857142-1.7185714285714289-4.039999999999999-1.7185714285714289-2.3671428571428574 0-3.997142857142858 1.6742857142857144t-1.6285714285714281 4.04q0 2.3428571428571434 1.6957142857142866 4.040000000000001l17.32 17.345714285714287q1.4057142857142857 1.4057142857142821 3.2371428571428567 1.4057142857142821 1.428571428571427 0 2.3657142857142865-0.9371428571428595t0.9371428571428595-2.3657142857142865q0-1.8285714285714292-1.4057142857142857-3.2371428571428567l-12.96714285714286-12.969999999999995q-0.5800000000000018-0.5357142857142865-1.3399999999999999-0.5357142857142865-0.6471428571428568 0-1.071428571428573 0.4242857142857144t-0.4242857142857144 1.0714285714285712q0 0.7142857142857135 0.5571428571428587 1.3171428571428567l9.152857142857144 9.151428571428571q0.2228571428571442 0.2228571428571442 0.2228571428571442 0.4914285714285711 0 0.35714285714285765-0.6914285714285704 1.048571428571428t-1.048571428571428 0.6914285714285704q-0.2671428571428578 0-0.4914285714285711-0.2228571428571442l-9.151428571428575-9.151428571428568q-1.4057142857142857-1.361428571428572-1.4057142857142857-3.3257142857142856 0-1.8285714285714292 1.2714285714285722-3.102857142857143t3.104285714285716-1.2714285714285722q1.9628571428571426 0 3.3242857142857147 1.4042857142857148l12.96857142857143 12.968571428571426q2.232857142857142 2.1885714285714286 2.232857142857142 5.247142857142858z' })
                )
            );
        }
    }]);

    return FaPaperclip;
}(React.Component);

exports.default = FaPaperclip;
module.exports = exports['default'];