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

var MdLanguage = function (_React$Component) {
    _inherits(MdLanguage, _React$Component);

    function MdLanguage() {
        _classCallCheck(this, MdLanguage);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MdLanguage).apply(this, arguments));
    }

    _createClass(MdLanguage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.266666666666666 23.36h5.623333333333335q0.46666666666666856-2.1883333333333326 0.46666666666666856-3.3599999999999994t-0.46666666666666856-3.3599999999999994h-5.623333333333335q0.23333333333333428 1.6400000000000006 0.23333333333333428 3.3599999999999994t-0.23333333333333428 3.3599999999999994z m-2.969999999999999 9.216666666666669q4.766666666666666-1.5616666666666674 7.266666666666666-5.936666666666667h-4.923333333333332q-0.783333333333335 3.125-2.3433333333333337 5.938333333333333z m-0.39000000000000057-9.216666666666669q0.23333333333333428-1.6400000000000006 0.23333333333333428-3.3599999999999994t-0.23333333333333428-3.3599999999999994h-7.813333333333333q-0.2333333333333325 1.6400000000000006-0.2333333333333325 3.3599999999999994t0.2333333333333325 3.3599999999999994h7.813333333333333z m-3.9066666666666663 9.923333333333332q2.1883333333333326-3.2049999999999983 3.203333333333333-6.641666666666666h-6.406666666666666q1.0166666666666657 3.4383333333333326 3.203333333333333 6.640000000000001z m-6.639999999999999-19.924999999999997q0.7833333333333332-3.125 2.3433333333333337-5.9383333333333335-4.7666666666666675 1.5633333333333335-7.2666666666666675 5.9383333333333335h4.923333333333334z m-4.921666666666667 13.280000000000001q2.5 4.375 7.2666666666666675 5.938333333333333-1.5666666666666664-2.8133333333333326-2.3450000000000006-5.938333333333333h-4.921666666666669z m-1.3283333333333331-3.280000000000001h5.623333333333331q-0.2333333333333325-1.6383333333333319-0.2333333333333325-3.3583333333333343t0.2333333333333325-3.3599999999999994h-5.621666666666665q-0.4666666666666668 2.1883333333333326-0.4666666666666668 3.3599999999999994t0.4666666666666668 3.3599999999999994z m12.889999999999999-16.641666666666666q-2.1883333333333326 3.2049999999999983-3.203333333333333 6.641666666666666h6.406666666666666q-1.0166666666666657-3.4383333333333344-3.203333333333333-6.641666666666667z m11.563333333333333 6.643333333333333q-2.5-4.375-7.266666666666666-5.9383333333333335 1.5666666666666664 2.8133333333333335 2.344999999999999 5.9383333333333335h4.921666666666667z m-11.563333333333333-10q6.875 0 11.758333333333333 4.883333333333335t4.883333333333333 11.756666666666664-4.883333333333333 11.759999999999998-11.758333333333333 4.88333333333334-11.758333333333333-4.883333333333333-4.883333333333333-11.760000000000005 4.883333333333333-11.756666666666668 11.758333333333333-4.883333333333332z' })
                )
            );
        }
    }]);

    return MdLanguage;
}(React.Component);

exports.default = MdLanguage;
module.exports = exports['default'];