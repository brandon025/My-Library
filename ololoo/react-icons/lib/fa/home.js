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

var FaHome = function (_React$Component) {
    _inherits(FaHome, _React$Component);

    function FaHome() {
        _classCallCheck(this, FaHome);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaHome).apply(this, arguments));
    }

    _createClass(FaHome, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.85714285714286 22.142857142857142v10.714285714285719q0 0.5799999999999983-0.42428571428571615 1.0042857142857144t-1.0042857142857144 0.42428571428570905h-8.57142857142857v-8.57142857142857h-5.714285714285715v8.57142857142857h-8.571428571428575q-0.5800000000000001 0-1.0042857142857144-0.42428571428571615t-0.4242857142857135-1.0042857142857073v-10.714285714285715q0-0.022857142857141355 0.011428571428571566-0.0671428571428585t0.011428571428571566-0.0671428571428585l12.834285714285713-10.58 12.834285714285713 10.58q0.022857142857141355 0.04285714285714448 0.022857142857141355 0.13428571428571345z m4.977142857142859-1.5399999999999991l-1.3857142857142861 1.6514285714285712q-0.17714285714285438 0.1999999999999993-0.46714285714286063 0.24571428571428555h-0.06714285714285495q-0.28999999999999915 0-0.46857142857142975-0.15714285714285836l-15.445714285714288-12.877142857142855-15.45 12.877142857142859q-0.2671428571428578 0.17999999999999972-0.5357142857142865 0.15714285714285836-0.2885714285714287-0.04285714285714448-0.4671428571428571-0.24571428571428555l-1.3857142857142857-1.6514285714285712q-0.17714285714285705-0.2228571428571442-0.15428571428571436-0.524285714285714t0.24571428571428555-0.4800000000000004l16.04714285714286-13.370000000000003q0.7142857142857153-0.5800000000000001 1.6999999999999993-0.5800000000000001t1.6957142857142848 0.5800000000000001l5.4471428571428575 4.5528571428571425v-4.352857142857143q0-0.31428571428571406 0.1999999999999993-0.5142857142857142t0.514285714285716-0.20000000000000018h4.285714285714288q0.3142857142857167 0 0.5142857142857125 0.20000000000000018t0.20000000000000284 0.5142857142857142v9.107142857142858l4.8885714285714315 4.062857142857142q0.2228571428571442 0.17714285714285793 0.24571428571428555 0.47857142857142776t-0.15714285714285836 0.524285714285714z' })
                )
            );
        }
    }]);

    return FaHome;
}(React.Component);

exports.default = FaHome;
module.exports = exports['default'];