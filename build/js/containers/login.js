'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _AuthenticationStore = require('../stores/AuthenticationStore');

var _AuthenticationStore2 = _interopRequireDefault(_AuthenticationStore);

var _SecPiActions = require('../actions/SecPiActions');

var _SecPiActions2 = _interopRequireDefault(_SecPiActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Login: {
        displayName: 'Login'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'src/js/containers/login.jsx',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmr2(Component, id);
    };
}

var _require = require('../services/AuthenticationService');

var _handleEmailChange = _require._handleEmailChange;
var _handlePasswordChange = _require._handlePasswordChange;


require('./_login.scss');
require('react-bootstrap');

var Login = _wrapComponent('Login')(function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props, context) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props, context));

        _this.state = {
            loggedIn: false
        };
        _this.state.error = "";
        _this.state.email = "";
        _this.state.password = "";
        _this.history = props.history;
        _this.showSessionMsg = props.location.query ? props.location.query.session : true;
        _this._handlePasswordChange = _handlePasswordChange.bind(_this);
        _this._handleEmailChange = _handleEmailChange.bind(_this);
        console.log("login called");
        return _this;
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                'div',
                { className: 'container div__marginTop' },
                _react3.default.createElement(
                    _Paper2.default,
                    { zDepth: 1, className: 'paper__mediaPiece' },
                    _react3.default.createElement(
                        'div',
                        { className: 'div__about' },
                        _react3.default.createElement(
                            'h3',
                            null,
                            'Sign In'
                        ),
                        _react3.default.createElement(
                            'form',
                            { action: '/', formMethod: 'POST' },
                            _react3.default.createElement(_TextField2.default, { name: 'email', hintText: 'Email',
                                errorText: this.state.errorEmail,
                                floatingLabelText: 'Email',
                                value: this.state.email,
                                onChange: this._handleEmailChange
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_TextField2.default, { name: 'password', hintText: 'Password',
                                errorText: this.state.errorPassword,
                                floatingLabelText: 'Password',
                                onChange: this._handlePasswordChange,
                                value: this.state.password,
                                type: 'password'
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_RaisedButton2.default, { type: 'submit', formMethod: 'post', label: 'Sign In',
                                primary: true
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_RaisedButton2.default, { href: '/auth/facebook',
                                label: 'Facebook Login'
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(_react3.default.Component));

exports.default = Login;