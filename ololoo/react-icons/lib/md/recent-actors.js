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

var MdRecentActors = function (_React$Component) {
    _inherits(MdRecentActors, _React$Component);

    function MdRecentActors() {
        _classCallCheck(this, MdRecentActors);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdRecentActors).apply(this, arguments));
    }

    _createClass(MdRecentActors, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.86 28.36v-1.25q0-1.7166666666666686-2.578333333333333-2.7333333333333343t-4.923333333333334-1.0166666666666657-4.921666666666667 1.0166666666666657-2.578333333333333 2.7333333333333343v1.25h15.000000000000002z m-7.5-15.47q-1.4833333333333343 0-2.616666666666667 1.1333333333333329t-1.1333333333333329 2.6166666666666654 1.1333333333333329 2.616666666666667 2.616666666666667 1.1333333333333329 2.616666666666667-1.1333333333333329 1.1333333333333329-2.616666666666667-1.1333333333333329-2.616666666666667-2.616666666666667-1.1333333333333329z m10-4.529999999999999q0.7033333333333331 0 1.1716666666666669 0.4666666666666668t0.4683333333333337 1.1733333333333338v20q0 0.7033333333333331-0.466666666666665 1.1716666666666669t-1.173333333333332 0.466666666666665h-20q-0.7033333333333331 0-1.211666666666667-0.466666666666665t-0.5100000000000027-1.1716666666666669v-20q0-0.7033333333333331 0.5083333333333331-1.1716666666666669t1.21-0.4666666666666668h20z m5 23.28v-23.28333333333333h3.2833333333333314v23.28333333333333h-3.2833333333333314z m6.640000000000001-23.28h3.3599999999999994v23.28333333333334h-3.3599999999999994v-23.285000000000004z' })
                )
            );
        }
    }]);

    return MdRecentActors;
}(React.Component);

exports.default = MdRecentActors;
module.exports = exports['default'];