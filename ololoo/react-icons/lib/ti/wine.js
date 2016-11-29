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

var TiWine = function (_React$Component) {
    _inherits(TiWine, _React$Component);

    function TiWine() {
        _classCallCheck(this, TiWine);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiWine).apply(this, arguments));
    }

    _createClass(TiWine, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.280000000000005 15.72c0-4.25-1.5100000000000016-9.32-1.5733333333333341-9.533333333333333-0.2133333333333347-0.7050000000000001-0.8616666666666681-1.1866666666666665-1.5966666666666676-1.1866666666666665h-12.220000000000002c-0.7333333333333343 0-1.3833333333333329 0.4833333333333334-1.5966666666666676 1.1866666666666665-0.06333333333333258 0.21333333333333293-1.5733333333333341 5.283333333333333-1.5733333333333341 9.533333333333333 0 4.558333333333335 3.3066666666666666 8.35 7.645 9.128333333333336-0.006666666666667709 0.05000000000000071-0.03333333333333499 0.09666666666666757-0.03333333333333499 0.14999999999999858v6.666666666666668h-1.6666666666666679c-0.9216666666666669 0-1.666666666666666 0.745000000000001-1.666666666666666 1.6666666666666679s0.7449999999999992 1.6666666666666643 1.666666666666666 1.6666666666666643h6.666666666666668c0.9216666666666669 0 1.6666666666666679-0.7449999999999974 1.6666666666666679-1.6666666666666643s-0.745000000000001-1.6666666666666679-1.6666666666666679-1.6666666666666679h-1.6666666666666679v-6.666666666666668c0-0.053333333333334565-0.026666666666667282-0.10000000000000142-0.03333333333333499-0.15333333333333243 4.34-0.7766666666666673 7.646666666666668-4.566666666666666 7.646666666666668-9.126666666666667z m-9.280000000000005 5.946666666666667c-2.9549999999999983 0-5.393333333333334-2.171666666666667-5.85-5h11.700000000000001c-0.456666666666667 2.828333333333333-2.8949999999999996 5-5.850000000000001 5z m-5.924999999999999-6.666666666666668c0.1033333333333335-2.446666666666667 0.7033333333333331-5.155000000000001 1.088333333333333-6.666666666666668h9.670000000000002c0.3866666666666667 1.5116666666666667 0.9866666666666681 4.220000000000001 1.0899999999999999 6.666666666666668h-11.850000000000001z' })
                )
            );
        }
    }]);

    return TiWine;
}(React.Component);

exports.default = TiWine;
module.exports = exports['default'];