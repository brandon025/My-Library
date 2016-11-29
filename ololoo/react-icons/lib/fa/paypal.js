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

var FaPaypal = function (_React$Component) {
    _inherits(FaPaypal, _React$Component);

    function FaPaypal() {
        _classCallCheck(this, FaPaypal);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaPaypal).apply(this, arguments));
    }

    _createClass(FaPaypal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.76285714285714 14.42q0.3999999999999986 1.8757142857142863-0.09000000000000341 4.552857142857144-1.9399999999999977 9.911428571428573-12.61 9.911428571428573h-0.9828571428571422q-0.5571428571428569 0-0.9828571428571422 0.36857142857142833t-0.5357142857142847 0.9485714285714302l-0.08999999999999986 0.4242857142857126-1.2285714285714278 7.722857142857144-0.04285714285714448 0.33428571428571274q-0.11428571428571388 0.5799999999999983-0.548571428571428 0.9485714285714266t-0.9928571428571438 0.37142857142857366h-5.601428571428569q-0.47142857142857153 0-0.7385714285714293-0.33571428571428896t-0.1999999999999993-0.8028571428571425q0.1999999999999993-1.25 0.5899999999999999-3.75t0.5914285714285707-3.75 0.6028571428571432-3.7385714285714293 0.6028571428571432-3.7385714285714293q0.1114285714285721-0.8285714285714292 0.9600000000000009-0.8285714285714292h2.9242857142857126q2.9685714285714297 0.04571428571428626 5.267142857142858-0.4671428571428571 3.9057142857142857-0.8714285714285701 6.405714285714286-3.2142857142857153 2.2771428571428594-2.120000000000001 3.4599999999999973-5.491428571428571 0.5357142857142847-1.564285714285715 0.7814285714285703-2.9714285714285715 0.022857142857141355-0.13285714285714256 0.05714285714285694-0.16571428571428548t0.07714285714286007-0.02285714285714313 0.134285714285717 0.07857142857142918q1.7642857142857125 1.3171428571428567 2.1885714285714286 3.614285714285714z m-3.838571428571427-6.294285714285714q0 2.388571428571428-1.0285714285714285 5.267142857142856-1.7857142857142847 5.199999999999999-6.739999999999998 7.03142857142857-2.524285714285714 0.8928571428571423-5.62857142857143 0.937142857142856 0 0.022857142857141355-2.0071428571428562 0.022857142857141355l-2.008571428571429-0.024285714285714022q-2.234285714285715 0-2.635714285714286 2.1428571428571423-0.042857142857142705 0.17857142857142705-1.8971428571428568 11.82857142857143-0.02285714285714313 0.2242857142857133-0.2671428571428578 0.2242857142857133h-6.5828571428571445q-0.4900000000000002 0-0.8142857142857141-0.36857142857142833t-0.2571428571428571-0.8599999999999994l5.18142857142857-32.83285714285714q0.1114285714285721-0.6471428571428591 0.6142857142857139-1.0714285714285734t1.1471428571428586-0.42285714285714304h13.350000000000001q0.7571428571428562 0 2.1757142857142853 0.2885714285714286t2.4885714285714293 0.7142857142857143q2.388571428571428 0.9142857142857144 3.650000000000002 2.7457142857142856t1.2614285714285742 4.375714285714287z' })
                )
            );
        }
    }]);

    return FaPaypal;
}(React.Component);

exports.default = FaPaypal;
module.exports = exports['default'];