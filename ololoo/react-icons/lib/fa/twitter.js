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

var FaTwitter = function (_React$Component) {
    _inherits(FaTwitter, _React$Component);

    function FaTwitter() {
        _classCallCheck(this, FaTwitter);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaTwitter).apply(this, arguments));
    }

    _createClass(FaTwitter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.588571428571434 9.107142857142858q-1.4957142857142856 2.185714285714287-3.614285714285714 3.7285714285714278 0.02142857142857224 0.3114285714285714 0.02142857142857224 0.935714285714285 0 2.9000000000000004-0.8485714285714252 5.792857142857143t-2.578571428571429 5.547142857142855-4.118571428571428 4.699999999999999-5.75714285714286 3.2571428571428562-7.21285714285715 1.2171428571428606q-6.048571428571429 0-11.071428571428571-3.2371428571428567 0.7814285714285716 0.08999999999999986 1.7428571428571429 0.08999999999999986 5.021428571428571 0 8.95-3.080000000000002-2.3428571428571434-0.04285714285714448-4.1971428571428575-1.4385714285714286t-2.5428571428571427-3.5599999999999987q0.7357142857142858 0.11428571428571388 1.3599999999999994 0.11428571428571388 0.9600000000000009 0 1.8971428571428568-0.24714285714285822-2.5-0.5142857142857125-4.140000000000001-2.4885714285714293t-1.6399999999999997-4.585714285714285v-0.09142857142857075q1.517142857142857 0.8499999999999996 3.257142857142857 0.9171428571428581-1.4714285714285715-0.9828571428571422-2.3428571428571434-2.5671428571428567t-0.8714285714285714-3.4371428571428577q0-1.9657142857142862 0.9857142857142853-3.6400000000000006 2.6999999999999993 3.3257142857142856 6.571428571428571 5.324285714285715t8.294285714285717 2.2200000000000006q-0.17857142857142705-0.8485714285714288-0.17857142857142705-1.6514285714285712 0-2.991428571428571 2.1085714285714268-5.1t5.102857142857147-2.112857142857142q3.1257142857142846 0 5.267142857142858 2.2785714285714285 2.432857142857145-0.46857142857142886 4.575714285714284-1.7428571428571429-0.8257142857142838 2.5685714285714276-3.171428571428571 3.9742857142857133 2.07714285714286-0.22285714285714242 4.152857142857144-1.1142857142857139z' })
                )
            );
        }
    }]);

    return FaTwitter;
}(React.Component);

exports.default = FaTwitter;
module.exports = exports['default'];