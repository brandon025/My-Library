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

var FaMagic = function (_React$Component) {
    _inherits(FaMagic, _React$Component);

    function FaMagic() {
        _classCallCheck(this, FaMagic);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaMagic).apply(this, arguments));
    }

    _createClass(FaMagic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.991428571428575 12.968571428571428l6.539999999999996-6.539999999999999-2.3885714285714243-2.388571428571429-6.539999999999999 6.540000000000002z m9.977142857142855-6.539999999999999q0 0.6028571428571432-0.3999999999999986 1.0042857142857144l-28.70857142857143 28.705714285714286q-0.40000000000000036 0.3999999999999986-1.0042857142857144 0.3999999999999986t-1.0042857142857144-0.3999999999999986l-4.418571428571427-4.420000000000002q-0.40000000000000036-0.3999999999999986-0.40000000000000036-1.0042857142857144t0.3999999999999999-1.0042857142857144l28.70571428571429-28.705714285714286q0.3999999999999986-0.40000000000000024 1.0042857142857144-0.40000000000000024t1.0042857142857144 0.4l4.420000000000002 4.42q0.3999999999999986 0.40000000000000036 0.3999999999999986 1.0042857142857144z m-30.15714285714286-4.242857142857143l2.1885714285714286 0.6714285714285713-2.185714285714286 0.6714285714285713-0.6714285714285708 2.185714285714286-0.6714285714285717-2.185714285714286-2.185714285714286-0.6714285714285713 2.185714285714286-0.6714285714285713 0.6714285714285717-2.185714285714286z m7.814285714285713 3.6171428571428574l4.374285714285715 1.3399999999999999-4.374285714285715 1.339999999999999-1.339999999999998 4.374285714285715-1.3400000000000016-4.371428571428572-4.374285714285714-1.3428571428571425 4.374285714285714-1.3399999999999999 1.3400000000000016-4.3742857142857146z m20.757142857142856 10.67142857142857l2.1885714285714286 0.668571428571429-2.1857142857142833 0.6714285714285708-0.6714285714285708 2.185714285714287-0.6714285714285708-2.185714285714287-2.1857142857142833-0.6714285714285708 2.1857142857142833-0.6714285714285708 0.6714285714285708-2.185714285714285z m-14.285714285714285-14.285714285714286l2.1885714285714286 0.6685714285714304-2.185714285714287 0.6714285714285713-0.6714285714285673 2.185714285714286-0.6714285714285708-2.185714285714286-2.185714285714287-0.6714285714285713 2.185714285714287-0.6714285714285713 0.6714285714285708-2.185714285714286z' })
                )
            );
        }
    }]);

    return FaMagic;
}(React.Component);

exports.default = FaMagic;
module.exports = exports['default'];