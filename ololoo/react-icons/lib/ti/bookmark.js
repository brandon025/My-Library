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

var TiBookmark = function (_React$Component) {
    _inherits(TiBookmark, _React$Component);

    function TiBookmark() {
        _classCallCheck(this, TiBookmark);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiBookmark).apply(this, arguments));
    }

    _createClass(TiBookmark, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.333333333333336 3.3333333333333335h-13.333333333333336c-2.756666666666666 0-5 2.2433333333333336-5 5v23.333333333333336c0 0.8566666666666691 0.17333333333333378 1.576666666666668 0.5133333333333336 2.1416666666666657 0.9399999999999995 1.5583333333333371 3.0250000000000004 1.6799999999999997 4.688333333333334 0.013333333333335418l5.288333333333334-5.286666666666669c0.625-0.6216666666666661 1.7333333333333343-0.6216666666666661 2.3566666666666656 0l5.286666666666665 5.288333333333334c0.8166666666666664 0.81666666666667 1.6666666666666679 1.2333333333333343 2.533333333333335 1.2333333333333343 1.326666666666668 0 2.666666666666668-1.0499999999999972 2.666666666666668-3.388333333333332v-23.335000000000008c0-2.756666666666665-2.2433333333333323-4.999999999999998-5-4.999999999999998z m-13.333333333333336 3.3333333333333335h13.333333333333336c0.9166666666666679 0 1.6666666666666679 0.75 1.6666666666666679 1.666666666666667v16.508333333333333l-4.083333333333332-3.745000000000001c-2.344999999999999-2.150000000000002-6.156666666666666-2.1466666666666683-8.5 0l-4.0833333333333375 3.7449999999999974v-16.508333333333333c0-0.9166666666666652 0.75-1.6666666666666652 1.666666666666666-1.6666666666666652z m10.200000000000003 19.51166666666667c-0.9400000000000013-0.9416666666666664-2.1950000000000003-1.4600000000000009-3.533333333333335-1.4600000000000009s-2.5933333333333337 0.5216666666666683-3.533333333333335 1.461666666666666l-4.799999999999999 4.798333333333332v-3.8783333333333303l5.209999999999999-4.776666666666667c1.7216666666666676-1.5783333333333331 4.523333333333333-1.5783333333333331 6.245000000000001 0l5.211666666666666 4.779999999999998v3.8733333333333313l-4.800000000000001-4.800000000000001z' })
                )
            );
        }
    }]);

    return TiBookmark;
}(React.Component);

exports.default = TiBookmark;
module.exports = exports['default'];