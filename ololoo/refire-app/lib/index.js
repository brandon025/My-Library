'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.bindings = exports.USER_UNAUTHENTICATED = exports.USER_AUTHENTICATED = exports.createStyles = exports.routeActions = exports.hashHistory = exports.browserHistory = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.IndexLink = exports.Link = exports.bindActionCreators = exports.connect = exports.firebase = exports.FirebaseWrite = exports.FirebaseResetPassword = exports.FirebaseRegistration = exports.FirebaseOAuth = exports.FirebaseLogout = exports.FirebaseLogin = exports.firebaseToProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _refire = require('refire');

Object.defineProperty(exports, 'firebaseToProps', {
  enumerable: true,
  get: function get() {
    return _refire.firebaseToProps;
  }
});
Object.defineProperty(exports, 'FirebaseLogin', {
  enumerable: true,
  get: function get() {
    return _refire.FirebaseLogin;
  }
});
Object.defineProperty(exports, 'FirebaseLogout', {
  enumerable: true,
  get: function get() {
    return _refire.FirebaseLogout;
  }
});
Object.defineProperty(exports, 'FirebaseOAuth', {
  enumerable: true,
  get: function get() {
    return _refire.FirebaseOAuth;
  }
});
Object.defineProperty(exports, 'FirebaseRegistration', {
  enumerable: true,
  get: function get() {
    return _refire.FirebaseRegistration;
  }
});
Object.defineProperty(exports, 'FirebaseResetPassword', {
  enumerable: true,
  get: function get() {
    return _refire.FirebaseResetPassword;
  }
});
Object.defineProperty(exports, 'FirebaseWrite', {
  enumerable: true,
  get: function get() {
    return _refire.FirebaseWrite;
  }
});
Object.defineProperty(exports, 'firebase', {
  enumerable: true,
  get: function get() {
    return _refire.firebase;
  }
});

var _reactRedux = require('react-redux');

Object.defineProperty(exports, 'connect', {
  enumerable: true,
  get: function get() {
    return _reactRedux.connect;
  }
});

var _redux = require('redux');

Object.defineProperty(exports, 'bindActionCreators', {
  enumerable: true,
  get: function get() {
    return _redux.bindActionCreators;
  }
});

var _reactRouter = require('react-router');

Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function get() {
    return _reactRouter.Link;
  }
});
Object.defineProperty(exports, 'IndexLink', {
  enumerable: true,
  get: function get() {
    return _reactRouter.IndexLink;
  }
});
Object.defineProperty(exports, 'IndexRedirect', {
  enumerable: true,
  get: function get() {
    return _reactRouter.IndexRedirect;
  }
});
Object.defineProperty(exports, 'IndexRoute', {
  enumerable: true,
  get: function get() {
    return _reactRouter.IndexRoute;
  }
});
Object.defineProperty(exports, 'Redirect', {
  enumerable: true,
  get: function get() {
    return _reactRouter.Redirect;
  }
});
Object.defineProperty(exports, 'Route', {
  enumerable: true,
  get: function get() {
    return _reactRouter.Route;
  }
});
Object.defineProperty(exports, 'browserHistory', {
  enumerable: true,
  get: function get() {
    return _reactRouter.browserHistory;
  }
});
Object.defineProperty(exports, 'hashHistory', {
  enumerable: true,
  get: function get() {
    return _reactRouter.hashHistory;
  }
});

var _reactRouterReduxParams = require('react-router-redux-params');

Object.defineProperty(exports, 'routeActions', {
  enumerable: true,
  get: function get() {
    return _reactRouterReduxParams.routeActions;
  }
});

var _reactFreeStyle = require('react-free-style');

Object.defineProperty(exports, 'createStyles', {
  enumerable: true,
  get: function get() {
    return _reactFreeStyle.create;
  }
});

var _bindings = require('./components/bindings');

Object.defineProperty(exports, 'bindings', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bindings).default;
  }
});

var _styles = require('./components/styles');

Object.defineProperty(exports, 'styles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_styles).default;
  }
});
exports.default = refireApp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _StyleContainer = require('./components/StyleContainer');

var _StyleContainer2 = _interopRequireDefault(_StyleContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var USER_AUTHENTICATED = _refire.firebaseActions.USER_AUTHENTICATED;
var USER_UNAUTHENTICATED = _refire.firebaseActions.USER_UNAUTHENTICATED;
exports.USER_AUTHENTICATED = USER_AUTHENTICATED;
exports.USER_UNAUTHENTICATED = USER_UNAUTHENTICATED;
function refireApp(_ref) {
  var apiKey = _ref.apiKey;
  var projectId = _ref.projectId;
  var bindings = _ref.bindings;
  var routes = _ref.routes;
  var pathParams = _ref.pathParams;
  var onAuth = _ref.onAuth;
  var _ref$reducers = _ref.reducers;
  var reducers = _ref$reducers === undefined ? {} : _ref$reducers;
  var _ref$middleware = _ref.middleware;
  var middleware = _ref$middleware === undefined ? [] : _ref$middleware;
  var _ref$history = _ref.history;
  var history = _ref$history === undefined ? _reactRouter.browserHistory : _ref$history;
  var _ref$elementId = _ref.elementId;
  var elementId = _ref$elementId === undefined ? 'app' : _ref$elementId;


  if (typeof projectId === "undefined") {
    throw new Error("refire-app: no projectId provided");
  }

  if (typeof apiKey === "undefined") {
    throw new Error("refire-app: no apiKey provided");
  }

  if (typeof url !== "undefined") {
    throw new Error("refire-app: url is deprecated in options, use projectId & apiKey instead");
  }

  if (typeof bindings === "undefined") {
    throw new Error("refire-app: No bindings provided");
  }

  if (typeof routes === "undefined") {
    throw new Error("refire-app: No react-router routes provided");
  }

  var createStoreWithMiddleware = _redux.applyMiddleware.apply(undefined, _toConsumableArray(middleware).concat([_reduxThunk2.default, (0, _reactRouterReduxParams.syncHistory)(history)]))(_redux.createStore);

  var store = createStoreWithMiddleware((0, _redux.combineReducers)(_extends({
    routing: _reactRouterReduxParams.routeParamsReducer,
    firebase: (0, _refire.firebaseReducer)(bindings)
  }, reducers)));

  (0, _reactRouterReduxParams.syncParams)(store, routes, history);

  (0, _refire.syncFirebase)({
    apiKey: apiKey,
    projectId: projectId,
    store: store,
    bindings: bindings,
    pathParams: pathParams,
    onAuth: onAuth
  });

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _StyleContainer2.default,
      null,
      _react2.default.createElement(
        _reactRouter.Router,
        { history: history },
        routes
      )
    )
  ), document.getElementById(elementId));

  return store;
}