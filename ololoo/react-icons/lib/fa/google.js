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

var FaGoogle = function (_React$Component) {
    _inherits(FaGoogle, _React$Component);

    function FaGoogle() {
        _classCallCheck(this, FaGoogle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaGoogle).apply(this, arguments));
    }

    _createClass(FaGoogle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 17.54285714285714h16.182857142857145q0.2671428571428578 1.4971428571428582 0.2671428571428578 2.8571428571428577 0 4.845714285714287-2.0314285714285703 8.651428571428571t-5.7928571428571445 5.94857142857143-8.628571428571426 2.142857142857146q-3.502857142857142 0-6.671428571428571-1.3500000000000014t-5.472857142857148-3.6499999999999986-3.645714285714286-5.46857142857143-1.35-6.674285714285716 1.3485714285714283-6.674285714285714 3.651428571428572-5.468571428571428 5.467142857142857-3.6500000000000004 6.675714285714285-1.35q6.695714285714288 0 11.494285714285713 4.485714285714286l-4.665714285714284 4.489999999999998q-2.7457142857142856-2.6571428571428566-6.828571428571429-2.6571428571428566-2.8814285714285717 0-5.325714285714287 1.4528571428571428t-3.871428571428572 3.9385714285714286-1.4285714285714288 5.435714285714285 1.4285714285714288 5.435714285714287 3.871428571428572 3.9400000000000013 5.325714285714287 1.4499999999999957q1.9400000000000013 0 3.571428571428573-0.5342857142857156t2.677142857142858-1.3399999999999999 1.8285714285714292-1.8285714285714292 1.1514285714285712-1.942857142857143 0.5028571428571418-1.7428571428571438h-9.731428571428573v-5.891428571428573z' })
                )
            );
        }
    }]);

    return FaGoogle;
}(React.Component);

exports.default = FaGoogle;
module.exports = exports['default'];