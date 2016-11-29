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

var MdFiberNew = function (_React$Component) {
    _inherits(MdFiberNew, _React$Component);

    function MdFiberNew() {
        _classCallCheck(this, MdFiberNew);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdFiberNew).apply(this, arguments));
    }

    _createClass(MdFiberNew, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.14000000000001 23.36v-8.36h-2.0333333333333314v7.5h-1.873333333333342v-5.859999999999999h-2.1099999999999994v5.859999999999999h-1.8733333333333348v-7.5h-2.111666666666668v8.36q0 0.7033333333333331 0.5083333333333329 1.1716666666666669t1.211666666666666 0.466666666666665h6.641666666666669q0.7000000000000028 0 1.1700000000000017-0.466666666666665t0.46666666666666856-1.173333333333332z m-11.64-6.25v-2.1099999999999994h-6.640000000000006v10h6.639999999999999v-2.1099999999999994h-4.140000000000001v-1.7966666666666669h4.140000000000001v-2.1099999999999994h-4.140000000000001v-1.875h4.140000000000001z m-8.360000000000007 7.890000000000001v-10h-2.033333333333333v5.859999999999999l-4.215-5.859999999999999h-2.033333333333333v10h2.033333333333333v-5.859999999999999l4.295 5.859999999999999h1.9533333333333331z m19.22-18.36q1.4066666666666663 0 2.3433333333333337 0.9766666666666666t0.9383333333333326 2.383333333333333v20q0 1.4066666666666663-0.9383333333333326 2.383333333333333t-2.3433333333333337 0.9766666666666666h-26.716666666666665q-1.408333333333334 0-2.3450000000000006-0.9766666666666666t-0.94-2.383333333333333v-20q0-1.4066666666666663 0.938333333333333-2.383333333333333t2.341666666666667-0.9766666666666666h26.71666666666667z' })
                )
            );
        }
    }]);

    return MdFiberNew;
}(React.Component);

exports.default = MdFiberNew;
module.exports = exports['default'];