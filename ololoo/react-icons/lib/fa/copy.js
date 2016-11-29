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

var FaCopy = function (_React$Component) {
    _inherits(FaCopy, _React$Component);

    function FaCopy() {
        _classCallCheck(this, FaCopy);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaCopy).apply(this, arguments));
    }

    _createClass(FaCopy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.85714285714286 8.571428571428571q0.8928571428571459 0 1.5171428571428578 0.6257142857142863t0.625714285714281 1.5171428571428578v27.142857142857146q0 0.8928571428571459-0.6257142857142881 1.5171428571428578t-1.5171428571428507 0.625714285714281h-21.42857142857143q-0.8928571428571423 0-1.5171428571428578-0.6257142857142881t-0.6257142857142863-1.5171428571428507v-6.428571428571431h-12.142857142857144q-0.8928571428571423 0-1.517142857142857-0.6257142857142846t-0.6257142857142854-1.5171428571428613v-14.999999999999998q0-0.8928571428571423 0.4471428571428572-1.9642857142857135t1.0714285714285716-1.6971428571428575l9.107142857142858-9.107142857142858q0.6257142857142863-0.6257142857142858 1.6971428571428575-1.0714285714285714t1.9628571428571426-0.4457142857142864h9.285714285714286q0.894285714285715 0 1.518571428571427 0.6242857142857143t0.6242857142857154 1.5185714285714285v7.32q1.5199999999999996-0.8914285714285715 2.8571428571428577-0.8914285714285715h9.285714285714288z m-12.142857142857146 4.7542857142857144l-6.674285714285716 6.674285714285714h6.674285714285716v-6.674285714285714z m-14.285714285714286-8.571428571428571l-6.674285714285714 6.674285714285714h6.674285714285714v-6.674285714285714z m4.374285714285714 14.442857142857143l7.054285714285715-7.054285714285715v-9.285714285714285h-8.571428571428571v9.285714285714286q0 0.894285714285715-0.6285714285714281 1.5185714285714287t-1.514285714285716 0.6242857142857137h-9.285714285714285v14.285714285714286h11.428571428571429v-5.714285714285715q0-0.8914285714285732 0.4457142857142866-1.9628571428571426t1.0714285714285712-1.6971428571428575z m21.340000000000003 17.94571428571429v-25.714285714285715h-8.57142857142857v9.285714285714285q0 0.8928571428571423-0.6257142857142846 1.5171428571428578t-1.5171428571428613 0.6257142857142846h-9.285714285714288v14.285714285714288h19.999999999999996z' })
                )
            );
        }
    }]);

    return FaCopy;
}(React.Component);

exports.default = FaCopy;
module.exports = exports['default'];