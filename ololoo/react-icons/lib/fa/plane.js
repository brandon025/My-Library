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

var FaPlane = function (_React$Component) {
    _inherits(FaPlane, _React$Component);

    function FaPlane() {
        _classCallCheck(this, FaPlane);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaPlane).apply(this, arguments));
    }

    _createClass(FaPlane, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 3.5714285714285716q0.9828571428571422 1.1599999999999997 0.2671428571428578 3.302857142857142t-2.4099999999999966 3.8400000000000016l-3.5942857142857143 3.5942857142857143 3.571428571428573 15.535714285714288q0.11142857142856855 0.42571428571428527-0.2671428571428578 0.7385714285714293l-2.8571428571428577 2.1428571428571423q-0.15714285714285836 0.134285714285717-0.4242857142857126 0.134285714285717-0.08999999999999986 0-0.15714285714285836-0.02142857142857224-0.33285714285714363-0.06714285714285495-0.4671428571428571-0.3571428571428541l-6.228571428571431-11.34-5.780000000000001 5.78142857142857 1.1828571428571415 4.328571428571429q0.1114285714285721 0.38142857142857167-0.17857142857142705 0.6928571428571431l-2.1428571428571423 2.1428571428571423q-0.1999999999999993 0.20000000000000284-0.5142857142857142 0.20000000000000284h-0.042857142857142705q-0.3342857142857145-0.04285714285714448-0.5357142857142865-0.28999999999999915l-4.21857142857143-5.625714285714299-5.6257142857142854-4.221428571428568q-0.24571428571428555-0.15714285714285836-0.29000000000000004-0.514285714285716-0.021428571428571352-0.28857142857143003 0.20285714285714285-0.5571428571428569l2.1428571428571423-2.1657142857142873q0.20000000000000018-0.1999999999999993 0.5142857142857142-0.1999999999999993 0.13285714285714256 0 0.17714285714285705 0.02142857142857224l4.328571428571428 1.1828571428571415 5.782857142857141-5.78142857142857-11.34-6.2285714285714295q-0.31428571428571406-0.17714285714285793-0.3799999999999999-0.5342857142857138-0.042857142857142705-0.35714285714285765 0.20000000000000018-0.6028571428571432l2.8571428571428577-2.8571428571428577q0.31428571428571495-0.29000000000000004 0.6714285714285708-0.17857142857142883l14.841428571428573 3.5514285714285734 3.571428571428573-3.571428571428572q1.6999999999999993-1.7000000000000002 3.8428571428571416-2.4114285714285715t3.3000000000000007 0.26714285714285735z' })
                )
            );
        }
    }]);

    return FaPlane;
}(React.Component);

exports.default = FaPlane;
module.exports = exports['default'];