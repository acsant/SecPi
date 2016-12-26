'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = require('react-router');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Header: {
		displayName: 'Header'
	}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: 'src/js/containers/header.jsx',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(Component, id);
	};
}

require('./_header.scss');
require('react-bootstrap');

var Header = _wrapComponent('Header')(function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header(props, context) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props, context));

		_this.state = {};
		_this.state.open = false;
		console.log("header rendered");
		return _this;
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			var _title = "SecPi";
			var _signIn = "Sign In";
			var _signUp = "Sign Up";
			return _react3.default.createElement(
				'div',
				{ id: 'page_container' },
				_react3.default.createElement(
					_AppBar2.default,
					{
						title: _react3.default.createElement(
							_reactRouter.Link,
							{ to: '/', className: 'AppBar__title' },
							_react3.default.createElement(
								'span',
								{ className: 'Menu--title' },
								_title
							)
						) },
					_react3.default.createElement(
						_reactRouter.Link,
						{ to: '/', className: 'a__link' },
						_react3.default.createElement(
							'span',
							null,
							_signIn
						)
					),
					' ',
					_react3.default.createElement(
						_reactRouter.Link,
						{ to: '/signup', className: 'a__link link--signup' },
						_react3.default.createElement(
							'span',
							null,
							_signUp
						)
					)
				),
				this.props.children
			);
		}
	}]);

	return Header;
}(_react3.default.Component));

;

exports.default = Header;