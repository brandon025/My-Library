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

var FaEdge = function (_React$Component) {
    _inherits(FaEdge, _React$Component);

    function FaEdge() {
        _classCallCheck(this, FaEdge);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaEdge).apply(this, arguments));
    }

    _createClass(FaEdge, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm1.54 17.745714285714286h0.02285714285714291q0.3571428571428572-2.814285714285715 1.3057142857142858-5.390000000000001t2.567142857142857-4.845714285714286 3.7385714285714284-3.928571428571429 4.9885714285714275-2.62142857142857 6.171428571428574-0.96q5.157142857142858 0 9.242857142857144 2.354285714285714t6.561428571428571 6.774285714285714q2.3214285714285694 4.174285714285714 2.3214285714285694 9.865714285714285v4.1971428571428575h-25.111428571428572q0.02285714285714313 2.4771428571428586 1.194285714285714 4.297142857142855t3.047142857142857 2.734285714285715 4.228571428571428 1.2714285714285722 4.757142857142856 0.06857142857142762 4.642857142857142-1.03857142857143 3.87142857142857-1.8857142857142861v8.414285714285711q-2.0528571428571425 1.2285714285714278-5.122857142857143 2.0542857142857116t-6.975714285714286 0.8485714285714252-7.0528571428571425-1.1857142857142833q-4.218571428571424-1.627142857142843-6.952857142857139-5.555714285714274t-2.7785714285714285-8.302857142857142q-0.06714285714285673-5.400000000000002 2.4785714285714295-9.197142857142858t7.252857142857142-5.982857142857142q-1.0714285714285712 1.3399999999999999-1.7428571428571438 2.8000000000000007t-1.0257142857142867 3.5614285714285714h14.17142857142857q0.17999999999999972-1.718571428571428-0.17714285714285793-3.1257142857142863t-1.048571428571428-2.265714285714287-1.5742857142857147-1.4828571428571422-1.797142857142859-0.9142857142857146-1.6742857142857126-0.4571428571428573-1.25-0.19142857142857128l-0.4914285714285711-0.02285714285714313q-3.0114285714285707 0.11142857142857121-5.791428571428572 0.9928571428571429t-4.988571428571426 2.331428571428571-3.928571428571429 3.135714285714286-3.08 3.6500000000000004z' })
                )
            );
        }
    }]);

    return FaEdge;
}(React.Component);

exports.default = FaEdge;
module.exports = exports['default'];