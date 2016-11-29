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

var FaIntersex = function (_React$Component) {
    _inherits(FaIntersex, _React$Component);

    function FaIntersex() {
        _classCallCheck(this, FaIntersex);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaIntersex).apply(this, arguments));
    }

    _createClass(FaIntersex, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.142857142857142 0.7142857142857143q0-0.3142857142857143 0.1999999999999993-0.5142857142857142t0.514285714285716-0.20000000000000007h6.428571428571427q0.5799999999999983 0 1.0042857142857144 0.42428571428571427t0.42428571428571615 1.0042857142857144v6.428571428571429q0 0.31428571428571495-0.20000000000000284 0.5142857142857142t-0.5142857142857125 0.1999999999999993h-1.4285714285714306q-0.3142857142857167 0-0.5142857142857125-0.1999999999999993t-0.19999999999999574-0.5142857142857142v-2.991428571428572l-5.671428571428574 5.691428571428571q2.814285714285713 3.5285714285714285 2.814285714285713 8.014285714285716 0 4.931428571428572-3.2928571428571445 8.581428571428571t-8.135714285714283 4.185714285714287v2.947142857142854h2.1428571428571423q0.31428571428571317 0 0.5142857142857125 0.20000000000000284t0.1999999999999993 0.5142857142857125v1.4285714285714306q0 0.3142857142857167-0.1999999999999993 0.5142857142857125t-0.5142857142857125 0.20000000000000284h-2.1428571428571423v2.142857142857146q0 0.3142857142857167-0.1999999999999993 0.5142857142857125t-0.514285714285716 0.19999999999999574h-1.428571428571427q-0.31428571428571317 0-0.5142857142857142-0.20000000000000284t-0.20000000000000107-0.5142857142857125v-2.142857142857139h-2.142857142857144q-0.31428571428571495 0-0.5142857142857142-0.20000000000000284t-0.1999999999999993-0.5142857142857125v-1.4285714285714306q0-0.3142857142857167 0.1999999999999993-0.5142857142857125t0.5142857142857142-0.20000000000000284h2.142857142857144v-2.9471428571428575q-3.3257142857142856-0.35714285714285765-6.03857142857143-2.3000000000000007t-4.161428571428571-4.984285714285711-1.185714285714286-6.511428571428574q0.35714285714285676-4.551428571428572 3.571428571428572-7.888571428571428t7.747142857142856-3.8499999999999996q2.6342857142857135-0.31428571428571406 5.09 0.4242857142857144t4.420000000000002 2.3000000000000007l5.691428571428574-5.671428571428571h-2.9914285714285747q-0.31428571428571317-4.440892098500626e-16-0.514285714285716-0.20000000000000062t-0.1999999999999993-0.5142857142857142v-1.4285714285714286z m-10 27.857142857142858q4.12857142857143 0 7.064285714285713-2.935714285714287t2.935714285714287-7.064285714285713-2.935714285714287-7.064285714285715-7.064285714285713-2.935714285714287-7.064285714285713 2.935714285714285-2.935714285714286 7.064285714285717 2.935714285714286 7.064285714285713 7.064285714285713 2.935714285714287z' })
                )
            );
        }
    }]);

    return FaIntersex;
}(React.Component);

exports.default = FaIntersex;
module.exports = exports['default'];