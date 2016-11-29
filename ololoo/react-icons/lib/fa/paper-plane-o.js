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

var FaPaperPlaneO = function (_React$Component) {
    _inherits(FaPaperPlaneO, _React$Component);

    function FaPaperPlaneO() {
        _classCallCheck(this, FaPaperPlaneO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaPaperPlaneO).apply(this, arguments));
    }

    _createClass(FaPaperPlaneO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.37571428571429 0.2457142857142857q0.7371428571428567 0.5357142857142857 0.6028571428571396 1.4285714285714286l-5.714285714285715 34.285714285714285q-0.11142857142856855 0.6471428571428604-0.7142857142857153 1.0042857142857144-0.3142857142857096 0.1785714285714306-0.692857142857136 0.1785714285714306-0.24285714285714022 0-0.5342857142857156-0.11142857142856855l-11.762857142857143-4.799999999999997-6.651428571428571 7.299999999999997q-0.40000000000000036 0.46857142857142975-1.048571428571428 0.46857142857142975-0.31428571428571495 0-0.5142857142857142-0.09000000000000341-0.4228571428571435-0.15714285714285836-0.668571428571429-0.5242857142857176t-0.24571428571428733-0.8142857142857167v-10.09l-10.535714285714286-4.309999999999995q-0.8257142857142858-0.3114285714285714-0.8928571428571431-1.225714285714286-0.06714285714285714-0.8714285714285701 0.7142857142857143-1.3171428571428585l37.14285714285714-21.42857142857143q0.7814285714285703-0.4685714285714286 1.5171428571428578 0.04285714285714287z m-7.632857142857148 33.46l4.928571428571438-29.53142857142857-32.00571428571429 18.459999999999997 7.499999999999998 3.057142857142857 19.262857142857143-14.259999999999998-10.67142857142857 17.791428571428572z' })
                )
            );
        }
    }]);

    return FaPaperPlaneO;
}(React.Component);

exports.default = FaPaperPlaneO;
module.exports = exports['default'];