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

var MdContactPhone = function (_React$Component) {
    _inherits(MdContactPhone, _React$Component);

    function MdContactPhone() {
        _classCallCheck(this, MdContactPhone);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdContactPhone).apply(this, arguments));
    }

    _createClass(MdContactPhone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.766666666666666 23.36q-0.6266666666666652-1.6400000000000006-0.6266666666666652-3.3599999999999994t0.625-3.3599999999999994h2.7333333333333343l2.5-3.283333333333333-3.2816666666666663-3.3566666666666674q-3.4366666666666674 2.576666666666666-4.608333333333334 6.638333333333335-0.466666666666665 1.6400000000000006-0.466666666666665 3.3599999999999994t0.466666666666665 3.3583333333333343q1.1716666666666669 4.063333333333333 4.609999999999999 6.640000000000001l3.2816666666666663-3.360000000000003-2.5-3.283333333333335h-2.7333333333333343z m-6.408333333333331 6.640000000000001v-1.6400000000000006q0-2.2666666666666657-3.4383333333333326-3.711666666666666t-6.563333333333333-1.4466666666666654-6.5633333333333335 1.4450000000000003-3.438333333333334 3.710000000000001v1.6433333333333309h20z m-10-20q-2.033333333333333 0-3.5166666666666657 1.4833333333333343t-1.4800000000000004 3.5166666666666657 1.4833333333333343 3.5166666666666657 3.5166666666666657 1.4833333333333343 3.5166666666666657-1.4833333333333343 1.4833333333333343-3.5166666666666657-1.4833333333333343-3.5166666666666657-3.5199999999999996-1.4833333333333343z m23.28-5q1.3283333333333331 0 2.3433333333333337 1.0166666666666666t1.0183333333333309 2.3400000000000007v23.28333333333333q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-33.28333333333333q-1.3266666666666698 0-2.3416666666666694-1.0166666666666657t-1.0149999999999997-2.341666666666665v-23.28333333333334q0-1.3233333333333324 1.0166666666666666-2.339999999999999t2.34-1.0166666666666666h33.28333333333333z' })
                )
            );
        }
    }]);

    return MdContactPhone;
}(React.Component);

exports.default = MdContactPhone;
module.exports = exports['default'];