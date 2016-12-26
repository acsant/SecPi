'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _login = require('../containers/login.jsx');

var _login2 = _interopRequireDefault(_login);

var _home = require('../containers/home.jsx');

var _home2 = _interopRequireDefault(_home);

var _header = require('../containers/header.jsx');

var _header2 = _interopRequireDefault(_header);

var _signup = require('../containers/signup.jsx');

var _signup2 = _interopRequireDefault(_signup);

var _AuthenticationService = require('../services/AuthenticationService');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history;
if (typeof window !== 'undefined') {
	history = _reactRouter.browserHistory;
} else {
	history = (0, _reactRouter.createMemoryHistory)();
}

exports.default = _react2.default.createElement(
	_MuiThemeProvider2.default,
	null,
	_react2.default.createElement(
		_reactRouter.Router,
		{ history: history },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: '/', component: _header2.default },
			_react2.default.createElement(_reactRouter.IndexRoute, { component: _login2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: 'signup', component: _signup2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: 'home', component: _home2.default, onEnter: _AuthenticationService.validate })
		)
	)
);