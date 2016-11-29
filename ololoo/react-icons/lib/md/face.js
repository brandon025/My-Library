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

var MdFace = function (_React$Component) {
    _inherits(MdFace, _React$Component);

    function MdFace() {
        _classCallCheck(this, MdFace);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdFace).apply(this, arguments));
    }

    _createClass(MdFace, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 33.36q5.466666666666669 0 9.413333333333334-3.9450000000000003t3.9450000000000003-9.415q0-1.7166666666666686-0.5466666666666669-3.75-1.4833333333333343 0.3916666666666657-3.75 0.3916666666666657-8.593333333333334 0-13.593333333333335-7.033333333333333-2.576666666666666 6.25-8.75 8.986666666666666-0.0766666666666671 0.466666666666665-0.0766666666666671 1.4066666666666663 0 5.469999999999999 3.945000000000001 9.416666666666668t9.413333333333334 3.9400000000000013z m0-30q6.875 0 11.758333333333333 4.883333333333333t4.883333333333333 11.756666666666668-4.883333333333333 11.759999999999998-11.758333333333333 4.88333333333334-11.758333333333333-4.883333333333333-4.883333333333333-11.760000000000005 4.883333333333333-11.756666666666668 11.758333333333333-4.883333333333332z m5 16.25q0.8599999999999994 0 1.4833333333333343 0.586666666666666t0.6266666666666652 1.4450000000000003-0.625 1.4833333333333343-1.4833333333333343 0.6266666666666652-1.4833333333333343-0.6233333333333348-0.6266666666666652-1.4833333333333343 0.625-1.4466666666666654 1.4833333333333343-0.586666666666666z m-10 0q0.8599999999999994 0 1.4833333333333343 0.586666666666666t0.6266666666666652 1.4450000000000003-0.625 1.4833333333333343-1.4833333333333343 0.6266666666666652-1.4833333333333343-0.6233333333333348-0.6266666666666669-1.4833333333333343 0.625-1.4466666666666654 1.4833333333333325-0.586666666666666z' })
                )
            );
        }
    }]);

    return MdFace;
}(React.Component);

exports.default = MdFace;
module.exports = exports['default'];