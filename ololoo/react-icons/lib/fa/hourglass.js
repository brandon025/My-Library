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

var FaHourglass = function (_React$Component) {
    _inherits(FaHourglass, _React$Component);

    function FaHourglass() {
        _classCallCheck(this, FaHourglass);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaHourglass).apply(this, arguments));
    }

    _createClass(FaHourglass, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.42857142857143 35.714285714285715q0.3142857142857167 0 0.5142857142857125 0.20000000000000284t0.20000000000000284 0.5142857142857125v2.857142857142854q0 0.3142857142857167-0.20000000000000284 0.5142857142857125t-0.5142857142857125 0.20000000000000284h-32.85714285714286q-0.3142857142857123 0-0.514285714285712-0.20000000000000284t-0.20000000000000018-0.5142857142857125v-2.857142857142854q0-0.3142857142857167 0.20000000000000018-0.5142857142857125t0.5142857142857142-0.20000000000000284h32.85714285714286z m-30.671428571428574-1.4285714285714306q0.0685714285714285-1.2285714285714278 0.35714285714285676-2.388571428571428t0.6714285714285717-2.120000000000001 1.0285714285714285-1.942857142857143 1.192857142857143-1.6957142857142848 1.4399999999999995-1.5514285714285698 1.4714285714285715-1.3385714285714272 1.5757142857142856-1.2285714285714278 1.4857142857142858-1.057142857142857 1.448571428571432-0.9628571428571462q-0.9571428571428573-0.6257142857142846-1.4499999999999993-0.9600000000000009t-1.4857142857142858-1.0599999999999987-1.5714285714285712-1.2285714285714278-1.474285714285715-1.338571428571429-1.4399999999999995-1.5528571428571425-1.194285714285714-1.6971428571428575-1.0285714285714285-1.942857142857143-0.6714285714285717-2.1185714285714283-0.3557142857142894-2.387142857142858h28.48571428571429q-0.06857142857143117 1.2285714285714286-0.3571428571428541 2.388571428571429t-0.6714285714285708 2.120000000000001-1.028571428571425 1.942857142857143-1.192857142857143 1.6957142857142848-1.4400000000000013 1.5514285714285716-1.4714285714285715 1.338571428571429-1.5757142857142838 1.2285714285714278-1.4857142857142875 1.057142857142857-1.4485714285714373 0.9628571428571426q0.9571428571428555 0.6257142857142846 1.4499999999999993 0.9600000000000009t1.4857142857142875 1.0599999999999987 1.571428571428573 1.2285714285714278 1.4742857142857133 1.3385714285714272 1.4400000000000013 1.5528571428571425 1.1942857142857122 1.6971428571428575 1.028571428571425 1.942857142857143 0.6714285714285708 2.1185714285714283 0.3571428571428541 2.388571428571428h-28.487142857142853z m30.671428571428574-34.285714285714285q0.3142857142857167 0 0.5142857142857125 0.2t0.20000000000000284 0.5142857142857142v2.8571428571428577q0 0.31428571428571406-0.20000000000000284 0.5142857142857133t-0.5142857142857125 0.20000000000000018h-32.85714285714286q-0.3142857142857123 0-0.514285714285712-0.20000000000000018t-0.20000000000000018-0.5142857142857138v-2.857142857142857q0-0.3142857142857144 0.20000000000000018-0.5142857142857145t0.5142857142857142-0.19999999999999996h32.85714285714286z' })
                )
            );
        }
    }]);

    return FaHourglass;
}(React.Component);

exports.default = FaHourglass;
module.exports = exports['default'];