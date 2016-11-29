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

var FaPinterest = function (_React$Component) {
    _inherits(FaPinterest, _React$Component);

    function FaPinterest() {
        _classCallCheck(this, FaPinterest);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaPinterest).apply(this, arguments));
    }

    _createClass(FaPinterest, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.142857142857146 20q0 4.665714285714287-2.299999999999997 8.604285714285716t-6.237142857142857 6.238571428571426-8.605714285714292 2.3000000000000043q-2.475714285714286 0-4.864285714285714-0.7142857142857153 1.3171428571428585-2.07714285714286 1.7428571428571438-3.661428571428573 0.1999999999999993-0.7571428571428598 1.2042857142857137-4.710000000000001 0.4471428571428575 0.8714285714285701 1.62857142857143 1.5071428571428562t2.5457142857142863 0.6357142857142861q2.6999999999999993 0 4.821428571428569-1.5285714285714285t3.2814285714285703-4.2071428571428555 1.1600000000000001-6.0285714285714285q0-2.5428571428571427-1.3285714285714292-4.775714285714287t-3.848571428571425-3.6385714285714297-5.692857142857143-1.4057142857142857q-2.3428571428571416 0-4.375714285714285 0.6485714285714277t-3.448571428571432 1.7171428571428589-2.4328571428571415 2.467142857142857-1.4957142857142856 2.889999999999999-0.4800000000000004 2.991428571428571q0 2.322857142857142 0.8928571428571423 4.085714285714285t2.611428571428572 2.4771428571428586q0.6714285714285708 0.2671428571428578 0.8485714285714288-0.4471428571428575 0.042857142857142705-0.15428571428571303 0.17714285714285793-0.6900000000000013t0.17857142857142883-0.6714285714285708q0.13285714285714256-0.5114285714285707-0.24714285714285644-0.9571428571428555-1.138571428571428-1.3628571428571412-1.138571428571428-3.37142857142857 0-3.37142857142857 2.332857142857142-5.792857142857143t6.104285714285716-2.4214285714285726q3.37142857142857 0 5.257142857142856 1.8285714285714292t1.8857142857142861 4.757142857142856q0 3.7928571428571445-1.5285714285714285 6.449999999999999t-3.9171428571428564 2.6571428571428584q-1.361428571428572 0-2.185714285714287-0.9714285714285715t-0.514285714285716-2.3342857142857127q0.17857142857142705-0.7814285714285703 0.5914285714285725-2.0857142857142854t0.6714285714285708-2.3000000000000007 0.25714285714285623-1.6857142857142868q0-1.1142857142857139-0.6042857142857159-1.8528571428571432t-1.7185714285714297-0.7357142857142858q-1.3857142857142861 0-2.3428571428571416 1.2714285714285705t-0.9614285714285717 3.171428571428571q0 1.62857142857143 0.5571428571428569 2.722857142857144l-2.209999999999999 9.331428571428571q-0.3800000000000008 1.562857142857144-0.28999999999999915 3.9514285714285684-4.600000000000001-2.0314285714285703-7.432857142857143-6.271428571428572t-2.8342857142857145-9.442857142857143q0-4.6657142857142855 2.3000000000000007-8.604285714285714t6.237142857142857-6.238571428571428 8.605714285714285-2.305714285714281 8.604285714285716 2.3000000000000003 6.238571428571426 6.2385714285714275 2.299999999999997 8.604285714285712z' })
                )
            );
        }
    }]);

    return FaPinterest;
}(React.Component);

exports.default = FaPinterest;
module.exports = exports['default'];