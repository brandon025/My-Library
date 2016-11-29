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

var FaComment = function (_React$Component) {
    _inherits(FaComment, _React$Component);

    function FaComment() {
        _classCallCheck(this, FaComment);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaComment).apply(this, arguments));
    }

    _createClass(FaComment, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm40 20q0 3.885714285714286-2.6785714285714306 7.175714285714285t-7.277142857142856 5.200000000000003-10.044285714285714 1.9099999999999966q-1.562857142857144 0-3.2371428571428567-0.1785714285714306-4.42 3.9057142857142892-10.267142857142858 5.399999999999999-1.0942857142857143 0.3142857142857167-2.542857142857143 0.4928571428571402-0.38142857142857123 0.04285714285714448-0.6828571428571428-0.20000000000000284t-0.39142857142857146-0.6485714285714295v-0.022857142857141355q-0.06714285714285717-0.09000000000000341-0.011428571428571566-0.2671428571428578t0.042857142857142705-0.2228571428571442 0.10000000000000009-0.21142857142856997l0.13571428571428568-0.20285714285714107 0.15714285714285703-0.18999999999999773 0.17714285714285705-0.20000000000000284q0.15714285714285703-0.17999999999999972 0.6914285714285717-0.7714285714285722t0.7714285714285714-0.8485714285714252 0.6914285714285713-0.8800000000000026 0.725714285714286-1.1385714285714315 0.6028571428571432-1.317142857142855 0.5800000000000001-1.6971428571428575q-3.5042857142857144-1.985714285714284-5.524285714285714-4.91t-2.0185714285714287-6.271428571428562q0-2.902857142857144 1.582857142857143-5.548571428571428t4.2628571428571425-4.565714285714286 6.385714285714284-3.0457142857142863 7.765714285714285-1.1285714285714281q5.4471428571428575 0 10.042857142857144 1.9100000000000001t7.278571428571432 5.200000000000001 2.6785714285714306 7.178571428571427z' })
                )
            );
        }
    }]);

    return FaComment;
}(React.Component);

exports.default = FaComment;
module.exports = exports['default'];