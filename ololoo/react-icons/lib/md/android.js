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

var MdAndroid = function (_React$Component) {
    _inherits(MdAndroid, _React$Component);

    function MdAndroid() {
        _classCallCheck(this, MdAndroid);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdAndroid).apply(this, arguments));
    }

    _createClass(MdAndroid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 8.360000000000001v-1.7166666666666668h-1.6400000000000006v1.7166666666666668h1.6400000000000006z m-8.36 0v-1.7166666666666668h-1.6400000000000006v1.7166666666666668h1.6400000000000006z m9.219999999999999-4.766666666666667q4.140000000000001 2.966666666666666 4.140000000000001 8.046666666666667h-20q0-5.156666666666667 4.063333333333334-8.046666666666667l-2.1883333333333344-2.1883333333333335q-0.625-0.6250000000000002 0-1.1716666666666669t1.1716666666666669 0l2.5 2.5q2.033333333333335-1.0933333333333333 4.453333333333333-1.0933333333333333 2.3433333333333337 0 4.375 1.0933333333333333l2.5-2.5q0.625-0.5466666666666667 1.1716666666666669 0t0 1.1716666666666666z m8.280000000000001 9.76666666666667q1.0166666666666657 0 1.7583333333333329 0.7416666666666671t0.740000000000002 1.7599999999999998v11.63833333333333q0 1.0933333333333337-0.7416666666666671 1.7966666666666669t-1.7583333333333329 0.7033333333333331-1.7583333333333329-0.7033333333333331-0.7433333333333323-1.7966666666666669v-11.639999999999999q0-1.0166666666666675 0.7416666666666671-1.7583333333333329t1.7566666666666677-0.7400000000000002z m-28.28 0q1.0166666666666666 0 1.7583333333333329 0.7416666666666671t0.7433333333333341 1.7599999999999998v11.63833333333333q0 1.0933333333333337-0.7416666666666671 1.7966666666666669t-1.7583333333333329 0.7033333333333331-1.7583333333333329-0.7033333333333331-0.7400000000000002-1.7966666666666669v-11.639999999999999q0-1.0166666666666675 0.7416666666666671-1.7583333333333329t1.7599999999999998-0.7400000000000002z m4.140000000000001 16.639999999999997v-16.64h20v16.64q0 0.7033333333333331-0.466666666666665 1.1716666666666669t-1.173333333333332 0.466666666666665h-1.716666666666665v5.861666666666668q0 1.0933333333333337-0.7433333333333323 1.7966666666666669t-1.75833333333334 0.7033333333333331-1.7583333333333329-0.7033333333333331-0.7416666666666671-1.7966666666666669v-5.859999999999999h-3.2833333333333314v5.859999999999999q0 1.0933333333333337-0.7399999999999984 1.7966666666666669t-1.7566666666666695 0.7033333333333331-1.7583333333333329-0.7033333333333331-0.7400000000000002-1.7966666666666669v-5.859999999999999h-1.7166666666666668q-0.7050000000000001 0-1.1733333333333338-0.466666666666665t-0.46999999999999886-1.1733333333333356z' })
                )
            );
        }
    }]);

    return MdAndroid;
}(React.Component);

exports.default = MdAndroid;
module.exports = exports['default'];