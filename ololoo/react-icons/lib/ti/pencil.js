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

var TiPencil = function (_React$Component) {
    _inherits(TiPencil, _React$Component);

    function TiPencil() {
        _classCallCheck(this, TiPencil);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiPencil).apply(this, arguments));
    }

    _createClass(TiPencil, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 11.466666666666667l-6.466666666666665-6.466666666666667c-0.48666666666666814-0.4883333333333333-1.1283333333333339-0.7333333333333334-1.7666666666666657-0.7333333333333334-0.6400000000000006 0-1.2783333333333324 0.2450000000000001-1.7666666666666657 0.7333333333333334l-18.233333333333338 18.233333333333334c-0.48666666666666547 0.48666666666666814-0.9283333333333328 1.2100000000000009-1.2499999999999991 1.9783333333333317-0.31666666666666643 0.7716666666666683-0.5166666666666666 1.6000000000000014-0.5166666666666666 2.288333333333334v7.5h7.5c0.6899999999999995 0 1.5133333333333336-0.20000000000000284 2.283333333333333-0.5166666666666657s1.4949999999999992-0.7633333333333354 1.9833333333333325-1.25l18.233333333333334-18.233333333333334c0.48833333333333684-0.4883333333333333 0.7333333333333343-1.1300000000000008 0.7333333333333343-1.7666666666666675 0-0.6416666666666675-0.24499999999999744-1.2799999999999994-0.7333333333333343-1.7666666666666675z m-25.386666666666667 13.633333333333335l13.82-13.816666666666668 2.0566666666666684 2.0500000000000007-13.823333333333334 13.821666666666667-2.0533333333333346-2.0549999999999997z m2.8866666666666667 6.566666666666666h-2.5l-1.666666666666666-1.6666666666666679v-2.5c0-0.12833333333333385 0.054999999999999716-0.5083333333333329 0.26333333333333364-1.0083333333333329 0.016666666666667496-0.03333333333333499 4.945 4.896666666666668 4.945 4.896666666666668-0.5366666666666671 0.22333333333333272-0.913333333333334 0.27833333333333243-1.041666666666666 0.27833333333333243z m2.4000000000000004-1.2800000000000011l-2.0566666666666666-2.053333333333331 13.823333333333334-13.821666666666667 2.0533333333333346 2.053333333333333-13.820000000000002 13.818333333333335z m14.999999999999998-15l-5.289999999999999-5.286666666666667 2.155000000000001-2.1549999999999994 5.283333333333331 5.286666666666667-2.1499999999999986 2.153333333333334z' })
                )
            );
        }
    }]);

    return TiPencil;
}(React.Component);

exports.default = TiPencil;
module.exports = exports['default'];