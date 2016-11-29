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

var MdFlip = function (_React$Component) {
    _inherits(MdFlip, _React$Component);

    function MdFlip() {
        _classCallCheck(this, MdFlip);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdFlip).apply(this, arguments));
    }

    _createClass(MdFlip, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.640000000000004 35v-3.3599999999999994h3.359999999999996q0 1.3283333333333331-1.0166666666666657 2.3433333333333337t-2.3416666666666686 1.0166666666666657z m0-13.36v-3.2833333333333314h3.359999999999996v3.2833333333333314h-3.3599999999999994z m-6.640000000000004-13.28v-3.360000000000001h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m6.640000000000001 20v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z m-13.280000000000001 10v-36.71666666666667h3.2833333333333314v36.71666666666667h-3.2833333333333314z m13.280000000000005-33.36q1.3283333333333367 0 2.34333333333333 1.0166666666666666t1.0166666666666657 2.3400000000000007h-3.361666666666668v-3.3566666666666674z m-26.640000000000004 3.360000000000001q0-1.3283333333333331 1.0166666666666666-2.3433333333333337t2.3400000000000007-1.0166666666666675h6.643333333333333v3.3616666666666664h-6.643333333333333v23.28333333333334h6.643333333333333v3.354999999999997h-6.643333333333333q-1.3283333333333331 0-2.3433333333333337-1.0166666666666657t-1.0133333333333336-2.336666666666666v-23.285z m26.640000000000004 6.639999999999999v-3.3599999999999994h3.359999999999996v3.3599999999999994h-3.3599999999999994z m-6.640000000000004 20v-3.3599999999999994h3.3599999999999994v3.3599999999999994h-3.3599999999999994z' })
                )
            );
        }
    }]);

    return MdFlip;
}(React.Component);

exports.default = MdFlip;
module.exports = exports['default'];