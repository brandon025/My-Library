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

var FaYoutubePlay = function (_React$Component) {
    _inherits(FaYoutubePlay, _React$Component);

    function FaYoutubePlay() {
        _classCallCheck(this, FaYoutubePlay);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaYoutubePlay).apply(this, arguments));
    }

    _createClass(FaYoutubePlay, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.571428571428573 20q0-0.8257142857142838-0.6714285714285708-1.2057142857142864l-11.428571428571427-7.142857142857142q-0.6899999999999995-0.4471428571428575-1.4499999999999993-0.042857142857142705-0.7357142857142893 0.3985714285714277-0.7357142857142893 1.248571428571429v14.285714285714288q0 0.8485714285714288 0.7357142857142858 1.25 0.35714285714285765 0.17857142857142705 0.6914285714285722 0.17857142857142705 0.4457142857142866 0 0.757142857142858-0.2228571428571442l11.428571428571427-7.142857142857142q0.6728571428571435-0.38000000000000256 0.6728571428571435-1.2057142857142864z m11.428571428571427 0q0 2.1428571428571423-0.022857142857141355 3.3485714285714288t-0.18999999999999773 3.0471428571428554-0.5 3.2928571428571445q-0.3571428571428541 1.62857142857143-1.5428571428571445 2.7457142857142856t-2.7657142857142887 1.2942857142857136q-4.958571428571428 0.5571428571428569-14.978571428571428 0.5571428571428569t-14.977142857142857-0.5571428571428569q-1.5857142857142859-0.1785714285714306-2.778571428571429-1.2942857142857136t-1.5499999999999998-2.7457142857142856q-0.3142857142857144-1.451428571428572-0.48000000000000015-3.2928571428571445t-0.19142857142857145-3.047142857142859-0.022857142857142798-3.348571428571425 0.022857142857142857-3.3485714285714288 0.19-3.047142857142857 0.5-3.2928571428571427q0.3571428571428572-1.6285714285714281 1.542857142857143-2.7457142857142856t2.7657142857142856-1.2942857142857145q4.958571428571429-0.5571428571428569 14.978571428571428-0.5571428571428569t14.977142857142859 0.5571428571428569q1.585714285714289 0.17857142857142883 2.778571428571432 1.2942857142857145t1.5499999999999972 2.7457142857142856q0.3142857142857167 1.451428571428572 0.4799999999999969 3.2928571428571427t0.19142857142857395 3.047142857142857 0.022857142857141355 3.3485714285714288z' })
                )
            );
        }
    }]);

    return FaYoutubePlay;
}(React.Component);

exports.default = FaYoutubePlay;
module.exports = exports['default'];