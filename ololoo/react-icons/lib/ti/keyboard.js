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

var TiKeyboard = function (_React$Component) {
    _inherits(TiKeyboard, _React$Component);

    function TiKeyboard() {
        _classCallCheck(this, TiKeyboard);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiKeyboard).apply(this, arguments));
    }

    _createClass(TiKeyboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.3 21.7h11.7v3.3000000000000007h-11.7z m-5 0h3.4000000000000004v3.3000000000000007h-3.4000000000000004z m0-6.699999999999999h3.4000000000000004v1.6999999999999993h-3.4000000000000004z m5 5v-1.6999999999999993h-5v1.6999999999999993h3.4000000000000004z m0-5h1.6999999999999993v1.6999999999999993h-1.6999999999999993z m1.6999999999999993 3.3000000000000007h1.6999999999999993v1.6999999999999993h-1.6999999999999993z m1.6999999999999993-3.3000000000000007h1.6000000000000014v1.6999999999999993h-1.6000000000000014z m1.6000000000000014 3.3000000000000007h1.6999999999999993v1.6999999999999993h-1.6999999999999993z m1.6999999999999993-3.3000000000000007h1.6999999999999993v1.6999999999999993h-1.6999999999999993z m1.6999999999999993 3.3000000000000007h1.6000000000000014v1.6999999999999993h-1.6000000000000014z m1.6000000000000014-3.3000000000000007h1.6999999999999993v1.6999999999999993h-1.6999999999999993z m1.6999999999999993 3.3000000000000007h1.6999999999999993v1.6999999999999993h-1.6999999999999993z m1.6999999999999993-3.3000000000000007h1.6000000000000014v1.6999999999999993h-1.6000000000000014z m1.6000000000000014 5h3.3999999999999986v-5h-1.6999999999999993v3.3000000000000007h-1.6999999999999993z m1.6999999999999993 1.6999999999999993h-1.6999999999999993v1.6000000000000014h-1.6000000000000014v1.6999999999999993h5v-1.6999999999999993h-1.6999999999999993z m3.299999999999997-11.7h-26.599999999999998c-1.8999999999999986 0-3.399999999999999 1.5-3.399999999999999 3.3000000000000007v13.400000000000002c0 1.8000000000000007 1.5000000000000004 3.3000000000000007 3.4 3.3000000000000007h26.600000000000005c1.8999999999999986 0 3.3999999999999986-1.5 3.3999999999999986-3.3000000000000007v-13.400000000000002c0-1.8000000000000007-1.5-3.3000000000000007-3.3999999999999986-3.3000000000000007z m0 16.7h-26.599999999999998v-13.399999999999999h26.600000000000005v13.400000000000002z' })
                )
            );
        }
    }]);

    return TiKeyboard;
}(React.Component);

exports.default = TiKeyboard;
module.exports = exports['default'];