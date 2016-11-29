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

var MdThumbsUpDown = function (_React$Component) {
    _inherits(MdThumbsUpDown, _React$Component);

    function MdThumbsUpDown() {
        _classCallCheck(this, MdThumbsUpDown);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdThumbsUpDown).apply(this, arguments));
    }

    _createClass(MdThumbsUpDown, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.5 16.64q1.0933333333333337 0 1.7966666666666669 0.7416666666666671t0.7033333333333331 1.7566666666666677v10.861666666666665q0 1.0933333333333337-0.7033333333333331 1.7966666666666669l-8.283333333333331 8.203333333333333-1.326666666666668-1.3283333333333331q-0.5466666666666669-0.5466666666666669-0.5466666666666669-1.3283333333333331 0.23333333333333428-1.0933333333333337 0.663333333333334-3.125t0.5083333333333329-2.576666666666668h-8.671666666666667q-0.7033333333333331 0-1.1716666666666669-0.466666666666665t-0.4683333333333337-1.1750000000000007v-2.1099999999999994q0-0.23333333333333428 0.1566666666666663-0.8599999999999994l3.828333333333333-8.828333333333333q0.7049999999999983-1.5616666666666674 2.2666666666666657-1.5616666666666674h11.25z m-17.5-6.640000000000001v2.1099999999999994q0 0.2333333333333325-0.1566666666666663 0.8599999999999994l-3.826666666666668 8.830000000000002q-0.7050000000000001 1.5616666666666674-2.2666666666666675 1.5616666666666674h-11.249999999999998q-1.0933333333333335 0-1.7966666666666669-0.7416666666666671t-0.7033333333333331-1.7583333333333329v-10.861666666666668q0-1.0916666666666668 0.7033333333333334-1.795l8.283333333333335-8.205 1.3249999999999993 1.3333333333333335q0.5466666666666669 0.5466666666666669 0.5466666666666669 1.3283333333333336-0.2333333333333325 1.0933333333333337-0.663333333333334 3.125t-0.5083333333333329 2.578333333333333h8.671666666666667q0.7033333333333331 0 1.1716666666666669 0.4666666666666668t0.466666666666665 1.1733333333333338z' })
                )
            );
        }
    }]);

    return MdThumbsUpDown;
}(React.Component);

exports.default = MdThumbsUpDown;
module.exports = exports['default'];