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

var MdPhonelinkLock = function (_React$Component) {
    _inherits(MdPhonelinkLock, _React$Component);

    function MdPhonelinkLock() {
        _classCallCheck(this, MdPhonelinkLock);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdPhonelinkLock).apply(this, arguments));
    }

    _createClass(MdPhonelinkLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.860000000000001 18.36v-2.5q0-0.9383333333333326-0.7416666666666671-1.5633333333333326t-1.756666666666666-0.625-1.7583333333333329 0.625-0.7400000000000002 1.5633333333333326v2.5h5z m2.1083333333333325 0q0.783333333333335 0 1.408333333333335 0.625t0.625 1.4866666666666681v5.859999999999999q0 0.783333333333335-0.663333333333334 1.4066666666666663t-1.5233333333333334 0.625h-9.141666666666667q-0.7833333333333332 0-1.4066666666666663-0.663333333333334t-0.625-1.5249999999999986v-5.858333333333334q0-0.783333333333335 0.625-1.3666666666666671t1.4066666666666663-0.5883333333333347v-2.5q0-1.7166666666666668 1.4450000000000003-2.966666666666667t3.243333333333334-1.25 3.203333333333333 1.25 1.4066666666666663 2.966666666666667v2.5z m13.673333333333332-16.72q1.3283333333333331-4.440892098500626e-16 2.3433333333333337 1.0166666666666662t1.0150000000000006 2.3400000000000003v30.000000000000004q0 1.326666666666668-1.0166666666666657 2.3416666666666686t-2.3433333333333337 1.0166666666666657h-16.64q-1.3283333333333331 0-2.3433333333333337-1.0166666666666657t-1.0166666666666657-2.3383333333333383v-5h3.3616666666666664v3.3583333333333343h16.641666666666666v-26.71666666666667h-16.64333333333333v3.3583333333333343h-3.3566666666666674v-5q0-1.3283333333333331 1.0166666666666675-2.3433333333333333t2.34-1.0166666666666666h16.64z' })
                )
            );
        }
    }]);

    return MdPhonelinkLock;
}(React.Component);

exports.default = MdPhonelinkLock;
module.exports = exports['default'];