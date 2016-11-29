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

var MdYoutubeSearchedFor = function (_React$Component) {
    _inherits(MdYoutubeSearchedFor, _React$Component);

    function MdYoutubeSearchedFor() {
        _classCallCheck(this, MdYoutubeSearchedFor);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdYoutubeSearchedFor).apply(this, arguments));
    }

    _createClass(MdYoutubeSearchedFor, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.36 23.36l8.283333333333331 8.283333333333331-2.423333333333332 2.5-8.36-8.361666666666668v-1.25l-0.466666666666665-0.46999999999999886q-2.969999999999999 2.578333333333333-7.033333333333335 2.578333333333333-2.966666666666667 0-5.546666666666667-1.4833333333333343l2.5-2.423333333333332q1.4833333333333343 0.6266666666666652 3.046666666666667 0.6266666666666652 3.125 0 5.313333333333333-2.1883333333333326t2.1883333333333326-5.313333333333333-2.1883333333333326-5.313333333333333-5.313333333333333-2.1883333333333326-5.313333333333333 2.1883333333333326-2.1883333333333326 5.313333333333333h5.783333333333335l-6.878333333333336 6.641666666666669-6.406666666666667-6.643333333333334h4.1433333333333335q0-4.453333333333333 3.1999999999999993-7.656666666666666t7.66-3.1999999999999993q4.533333333333335 0 7.695 3.161666666666667t3.163333333333334 7.695q0 3.9833333333333325-2.6566666666666663 7.033333333333333l0.466666666666665 0.466666666666665h1.3300000000000018z' })
                )
            );
        }
    }]);

    return MdYoutubeSearchedFor;
}(React.Component);

exports.default = MdYoutubeSearchedFor;
module.exports = exports['default'];