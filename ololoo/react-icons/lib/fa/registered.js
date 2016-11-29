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

var FaRegistered = function (_React$Component) {
    _inherits(FaRegistered, _React$Component);

    function FaRegistered() {
        _classCallCheck(this, FaRegistered);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaRegistered).apply(this, arguments));
    }

    _createClass(FaRegistered, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.25714285714286 15.691428571428572q0-1.9642857142857135-1.3385714285714272-2.6999999999999993-0.7371428571428567-0.40285714285714214-2.611428571428572-0.40285714285714214h-2.7457142857142856v6.271428571428572h3.614285714285714q1.4742857142857133 0 2.2785714285714285-0.8242857142857147t0.8028571428571425-2.3428571428571434z m1.162857142857142 6.36142857142857l4.575714285714284 8.325714285714284q0.17857142857142705 0.379999999999999-0.022857142857141355 0.6914285714285704-0.17714285714285793 0.35714285714285765-0.6000000000000014 0.35714285714285765h-3.394285714285715q-0.4471428571428575 0-0.6257142857142846-0.38142857142857167l-4.328571428571429-8.14714285714286h-3.4614285714285735v7.814285714285713q0 0.3114285714285714-0.1999999999999993 0.5114285714285707t-0.5142857142857142 0.1999999999999993h-2.9914285714285693q-0.31428571428571495 0-0.5142857142857142-0.1999999999999993t-0.1999999999999993-0.5142857142857125v-21.42857142857143q0-0.3114285714285714 0.1999999999999993-0.5114285714285707t0.5142857142857142-0.1985714285714213h6.561428571428571q2.8571428571428577 0 4.242857142857144 0.5342857142857138 1.8957142857142841 0.6914285714285722 2.990000000000002 2.4328571428571433t1.0942857142857143 4.017142857142856q0 2.05142857142857-0.9485714285714302 3.692857142857143t-2.578571428571429 2.442857142857143q0.13428571428571345 0.2242857142857133 0.1999999999999993 0.35714285714285765z m-4.420000000000002-18.48142857142857q-3.3485714285714288-1.3322676295501878e-15-6.385714285714286 1.3057142857142843t-5.2314285714285695 3.5042857142857144-3.505714285714287 5.232857142857142-1.3057142857142856 6.385714285714286 1.3057142857142856 6.385714285714286 3.5042857142857144 5.232857142857142 5.234285714285715 3.5042857142857144 6.3842857142857135 1.3057142857142878 6.385714285714286-1.3057142857142878 5.232857142857142-3.5042857142857144 3.5042857142857144-5.234285714285715 1.3057142857142878-6.3842857142857135-1.3057142857142878-6.385714285714286-3.5042857142857144-5.232857142857142-5.234285714285715-3.5042857142857144-6.3842857142857135-1.3057142857142856z m20 16.428571428571427q0 4.062857142857144-1.585714285714289 7.767142857142858t-4.261428571428574 6.385714285714286-6.385714285714286 4.261428571428574-7.764285714285705 1.5857142857142819-7.765714285714285-1.585714285714289-6.385714285714285-4.262857142857143-4.261428571428572-6.385714285714286-1.5857142857142892-7.765714285714282 1.5857142857142859-7.767142857142858 4.261428571428572-6.385714285714285 6.385714285714285-4.261428571428572 7.762857142857143-1.5857142857142854 7.768571428571427 1.5857142857142859 6.385714285714286 4.262857142857143 4.261428571428574 6.385714285714286 1.5842857142857127 7.765714285714285z' })
                )
            );
        }
    }]);

    return FaRegistered;
}(React.Component);

exports.default = FaRegistered;
module.exports = exports['default'];