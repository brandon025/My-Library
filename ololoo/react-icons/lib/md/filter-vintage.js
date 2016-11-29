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

var MdFilterVintage = function (_React$Component) {
    _inherits(MdFilterVintage, _React$Component);

    function MdFilterVintage() {
        _classCallCheck(this, MdFilterVintage);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdFilterVintage).apply(this, arguments));
    }

    _createClass(MdFilterVintage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 26.64q2.7333333333333343 0 4.688333333333333-1.9533333333333331t1.9533333333333331-4.686666666666667-1.9533333333333331-4.690000000000001-4.688333333333333-1.9533333333333331-4.688333333333334 1.953333333333335-1.9533333333333314 4.6899999999999995 1.9533333333333331 4.686666666666667 4.688333333333333 1.9533333333333331z m-16.171666666666667 2.6566666666666663q0-2.9666666666666686 1.7583333333333329-5.663333333333334t4.650000000000002-3.633333333333333l-1.4083333333333332-0.7033333333333331q-2.3450000000000015-1.4066666666666663-3.6716666666666686-3.713333333333333t-1.3283333333333331-4.883333333333335q5-2.8883333333333336 10 0 0.7033333333333331 0.31666666666666643 1.3283333333333331 0.8616666666666664-0.1566666666666663-1.0949999999999989-0.1566666666666663-1.5616666666666656 0-2.7366666666666664 1.3666666666666671-5.04t3.633333333333333-3.633333333333333q2.2666666666666657 1.3283333333333331 3.633333333333333 3.6333333333333337t1.3666666666666671 5.039999999999999q0 0.4666666666666668-0.1566666666666663 1.5616666666666674 0.625-0.5466666666666669 1.3283333333333331-0.8599999999999994 5-2.8883333333333336 10 0 0 2.58-1.3283333333333331 4.883333333333333t-3.671666666666667 3.7133333333333347q-0.1566666666666663 0.07833333333333314-0.4299999999999997 0.23333333333333428t-0.5083333333333329 0.2749999999999986-0.466666666666665 0.19500000000000028q0.23333333333333428 0.07833333333333314 0.466666666666665 0.19500000000000028t0.5083333333333329 0.27333333333333343 0.4299999999999997 0.23666666666666814q2.3433333333333337 1.4066666666666663 3.671666666666667 3.711666666666666t1.3283333333333331 4.883333333333333q-5 2.8883333333333354-10 0-0.7033333333333331-0.31666666666666643-1.3283333333333331-0.8616666666666681 0.1566666666666663 1.0933333333333302 0.1566666666666663 1.5599999999999987 0 2.7366666666666646-1.3666666666666671 5.039999999999999t-3.633333333333333 3.63333333333334q-2.2666666666666657-1.3283333333333331-3.633333333333333-3.633333333333333t-1.3666666666666671-5.040000000000006q0-0.466666666666665 0.1566666666666663-1.5616666666666674-0.625 0.5466666666666669-1.3283333333333331 0.8599999999999994-5 2.8883333333333354-10 0z' })
                )
            );
        }
    }]);

    return MdFilterVintage;
}(React.Component);

exports.default = MdFilterVintage;
module.exports = exports['default'];