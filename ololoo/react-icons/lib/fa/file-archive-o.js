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

var FaFileArchiveO = function (_React$Component) {
    _inherits(FaFileArchiveO, _React$Component);

    function FaFileArchiveO() {
        _classCallCheck(this, FaFileArchiveO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaFileArchiveO).apply(this, arguments));
    }

    _createClass(FaFileArchiveO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.142857142857142 8.571428571428571v-2.8571428571428568h-2.857142857142856v2.8571428571428568h2.857142857142856z m2.8571428571428577 2.8571428571428577v-2.8571428571428577h-2.8571428571428577v2.8571428571428577h2.8571428571428577z m-2.8571428571428577 2.8571428571428577v-2.8571428571428577h-2.857142857142856v2.8571428571428577h2.857142857142856z m2.8571428571428577 2.857142857142856v-2.8571428571428577h-2.8571428571428577v2.8571428571428577h2.8571428571428577z m15.624285714285712-8.66q0.6257142857142881 0.6257142857142863 1.0714285714285694 1.6971428571428575t0.4471428571428646 1.9628571428571426v25.71428571428572q0 0.894285714285715-0.6257142857142881 1.518571428571427t-1.5171428571428578 0.6242857142857119h-30q-0.8928571428571432 0-1.5171428571428573-0.6242857142857119t-0.6257142857142854-1.518571428571427v-35.714285714285715q0-0.890000000000003 0.6257142857142859-1.5142857142857173t1.517142857142857-0.6285714285714286h20q0.8928571428571423 0 1.9642857142857153 0.44857142857142857t1.6971428571428575 1.0714285714285714z m-9.909999999999997-5.447142857142857v8.392857142857142h8.392857142857146q-0.2228571428571442-0.647142857142855-0.4914285714285711-0.9142857142857128l-6.9857142857142875-6.988571428571429q-0.2671428571428578-0.2671428571428569-0.9142857142857146-0.49142857142857155z m8.57142857142857 34.10714285714286v-22.85714285714286h-9.285714285714285q-0.8928571428571423 1.7763568394002505e-15-1.5171428571428578-0.6257142857142846t-0.6257142857142846-1.5171428571428578v-9.285714285714285h-2.8571428571428577v2.8571428571428568h-2.8571428571428577v-2.857142857142857h-11.428571428571427v34.285714285714285h28.57142857142857z m-13.995714285714286-16.094285714285714l2.388571428571428 7.790000000000003q0.1785714285714306 0.6042857142857088 0.1785714285714306 1.1614285714285657 0 1.8514285714285705-1.6185714285714283 3.067142857142855t-4.095714285714287 1.2185714285714297-4.095714285714287-1.2185714285714297-1.6185714285714266-3.067142857142855q0-0.5599999999999987 0.17857142857142883-1.1614285714285728 0.468571428571428-1.4057142857142857 2.678571428571429-8.838571428571427v-2.8571428571428577h2.857142857142856v2.8571428571428577h1.7628571428571433q0.4914285714285711 0 0.8714285714285701 0.28857142857143003t0.5114285714285707 0.7571428571428562z m-3.147142857142857 10.379999999999999q1.1828571428571415 0 2.0199999999999996-0.4242857142857126t0.8371428571428581-1.004285714285718-0.8371428571428581-1.0042857142857144-2.0199999999999996-0.4242857142857126-2.0199999999999996 0.4242857142857126-0.8371428571428563 1.0042857142857144 0.8371428571428563 1.0042857142857144 2.0199999999999996 0.42428571428571615z' })
                )
            );
        }
    }]);

    return FaFileArchiveO;
}(React.Component);

exports.default = FaFileArchiveO;
module.exports = exports['default'];