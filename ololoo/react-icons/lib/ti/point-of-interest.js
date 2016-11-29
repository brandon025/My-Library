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

var TiPointOfInterest = function (_React$Component) {
    _inherits(TiPointOfInterest, _React$Component);

    function TiPointOfInterest() {
        _classCallCheck(this, TiPointOfInterest);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiPointOfInterest).apply(this, arguments));
    }

    _createClass(TiPointOfInterest, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 18.333333333333336c3.2166666666666686 0 5.833333333333336-2.616666666666667 5.833333333333336-5.833333333333334s-2.616666666666667-5.833333333333335-5.833333333333336-5.833333333333335-5.833333333333332 2.616666666666668-5.833333333333332 5.833333333333333v2.5h-3.333333333333332v-2.5c0-3.216666666666665-2.616666666666669-5.833333333333333-5.833333333333336-5.833333333333333s-5.833333333333333 2.616666666666668-5.833333333333333 5.833333333333333 2.616666666666668 5.833333333333336 5.833333333333333 5.833333333333336h2.5v3.333333333333332h-2.5c-3.216666666666665 0-5.833333333333333 2.616666666666667-5.833333333333333 5.833333333333332s2.616666666666668 5.833333333333336 5.833333333333333 5.833333333333336 5.833333333333336-2.616666666666667 5.833333333333336-5.833333333333336v-2.5h3.333333333333332v2.5c0 3.2166666666666686 2.616666666666667 5.833333333333336 5.833333333333332 5.833333333333336s5.833333333333336-2.616666666666667 5.833333333333336-5.833333333333336-2.616666666666667-5.833333333333336-5.833333333333336-5.833333333333336h-2.5v-3.333333333333332h2.5z m-2.5-5.833333333333336c0-1.379999999999999 1.1216666666666661-2.5 2.5-2.5s2.5 1.120000000000001 2.5 2.5c0 1.376666666666667-1.1216666666666661 2.5-2.5 2.5h-2.5v-2.5z m-10 15c0 1.3766666666666652-1.1216666666666661 2.5-2.5 2.5s-2.5-1.1233333333333313-2.5-2.5c0-1.379999999999999 1.1216666666666661-2.5 2.5-2.5h2.5v2.5z m0-12.5h-2.5c-1.378333333333332 0-2.5-1.1233333333333313-2.5-2.5 0-1.3800000000000008 1.121666666666668-2.5 2.5-2.5s2.5 1.1199999999999992 2.5 2.5v2.5z m6.666666666666668 6.666666666666668h-3.333333333333332v-3.333333333333332h3.333333333333332v3.333333333333332z m5.833333333333332 3.333333333333332c1.3783333333333339 0 2.5 1.120000000000001 2.5 2.5 0 1.3766666666666652-1.1216666666666661 2.5-2.5 2.5s-2.5-1.1233333333333348-2.5-2.5v-2.5h2.5z' })
                )
            );
        }
    }]);

    return TiPointOfInterest;
}(React.Component);

exports.default = TiPointOfInterest;
module.exports = exports['default'];