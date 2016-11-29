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

var FaDownload = function (_React$Component) {
    _inherits(FaDownload, _React$Component);

    function FaDownload() {
        _classCallCheck(this, FaDownload);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaDownload).apply(this, arguments));
    }

    _createClass(FaDownload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 30q0-0.5799999999999983-0.4242857142857126-1.0042857142857144t-1.0042857142857144-0.4242857142857126-1.0042857142857144 0.4242857142857126-0.42428571428571615 1.0042857142857144 0.4242857142857126 1.0042857142857144 1.004285714285718 0.42428571428571615 1.0042857142857144-0.4242857142857126 0.4242857142857126-1.004285714285718z m5.714285714285715 0q0-0.5799999999999983-0.42428571428571615-1.0042857142857144t-1.0042857142857144-0.4242857142857126-1.0042857142857144 0.4242857142857126-0.42428571428570905 1.0042857142857144 0.42428571428571615 1.0042857142857144 1.0042857142857073 0.42428571428571615 1.0042857142857144-0.4242857142857126 0.42428571428571615-1.004285714285718z m2.857142857142854-5v7.142857142857146q0 0.8928571428571459-0.6257142857142881 1.5171428571428578t-1.5171428571428507 0.625714285714281h-32.85714285714286q-0.8928571428571428 0-1.5171428571428573-0.6257142857142881t-0.6257142857142834-1.5171428571428507v-7.142857142857142q0-0.8928571428571423 0.6257142857142857-1.5171428571428578t1.5171428571428573-0.6257142857142881h10.38l3.0142857142857125 3.0357142857142847q1.2914285714285718 1.25 3.0342857142857156 1.25t3.0357142857142847-1.25l3.0357142857142883-3.0357142857142847h10.357142857142858q0.8928571428571459 0 1.5171428571428578 0.6257142857142846t0.625714285714281 1.5171428571428578z m-7.2542857142857144-12.700000000000001q0.379999999999999 0.9142857142857146-0.31428571428571317 1.5614285714285714l-10 9.999999999999998q-0.3985714285714259 0.42428571428571615-1.0028571428571418 0.42428571428571615t-1.0042857142857144-0.4242857142857126l-10-10q-0.6914285714285722-0.6471428571428568-0.31428571428571495-1.5628571428571423 0.38285714285714434-0.870000000000001 1.3185714285714294-0.870000000000001h5.714285714285715v-10q0-0.5800000000000003 0.4242857142857126-1.0042857142857144t1.0042857142857144-0.4242857142857144h5.714285714285715q0.5800000000000018 0 1.0042857142857144 0.42428571428571427t0.4242857142857126 1.0042857142857144v10h5.714285714285715q0.937142857142856 0 1.3171428571428585 0.8714285714285719z' })
                )
            );
        }
    }]);

    return FaDownload;
}(React.Component);

exports.default = FaDownload;
module.exports = exports['default'];