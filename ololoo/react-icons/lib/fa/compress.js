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

var FaCompress = function (_React$Component) {
    _inherits(FaCompress, _React$Component);

    function FaCompress() {
        _classCallCheck(this, FaCompress);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaCompress).apply(this, arguments));
    }

    _createClass(FaCompress, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 21.42857142857143v10q0 0.5799999999999983-0.4242857142857126 1.0042857142857144t-1.0042857142857144 0.42428571428571615-1.0042857142857144-0.42428571428571615l-3.2142857142857153-3.2142857142857153-7.410000000000001 7.410000000000004q-0.2228571428571433 0.2228571428571442-0.5142857142857142 0.2228571428571442t-0.5114285714285716-0.2228571428571442l-2.542857142857143-2.5428571428571445q-0.2242857142857142-0.2242857142857133-0.2242857142857142-0.5142857142857125t0.22285714285714286-0.5142857142857125l7.41142857142857-7.4085714285714275-3.2142857142857144-3.2142857142857153q-0.4271428571428544-0.4242857142857197-0.4271428571428544-1.0057142857142907t0.42857142857142794-1 1-0.4285714285714306h9.999999999999998q0.581428571428571 0 1.0057142857142871 0.42571428571428527t0.4228571428571435 1.0028571428571453z m16.852857142857147-15.000000000000002q0 0.29000000000000004-0.2228571428571442 0.5142857142857142l-7.4085714285714275 7.4085714285714275 3.2142857142857153 3.2142857142857153q0.4214285714285708 0.42428571428571615 0.4214285714285708 1.0057142857142871t-0.42285714285713993 1.0028571428571418-1.0057142857142907 0.42571428571428527h-10q-0.5785714285714292 0-1.0028571428571418-0.42571428571428527t-0.4257142857142888-1.0028571428571418v-10.000000000000002q0-0.581428571428571 0.42571428571428527-1.0057142857142853t1.0028571428571453-0.4228571428571426 1.0057142857142871 0.4228571428571426l3.2142857142857153 3.2142857142857153 7.408571428571424-7.408571428571429q0.2242857142857133-0.22428571428571464 0.5142857142857125-0.22428571428571464t0.5142857142857125 0.22285714285714286l2.5428571428571445 2.5428571428571436q0.2228571428571442 0.22285714285714242 0.2228571428571442 0.5142857142857142z' })
                )
            );
        }
    }]);

    return FaCompress;
}(React.Component);

exports.default = FaCompress;
module.exports = exports['default'];