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

var FaFire = function (_React$Component) {
    _inherits(FaFire, _React$Component);

    function FaFire() {
        _classCallCheck(this, FaFire);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaFire).apply(this, arguments));
    }

    _createClass(FaFire, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.714285714285715 37.85714285714286v1.4285714285714306q0 0.28999999999999915-0.21142857142856997 0.5028571428571453t-0.5028571428571453 0.21142857142856286h-30q-0.29000000000000004 0-0.5028571428571427-0.21142857142856997t-0.21142857142857174-0.5028571428571453v-1.4285714285714306q0-0.28999999999999915 0.21142857142857174-0.5028571428571453t0.5028571428571427-0.21142857142856286h30q0.28999999999999915 0 0.5028571428571453 0.21142857142856997t0.21142857142856997 0.5028571428571453z m-5.714285714285715-23.571428571428577q0 1.7428571428571438-0.5471428571428589 3.2142857142857153t-1.428571428571427 2.5114285714285707-1.9528571428571446 1.9642857142857153-2.1428571428571423 1.7285714285714278-1.9528571428571446 1.6085714285714268-1.428571428571427 1.8171428571428585-0.5471428571428554 2.1557142857142857q0 2.1428571428571423 1.4957142857142856 5l-0.08999999999999986-0.022857142857141355 0.022857142857144908 0.022857142857141355q-2.008571428571429-0.914285714285711-3.571428571428573-1.8528571428571396t-3.0914285714285707-2.232857142857142-2.532857142857143-2.734285714285715-1.6185714285714283-3.3599999999999994-0.6142857142857157-4.1057142857142885q0-1.7428571428571438 0.5471428571428572-3.2142857142857153t1.4285714285714288-2.5142857142857142 1.9528571428571428-1.9614285714285682 2.142857142857144-1.7285714285714278 1.9528571428571446-1.610000000000003 1.428571428571427-1.8185714285714285 0.5471428571428554-2.152857142857143q0-2.1-1.4714285714285715-5l0.06571428571428584 0.02142857142857143-0.022857142857141355-0.02142857142857143q2.008571428571429 0.9142857142857144 3.571428571428573 1.8514285714285714t3.0914285714285725 2.232857142857143 2.532857142857143 2.732857142857143 1.6185714285714283 3.3600000000000003 0.6142857142857103 4.1085714285714285z' })
                )
            );
        }
    }]);

    return FaFire;
}(React.Component);

exports.default = FaFire;
module.exports = exports['default'];