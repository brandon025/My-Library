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

var MdPets = function (_React$Component) {
    _inherits(MdPets, _React$Component);

    function MdPets() {
        _classCallCheck(this, MdPets);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdPets).apply(this, arguments));
    }

    _createClass(MdPets, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.90666666666667 24.766666666666666l1.3283333333333331 1.326666666666668 0.6666666666666679 0.7033333333333331 0.6233333333333348 0.7416666666666671 0.586666666666666 0.7416666666666671 0.5083333333333329 0.783333333333335 0.3916666666666657 0.8583333333333343 0.23333333333333428 0.8999999999999986 0.0799999999999983 0.9366666666666674-0.038333333333333997 0.9766666666666701q-0.8599999999999994 3.2833333333333314-3.9066666666666663 3.9083333333333314-0.5466666666666669 0.07833333333333314-3.788333333333334-0.3133333333333326t-5.43-0.39000000000000057h-0.3133333333333326q-2.1883333333333326 0-5.43 0.39000000000000057t-3.789999999999999 0.3133333333333326q-3.046666666666667-0.625-3.9066666666666663-3.9066666666666663-0.2333333333333334-1.5616666666666674 0.5466666666666669-3.1999999999999993t1.4450000000000003-2.344999999999999 2.383333333333333-2.421666666666667q0.7833333333333332-0.8599999999999994 2.0700000000000003-2.421666666666667t2.0666666666666664-2.421666666666667q1.408333333333335-1.716666666666665 2.8916666666666657-2.1883333333333326 0.3133333333333326-0.15500000000000114 0.5466666666666669-0.15500000000000114 0.466666666666665-0.07833333333333314 1.3283333333333331-0.07833333333333314 0.9383333333333326 0 1.3283333333333331 0.07833333333333314 0.23333333333333428 0 0.5466666666666669 0.1566666666666663 1.4833333333333343 0.46999999999999886 2.8900000000000006 2.1900000000000013 0.6999999999999993 0.8599999999999994 2.030000000000001 2.421666666666667t2.1099999999999994 2.421666666666667z m-0.5466666666666669-8.906666666666668q0-1.7166666666666668 1.211666666666666-2.966666666666667t2.9300000000000033-1.25 2.93333333333333 1.25 1.2100000000000009 2.966666666666667-1.211666666666666 2.9300000000000015-2.933333333333337 1.2100000000000009-2.9283333333333346-1.2100000000000009-1.211666666666666-2.9299999999999997z m-7.5-6.720000000000001q0-1.7166666666666668 1.211666666666666-2.9299999999999997t2.928333333333331-1.2099999999999973 2.9333333333333336 1.21 1.2100000000000009 2.9300000000000006-1.211666666666666 2.966666666666667-2.9333333333333336 1.25-2.9283333333333346-1.25-1.211666666666666-2.966666666666667z m-10 0q0-1.7166666666666668 1.211666666666666-2.9299999999999997t2.928333333333331-1.2099999999999973 2.9333333333333336 1.21 1.2100000000000009 2.9300000000000006-1.211666666666666 2.966666666666667-2.9333333333333336 1.25-2.928333333333333-1.25-1.211666666666666-2.966666666666667z m-7.5 6.720000000000001q0-1.7166666666666668 1.211666666666667-2.966666666666667t2.9300000000000006-1.25 2.9333333333333336 1.25 1.209999999999999 2.966666666666667-1.211666666666666 2.9300000000000015-2.933333333333337 1.2100000000000009-2.928333333333333-1.2100000000000009-1.211666666666667-2.9299999999999997z' })
                )
            );
        }
    }]);

    return MdPets;
}(React.Component);

exports.default = MdPets;
module.exports = exports['default'];