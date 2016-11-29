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

var MdChildFriendly = function (_React$Component) {
    _inherits(MdChildFriendly, _React$Component);

    function MdChildFriendly() {
        _classCallCheck(this, MdChildFriendly);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdChildFriendly).apply(this, arguments));
    }

    _createClass(MdChildFriendly, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.36 33.36q1.0166666666666657 0 1.7583333333333329-0.7416666666666671t0.7433333333333323-1.7566666666666677-0.7416666666666671-1.7583333333333329-1.7566666666666677-0.7399999999999984-1.7583333333333329 0.7416666666666671-0.7399999999999984 1.7600000000000016 0.7416666666666671 1.7583333333333329 1.7600000000000016 0.7433333333333323z m-15 0q1.0166666666666657 0 1.7583333333333329-0.7416666666666671t0.7433333333333341-1.7566666666666677-0.7416666666666671-1.7583333333333329-1.756666666666666-0.7399999999999984-1.7583333333333329 0.7416666666666671-0.7400000000000002 1.7600000000000016 0.7416666666666671 1.7583333333333329 1.7599999999999998 0.7433333333333323z m18.828333333333333-6.875q1.9533333333333331 1.8000000000000007 1.9533333333333331 4.376666666666665 0 2.421666666666667-1.6799999999999997 4.100000000000001t-4.100000000000001 1.68333333333333q-2.1900000000000013 0-3.8299999999999983-1.4466666666666654t-1.9549999999999983-3.5549999999999997h-3.5166666666666657q-0.3116666666666674 2.1099999999999994-1.9116666666666653 3.5549999999999997t-3.788333333333334 1.4450000000000003q-2.421666666666667 0-4.140000000000001-1.6799999999999997t-1.7166666666666668-4.100000000000001q0-3.4400000000000013 3.045-5.158333333333335l-3.5166666666666666-7.343333333333334h-3.6650000000000023v-3.361666666666661h5.783333333333333l1.5616666666666674 3.3599999999999994h24.296666666666667q0 4.453333333333333-2.8133333333333326 8.125z m-10.55-23.123333333333335q5.550000000000001 0 9.455000000000002 3.9066666666666663t3.9066666666666663 9.373333333333335h-13.36v-13.283333333333333z' })
                )
            );
        }
    }]);

    return MdChildFriendly;
}(React.Component);

exports.default = MdChildFriendly;
module.exports = exports['default'];