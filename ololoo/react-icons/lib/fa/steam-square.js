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

var FaSteamSquare = function (_React$Component) {
    _inherits(FaSteamSquare, _React$Component);

    function FaSteamSquare() {
        _classCallCheck(this, FaSteamSquare);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaSteamSquare).apply(this, arguments));
    }

    _createClass(FaSteamSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.58 14.442857142857143q0-1.7857142857142865-1.2714285714285722-3.048571428571428t-3.0599999999999987-1.2614285714285707-3.0471428571428554 1.2714285714285722-1.2600000000000016 3.0371428571428574q0 1.7857142857142847 1.2614285714285707 3.0457142857142863t3.048571428571428 1.2614285714285707 3.057142857142857-1.2614285714285707 1.274285714285714-3.047142857142857z m-13.614285714285714 13.124285714285712q0 1.8528571428571432-1.2957142857142863 3.135714285714286t-3.128571428571428 1.282857142857143q-1.248571428571429 0-2.297142857142857-0.6471428571428568t-1.6071428571428577-1.7185714285714297q1.1600000000000001 0.4471428571428575 2.185714285714287 0.8928571428571423 1.3428571428571434 0.5342857142857156 2.6799999999999997-0.034285714285715585t1.8971428571428568-1.9314285714285724q0.5371428571428574-1.3399999999999999-0.03142857142857203-2.6785714285714306t-1.9314285714285706-1.8771428571428572l-1.8285714285714292-0.7371428571428567q0.4900000000000002-0.1114285714285721 0.935714285714285-0.1114285714285721 1.831428571428571 0 3.128571428571428 1.282857142857143t1.2928571428571445 3.135714285714286z m20.17714285714286-18.28142857142857v21.42857142857143q0 2.6571428571428584-1.8857142857142861 4.5428571428571445t-4.5428571428571445 1.8857142857142861h-21.42857142857143q-2.6571428571428575 0-4.542857142857144-1.8857142857142861t-1.885714285714284-4.5428571428571445v-3.4142857142857146l3.8400000000000003 1.53857142857143q0.4471428571428575 2.0528571428571425 2.0857142857142854 3.3928571428571423t3.7628571428571433 1.3399999999999963q2.321428571428571 0 4.039999999999999-1.5628571428571405t1.942857142857143-3.861428571428572l7.699999999999999-5.625714285714285q3.3485714285714288 0 5.702857142857141-2.354285714285716t2.354285714285716-5.681428571428569q0-3.3485714285714288-2.354285714285716-5.702857142857143t-5.702857142857141-2.354285714285716q-3.3028571428571425 0-5.647142857142857 2.332857142857142t-2.388571428571428 5.635714285714286l-5.022857142857143 7.185714285714287q-0.20285714285714285-0.02142857142857224-0.6285714285714281-0.02142857142857224-1.6714285714285708 0-3.057142857142857 0.8257142857142838l-6.627142857142857-2.6542857142857095v-10.44714285714286q-4.440892098500626e-16-2.6571428571428575 1.8857142857142852-4.542857142857144t4.542857142857144-1.8857142857142857h21.42857142857143q2.654285714285713 0 4.5428571428571445 1.8857142857142857t1.8857142857142861 4.542857142857144z m-5.5142857142857125 5.200000000000003q0 2.234285714285715-1.5828571428571436 3.807142857142857t-3.8171428571428585 1.5742857142857147-3.8057142857142843-1.5742857142857147-1.5742857142857147-3.805714285714286 1.5742857142857147-3.814285714285715 3.805714285714288-1.5857142857142854q2.2542857142857144 0 3.828571428571429 1.5742857142857147t1.5742857142857147 3.828571428571429z' })
                )
            );
        }
    }]);

    return FaSteamSquare;
}(React.Component);

exports.default = FaSteamSquare;
module.exports = exports['default'];