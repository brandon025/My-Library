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

var MdHelpOutline = function (_React$Component) {
    _inherits(MdHelpOutline, _React$Component);

    function MdHelpOutline() {
        _classCallCheck(this, MdHelpOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdHelpOutline).apply(this, arguments));
    }

    _createClass(MdHelpOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 10q2.7333333333333343 0 4.688333333333333 1.9533333333333331t1.9533333333333331 4.688333333333333q0 2.1099999999999994-2.5 4.336666666666666t-2.5 4.021666666666668h-3.2833333333333314q0-1.7950000000000017 0.783333333333335-3.083333333333332t1.716666666666665-1.8766666666666652 1.7199999999999989-1.4450000000000003 0.783333333333335-1.9533333333333331q0-1.3283333333333331-1.0166666666666657-2.3049999999999997t-2.3450000000000024-0.9766666666666683-2.3416666666666686 0.9766666666666666-1.0166666666666657 2.3050000000000015h-3.2783333333333307q0-2.7333333333333343 1.9533333333333331-4.688333333333333t4.683333333333332-1.9533333333333367z m0 23.36q5.466666666666669 0 9.413333333333334-3.9450000000000003t3.9450000000000003-9.415-3.9450000000000003-9.411666666666667-9.413333333333334-3.9449999999999994-9.413333333333332 3.9449999999999994-3.945000000000001 9.411666666666667 3.9449999999999994 9.416666666666668 9.413333333333334 3.9416666666666664z m0-30q6.875 0 11.758333333333333 4.883333333333333t4.883333333333333 11.756666666666668-4.883333333333333 11.759999999999998-11.758333333333333 4.88333333333334-11.758333333333333-4.883333333333333-4.883333333333333-11.760000000000005 4.883333333333333-11.756666666666668 11.758333333333333-4.883333333333332z m-1.6400000000000006 26.64v-3.3599999999999994h3.2833333333333314v3.3599999999999994h-3.2833333333333314z' })
                )
            );
        }
    }]);

    return MdHelpOutline;
}(React.Component);

exports.default = MdHelpOutline;
module.exports = exports['default'];