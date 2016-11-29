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

var FaGift = function (_React$Component) {
    _inherits(FaGift, _React$Component);

    function FaGift() {
        _classCallCheck(this, FaGift);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaGift).apply(this, arguments));
    }

    _createClass(FaGift, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.571428571428573 30.267142857142858v-15.981428571428571h-7.142857142857142v15.981428571428571q0 0.5571428571428569 0.3999999999999986 0.8599999999999994t1.0285714285714285 0.3000000000000007h4.285714285714285q0.6257142857142846 0 1.0285714285714285-0.3000000000000007t0.3999999999999986-0.8614285714285721z m-10.17857142857143-18.838571428571427h4.352857142857143l-2.814285714285715-3.594285714285716q-0.5771428571428565-0.6914285714285713-1.5371428571428538-0.6914285714285713-0.8928571428571423 0-1.5171428571428578 0.6257142857142854t-0.627142857142859 1.5171428571428578 0.6257142857142863 1.5171428571428578 1.517142857142856 0.6257142857142846z m15.357142857142858-2.142857142857144q0-0.8928571428571423-0.6257142857142846-1.5171428571428578t-1.5171428571428578-0.6257142857142854q-0.9600000000000009 0-1.5399999999999991 0.6914285714285713l-2.7900000000000027 3.5942857142857143h4.328571428571429q0.894285714285715 0 1.518571428571427-0.6257142857142863t0.6257142857142846-1.5171428571428578z m8.392857142857139 5.7142857142857135v7.142857142857142q0 0.31428571428571317-0.20000000000000284 0.514285714285716t-0.5142857142857125 0.1999999999999993h-2.142857142857139v9.285714285714288q0 0.8928571428571459-0.6257142857142881 1.5171428571428578t-1.5171428571428507 0.625714285714281h-24.285714285714285q-0.8928571428571432 0-1.5171428571428578-0.6257142857142881t-0.625714285714289-1.5171428571428507v-9.285714285714288h-2.142857142857143q-0.3142857142857145 0-0.5142857142857142-0.1999999999999993t-0.20000000000000018-0.514285714285716v-7.142857142857142q0-0.31428571428571495 0.20000000000000018-0.5142857142857142t0.5142857142857142-0.1999999999999993h9.821428571428571q-2.0757142857142856 0-3.5385714285714283-1.4614285714285717t-1.4614285714285717-3.5385714285714283 1.4614285714285717-3.5385714285714283 3.5385714285714283-1.4614285714285726q2.3885714285714297 0 3.75 1.7185714285714289l2.8571428571428577 3.6828571428571433 2.8571428571428577-3.6814285714285715q1.361428571428572-1.7200000000000006 3.75-1.7200000000000006 2.0757142857142874 0 3.5385714285714265 1.4614285714285709t1.4614285714285735 3.53857142857143-1.46142857142857 3.5385714285714283-3.53857142857143 1.4614285714285717h9.821428571428573q0.3142857142857167 0 0.5142857142857125 0.1999999999999993t0.20000000000000284 0.5142857142857142z' })
                )
            );
        }
    }]);

    return FaGift;
}(React.Component);

exports.default = FaGift;
module.exports = exports['default'];