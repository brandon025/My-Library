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

var FaEdit = function (_React$Component) {
    _inherits(FaEdit, _React$Component);

    function FaEdit() {
        _classCallCheck(this, FaEdit);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaEdit).apply(this, arguments));
    }

    _createClass(FaEdit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.821428571428573 26.42857142857143l2.59-2.59-3.3928571428571423-3.3928571428571423-2.59 2.59v1.2499999999999964h2.1428571428571423v2.1428571428571423h1.25z m9.82142857142857-16.071428571428573q-0.35714285714285765-0.35714285714285765-0.7371428571428567 0.02285714285714313l-7.814285714285713 7.814285714285715q-0.3785714285714299 0.3785714285714299-0.02142857142857224 0.735714285714284t0.7357142857142875-0.02142857142857224l7.814285714285713-7.814285714285713q0.379999999999999-0.379999999999999 0.022857142857141355-0.7371428571428567z m1.7857142857142883 13.25714285714286v4.242857142857144q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.885714285714279h-18.571428571428573q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.8857142857142835-4.542857142857141v-18.571428571428573q0-2.6571428571428575 1.885714285714286-4.542857142857144t4.542857142857143-1.885714285714284h18.57142857142857q1.4057142857142857 0 2.611428571428572 0.5571428571428574 0.33428571428571274 0.15714285714285703 0.3999999999999986 0.5142857142857142 0.06857142857142762 0.3799999999999999-0.1999999999999993 0.6471428571428568l-1.0942857142857143 1.0942857142857143q-0.31428571428571317 0.3114285714285714-0.7142857142857153 0.17714285714285705-0.514285714285716-0.13285714285714256-1.0028571428571418-0.13285714285714256h-18.571428571428573q-1.4742857142857142 0-2.524285714285714 1.048571428571429t-1.0471428571428558 2.522857142857143v18.571428571428577q0 1.4714285714285715 1.0471428571428572 2.5228571428571414t2.5242857142857145 1.048571428571428h18.57142857142857q1.4714285714285715 0 2.5214285714285722-1.048571428571428t1.0500000000000007-2.522857142857145v-2.814285714285713q0-0.28857142857143003 0.1999999999999993-0.48999999999999844l1.428571428571427-1.428571428571427q0.33428571428571274-0.33428571428571274 0.7814285714285703-0.15714285714285836t0.4471428571428575 0.6485714285714295z m-2.142857142857146-16.471428571428575l6.428571428571431 6.428571428571429-15 15.000000000000002h-6.428571428571429v-6.428571428571427z m9.911428571428573 2.9471428571428575l-2.0542857142857116 2.0528571428571425-6.428571428571431-6.428571428571428 2.0542857142857116-2.052857142857143q0.6257142857142881-0.6257142857142859 1.5171428571428578-0.6257142857142859t1.5171428571428578 0.6257142857142859l3.392857142857146 3.392857142857143q0.6257142857142881 0.6257142857142854 0.6257142857142881 1.517142857142857t-0.6257142857142881 1.5171428571428578z' })
                )
            );
        }
    }]);

    return FaEdit;
}(React.Component);

exports.default = FaEdit;
module.exports = exports['default'];