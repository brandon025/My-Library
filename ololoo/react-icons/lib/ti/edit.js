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

var TiEdit = function (_React$Component) {
    _inherits(TiEdit, _React$Component);

    function TiEdit() {
        _classCallCheck(this, TiEdit);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiEdit).apply(this, arguments));
    }

    _createClass(TiEdit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.93333333333333 8.863333333333333l-4.796666666666667-4.8c-0.48666666666666103-0.4850000000000003-1.1283333333333303-0.73-1.7666666666666622-0.73-0.6433333333333344 0-1.283333333333335 0.24333333333333318-1.7699999999999996 0.733333333333333l-5.933333333333334 5.933333333333334h-15c-0.9200000000000008 0-1.6666666666666679 0.7449999999999992-1.6666666666666679 1.666666666666666v21.66666666666667c0 0.9216666666666669 0.746666666666667 1.6666666666666643 1.666666666666667 1.6666666666666643h21.666666666666668c0.9200000000000017 0 1.6666666666666679-0.7449999999999974 1.6666666666666679-1.6666666666666643v-15l5.933333333333334-5.933333333333334c0.490000000000002-0.4900000000000002 0.7333333333333343-1.1300000000000008 0.7333333333333343-1.7699999999999996s-0.2433333333333323-1.2783333333333324-0.7333333333333343-1.7666666666666675z m-16.766666666666662 15.590000000000003l-3.620000000000001-3.620000000000001 10.488333333333333-10.488333333333333 3.621666666666666 3.620000000000001-10.489999999999998 10.484999999999996z m-4.266666666666666-2.2333333333333343l2.9250000000000007 2.883333333333333-2.825000000000003-0.10333333333333528-0.09999999999999964-2.7783333333333324z m11.766666666666666 9.446666666666665h-18.333333333333336v-18.333333333333336h10.000000000000004l-5.300000000000001 5.300000000000001c-0.4883333333333333 0.4883333333333333-0.7966666666666669 1.3533333333333317-1.0500000000000007 2.1499999999999986-0.2666666666666675 0.8333333333333321-0.31666666666666643 1.7583333333333329-0.31666666666666643 2.4499999999999993v5.100000000000005h5.100000000000001c0.6916666666666664 0 1.8500000000000014-0.16666666666666785 2.620000000000001-0.4833333333333343 0.7733333333333334-0.31666666666666643 1.4933333333333323-0.5783333333333331 1.9800000000000004-1.0666666666666664l5.299999999999997-5.116666666666667v10z m4.166666666666668-18.88l-3.620000000000001-3.620000000000001 2.155000000000001-2.1549999999999994 3.620000000000001 3.620000000000001-2.155000000000001 2.1516666666666637z' })
                )
            );
        }
    }]);

    return TiEdit;
}(React.Component);

exports.default = TiEdit;
module.exports = exports['default'];