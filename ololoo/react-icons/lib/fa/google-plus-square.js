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

var FaGooglePlusSquare = function (_React$Component) {
    _inherits(FaGooglePlusSquare, _React$Component);

    function FaGooglePlusSquare() {
        _classCallCheck(this, FaGooglePlusSquare);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaGooglePlusSquare).apply(this, arguments));
    }

    _createClass(FaGooglePlusSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.325714285714284 20.200000000000003q0-0.5785714285714292-0.13428571428571345-1.428571428571427h-8.08v2.94857142857143h4.842857142857143q-0.06571428571428584 0.5357142857142847-0.36714285714285566 1.1142857142857139t-0.8357142857142854 1.1857142857142868-1.485714285714284 0.9914285714285711-2.152857142857142 0.39000000000000057q-2.209999999999999 0-3.7714285714285722-1.5828571428571436t-1.5671428571428603-3.8185714285714347 1.5628571428571423-3.8171428571428585 3.7714285714285722-1.5857142857142854q2.0542857142857134 0 3.417142857142858 1.3185714285714294l2.3200000000000003-2.2528571428571436q-2.4071428571428584-2.234285714285713-5.734285714285717-2.234285714285713-3.571428571428571 0-6.071428571428571 2.5114285714285725t-2.5 6.059999999999999 2.5 6.060000000000002 6.071428571428571 2.5114285714285707q3.6828571428571433 0 5.948571428571428-2.3428571428571416t2.265714285714285-6.0285714285714285z m7.699999999999999 1.0285714285714285h2.4342857142857106v-2.457142857142859h-2.4314285714285653v-2.4571428571428555h-2.4571428571428555v2.4571428571428555h-2.457142857142859v2.4571428571428555h2.457142857142859v2.4542857142857137h2.457142857142859v-2.457142857142859z m6.117142857142863-11.942857142857145v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-21.42857142857143q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.885714285714284-4.5428571428571445v-21.42857142857143q0-2.6571428571428575 1.8857142857142857-4.542857142857144t4.542857142857144-1.885714285714284h21.42857142857143q2.6571428571428584 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144z' })
                )
            );
        }
    }]);

    return FaGooglePlusSquare;
}(React.Component);

exports.default = FaGooglePlusSquare;
module.exports = exports['default'];