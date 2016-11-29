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

var TiDocumentDelete = function (_React$Component) {
    _inherits(TiDocumentDelete, _React$Component);

    function TiDocumentDelete() {
        _classCallCheck(this, TiDocumentDelete);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiDocumentDelete).apply(this, arguments));
    }

    _createClass(TiDocumentDelete, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.845000000000006 12.155000000000001l-6.666666666666668-6.666666666666667c-0.311666666666671-0.31333333333333435-0.7333333333333378-0.4883333333333342-1.1783333333333381-0.4883333333333342h-13.333333333333332c-2.7566666666666677 0-5.000000000000001 2.243333333333334-5.000000000000001 5v20c0 2.7566666666666677 2.243333333333333 5 5.000000000000001 5h16.666666666666668c2.7566666666666677 0 5-2.2433333333333323 5-5v-16.666666666666664c0-0.44333333333333513-0.17499999999999716-0.8666666666666689-0.48833333333333684-1.1783333333333346z m-3.5333333333333385 1.1783333333333328h-1.8116666666666674c-1.3783333333333339 0-2.5-1.1216666666666661-2.5-2.5v-1.8100000000000005l4.309999999999999 4.3100000000000005z m-0.9783333333333317 18.333333333333336h-16.666666666666668c-0.9199999999999999-3.552713678800501e-15-1.666666666666666-0.7466666666666697-1.666666666666666-1.6666666666666714v-20c0-0.9199999999999999 0.7466666666666661-1.666666666666666 1.666666666666666-1.666666666666666h11.666666666666668v2.5c0 2.299999999999999 1.8666666666666636 4.166666666666666 4.166666666666664 4.166666666666666h2.5v15c0 0.9200000000000017-0.7466666666666661 1.6666666666666679-1.6666666666666679 1.6666666666666679z m-3.3333333333333357-8.333333333333336h-10c-0.9216666666666669 0-1.666666666666666-0.745000000000001-1.666666666666666-1.6666666666666679s0.7449999999999992-1.6666666666666679 1.666666666666666-1.6666666666666679h10c0.9216666666666669 0 1.6666666666666679 0.745000000000001 1.6666666666666679 1.6666666666666679s-0.745000000000001 1.6666666666666679-1.6666666666666679 1.6666666666666679z' })
                )
            );
        }
    }]);

    return TiDocumentDelete;
}(React.Component);

exports.default = TiDocumentDelete;
module.exports = exports['default'];