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

var Md3dRotation = function (_React$Component) {
    _inherits(Md3dRotation, _React$Component);

    function Md3dRotation() {
        _classCallCheck(this, Md3dRotation);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Md3dRotation).apply(this, arguments));
    }

    _createClass(Md3dRotation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 0q7.813333333333333 0 13.555 5.273333333333333t6.366666666666667 13.008333333333333h-2.5q-0.3883333333333354-4.611666666666666-3.088333333333331-8.361666666666666t-6.833333333333336-5.703333333333333l-2.2666666666666657 2.1900000000000004-6.328333333333333-6.328333333333334z m7.578333333333333 19.688333333333336q0-4.453333333333333-3.671666666666667-4.453333333333333h-1.5633333333333326v9.611666666666668h1.4833333333333343q2.8166666666666664 0 3.594999999999999-2.6566666666666663 0.1566666666666663-0.5466666666666669 0.1566666666666663-1.875v-0.625z m-3.671666666666667-6.328333333333333q4.140000000000001 0 5.625 3.671666666666667 0.38833333333333186 0.9366666666666674 0.38833333333333186 2.655000000000001v0.625q0 2.966666666666665-1.6400000000000006 4.609999999999999-1.7199999999999989 1.716666666666665-4.455000000000002 1.716666666666665h-3.8249999999999957v-13.276666666666669h3.9066666666666663z m-7.733333333333334 6.483333333333334q2.1866666666666674 0.8599999999999994 2.1866666666666674 3.046666666666667 0 0.783333333333335-0.39000000000000057 1.5633333333333326-0.466666666666665 0.9383333333333326-0.8599999999999994 1.25-1.1716666666666669 0.9383333333333326-3.125 0.9383333333333326-1.873333333333333 0-3.045-0.9383333333333326t-1.1716666666666669-2.7333333333333343h2.110000000000001q0 0.8583333333333343 0.586666666666666 1.4050000000000011t1.5233333333333334 0.5466666666666669q2.1883333333333326 0 2.1883333333333326-2.1099999999999994t-2.4233333333333302-2.1116666666666717h-1.25v-1.716666666666665h1.25q2.2666666666666675 0 2.2666666666666675-1.9533333333333331t-2.036666666666669-1.953333333333335q-1.9533333333333331 0-1.9533333333333331 1.7966666666666686h-2.1850000000000005q0-1.3283333333333331 1.1716666666666669-2.5 1.25-1.0166666666666657 2.966666666666667-1.0166666666666657 2.736666666666668 0 3.8299999999999983 2.1116666666666664 0.3133333333333326 0.6266666666666669 0.3133333333333326 1.5666666666666682 0 1.7950000000000017-1.9533333333333331 2.8116666666666674z m-3.673333333333332 15.939999999999994l2.2666666666666675-2.1899999999999977 6.326666666666666 6.328333333333333-1.0933333333333337 0.07833333333333314q-7.813333333333333 0-13.555-5.313333333333333t-6.366666666666666-13.046666666666667h2.5q0.4666666666666668 4.688333333333333 3.125 8.438333333333333t6.796666666666666 5.704999999999998z' })
                )
            );
        }
    }]);

    return Md3dRotation;
}(React.Component);

exports.default = Md3dRotation;
module.exports = exports['default'];