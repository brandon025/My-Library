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

var TiEyeOutline = function (_React$Component) {
    _inherits(TiEyeOutline, _React$Component);

    function TiEyeOutline() {
        _classCallCheck(this, TiEyeOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiEyeOutline).apply(this, arguments));
    }

    _createClass(TiEyeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 15c2.0166666666666657 0 3.9666666666666686 0.5916666666666668 5.495000000000001 1.673333333333332 2.166666666666668 1.533333333333335 4.050000000000001 3.539999999999999 5.275000000000002 4.993333333333332-1.2250000000000014 1.4533333333333331-3.1066666666666656 3.461666666666666-5.276666666666667 4.993333333333332-1.5266666666666673 1.0833333333333393-3.4766666666666666 1.6733333333333391-5.493333333333336 1.6733333333333391s-3.969999999999999-0.591666666666665-5.5-1.673333333333332c-2.166666666666668-1.533333333333335-4.050000000000001-3.539999999999999-5.2716666666666665-4.993333333333332 1.2233333333333327-1.4533333333333331 3.1050000000000004-3.460000000000001 5.273333333333333-4.991666666666667 1.5316666666666645-1.0833333333333357 3.4816666666666674-1.6750000000000043 5.498333333333333-1.6750000000000043z m0-3.333333333333334c-2.8166666666666664 0-5.403333333333332 0.8599999999999994-7.421666666666667 2.283333333333333-4.366666666666667 3.0900000000000034-7.578333333333333 7.716666666666669-7.578333333333333 7.716666666666669s3.213333333333333 4.628333333333334 7.578333333333333 7.716666666666665c2.0166666666666675 1.4216666666666704 4.605 2.283333333333335 7.421666666666667 2.283333333333335s5.403333333333332-0.8599999999999994 7.416666666666668-2.283333333333335c4.366666666666667-3.09 7.583333333333332-7.716666666666665 7.583333333333332-7.716666666666665s-3.2166666666666686-4.628333333333334-7.583333333333332-7.716666666666667c-2.0116666666666667-1.4216666666666669-4.600000000000001-2.283333333333333-7.416666666666668-2.283333333333333z m0 8.333333333333334c-0.9216666666666669 0-1.6666666666666679 0.745000000000001-1.6666666666666679 1.6666666666666679 0 0.9166666666666679 0.745000000000001 1.6666666666666679 1.6666666666666679 1.6666666666666679 0.9166666666666679 0 1.6666666666666679-0.75 1.6666666666666679-1.6666666666666679 0-0.9216666666666669-0.75-1.6666666666666679-1.6666666666666679-1.6666666666666679z m0 6.666666666666668c-2.7566666666666677 0-5-2.2433333333333323-5-5s2.2433333333333323-5 5-5 5 2.2433333333333323 5 5-2.2433333333333323 5-5 5z m0-8.333333333333332c-1.8399999999999999 0-3.333333333333332 1.4933333333333323-3.333333333333332 3.333333333333332s1.4933333333333323 3.333333333333332 3.333333333333332 3.333333333333332 3.333333333333332-1.4933333333333323 3.333333333333332-3.333333333333332-1.4933333333333323-3.333333333333332-3.333333333333332-3.333333333333332z' })
                )
            );
        }
    }]);

    return TiEyeOutline;
}(React.Component);

exports.default = TiEyeOutline;
module.exports = exports['default'];