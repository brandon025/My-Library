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

var FaCamera = function (_React$Component) {
    _inherits(FaCamera, _React$Component);

    function FaCamera() {
        _classCallCheck(this, FaCamera);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaCamera).apply(this, arguments));
    }

    _createClass(FaCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 15.333333333333332q2.4800000000000004 0 4.240000000000002 1.7600000000000016t1.759999999999998 4.239999999999998-1.7600000000000016 4.239999999999998-4.239999999999998 1.7600000000000016-4.24-1.7600000000000016-1.7599999999999998-4.239999999999998 1.7599999999999998-4.239999999999998 4.24-1.7600000000000016z m14.666666666666664-8.666666666666666q2.2079999999999984 0 3.7706666666666635 1.5626666666666669t1.5626666666666722 3.770666666666667v18.666666666666664q0 2.2079999999999984-1.562666666666665 3.7706666666666635t-3.7706666666666706 1.5626666666666722h-29.333333333333332q-2.207999999999999 0-3.7706666666666653-1.562666666666665t-1.5626666666666669-3.7706666666666706v-18.666666666666664q0-2.208 1.5626666666666664-3.770666666666667t3.7706666666666666-1.5626666666666669h4.666666666666667l1.0626666666666669-2.833333333333333q0.3960000000000008-1.0213333333333332 1.4480000000000004-1.7599999999999998t2.155999999999999-0.74h10.666666666666666q1.1039999999999992 0 2.155999999999999 0.74t1.4480000000000004 1.7599999999999998l1.0626666666666686 2.833333333333333h4.666666666666664z m-14.666666666666664 24q3.8533333333333317 0 6.593333333333334-2.740000000000002t2.7399999999999984-6.59333333333333-2.7399999999999984-6.593333333333334-6.593333333333334-2.7399999999999984-6.593333333333334 2.74-2.74 6.593333333333332 2.74 6.593333333333334 6.593333333333334 2.7399999999999984z' })
                )
            );
        }
    }]);

    return FaCamera;
}(React.Component);

exports.default = FaCamera;
module.exports = exports['default'];