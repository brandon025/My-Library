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

var FaBinoculars = function (_React$Component) {
    _inherits(FaBinoculars, _React$Component);

    function FaBinoculars() {
        _classCallCheck(this, FaBinoculars);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaBinoculars).apply(this, arguments));
    }

    _createClass(FaBinoculars, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.714285714285715 7.142857142857143v17.142857142857142q0 0.5799999999999983-0.4242857142857144 1.0042857142857144t-1.0042857142857144 0.42428571428571615v12.857142857142854q0 0.5799999999999983-0.4242857142857144 1.0042857142857144t-1.0042857142857144 0.42428571428571615h-11.428571428571429q-0.5800000000000003 0-1.0042857142857144-0.42428571428571615t-0.4242857142857144-1.0042857142857144v-11.42857142857143l5.557142857142858-19.48571428571428q0.15714285714285658-0.5142857142857151 0.694285714285714-0.5142857142857151h9.462857142857143z m7.142857142857142 0v15.714285714285715h-5.714285714285715v-15.714285714285715h5.714285714285715z m17.142857142857142 20v11.428571428571427q0 0.5799999999999983-0.42428571428571615 1.0042857142857144t-1.0042857142857144 0.42428571428571615h-11.42857142857143q-0.5799999999999983 0-1.0042857142857144-0.42428571428571615t-0.42428571428570905-1.0042857142857144v-12.857142857142858q-0.5799999999999983 0-1.0042857142857144-0.4242857142857126t-0.42428571428571615-1.0042857142857144v-17.142857142857142h9.464285714285715q0.5357142857142847 8.881784197001252e-16 0.691428571428574 0.5142857142857151z m-23.57142857142857-26.428571428571427v4.999999999999999h-7.857142857142859v-5q0-0.3142857142857144 0.1999999999999993-0.5142857142857143t0.514285714285716-0.20000000000000007h6.428571428571429q0.31428571428571317 0 0.5142857142857125 0.2t0.1999999999999993 0.5142857142857142z m15-9.992007221626409e-16v5h-7.857142857142858v-5q0-0.3142857142857144 0.1999999999999993-0.5142857142857143t0.5142857142857125-0.20000000000000007h6.428571428571431q0.31428571428571317 0 0.5142857142857125 0.2t0.20000000000000284 0.5142857142857142z' })
                )
            );
        }
    }]);

    return FaBinoculars;
}(React.Component);

exports.default = FaBinoculars;
module.exports = exports['default'];