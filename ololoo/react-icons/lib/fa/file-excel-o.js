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

var FaFileExcelO = function (_React$Component) {
    _inherits(FaFileExcelO, _React$Component);

    function FaFileExcelO() {
        _classCallCheck(this, FaFileExcelO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaFileExcelO).apply(this, arguments));
    }

    _createClass(FaFileExcelO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.62428571428572 8.482857142857142q0.6257142857142881 0.6257142857142863 1.0714285714285694 1.6971428571428575t0.4471428571428575 1.9628571428571426v25.71428571428572q0 0.894285714285715-0.6257142857142881 1.518571428571427t-1.5171428571428578 0.6242857142857119h-30q-0.8928571428571432 0-1.5171428571428573-0.6242857142857119t-0.6257142857142854-1.518571428571427v-35.714285714285715q0-0.890000000000003 0.6257142857142859-1.5142857142857173t1.517142857142857-0.6285714285714286h20q0.8928571428571423 0 1.9642857142857153 0.44857142857142857t1.6971428571428575 1.0714285714285714z m-9.910000000000004-5.447142857142857v8.392857142857142h8.392857142857146q-0.2228571428571442-0.647142857142855-0.4914285714285711-0.9142857142857128l-6.9857142857142875-6.988571428571429q-0.2671428571428578-0.2671428571428569-0.9142857142857146-0.49142857142857155z m8.57142857142857 34.10714285714286v-22.85714285714286h-9.285714285714285q-0.8928571428571423 1.7763568394002505e-15-1.5171428571428578-0.6257142857142846t-0.6257142857142846-1.5171428571428578v-9.285714285714285h-17.142857142857142v34.28571428571428h28.57142857142857z m-21.852857142857143-5.222857142857144v2.365714285714283h6.271428571428572v-2.3657142857142865h-1.6714285714285708l2.2971428571428554-3.5942857142857143q0.11428571428571388-0.15714285714285836 0.2242857142857133-0.36857142857142833t0.16714285714285637-0.3000000000000007 0.07857142857142918-0.09142857142857252h0.04285714285714448q0.022857142857141355 0.08999999999999986 0.1114285714285721 0.2228571428571442 0.04285714285714448 0.08999999999999986 0.10000000000000142 0.16714285714285637t0.13428571428571345 0.17714285714285793 0.14571428571428413 0.19000000000000128l2.388571428571428 3.5942857142857143h-1.6971428571428575v2.3685714285714283h6.4957142857142856v-2.367142857142859h-1.5171428571428578l-4.285714285714285-6.094285714285714 4.352857142857143-6.294285714285714h1.4957142857142856v-2.3871428571428552h-6.228571428571428v2.385714285714286h1.652857142857144l-2.3000000000000007 3.5500000000000007q-0.08857142857142719 0.15714285714285836-0.22142857142857153 0.36857142857142833t-0.20285714285714107 0.3000000000000007l-0.04285714285714448 0.06857142857142762h-0.04571428571428626q-0.022857142857141355-0.08857142857142719-0.1114285714285721-0.22142857142857153-0.13428571428571345-0.24571428571428555-0.379999999999999-0.514285714285716l-2.3657142857142865-3.547142857142859h1.6971428571428575v-2.389999999999997h-6.4714285714285715v2.388571428571428h1.5142857142857142l4.220000000000001 6.071428571428569-4.328571428571429 6.317142857142855h-1.5185714285714251z' })
                )
            );
        }
    }]);

    return FaFileExcelO;
}(React.Component);

exports.default = FaFileExcelO;
module.exports = exports['default'];