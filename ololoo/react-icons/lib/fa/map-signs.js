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

var FaMapSigns = function (_React$Component) {
    _inherits(FaMapSigns, _React$Component);

    function FaMapSigns() {
        _classCallCheck(this, FaMapSigns);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaMapSigns).apply(this, arguments));
    }

    _createClass(FaMapSigns, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38.95142857142857 6.628571428571428q0.2228571428571442 0.2242857142857142 0.2228571428571442 0.5142857142857142t-0.2228571428571442 0.5142857142857142l-3.1471428571428604 3.1428571428571423q-0.625714285714281 0.6285714285714299-1.518571428571427 0.6285714285714299h-30q-0.5785714285714278 0-1.0028571428571418-0.4242857142857144t-0.4257142857142857-1.0042857142857144v-5.714285714285714q0-0.5800000000000001 0.4257142857142857-1.0042857142857144t1.0028571428571427-0.42428571428571393h12.857142857142858v-1.4285714285714286q0-0.5800000000000001 0.42571428571428527-1.0042857142857142t1.0028571428571453-0.4242857142857144h2.8571428571428577q0.581428571428571 0 1.0057142857142871 0.42428571428571427t0.42285714285713993 1.0042857142857144v1.4285714285714284h11.428571428571427q0.894285714285715 0 1.518571428571427 0.6257142857142859z m-21.80857142857143 20.514285714285712h5.714285714285715v11.42857142857143q0 0.5799999999999983-0.4242857142857126 1.0042857142857144t-1.0042857142857144 0.42428571428571615h-2.8571428571428577q-0.5800000000000018 0-1.0042857142857144-0.42428571428571615t-0.42428571428571615-1.0042857142857144v-11.42857142857143z m18.571428571428573-9.999999999999996q0.5799999999999983 0 1.0042857142857144 0.4242857142857126t0.42428571428571615 1.004285714285718v5.714285714285715q0 0.5800000000000018-0.42428571428571615 1.0042857142857144t-1.0042857142857144 0.4242857142857126h-30q-0.8928571428571441 0-1.5171428571428578-0.6257142857142846l-3.1471428571428577-3.1457142857142877q-0.2214285714285713-0.22571428571428598-0.2214285714285713-0.5142857142857125t0.2214285714285713-0.5142857142857125l3.147142857142857-3.145714285714284q0.6257142857142863-0.6257142857142917 1.5171428571428578-0.6257142857142917h11.428571428571427v-4.285714285714285h5.714285714285715v4.285714285714285h12.857142857142858z' })
                )
            );
        }
    }]);

    return FaMapSigns;
}(React.Component);

exports.default = FaMapSigns;
module.exports = exports['default'];