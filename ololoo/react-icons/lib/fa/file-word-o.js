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

var FaFileWordO = function (_React$Component) {
    _inherits(FaFileWordO, _React$Component);

    function FaFileWordO() {
        _classCallCheck(this, FaFileWordO);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FaFileWordO).apply(this, arguments));
    }

    _createClass(FaFileWordO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.62428571428572 8.482857142857142q0.6257142857142881 0.6257142857142863 1.0714285714285694 1.6971428571428575t0.4471428571428575 1.9628571428571426v25.71428571428572q0 0.894285714285715-0.6257142857142881 1.518571428571427t-1.5171428571428578 0.6242857142857119h-30q-0.8928571428571432 0-1.5171428571428573-0.6242857142857119t-0.6257142857142854-1.518571428571427v-35.714285714285715q0-0.890000000000003 0.6257142857142859-1.5142857142857173t1.517142857142857-0.6285714285714286h20q0.8928571428571423 0 1.9642857142857153 0.44857142857142857t1.6971428571428575 1.0714285714285714z m-9.910000000000004-5.447142857142857v8.392857142857142h8.392857142857146q-0.2228571428571442-0.647142857142855-0.4914285714285711-0.9142857142857128l-6.9857142857142875-6.988571428571429q-0.2671428571428578-0.2671428571428569-0.9142857142857146-0.49142857142857155z m8.57142857142857 34.10714285714286v-22.85714285714286h-9.285714285714285q-0.8928571428571423 1.7763568394002505e-15-1.5171428571428578-0.6257142857142846t-0.6257142857142846-1.5171428571428578v-9.285714285714285h-17.142857142857142v34.28571428571428h28.57142857142857z m-26.228571428571428-20.000000000000004v2.388571428571428h1.5642857142857167l3.6599999999999984 14.754285714285714h3.547142857142857l2.8571428571428577-10.825714285714284q0.15714285714285836-0.4471428571428575 0.2242857142857133-1.0285714285714285 0.04285714285714448-0.35714285714285765 0.04285714285714448-0.5342857142857156h0.09142857142857252l0.06857142857142762 0.5357142857142847q0.022857142857141355 0.0671428571428585 0.07857142857142918 0.4471428571428575t0.12285714285714278 0.5800000000000018l2.8571428571428577 10.825714285714284h3.5471428571428554l3.66-14.754285714285714h1.562857142857144v-2.388571428571428h-6.700000000000003v2.388571428571428h2.0100000000000016l-2.210000000000001 9.777142857142856q-0.1114285714285721 0.4471428571428575-0.15714285714285836 1.0285714285714285l-0.04285714285714448 0.4671428571428571h-0.08999999999999986l-0.0671428571428585-0.46857142857142975q-0.022857142857141355-0.1114285714285721-0.08999999999999986-0.46857142857142975t-0.1114285714285721-0.5571428571428569l-3.2114285714285664-12.167142857142853h-2.5457142857142863l-3.2142857142857153 12.165714285714284q-0.042857142857142705 0.1999999999999993-0.09999999999999964 0.5471428571428589t-0.07857142857142918 0.47857142857142776l-0.08999999999999986 0.46857142857142975h-0.08999999999999986l-0.042857142857142705-0.46857142857142975q-0.04571428571428626-0.5799999999999983-0.15714285714285658-1.0285714285714285l-2.209999999999999-9.772857142857141h2.008571428571429v-2.3900000000000006h-6.6971428571428575z' })
                )
            );
        }
    }]);

    return FaFileWordO;
}(React.Component);

exports.default = FaFileWordO;
module.exports = exports['default'];