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

var TiGroup = function (_React$Component) {
    _inherits(TiGroup, _React$Component);

    function TiGroup() {
        _classCallCheck(this, TiGroup);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiGroup).apply(this, arguments));
    }

    _createClass(TiGroup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 23.333333333333336c2.3000000000000007 0 4.383333333333333-0.9333333333333336 5.893333333333334-2.4416666666666664 1.5066666666666677-1.5083333333333329 2.4400000000000013-3.5916666666666686 2.4400000000000013-5.891666666666669s-0.9333333333333336-4.383333333333333-2.4400000000000013-5.8916666666666675c-1.509999999999998-1.5083333333333329-3.5933333333333337-2.4416666666666655-5.893333333333334-2.4416666666666655s-4.383333333333333 0.9333333333333336-5.893333333333334 2.4416666666666673c-1.506666666666666 1.5083333333333329-2.4399999999999977 3.591666666666667-2.4399999999999977 5.891666666666666s0.9333333333333336 4.383333333333333 2.4399999999999995 5.891666666666666c1.509999999999998 1.5083333333333329 3.593333333333332 2.44166666666667 5.893333333333333 2.44166666666667z m13.333333333333336 1.6666666666666643c1.1499999999999986 0 2.19166666666667-0.466666666666665 2.9466666666666654-1.2166666666666686s1.2199999999999989-1.7966666666666669 1.2199999999999989-2.9499999999999993c0-1.1499999999999986-0.46666666666666856-2.1916666666666664-1.2199999999999989-2.9466666666666654s-1.7966666666666669-1.2199999999999989-2.9466666666666654-1.2199999999999989-2.193333333333335 0.466666666666665-2.9499999999999993 1.2199999999999989c-0.75 0.754999999999999-1.216666666666665 1.7966666666666669-1.216666666666665 2.9466666666666654s0.466666666666665 2.1933333333333316 1.2166666666666686 2.9499999999999993 1.79999999999999 1.2166666666666686 2.9499999999999957 1.2166666666666686z m0 0.9833333333333343c-2.2166666666666686 0-3.8866666666666667 0.6766666666666659-4.861666666666665 1.6133333333333333-1.8583333333333378-1.5299999999999976-4.79666666666667-2.5966666666666676-8.471666666666671-2.5966666666666676-3.7766666666666673 0-6.658333333333335 1.0799999999999983-8.486666666666666 2.6066666666666656-0.9933333333333323-0.9399999999999977-2.6799999999999997-1.6233333333333313-4.846666666666667-1.6233333333333313-3.646666666666667 0-5.833333333333334 1.8166666666666664-5.833333333333334 3.6366666666666667 0 0.908333333333335 2.186666666666667 1.8200000000000003 5.833333333333334 1.8200000000000003 1.0066666666666668 0 1.9099999999999993-0.08333333333333215 2.704999999999999-0.22166666666666757-0.016666666666667496 0.15333333333333243-0.06666666666666643 0.3000000000000007-0.06666666666666643 0.4499999999999993 0 1.6666666666666679 4.010000000000002 3.333333333333332 10.695 3.333333333333332 6.27 0 10.695-1.6666666666666643 10.695-3.333333333333332 0-0.14000000000000057-0.01666666666666572-0.283333333333335-0.03333333333333499-0.423333333333332 0.7716666666666683 0.12166666666666615 1.658333333333335 0.19666666666666544 2.6716666666666633 0.19666666666666544 3.4166666666666643 0 5.833333333333336-0.9116666666666653 5.833333333333336-1.8200000000000003 0-1.8200000000000003-2.288333333333334-3.6366666666666667-5.833333333333336-3.6366666666666667z m-26.666666666666668-0.9833333333333343c1.1499999999999986 0 2.1916666666666664-0.466666666666665 2.9466666666666654-1.2199999999999989s1.2200000000000006-1.7966666666666669 1.2200000000000006-2.9466666666666654-0.4666666666666668-2.1900000000000013-1.2200000000000006-2.9466666666666654c-0.754999999999999-0.7533333333333374-1.796666666666666-1.2200000000000024-2.9466666666666663-1.2200000000000024s-2.1933333333333334 0.466666666666665-2.95 1.2199999999999989c-0.75 0.7566666666666677-1.2166666666666668 1.8000000000000007-1.2166666666666668 2.9466666666666654s0.4666666666666668 2.1916666666666664 1.2166666666666668 2.9466666666666654c0.7583333333333337 0.7533333333333374 1.7999999999999998 1.2200000000000024 2.95 1.2200000000000024z' })
                )
            );
        }
    }]);

    return TiGroup;
}(React.Component);

exports.default = TiGroup;
module.exports = exports['default'];