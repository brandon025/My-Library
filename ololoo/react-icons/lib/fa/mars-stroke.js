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

var FaMarsStroke = function (_React$Component) {
    _inherits(FaMarsStroke, _React$Component);

    function FaMarsStroke() {
        _classCallCheck(this, FaMarsStroke);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaMarsStroke).apply(this, arguments));
    }

    _createClass(FaMarsStroke, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.714285714285715 2.857142857142857q0.5799999999999983 0 1.0042857142857144 0.4242857142857144t0.42428571428571615 1.004285714285714v9.285714285714288q0 0.31428571428571495-0.20000000000000284 0.5142857142857142t-0.5142857142857125 0.1999999999999993h-1.4285714285714306q-0.3142857142857167 0-0.5142857142857125-0.1999999999999993t-0.20000000000000284-0.514285714285716v-5.848571428571429l-4.754285714285711 4.777142857142858 3.1257142857142846 3.1257142857142863q0.20000000000000284 0.22285714285714242 0.20000000000000284 0.5142857142857142t-0.20000000000000284 0.48999999999999844l-1.0285714285714285 1.0285714285714285q-0.1999999999999993 0.1999999999999993-0.48999999999999844 0.1999999999999993t-0.5142857142857125-0.1999999999999993l-3.1242857142857154-3.147142857142857-1.7428571428571438 1.7628571428571433q2.814285714285713 3.482857142857142 2.814285714285713 8.01142857142857 0 2.611428571428572-1.014285714285716 4.988571428571429t-2.747142857142858 4.107142857142858-4.107142857142858 2.7457142857142856-4.988571428571426 1.0157142857142887-4.988571428571429-1.0142857142857125-4.107142857142858-2.7471428571428547-2.747142857142857-4.107142857142861-1.0142857142857142-4.988571428571433 1.0142857142857142-4.988571428571429 2.747142857142857-4.107142857142858 4.107142857142858-2.747142857142853 4.988571428571429-1.014285714285716q4.53142857142857 0 8.014285714285712 2.814285714285715l1.7399999999999984-1.7428571428571438-3.84-3.84q-0.1999999999999993-0.22285714285714242-0.1999999999999993-0.5142857142857142t0.1999999999999993-0.4900000000000002l1.0285714285714285-1.0285714285714285q0.1999999999999993-0.20000000000000018 0.48999999999999844-0.20000000000000018t0.5142857142857125 0.20000000000000018l3.838571428571427 3.84 4.7542857142857216-4.752857142857143h-5.825714285714284q-0.31428571428571317 0-0.5142857142857125-0.20000000000000018t-0.20000000000000284-0.5142857142857142v-1.4285714285714288q0-0.31428571428571406 0.1999999999999993-0.5142857142857142t0.514285714285716-0.19999999999999973h9.285714285714285z m-20 31.428571428571427q4.12857142857143 0 7.064285714285717-2.935714285714287t2.9357142857142833-7.064285714285713-2.935714285714287-7.064285714285717-7.064285714285713-2.9357142857142815-7.064285714285715 2.935714285714285-2.935714285714286 7.064285714285713 2.935714285714286 7.064285714285717 7.064285714285715 2.9357142857142833z' })
                )
            );
        }
    }]);

    return FaMarsStroke;
}(React.Component);

exports.default = FaMarsStroke;
module.exports = exports['default'];