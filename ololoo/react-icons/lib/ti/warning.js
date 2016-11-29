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

var TiWarning = function (_React$Component) {
    _inherits(TiWarning, _React$Component);

    function TiWarning() {
        _classCallCheck(this, TiWarning);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TiWarning).apply(this, arguments));
    }

    _createClass(TiWarning, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.28333333333334 25.663333333333334l-9.850000000000001-16.423333333333332c-1.2966666666666704-2.156666666666668-3.275000000000002-3.3900000000000023-5.433333333333337-3.3900000000000023s-4.138333333333334 1.2333333333333334-5.433333333333334 3.3866666666666667l-9.850000000000001 16.42666666666667c-1.3116666666666665 2.1833333333333336-1.455 4.508333333333333-0.39333333333333353 6.383333333333333 1.0600000000000023 1.8766666666666652 3.1300000000000026 2.953333333333333 5.6766666666666685 2.953333333333333h20c2.546666666666667 0 4.616666666666667-1.076666666666668 5.676666666666669-2.950000000000003 1.0616666666666674-1.8766666666666652 0.9166666666666643-4.203333333333333-0.3916666666666657-6.386666666666667z m-15.283333333333339 3.583333333333332c-1.423333333333332 0-2.583333333333332-1.1566666666666663-2.583333333333332-2.580000000000002s1.158333333333335-2.583333333333332 2.583333333333332-2.583333333333332 2.583333333333332 1.158333333333335 2.583333333333332 2.583333333333332c0 1.423333333333332-1.1600000000000001 2.583333333333332-2.583333333333332 2.583333333333332z m2.7216666666666676-12.371666666666666c-0.01666666666666572 0.05000000000000071-2.333333333333332 5.780000000000001-2.333333333333332 5.780000000000001-0.06666666666666643 0.1566666666666663-0.216666666666665 0.26000000000000156-0.3866666666666667 0.26000000000000156s-0.3200000000000003-0.10500000000000043-0.38333333333333286-0.2616666666666667l-2.3166666666666664-5.73c-0.14999999999999858-0.38833333333333186-0.216666666666665-0.7383333333333333-0.216666666666665-1.0916666666666668 0-1.6083333333333325 1.3083333333333336-2.916666666666666 2.916666666666668-2.916666666666666s2.916666666666668 1.3083333333333336 2.916666666666668 2.916666666666668c0 0.3533333333333317-0.06666666666666643 0.7033333333333331-0.19500000000000028 1.0416666666666679z' })
                )
            );
        }
    }]);

    return TiWarning;
}(React.Component);

exports.default = TiWarning;
module.exports = exports['default'];