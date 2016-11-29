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

var MdCamera = function (_React$Component) {
    _inherits(MdCamera, _React$Component);

    function MdCamera() {
        _classCallCheck(this, MdCamera);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdCamera).apply(this, arguments));
    }

    _createClass(MdCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.406666666666666 36.25q0.3133333333333326-0.5466666666666669 3.3599999999999994-5.859999999999999t4.688333333333333-8.046666666666667l6.093333333333334 10.546666666666667q-4.611666666666665 3.75-10.55 3.75-1.6383333333333319 0-3.591666666666665-0.39000000000000057z m-12.343333333333334-11.25h16.171666666666667l-6.168333333333333 10.546666666666667q-3.5933333333333337-1.3283333333333331-6.211666666666667-4.100000000000001t-3.788333333333333-6.446666666666665z m3.670000000000001-16.25l8.440000000000001 14.61h-12.5q-0.31333333333333346-1.4833333333333343-0.31333333333333346-3.3599999999999994 0-6.483333333333334 4.375-11.25z m28.595 7.890000000000001q0.3133333333333326 1.4833333333333343 0.3133333333333326 3.3599999999999994 0 6.483333333333334-4.375 11.25l-7.966666666666669-13.75-0.46999999999999886-0.8599999999999994h12.5z m-0.39000000000000057-1.6400000000000006h-16.171666666666667l6.171666666666667-10.546666666666667q3.5933333333333337 1.3283333333333331 6.211666666666666 4.100000000000001t3.788333333333334 6.446666666666665z m-20.233333333333334 2.5l-0.15833333333333321 0.1566666666666663-6.093333333333334-10.546666666666667q4.610000000000003-3.749999999999999 10.546666666666669-3.749999999999999 1.6400000000000006 0 3.5933333333333337 0.3900000000000001z' })
                )
            );
        }
    }]);

    return MdCamera;
}(React.Component);

exports.default = MdCamera;
module.exports = exports['default'];