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

var FaStumbleupon = function (_React$Component) {
    _inherits(FaStumbleupon, _React$Component);

    function FaStumbleupon() {
        _classCallCheck(this, FaStumbleupon);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaStumbleupon).apply(this, arguments));
    }

    _createClass(FaStumbleupon, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.125333333333334 16.166666666666664v-2.459999999999999q0-0.8733333333333331-0.6266666666666652-1.4986666666666668t-1.4986666666666686-0.6266666666666652-1.5 0.6266666666666669-0.6266666666666652 1.5v12.750666666666666q0 3.6453333333333333-2.6239999999999988 6.2293333333333365t-6.311999999999999 2.582666666666668q-3.706666666666666 0-6.322666666666667-2.6133333333333297t-2.61466666666667-6.326666666666675v-5.5426666666666655h6.833333333333333v5.458666666666666q0 0.8960000000000008 0.6266666666666669 1.5106666666666655t1.498666666666666 0.6133333333333333 1.4986666666666668-0.6133333333333333 0.6266666666666669-1.5106666666666655v-12.913333333333334q0-3.564 2.634666666666666-6.084t6.281333333333334-2.5199999999999996q3.666666666666668 0 6.293333333333333 2.54t2.626666666666665 6.125333333333333v2.833333333333332l-4.064 1.2093333333333334z m11.040000000000003 4.626666666666665h6.834666666666664v5.539999999999999q0 3.706666666666667-2.6133333333333297 6.322666666666663t-6.323999999999998 2.6133333333333297q-3.687999999999999 0-6.311999999999998-2.5919999999999987t-2.626666666666665-6.259999999999998v-5.584l2.730666666666668 1.270666666666667 4.064-1.2079999999999984v5.626666666666665q0 0.8733333333333348 0.6266666666666652 1.4879999999999995t1.4986666666666686 0.6133333333333333 1.5-0.6133333333333333 0.6266666666666652-1.4893333333333345v-5.7280000000000015z' })
                )
            );
        }
    }]);

    return FaStumbleupon;
}(React.Component);

exports.default = FaStumbleupon;
module.exports = exports['default'];