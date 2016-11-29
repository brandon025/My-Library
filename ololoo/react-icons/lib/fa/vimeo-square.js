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

var FaVimeoSquare = function (_React$Component) {
    _inherits(FaVimeoSquare, _React$Component);

    function FaVimeoSquare() {
        _classCallCheck(this, FaVimeoSquare);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaVimeoSquare).apply(this, arguments));
    }

    _createClass(FaVimeoSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.697142857142858 14.242857142857144q0.2228571428571442-4.822857142857142-3.5942857142857143-4.957142857142857-5.157142857142858-0.17857142857142883-6.964285714285715 5.825714285714286 0.9828571428571422-0.4242857142857144 1.8285714285714292-0.4242857142857144 1.8999999999999986 0 1.652857142857144 2.142857142857144-0.08999999999999986 1.274285714285714-1.6514285714285712 3.7285714285714278t-2.3428571428571416 2.457142857142859q-0.96142857142857 0-1.831428571428571-3.774285714285714-0.28999999999999915-1.2057142857142864-1.0042857142857144-5.69142857142857-0.6714285714285708-4.21857142857143-3.571428571428571-3.951428571428572-1.3171428571428567 0.15714285714285658-3.66 2.232857142857142l-3.614285714285714 3.2142857142857153 1.1600000000000001 1.4971428571428582q1.6971428571428575-1.1600000000000001 1.942857142857143-1.1600000000000001 1.2714285714285722 0 2.385714285714286 3.9957142857142856l1.0057142857142853 3.671428571428571 1.0042857142857144 3.671428571428571q1.5142857142857107 3.99285714285714 3.657142857142855 3.99285714285714 3.505714285714287 0 8.55-6.562857142857144 4.91-6.3171428571428585 5.042857142857141-9.91z m5.445714285714288-4.957142857142857v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-21.42857142857143q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.885714285714284-4.5428571428571445v-21.42857142857143q0-2.6571428571428575 1.8857142857142857-4.542857142857144t4.542857142857144-1.885714285714284h21.42857142857143q2.6571428571428584 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144z' })
                )
            );
        }
    }]);

    return FaVimeoSquare;
}(React.Component);

exports.default = FaVimeoSquare;
module.exports = exports['default'];