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

var MdMonochromePhotos = function (_React$Component) {
    _inherits(MdMonochromePhotos, _React$Component);

    function MdMonochromePhotos() {
        _classCallCheck(this, MdMonochromePhotos);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdMonochromePhotos).apply(this, arguments));
    }

    _createClass(MdMonochromePhotos, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.36 31.640000000000004v-20h-13.36v1.7166666666666668q3.5166666666666657 0 5.938333333333333 2.383333333333333t2.421666666666667 5.9-2.421666666666667 5.938333333333333-5.938333333333333 2.4216666666666633v-2.9666666666666686q-2.1883333333333326 0-3.75-1.5666666666666664t-1.5633333333333326-3.826666666666668 1.5633333333333326-3.788333333333334 3.75-1.5216666666666612v10.703333333333333q2.1883333333333326 0 3.75-1.5666666666666664t1.5633333333333326-3.826666666666668-1.5633333333333326-3.788333333333334-3.75-1.5216666666666647v-2.966666666666667q-3.5166666666666657 0-5.938333333333333 2.383333333333333t-2.421666666666667 5.8966666666666665 2.421666666666667 5.938333333333333 5.938333333333333 2.418333333333333v1.6416666666666657h13.36z m0-23.28q1.3283333333333331 0 2.3049999999999997 0.9766666666666666t0.9750000000000014 2.3049999999999997v20q0 1.3283333333333367-0.9766666666666666 2.34333333333333t-2.306666666666665 1.0166666666666657h-26.713333333333335q-1.330000000000001 0-2.3066666666666675-1.0166666666666657t-0.9766666666666666-2.3416666666666686v-20q0-1.3283333333333331 0.9766666666666666-2.3049999999999997t2.3050000000000006-0.9766666666666666h5.391666666666666l2.966666666666667-3.3616666666666646h10l2.9666666666666686 3.3599999999999994h5.391666666666666z' })
                )
            );
        }
    }]);

    return MdMonochromePhotos;
}(React.Component);

exports.default = MdMonochromePhotos;
module.exports = exports['default'];