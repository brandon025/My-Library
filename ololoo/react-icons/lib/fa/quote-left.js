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

var FaQuoteLeft = function (_React$Component) {
    _inherits(FaQuoteLeft, _React$Component);

    function FaQuoteLeft() {
        _classCallCheck(this, FaQuoteLeft);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaQuoteLeft).apply(this, arguments));
    }

    _createClass(FaQuoteLeft, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.571428571428573 21.42857142857143v8.57142857142857q0 1.7857142857142847-1.25 3.0357142857142847t-3.0357142857142865 1.25h-8.571428571428573q-1.7857142857142847 0-3.0357142857142847-1.25t-1.2500000000000002-3.0357142857142847v-15.714285714285714q0-2.321428571428571 0.9042857142857141-4.431428571428571t2.442857142857143-3.6500000000000004 3.652857142857143-2.442857142857144 4.428571428571429-0.907142857142857h1.4285714285714288q0.581428571428571 0 1.0057142857142853 0.42285714285714304t0.4228571428571435 1.008571428571428v2.8571428571428568q0 0.5785714285714283-0.4228571428571435 1.0028571428571436t-1.0057142857142853 0.42571428571428527h-1.4285714285714288q-2.362857142857143 0-4.037142857142857 1.6714285714285726t-1.677142857142857 4.042857142857143v0.7142857142857135q0 0.8914285714285715 0.628571428571429 1.514285714285716t1.5142857142857142 0.6285714285714263h5q1.7857142857142865 0 3.0371428571428556 1.2485714285714273t1.2485714285714309 3.037142857142861z m19.999999999999996 0v8.57142857142857q0 1.7857142857142847-1.25 3.0357142857142847t-3.0357142857142847 1.25h-8.57142857142857q-1.7857142857142847 0-3.0357142857142847-1.25t-1.25-3.0357142857142847v-15.714285714285714q0-2.321428571428571 0.904285714285713-4.431428571428571t2.442857142857143-3.6500000000000004 3.6514285714285712-2.442857142857143 4.428571428571427-0.9057142857142857h1.4285714285714306q0.5814285714285745 0 1.0057142857142836 0.4228571428571426t0.42428571428571615 1.0071428571428562v2.8571428571428568q0 0.5785714285714283-0.42285714285713993 1.0028571428571436t-1.0057142857142907 0.42571428571428527h-1.4285714285714306q-2.364285714285714 0-4.03857142857143 1.6714285714285708t-1.6757142857142817 4.0428571428571445v0.7142857142857135q0 0.8914285714285715 0.6285714285714299 1.514285714285716t1.514285714285716 0.6285714285714299h4.9999999999999964q1.7857142857142847 0 3.037142857142854 1.2485714285714273t1.2485714285714309 3.0371428571428574z' })
                )
            );
        }
    }]);

    return FaQuoteLeft;
}(React.Component);

exports.default = FaQuoteLeft;
module.exports = exports['default'];