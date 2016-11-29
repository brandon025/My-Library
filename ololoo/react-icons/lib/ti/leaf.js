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

var TiLeaf = function (_React$Component) {
    _inherits(TiLeaf, _React$Component);

    function TiLeaf() {
        _classCallCheck(this, TiLeaf);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiLeaf).apply(this, arguments));
    }

    _createClass(TiLeaf, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.333333333333336 18.333333333333336c0-8.166666666666668-5.833333333333336-15.166666666666666-13.866666666666667-16.638333333333335l-0.3000000000000007-0.056666666666666865-0.3000000000000007 0.05499999999999994c-8.033333333333333 1.4733333333333332-13.866666666666667 8.473333333333333-13.866666666666667 16.64 0 7.695 5.18 14.350000000000001 12.5 16.324999999999996v2.00833333333334c0 0.9216666666666669 0.7466666666666661 1.6666666666666643 1.6666666666666679 1.6666666666666643s1.6666666666666679-0.7449999999999974 1.6666666666666679-1.6666666666666643v-2.008333333333333c7.319999999999997-1.9750000000000014 12.5-8.630000000000003 12.5-16.325000000000003z m-12.5 12.833333333333336v-4.988333333333333l7.256666666666668-7.256666666666668c0.3249999999999993-0.3249999999999993 0.3249999999999993-0.8533333333333317 0-1.1783333333333346s-0.8533333333333317-0.3249999999999993-1.1783333333333346 0l-6.078333333333333 6.07833333333333v-5.976666666666667l3.923333333333332-3.923333333333334c0.3249999999999993-0.3249999999999993 0.3249999999999993-0.8533333333333335 0-1.1783333333333328s-0.8533333333333317-0.3249999999999993-1.1783333333333346 0l-2.7449999999999974 2.745000000000001v-5.488333333333333c0-0.9216666666666669-0.7466666666666661-1.666666666666666-1.6666666666666679-1.666666666666666s-1.6666666666666679 0.7449999999999992-1.6666666666666679 1.666666666666666v5.488333333333333l-2.743333333333334-2.744999999999999c-0.3249999999999993-0.3249999999999993-0.8533333333333335-0.3249999999999993-1.1783333333333328 0s-0.3249999999999993 0.8533333333333335 0 1.1783333333333328l3.923333333333332 3.923333333333332v5.976666666666667l-6.074999999999999-6.076666666666668c-0.3249999999999993-0.3249999999999993-0.8533333333333335-0.3249999999999993-1.1783333333333328 0s-0.3249999999999993 0.8533333333333317 0 1.1783333333333346l7.256666666666666 7.256666666666668v4.986666666666668c-5.418333333333333-1.8599999999999994-9.171666666666665-6.966666666666669-9.171666666666665-12.833333333333332 0-6.456666666666667 4.538333333333332-12 10.833333333333334-13.3 6.294999999999998 1.299999999999998 10.833333333333332 6.841666666666665 10.833333333333332 13.3 0 5.866666666666667-3.754999999999999 10.973333333333333-9.166666666666668 12.833333333333336z' })
                )
            );
        }
    }]);

    return TiLeaf;
}(React.Component);

exports.default = TiLeaf;
module.exports = exports['default'];