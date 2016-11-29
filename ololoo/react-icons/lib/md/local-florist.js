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

var MdLocalFlorist = function (_React$Component) {
    _inherits(MdLocalFlorist, _React$Component);

    function MdLocalFlorist() {
        _classCallCheck(this, MdLocalFlorist);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdLocalFlorist).apply(this, arguments));
    }

    _createClass(MdLocalFlorist, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 9.14q-1.7166666666666686 0-2.9299999999999997 1.25t-1.211666666666666 2.966666666666667 1.211666666666666 2.933333333333332 2.9299999999999997 1.2100000000000009 2.9299999999999997-1.211666666666666 1.211666666666666-2.9299999999999997-1.211666666666666-2.966666666666667-2.9299999999999997-1.251666666666667z m-10.703333333333333 7.969999999999999q0-2.578333333333333 2.421666666666667-3.75-2.42-1.1716666666666669-2.42-3.75 0-1.7166666666666668 1.25-2.966666666666667t2.966666666666667-1.25q1.1733333333333338 0 2.3450000000000006 0.7800000000000002v-0.31333333333333346q0-1.7166666666666668 1.2116666666666678-2.966666666666667t2.928333333333331-1.251666666666666 2.9299999999999997 1.25 1.211666666666666 2.966666666666667v0.31333333333333346q1.1716666666666669-0.7833333333333332 2.3433333333333337-0.7833333333333332 1.7199999999999989 0 2.969999999999999 1.25t1.25 2.9700000000000006q0 2.578333333333333-2.421666666666667 3.75 2.4200000000000017 1.1716666666666669 2.4200000000000017 3.75 0 1.7166666666666686-1.25 2.9299999999999997t-2.9666666666666686 1.211666666666666q-1.3299999999999983 0-2.344999999999999-0.6999999999999993v0.3116666666666674q0 1.716666666666665-1.211666666666666 2.9299999999999997t-2.9299999999999997 1.211666666666666-2.9299999999999997-1.211666666666666-1.211666666666666-2.9299999999999997v-0.3133333333333326q-1.0166666666666657 0.6999999999999993-2.3433333333333337 0.6999999999999993-1.7200000000000006 0-2.9700000000000006-1.2100000000000009t-1.25-2.9299999999999997z m10.703333333333333 19.53000000000001q-6.25 0-10.625-4.413333333333334t-4.375-10.586666666666673q6.25 0 10.625 4.413333333333334t4.375 10.586666666666673z m0 0q0-6.171666666666667 4.375-10.586666666666666t10.625-4.413333333333341q0 6.171666666666667-4.375 10.586666666666666t-10.625 4.413333333333341z' })
                )
            );
        }
    }]);

    return MdLocalFlorist;
}(React.Component);

exports.default = MdLocalFlorist;
module.exports = exports['default'];