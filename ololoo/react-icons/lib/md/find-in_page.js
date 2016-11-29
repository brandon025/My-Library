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

var MdFindInPage = function (_React$Component) {
    _inherits(MdFindInPage, _React$Component);

    function MdFindInPage() {
        _classCallCheck(this, MdFindInPage);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdFindInPage).apply(this, arguments));
    }

    _createClass(MdFindInPage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 21.64q0-2.0333333333333314 1.4833333333333343-3.5166666666666657t3.5166666666666657-1.4833333333333343 3.5166666666666657 1.4833333333333343 1.4833333333333343 3.5166666666666657-1.4833333333333343 3.5166666666666657-3.5166666666666657 1.4833333333333343-3.5166666666666657-1.4833333333333343-1.4833333333333343-3.5166666666666657z m18.36 11.016666666666666l-6.406666666666666-6.406666666666666q1.4066666666666663-2.1883333333333326 1.4066666666666663-4.609999999999999 0-3.4383333333333326-2.461666666666666-5.859999999999999t-5.898333333333333-2.421666666666667-5.899999999999999 2.421666666666667-2.460000000000001 5.859999999999999 2.461666666666666 5.899999999999999 5.898333333333333 2.460000000000001q2.421666666666667 0 4.609999999999999-1.4066666666666663l7.343333333333334 7.421666666666667q-0.8599999999999994 0.6233333333333348-1.9533333333333331 0.6233333333333348h-20q-1.3283333333333331 0-2.3433333333333337-0.9766666666666666t-1.0166666666666666-2.3049999999999997l0.08000000000000007-26.71666666666667q0-1.33 0.9766666666666666-2.3066666666666666t2.3033333333333337-0.9733333333333336h13.361666666666665l10 10v19.296666666666667z' })
                )
            );
        }
    }]);

    return MdFindInPage;
}(React.Component);

exports.default = MdFindInPage;
module.exports = exports['default'];