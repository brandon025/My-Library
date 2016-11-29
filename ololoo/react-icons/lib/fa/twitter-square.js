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

var FaTwitterSquare = function (_React$Component) {
    _inherits(FaTwitterSquare, _React$Component);

    function FaTwitterSquare() {
        _classCallCheck(this, FaTwitterSquare);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaTwitterSquare).apply(this, arguments));
    }

    _createClass(FaTwitterSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.42857142857143 13.614285714285714q-1.25 0.5600000000000005-2.6999999999999993 0.7599999999999998 1.514285714285716-0.8928571428571423 2.0742857142857147-2.611428571428572-1.451428571428572 0.8485714285714288-2.991428571428571 1.138571428571428-1.361428571428572-1.4728571428571406-3.414285714285718-1.4728571428571406-1.942857142857143 0-3.314285714285713 1.3714285714285719t-1.3742857142857154 3.314285714285713q0 0.6485714285714295 0.1114285714285721 1.071428571428573-2.879999999999999-0.15428571428571303-5.399999999999999-1.4499999999999993t-4.285714285714285-3.460000000000001q-0.6485714285714295 1.1142857142857139-0.6485714285714295 2.3657142857142865 0 2.5428571428571445 2.031428571428572 3.904285714285713-1.048571428571428-0.022857142857141355-2.232857142857142-0.5800000000000018v0.04285714285714448q0 1.6757142857142853 1.1142857142857139 2.981428571428573t2.7457142857142856 1.6185714285714283q-0.6471428571428568 0.17857142857142705-1.138571428571428 0.17857142857142705-0.2900000000000009 0-0.8714285714285719-0.08999999999999986 0.47142857142857153 1.404285714285713 1.6642857142857146 2.3200000000000003t2.7114285714285717 0.937142857142856q-2.59 2.008571428571429-5.825714285714286 2.008571428571429-0.5800000000000001 0-1.1142857142857139-0.0671428571428585 3.3000000000000007 2.097142857142856 7.185714285714287 2.097142857142856 2.5 0 4.685714285714287-0.7928571428571445t3.7514285714285727-2.120000000000001 2.6900000000000013-3.0599999999999987 1.6714285714285708-3.614285714285714 0.548571428571428-3.7628571428571433q0-0.3999999999999986-0.022857142857141355-0.6028571428571432 1.4057142857142857-1.0042857142857144 2.3428571428571416-2.4328571428571433z m5.714285714285715-4.328571428571429v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-21.42857142857143q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.885714285714284-4.5428571428571445v-21.42857142857143q0-2.6571428571428575 1.8857142857142857-4.542857142857144t4.542857142857144-1.885714285714284h21.42857142857143q2.6571428571428584 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144z' })
                )
            );
        }
    }]);

    return FaTwitterSquare;
}(React.Component);

exports.default = FaTwitterSquare;
module.exports = exports['default'];