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

var FaBus = function (_React$Component) {
    _inherits(FaBus, _React$Component);

    function FaBus() {
        _classCallCheck(this, FaBus);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaBus).apply(this, arguments));
    }

    _createClass(FaBus, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.428571428571429 27.142857142857142q0-1.1828571428571415-0.8371428571428563-2.0199999999999996t-2.0200000000000014-0.8371428571428581-2.0199999999999996 0.8371428571428581-0.8371428571428572 2.0199999999999996 0.8371428571428572 2.0199999999999996 2.0199999999999996 0.8371428571428581 2.0199999999999996-0.8371428571428581 0.8371428571428581-2.0199999999999996z m22.857142857142854 0q0-1.1828571428571415-0.8371428571428581-2.0199999999999996t-2.019999999999996-0.8371428571428581-2.0199999999999996 0.8371428571428581-0.8371428571428581 2.0199999999999996 0.8371428571428581 2.0199999999999996 2.0199999999999996 0.8371428571428581 2.020000000000003-0.8371428571428581 0.837142857142851-2.0199999999999996z m-1.028571428571432-8.84l-1.605714285714285-8.571428571428571q-0.1114285714285721-0.5142857142857142-0.5028571428571418-0.8371428571428563t-0.9057142857142786-0.32285714285714384h-20.488571428571433q-0.5142857142857142 0-0.9042857142857148 0.32285714285714207t-0.5028571428571436 0.8371428571428563l-1.6071428571428577 8.571428571428573q-0.11142857142857121 0.6714285714285708 0.31428571428571406 1.1828571428571415t1.0885714285714316 0.514285714285716h23.705714285714286q0.6714285714285708 0 1.0942857142857179-0.5142857142857125t0.3142857142857167-1.1828571428571415z m-5.042857142857137-13.66q0-0.4471428571428566-0.31428571428571317-0.7571428571428562t-0.7571428571428598-0.3142857142857145h-14.285714285714285q-0.4471428571428575 0-0.757142857142858 0.3142857142857145t-0.31428571428571495 0.7571428571428571 0.31428571428571495 0.7571428571428571 0.757142857142858 0.31428571428571406h14.285714285714288q0.4471428571428575 0 0.7571428571428562-0.31428571428571406t0.31428571428571317-0.7571428571428571z m8.92857142857143 16.18285714285714v13.46h-2.857142857142854v2.857142857142854q0 1.182857142857145-0.8371428571428581 2.020000000000003t-2.020000000000003 0.8371428571428581-2.0199999999999996-0.8371428571428581-0.8371428571428581-2.019999999999996v-2.857142857142854h-17.142857142857146v2.857142857142854q1.7763568394002505e-15 1.182857142857145-0.8371428571428545 2.020000000000003t-2.0200000000000014 0.837142857142851-2.0199999999999996-0.8371428571428581-0.8371428571428572-2.019999999999996v-2.857142857142854h-2.857142857142857v-13.46q0-2.5 0.5571428571428574-4.977142857142857l2.3-10.13428571428572q0.20000000000000018-1.742857142857142 2.175714285714286-3.0571428571428565t5.134285714285715-1.9899999999999998 6.975714285714284-0.6700000000000002 6.975714285714286 0.6714285714285714 5.1342857142857135 1.9857142857142853 2.1757142857142853 3.0600000000000005l2.3428571428571416 10.134285714285713q0.5142857142857125 2.277142857142856 0.5142857142857125 4.977142857142855z' })
                )
            );
        }
    }]);

    return FaBus;
}(React.Component);

exports.default = FaBus;
module.exports = exports['default'];