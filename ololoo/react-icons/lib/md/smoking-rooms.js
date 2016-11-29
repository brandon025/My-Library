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

var MdSmokingRooms = function (_React$Component) {
    _inherits(MdSmokingRooms, _React$Component);

    function MdSmokingRooms() {
        _classCallCheck(this, MdSmokingRooms);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdSmokingRooms).apply(this, arguments));
    }

    _createClass(MdSmokingRooms, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.71666666666667 17.033333333333335q2.423333333333332 0 4.103333333333332 1.4833333333333343t1.6799999999999997 3.75v2.7333333333333307h-2.5v-2.1833333333333336q0-1.5633333333333326-0.9766666666666666-2.461666666666666t-2.3049999999999997-0.8966666666666683h-2.576666666666668q-2.2666666666666657 0-3.9066666666666663-1.6799999999999997t-1.6400000000000006-3.9450000000000003 1.6400000000000006-3.9066666666666663 3.9066666666666663-1.6400000000000006v2.5q-1.3283333333333331 0-2.1883333333333326 0.8166666666666664t-0.8583333333333343 2.071666666666667q0 1.3283333333333331 0.8999999999999986 2.343333333333332t2.1466666666666683 1.0133333333333319h2.578333333333333z m4.690000000000001-4.143333333333334q2.34333333333333 1.0933333333333337 3.7883333333333304 3.3599999999999994t1.4450000000000003 5v3.75h-2.5v-3.75q0-2.8133333333333326-1.913333333333334-4.766666666666666t-4.726666666666667-1.9499999999999993v-2.5q1.25 0 2.1499999999999986-0.9000000000000004t0.8966666666666683-2.2266666666666666q0-1.25-0.8999999999999986-2.1500000000000004t-2.1466666666666683-0.8950000000000014v-2.5q2.2666666666666657 0 3.9066666666666663 1.6400000000000006t1.6400000000000006 3.9066666666666663q0 2.3433333333333337-1.6400000000000006 3.9833333333333343z m-1.4066666666666698 13.75h2.5v5h-2.5v-5z m4.140000000000001 0h2.5v5h-2.5v-5z m-30.78 0h25v5h-25v-5z' })
                )
            );
        }
    }]);

    return MdSmokingRooms;
}(React.Component);

exports.default = MdSmokingRooms;
module.exports = exports['default'];