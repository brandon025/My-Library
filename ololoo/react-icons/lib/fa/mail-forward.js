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

var FaMailForward = function (_React$Component) {
    _inherits(FaMailForward, _React$Component);

    function FaMailForward() {
        _classCallCheck(this, FaMailForward);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaMailForward).apply(this, arguments));
    }

    _createClass(FaMailForward, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm40 14.285714285714286q0 0.5800000000000001-0.42428571428571615 1.0042857142857144l-11.42857142857143 11.428571428571429q-0.4242857142857126 0.4242857142857126-1.004285714285711 0.4242857142857126t-1.0042857142857144-0.4242857142857126-0.4242857142857126-1.0042857142857144v-5.714285714285715h-5q-2.185714285714287 0-3.9171428571428564 0.13428571428571345t-3.4371428571428577 0.4800000000000004-2.968571428571428 0.9485714285714302-2.354285714285714 1.5514285714285698-1.7857142857142856 2.2542857142857144-1.0828571428571427 3.0914285714285725-0.3899999999999997 4.039999999999999q0 1.2285714285714278 0.11142857142857121 2.7457142857142856 0 0.134285714285717 0.05714285714285694 0.5242857142857176t0.05428571428571427 0.5900000000000034q0 0.33428571428571274-0.1885714285714286 0.5571428571428569t-0.5271428571428594 0.22571428571428243q-0.3571428571428572 0-0.6242857142857146-0.38000000000000256-0.15714285714285703-0.20000000000000284-0.29000000000000004-0.4914285714285711t-0.2999999999999998-0.6714285714285708-0.23571428571428577-0.5342857142857156q-2.8357142857142854-6.361428571428572-2.8357142857142854-10.065714285714286 0-4.442857142857143 1.1857142857142857-7.434285714285714 3.614285714285714-8.994285714285715 19.52857142857143-8.994285714285715h5v-5.7142857142857135q0-0.5814285714285718 0.42571428571428527-1.0057142857142862t1.0028571428571418-0.4228571428571428 1.0057142857142871 0.4228571428571428l11.42857142857143 11.42857142857143q0.42285714285713993 0.4242857142857126 0.42285714285713993 1.0057142857142853z' })
                )
            );
        }
    }]);

    return FaMailForward;
}(React.Component);

exports.default = FaMailForward;
module.exports = exports['default'];