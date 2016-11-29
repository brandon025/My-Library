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

var TiStar = function (_React$Component) {
    _inherits(TiStar, _React$Component);

    function TiStar() {
        _classCallCheck(this, TiStar);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiStar).apply(this, arguments));
    }

    _createClass(TiStar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.603333333333333 15.263333333333334l-8.78 0.9733333333333345c-0.31666666666666643 0.038333333333333997-0.5966666666666667 0.25-0.7000000000000002 0.5716666666666654s0 0.6566666666666663 0.2333333333333334 0.8666666666666671c2.6083333333333325 2.383333333333333 6.529999999999999 5.949999999999999 6.529999999999999 5.949999999999999-0.0033333333333338544 0-1.0766666666666662 5.188333333333333-1.790000000000001 8.649999999999999-0.0600000000000005 0.3133333333333326 0.05333333333333279 0.6450000000000031 0.3266666666666662 0.8433333333333337 0.2716666666666665 0.20000000000000284 0.6216666666666661 0.20333333333333314 0.8966666666666665 0.04999999999999716l7.676666666666668-4.375 7.673333333333336 4.375c0.28000000000000114 0.15333333333333599 0.629999999999999 0.14999999999999858 0.8999999999999986-0.04999999999999716s0.38833333333333186-0.528333333333336 0.326666666666668-0.8400000000000034l-1.783333333333335-8.649999999999999 6.529999999999998-5.945c0.23333333333333428-0.21999999999999886 0.336666666666666-0.5549999999999997 0.23333333333333428-0.875s-0.38333333333333286-0.533333333333335-0.7000000000000028-0.5666666666666664c-3.5133333333333354-0.3949999999999996-8.783333333333331-0.9783333333333335-8.783333333333331-0.9783333333333335l-3.6366666666666667-8.05c-0.13666666666666671-0.2883333333333331-0.423333333333332-0.4900000000000002-0.7600000000000016-0.4900000000000002s-0.625 0.20333333333333314-0.754999999999999 0.4900000000000002l-3.6383333333333336 8.05z' })
                )
            );
        }
    }]);

    return TiStar;
}(React.Component);

exports.default = TiStar;
module.exports = exports['default'];