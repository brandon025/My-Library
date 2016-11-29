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

var FaCheckSquareO = function (_React$Component) {
    _inherits(FaCheckSquareO, _React$Component);

    function FaCheckSquareO() {
        _classCallCheck(this, FaCheckSquareO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaCheckSquareO).apply(this, arguments));
    }

    _createClass(FaCheckSquareO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.85714285714286 20.757142857142856v7.099999999999998q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-18.571428571428573q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.8857142857142855-4.542857142857141v-18.571428571428573q0-2.6571428571428575 1.885714285714286-4.542857142857144t4.542857142857143-1.885714285714284h18.571428571428573q1.4057142857142857 0 2.611428571428572 0.5571428571428574 0.33428571428571274 0.15714285714285703 0.3999999999999986 0.5142857142857142 0.06857142857142762 0.3799999999999999-0.1999999999999993 0.6471428571428568l-1.0942857142857143 1.0942857142857143q-0.2228571428571442 0.22142857142857153-0.514285714285716 0.22142857142857153-0.06571428571428584 0-0.1999999999999993-0.042857142857142705-0.514285714285716-0.13428571428571434-1.0028571428571418-0.13428571428571434h-18.571428571428573q-1.4742857142857142 0-2.524285714285714 1.048571428571429t-1.047142857142858 2.522857142857143v18.571428571428577q0 1.4714285714285715 1.0471428571428572 2.5228571428571414t2.524285714285715 1.048571428571428h18.571428571428573q1.4714285714285715 0 2.5214285714285722-1.048571428571428t1.0499999999999972-2.522857142857145v-5.671428571428571q0-0.28857142857143003 0.1999999999999993-0.48999999999999844l1.428571428571427-1.428571428571427q0.2228571428571442-0.2228571428571442 0.5142857142857125-0.2228571428571442 0.1328571428571408 0 0.2657142857142887 0.06857142857142762 0.4471428571428575 0.17857142857142705 0.4471428571428575 0.6471428571428568z m5.157142857142858-10.914285714285715l-18.171428571428574 18.17142857142857q-0.5357142857142847 0.5357142857142847-1.2714285714285722 0.5357142857142847t-1.274285714285714-0.5357142857142847l-9.6-9.600000000000001q-0.5342857142857138-0.5342857142857156-0.5342857142857138-1.2714285714285722t0.5357142857142856-1.2714285714285722l2.4542857142857146-2.4571428571428573q0.5357142857142865-0.5357142857142865 1.2714285714285722-0.5357142857142865t1.274285714285714 0.5357142857142865l5.872857142857141 5.871428571428575 14.438571428571425-14.442857142857141q0.5357142857142847-0.5357142857142856 1.2714285714285722-0.5357142857142856t1.2742857142857176 0.5357142857142856l2.4571428571428555 2.4571428571428573q0.5342857142857156 0.5342857142857138 0.5342857142857156 1.2714285714285722t-0.5357142857142847 1.2714285714285722z' })
                )
            );
        }
    }]);

    return FaCheckSquareO;
}(React.Component);

exports.default = FaCheckSquareO;
module.exports = exports['default'];