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

var FaDashcube = function (_React$Component) {
    _inherits(FaDashcube, _React$Component);

    function FaDashcube() {
        _classCallCheck(this, FaDashcube);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaDashcube).apply(this, arguments));
    }

    _createClass(FaDashcube, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm4.285714285714286 15.178571428571429q0-2.9242857142857144 2.0428571428571427-5.057142857142857t4.967142857142858-2.128571428571428h16.56142857142857l7.857142857142858-7.992857142857144v32.81428571428572q0 2.9457142857142884-2.0428571428571445 5.065714285714286t-4.964285714285715 2.1199999999999974h-17.41142857142857q-2.924285714285716 0-4.967142857142858-2.1200000000000045t-2.0428571428571427-5.065714285714279v-17.63714285714286z m27.5 16.82857142857143l-3.9285714285714306-4.0142857142857125v-9.48857142857143q0-1.0285714285714285-0.7142857142857153-1.7628571428571433t-1.7428571428571438-0.7385714285714293h-10.799999999999997q-1.0285714285714285 0-1.7428571428571438 0.7371428571428567t-0.7142857142857135 1.7614285714285707v10.982857142857142q0 1.0285714285714285 0.725714285714286 1.7757142857142867t1.7285714285714295 0.7471428571428582h17.18857142857143z' })
                )
            );
        }
    }]);

    return FaDashcube;
}(React.Component);

exports.default = FaDashcube;
module.exports = exports['default'];