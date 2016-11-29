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

var TiCodeOutline = function (_React$Component) {
    _inherits(TiCodeOutline, _React$Component);

    function TiCodeOutline() {
        _classCallCheck(this, TiCodeOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiCodeOutline).apply(this, arguments));
    }

    _createClass(TiCodeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.046666666666667 31.666666666666668c-1.333333333333334 0-2.591666666666667-0.5199999999999996-3.533333333333333-1.466666666666665l-8.538333333333334-8.533333333333335 8.533333333333333-8.533333333333333c1.8900000000000006-1.8916666666666675 5.188333333333333-1.8916666666666675 7.073333333333334 0 1.9499999999999993 1.9466666666666672 1.9499999999999993 5.119999999999999 0 7.066666666666668l-1.4666666666666668 1.4666666666666686 1.4666666666666668 1.4666666666666686c1.9499999999999993 1.9466666666666654 1.9499999999999993 5.120000000000001 0 7.066666666666666-0.9416666666666664 0.9466666666666654-2.1999999999999993 1.466666666666665-3.536666666666667 1.466666666666665z m-7.3566666666666665-10l6.178333333333334 6.178333333333335c0.6333333333333329 0.6333333333333329 1.7333333333333325 0.6283333333333339 2.3566666666666674 0 0.6500000000000004-0.6499999999999986 0.6500000000000004-1.706666666666667 0-2.3566666666666656l-3.816666666666668-3.821666666666669 3.8166666666666664-3.821666666666669c0.6500000000000004-0.6499999999999986 0.6500000000000004-1.706666666666667 0-2.3566666666666656-0.6283333333333339-0.6333333333333329-1.7249999999999996-0.6283333333333339-2.3550000000000004 0l-6.178333333333332 6.178333333333335z m21.263333333333335 10c-1.3383333333333347 0-2.594999999999999-0.5199999999999996-3.5366666666666653-1.466666666666665-1.9499999999999993-1.9466666666666654-1.9499999999999993-5.120000000000001 0-7.066666666666666l1.4666666666666686-1.466666666666665-1.4666666666666686-1.4666666666666686c-1.9499999999999993-1.9466666666666654-1.9499999999999993-5.120000000000001 0-7.066666666666666 1.8833333333333329-1.8900000000000006 5.183333333333334-1.8916666666666675 7.071666666666665 0l8.533333333333331 8.533333333333335-8.533333333333331 8.533333333333331c-0.9433333333333316 0.9466666666666654-2.1999999999999993 1.4666666666666686-3.533333333333335 1.4666666666666686z m0-16.666666666666668c-0.44666666666666544 0-0.8666666666666671 0.17333333333333378-1.1766666666666659 0.48666666666666636-0.6499999999999986 0.6500000000000004-0.6499999999999986 1.708333333333334 0 2.3583333333333325l3.814999999999994 3.821666666666669-3.8166666666666664 3.821666666666669c-0.6499999999999986 0.6499999999999986-0.6499999999999986 1.706666666666667 0 2.3566666666666656 0.6266666666666652 0.629999999999999 1.7233333333333327 0.6333333333333329 2.3550000000000004 0l6.178333333333338-6.178333333333335-6.175000000000004-6.178333333333335c-0.31666666666666643-0.31666666666666643-0.7366666666666681-0.4883333333333333-1.1833333333333336-0.4883333333333333z' })
                )
            );
        }
    }]);

    return TiCodeOutline;
}(React.Component);

exports.default = TiCodeOutline;
module.exports = exports['default'];