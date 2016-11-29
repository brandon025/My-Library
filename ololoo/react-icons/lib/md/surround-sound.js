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

var MdSurroundSound = function (_React$Component) {
    _inherits(MdSurroundSound, _React$Component);

    function MdSurroundSound() {
        _classCallCheck(this, MdSurroundSound);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdSurroundSound).apply(this, arguments));
    }

    _createClass(MdSurroundSound, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 16.64q1.3283333333333331 0 2.3433333333333337 1.0166666666666657t1.0166666666666657 2.3416666666666686-1.0166666666666657 2.3416666666666686-2.3433333333333337 1.0166666666666657-2.3433333333333337-1.0166666666666657-1.0166666666666657-2.3400000000000034 1.0166666666666657-2.344999999999999 2.3433333333333337-1.0166666666666657z m9.453333333333333 12.813333333333333q3.9066666666666663-3.9066666666666663 3.9066666666666663-9.453333333333333t-3.9066666666666663-9.453333333333333l-2.4200000000000017 2.42q2.9666666666666686 2.9716666666666676 2.9666666666666686 7.033333333333333 0 4.216666666666669-2.8900000000000006 7.109999999999999z m-9.453333333333333-2.8133333333333326q2.7333333333333343 0 4.688333333333333-1.9533333333333331t1.9533333333333331-4.686666666666667-1.9533333333333331-4.690000000000001-4.688333333333333-1.9533333333333331-4.688333333333334 1.953333333333335-1.9533333333333314 4.6899999999999995 1.9533333333333331 4.686666666666667 4.688333333333333 1.9533333333333331z m-7.033333333333333 0.3916666666666657q-2.966666666666667-2.969999999999999-2.966666666666667-7.031666666666666 0-4.216666666666667 2.8900000000000006-7.109999999999999l-2.3433333333333337-2.3433333333333337q-3.9066666666666663 3.906666666666668-3.9066666666666663 9.453333333333333t3.9066666666666663 9.453333333333333z m20.394999999999996-20.39333333333333q1.3283333333333331-1.7763568394002505e-15 2.3049999999999997 1.0166666666666648t0.9750000000000014 2.341666666666666v20q0 1.326666666666668-0.9766666666666666 2.341666666666665t-2.306666666666665 1.0166666666666657h-26.715q-1.330000000000001 0-2.3066666666666675-1.0166666666666657t-0.9766666666666666-2.338333333333331v-20q0-1.33 0.9766666666666666-2.3450000000000006t2.3050000000000006-1.0166666666666666h26.71666666666667z' })
                )
            );
        }
    }]);

    return MdSurroundSound;
}(React.Component);

exports.default = MdSurroundSound;
module.exports = exports['default'];