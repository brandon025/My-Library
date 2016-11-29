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

var FaHddO = function (_React$Component) {
    _inherits(FaHddO, _React$Component);

    function FaHddO() {
        _classCallCheck(this, FaHddO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaHddO).apply(this, arguments));
    }

    _createClass(FaHddO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.071428571428573 27.142857142857142q0 0.7371428571428567-0.524285714285714 1.2614285714285707t-1.2614285714285742 0.5242857142857176-1.2614285714285707-0.524285714285714-0.524285714285714-1.2614285714285742 0.524285714285714-1.2614285714285707 1.2614285714285707-0.524285714285714 1.2614285714285707 0.524285714285714 0.524285714285714 1.2614285714285707z m5.714285714285715 0q0 0.7371428571428567-0.524285714285714 1.2614285714285707t-1.2614285714285742 0.5242857142857176-1.2614285714285707-0.524285714285714-0.524285714285714-1.2614285714285742 0.524285714285714-1.2614285714285707 1.2614285714285707-0.524285714285714 1.2614285714285707 0.524285714285714 0.524285714285714 1.2614285714285707z m2.4999999999999964 3.571428571428573v-7.142857142857142q0-0.28999999999999915-0.21142857142856997-0.5028571428571418t-0.5028571428571453-0.21142857142857352h-27.142857142857142q-0.29000000000000004 0-0.5028571428571427 0.21142857142856997t-0.21142857142856997 0.5028571428571453v7.142857142857142q0 0.28999999999999915 0.21142857142857174 0.5028571428571418t0.5028571428571427 0.21142857142857352h27.14285714285714q0.28999999999999915 0 0.5028571428571453-0.21142857142856997t0.21142857142856997-0.5028571428571453z m-27.457142857142856-10.714285714285715h26.34285714285714l-3.505714285714287-10.757142857142858q-0.08999999999999986-0.2914285714285718-0.35714285714285765-0.4814285714285713t-0.5799999999999983-0.1899999999999995h-17.457142857142856q-0.31142857142857316 0-0.578571428571431 0.1899999999999995t-0.35714285714285765 0.4800000000000004z m30.314285714285717 3.571428571428573v7.142857142857142q0 1.471428571428568-1.048571428571428 2.5228571428571414t-2.5228571428571485 1.048571428571428h-27.142857142857142q-1.4714285714285715 0-2.522857142857143-1.048571428571428t-1.0485714285714267-2.5228571428571414v-7.142857142857142q0-0.5571428571428569 0.3571428571428572-1.6742857142857126l4.397142857142857-13.52857142857143q0.3799999999999999-1.1814285714285715 1.4057142857142866-1.918571428571429t2.2542857142857127-0.7357142857142867h17.457142857142856q1.225714285714286 0 2.252857142857142 0.7357142857142858t1.4057142857142857 1.9200000000000008l4.399999999999999 13.525714285714287q0.3571428571428541 1.1142857142857139 0.3571428571428541 1.6742857142857126z' })
                )
            );
        }
    }]);

    return FaHddO;
}(React.Component);

exports.default = FaHddO;
module.exports = exports['default'];