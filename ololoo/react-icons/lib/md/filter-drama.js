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

var MdFilterDrama = function (_React$Component) {
    _inherits(MdFilterDrama, _React$Component);

    function MdFilterDrama() {
        _classCallCheck(this, MdFilterDrama);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdFilterDrama).apply(this, arguments));
    }

    _createClass(MdFilterDrama, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.640000000000004 30q2.033333333333335 0 3.5166666666666693-1.4833333333333343t1.4833333333333343-3.5166666666666657-1.4833333333333343-3.5166666666666657-3.5166666666666657-1.4833333333333343h-2.5v-0.8599999999999994q0-3.828333333333333-2.6566666666666663-6.483333333333334t-6.483333333333341-2.6599999999999984q-4.533333333333333 0.003333333333332078-7.346666666666668 3.669999999999998 3.203333333333333 0.8599999999999994 5.273333333333333 3.5550000000000015t2.073333333333334 6.136666666666667h-3.3633333333333333q0-2.7333333333333343-1.9533333333333331-4.726666666666667t-4.683333333333334-1.9933333333333323-4.691666666666666 1.9949999999999974-1.9533333333333331 4.725000000000001 1.9533333333333331 4.688333333333333 4.688333333333334 1.9533333333333331h21.64z m0.6249999999999964-13.283333333333331q3.200000000000003 0.23666666666666814 5.466666666666669 2.616666666666667t2.268333333333331 5.666666666666664q0 3.4366666666666674-2.463333333333331 5.896666666666668t-5.899999999999999 2.461666666666666h-21.63666666666667q-4.141666666666667 0-7.071666666666667-2.9299999999999997t-2.928333333333333-7.07q0-3.828333333333333 2.5766666666666667-6.68t6.328333333333335-3.241666666666667q1.6399999999999988-3.046666666666667 4.611666666666665-4.92t6.483333333333334-1.8783333333333339q4.533333333333335 0 7.966666666666669 2.8499999999999996t4.299999999999997 7.228333333333335z' })
                )
            );
        }
    }]);

    return MdFilterDrama;
}(React.Component);

exports.default = MdFilterDrama;
module.exports = exports['default'];