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

var FaExternalLink = function (_React$Component) {
    _inherits(FaExternalLink, _React$Component);

    function FaExternalLink() {
        _classCallCheck(this, FaExternalLink);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaExternalLink).apply(this, arguments));
    }

    _createClass(FaExternalLink, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.42857142857143 20.714285714285715v7.142857142857142q0 2.6571428571428584-1.8857142857142861 4.542857142857141t-4.5428571428571445 1.8857142857142861h-18.571428571428573q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.8857142857142835-4.542857142857141v-18.571428571428573q0-2.6571428571428575 1.885714285714286-4.542857142857144t4.542857142857143-1.885714285714284h15.714285714285717q0.31428571428571317 0 0.5142857142857125 0.20000000000000018t0.1999999999999993 0.5142857142857142v1.4285714285714284q0 0.31428571428571406-0.1999999999999993 0.5142857142857142t-0.514285714285716 0.20000000000000018h-15.714285714285715q-1.4714285714285715 0-2.522857142857143 1.048571428571429t-1.0485714285714267 2.522857142857143v18.571428571428577q0 1.4714285714285715 1.0485714285714285 2.5228571428571414t2.522857142857143 1.048571428571428h18.57142857142857q1.4714285714285715 0 2.5228571428571414-1.048571428571428t1.0485714285714316-2.522857142857145v-7.142857142857142q0-0.31428571428571317 0.1999999999999993-0.5142857142857125t0.5142857142857125-0.1999999999999993h1.428571428571427q0.31428571428571317 0 0.514285714285716 0.1999999999999993t0.1999999999999993 0.5142857142857125z m8.57142857142857-19.28571428571429v11.42857142857143q0 0.5800000000000001-0.42428571428571615 1.0042857142857144t-1.0042857142857144 0.4242857142857144-1.0042857142857144-0.4242857142857144l-3.9285714285714306-3.928571428571429-14.552857142857139 14.552857142857144q-0.2228571428571442 0.2228571428571442-0.514285714285716 0.2228571428571442t-0.5114285714285707-0.2228571428571442l-2.5428571428571427-2.5428571428571445q-0.2242857142857151-0.2242857142857133-0.2242857142857151-0.5142857142857125t0.22285714285714242-0.5142857142857125l14.55571428571429-14.550000000000004-3.928571428571427-3.928571428571428q-0.4285714285714306-0.4257142857142857-0.4285714285714306-1.0071428571428573t0.4285714285714306-1 0.9999999999999964-0.4285714285714286h11.428571428571427q0.5814285714285745 0 1.0057142857142836 0.4257142857142857t0.42285714285714704 1.002857142857143z' })
                )
            );
        }
    }]);

    return FaExternalLink;
}(React.Component);

exports.default = FaExternalLink;
module.exports = exports['default'];