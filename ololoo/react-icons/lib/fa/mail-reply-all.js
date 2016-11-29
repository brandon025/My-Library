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

var FaMailReplyAll = function (_React$Component) {
    _inherits(FaMailReplyAll, _React$Component);

    function FaMailReplyAll() {
        _classCallCheck(this, FaMailReplyAll);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaMailReplyAll).apply(this, arguments));
    }

    _createClass(FaMailReplyAll, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.285714285714286 24.15142857142857v1.562857142857144q0 0.937142857142856-0.8714285714285719 1.3171428571428585-0.2857142857142865 0.11142857142856855-0.5571428571428569 0.11142857142856855-0.6028571428571432 0-1.0042857142857144-0.4242857142857126l-11.428571428571429-11.428571428571429q-0.4242857142857144-0.4242857142857144-0.4242857142857144-1.0042857142857144t0.42428571428571427-1.0042857142857144l11.428571428571429-11.428571428571429q0.6471428571428568-0.6914285714285713 1.5628571428571423-0.3142857142857143 0.8714285714285719 0.38142857142857145 0.8714285714285719 1.3185714285714287v1.54l-8.861428571428572 8.885714285714286q-0.42571428571428527 0.4214285714285708-0.42571428571428527 1.0028571428571436t0.4242857142857144 1.0042857142857144z m25.714285714285715 0.8485714285714288q0 1.2942857142857136-0.38000000000000256 2.9800000000000004t-0.8599999999999994 3.080000000000002-1.0714285714285694 2.789999999999999-0.904285714285713 2.020000000000003l-0.4485714285714266 0.8914285714285697q-0.1785714285714306 0.38000000000000256-0.6257142857142881 0.38000000000000256-0.134285714285717 0-0.20000000000000284-0.022857142857141355-0.5600000000000023-0.1785714285714306-0.5142857142857125-0.7571428571428598 0.9600000000000009-8.92857142857143-2.365714285714283-12.614285714285714-1.428571428571427-1.5828571428571436-3.805714285714288-2.4657142857142844t-5.9714285714285715-1.1714285714285708v5.604285714285709q0 0.937142857142856-0.8714285714285701 1.3171428571428585-0.28571428571428825 0.11142857142856855-0.5528571428571425 0.11142857142856855-0.6028571428571432 0-1.0042857142857144-0.4242857142857126l-11.428571428571429-11.428571428571429q-0.4242857142857144-0.4242857142857144-0.4242857142857144-1.0042857142857144t0.4242857142857144-1.0042857142857144l11.428571428571429-11.428571428571429q0.6471428571428568-0.6914285714285713 1.562857142857144-0.3142857142857143 0.8685714285714283 0.38142857142857145 0.8685714285714283 1.3185714285714287v5.848571428571429q9.174285714285713 0.6257142857142863 13.37142857142857 4.9328571428571415 3.7714285714285722 3.861428571428572 3.7714285714285722 11.361428571428572z' })
                )
            );
        }
    }]);

    return FaMailReplyAll;
}(React.Component);

exports.default = FaMailReplyAll;
module.exports = exports['default'];