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

var FaObjectUngroup = function (_React$Component) {
    _inherits(FaObjectUngroup, _React$Component);

    function FaObjectUngroup() {
        _classCallCheck(this, FaObjectUngroup);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaObjectUngroup).apply(this, arguments));
    }

    _createClass(FaObjectUngroup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm40 17.77777777777778h-2.2222222222222214v11.11111111111111h2.2222222222222214v6.666666666666668h-6.666666666666664v-2.2222222222222214h-15.555555555555557v2.2222222222222214h-6.666666666666668v-6.666666666666668h2.2222222222222214v-2.2222222222222214h-6.666666666666665v2.2222222222222214h-6.666666666666667v-6.666666666666668h2.2222222222222223v-11.11111111111111h-2.2222222222222223v-6.666666666666666h6.666666666666667v2.2222222222222223h15.555555555555557v-2.2222222222222223h6.666666666666668v6.666666666666666h-2.2222222222222214v2.2222222222222214h6.666666666666664v-2.2222222222222214h6.666666666666664v6.666666666666668z m-4.444444444444443-4.444444444444445v2.222222222222223h2.2222222222222214v-2.222222222222223h-2.2222222222222214z m-11.11111111111111-6.666666666666667v2.2222222222222223h2.2222222222222214v-2.2222222222222223h-2.2222222222222214z m-22.222222222222225 0v2.2222222222222223h2.222222222222223v-2.2222222222222223h-2.2222222222222223z m2.222222222222223 20v-2.2222222222222214h-2.2222222222222223v2.2222222222222214h2.2222222222222223z m22.22222222222222-2.2222222222222214h-2.2222222222222214v2.2222222222222214h2.2222222222222214v-2.2222222222222214z m-19.999999999999996 0h15.555555555555557v-2.2222222222222214h2.2222222222222214v-11.111111111111114h-2.2222222222222214v-2.2222222222222214h-15.555555555555557v2.2222222222222214h-2.222222222222223v11.11111111111111h2.2222222222222223v2.2222222222222214z m8.88888888888889 8.88888888888889v-2.2222222222222214h-2.2222222222222214v2.2222222222222214h2.2222222222222214z m22.22222222222222 0v-2.2222222222222214h-2.2222222222222214v2.2222222222222214h2.2222222222222214z m-2.2222222222222214-4.444444444444443v-11.111111111111114h-2.2222222222222214v-2.2222222222222214h-6.666666666666668v6.666666666666668h2.2222222222222214v6.666666666666668h-6.666666666666668v-2.2222222222222214h-6.666666666666668v2.2222222222222214h2.2222222222222214v2.2222222222222214h15.555555555555554v-2.2222222222222214h2.2222222222222214z' })
                )
            );
        }
    }]);

    return FaObjectUngroup;
}(React.Component);

exports.default = FaObjectUngroup;
module.exports = exports['default'];