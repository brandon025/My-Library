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

var TiExportOutline = function (_React$Component) {
    _inherits(TiExportOutline, _React$Component);

    function TiExportOutline() {
        _classCallCheck(this, TiExportOutline);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiExportOutline).apply(this, arguments));
    }

    _createClass(TiExportOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.85 16.326666666666668c-0.06666666666666998-0.06666666666666643-6.756666666666668-6.826666666666668-9.966666666666669-10.243333333333334-0.6999999999999993-0.6899999999999995-1.6666666666666679-1.083333333333334-2.6449999999999996-1.083333333333334-1.971666666666664 0-3.5716666666666654 1.4933333333333332-3.5716666666666654 3.333333333333334h-13.333333333333334c-0.9216666666666669 0-1.666666666666667 0.7466666666666661-1.666666666666667 1.666666666666666v23.333333333333336c0 0.9200000000000017 0.7450000000000001 1.6666666666666643 1.666666666666667 1.6666666666666643h23.333333333333336c0.9216666666666669 0 1.6666666666666643-0.7466666666666697 1.6666666666666643-1.6666666666666643v-10.075000000000003c2.3900000000000006-2.4333333333333336 4.479999999999997-4.550000000000001 4.516666666666666-4.583333333333336 0.6466666666666683-0.6499999999999986 0.6466666666666683-1.6999999999999993 0-2.3500000000000014z m-12.383333333333333 10.241666666666667c-0.038333333333333997 0.046666666666666856-0.10999999999999943 0.10000000000000142-0.22833333333333172 0.10000000000000142-0.12333333333333485 0-0.1999999999999993-0.038333333333333997-0.23999999999999844-0.06666666666666643v-6.60166666666667h-1.6666666666666679c-2.953333333333333 0.05666666666666842-5.561666666666667 1.1333333333333329-7.923333333333332 3.263333333333332 0.7183333333333302-3.691666666666663 2.6683333333333294-8.263333333333332 7.924999999999997-8.263333333333332h1.6666666666666679v-6.596666666666666c0.045000000000001705-0.033333333333333215 0.11666666666666714-0.07000000000000028 0.23833333333333329-0.07000000000000028 0.14999999999999858 0 0.25333333333333385 0.08333333333333393 0.2566666666666677 0.08333333333333393 2.3933333333333344 2.541666666666666 6.75 6.978333333333335 8.828333333333333 9.083333333333332-0.42166666666666686 0.42833333333333456-7.236666666666665 7.370000000000001-8.858333333333334 9.06666666666667z m-15.466666666666669 5.098333333333333v-20h13.333333333333336v1.666666666666666c-7.7666666666666675 0-10 8.116666666666669-10 14.166666666666666v0.8333333333333321c2.8166666666666664-4.296666666666667 6-6.588333333333335 10-6.666666666666668v5c0 0.9166666666666679 0.8533333333333317 1.6666666666666679 1.9050000000000011 1.6666666666666679 0.6066666666666656 0 1.1266666666666652-0.26333333333333186 1.4716666666666676-0.6499999999999986 0.8999999999999986-0.9433333333333316 2.0700000000000003-2.1533333333333324 3.293333333333333-3.4066666666666663v7.390000000000001h-20.003333333333337z' })
                )
            );
        }
    }]);

    return TiExportOutline;
}(React.Component);

exports.default = TiExportOutline;
module.exports = exports['default'];