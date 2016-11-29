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

var FaCommentO = function (_React$Component) {
    _inherits(FaCommentO, _React$Component);

    function FaCommentO() {
        _classCallCheck(this, FaCommentO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaCommentO).apply(this, arguments));
    }

    _createClass(FaCommentO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 8.571428571428571q-4.5528571428571425 0-8.514285714285714 1.5514285714285716t-6.295714285714286 4.185714285714287-2.3328571428571423 5.69142857142857q0 2.5 1.5957142857142856 4.765714285714285t4.497142857142856 3.9171428571428564l1.942857142857143 1.1142857142857139-0.6042857142857141 2.1428571428571423q-0.5357142857142865 2.0328571428571394-1.5628571428571423 3.8428571428571416 3.3928571428571423-1.4071428571428584 6.138571428571428-3.8185714285714276l0.9600000000000009-0.8485714285714288 1.2714285714285722 0.13571428571428612q1.5442857142857136 0.1771428571428615 2.904285714285713 0.1771428571428615 4.551428571428573 0 8.514285714285712-1.5514285714285734t6.294285714285714-4.185714285714287 2.33428571428572-5.69142857142857-2.3342857142857127-5.69142857142857-6.294285714285714-4.185714285714287-8.51428571428572-1.5514285714285716z m20 11.428571428571429q0 3.885714285714286-2.6785714285714306 7.175714285714285t-7.277142857142856 5.200000000000003-10.044285714285714 1.9099999999999966q-1.562857142857144 0-3.2371428571428567-0.1785714285714306-4.42 3.9057142857142892-10.267142857142858 5.399999999999999-1.0942857142857143 0.3142857142857167-2.542857142857143 0.4928571428571402h-0.11428571428571432q-0.33285714285714274 0-0.6000000000000001-0.23428571428571132t-0.3571428571428572-0.6142857142857139v-0.022857142857141355q-0.0685714285714285-0.09000000000000341-0.014285714285714235-0.2671428571428578t0.04571428571428582-0.2228571428571442 0.10000000000000009-0.21142857142856997l0.132857142857143-0.20285714285714107 0.15714285714285703-0.18999999999999773 0.17714285714285705-0.20000000000000284q0.15714285714285703-0.17999999999999972 0.6914285714285713-0.7714285714285722t0.7714285714285714-0.8485714285714252 0.6914285714285713-0.8800000000000026 0.725714285714286-1.1385714285714315 0.6028571428571432-1.317142857142855 0.5800000000000001-1.6971428571428575q-3.5042857142857144-1.985714285714284-5.524285714285714-4.91t-2.0185714285714287-6.271428571428569q0-3.885714285714286 2.6771428571428575-7.177142857142858t7.277142857142858-5.2 10.042857142857143-1.9100000000000001 10.045714285714286 1.9071428571428575 7.277142857142856 5.200000000000001 2.6799999999999997 7.18z' })
                )
            );
        }
    }]);

    return FaCommentO;
}(React.Component);

exports.default = FaCommentO;
module.exports = exports['default'];