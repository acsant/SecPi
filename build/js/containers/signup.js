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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Signup: {
        displayName: 'Signup'
    }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
    filename: 'src/js/containers/signup.jsx',
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

var _handleFirstNameChange = _require._handleFirstNameChange;
var _handleLastNameChange = _require._handleLastNameChange;

var _require2 = require('../services/AuthenticationService');

var _handleEmailChange = _require2._handleEmailChange;
var _handlePasswordChange = _require2._handlePasswordChange;
var _handleConfirmedPassword = _require2._handleConfirmedPassword;


require('./_login.scss');
require('react-bootstrap');

var Signup = _wrapComponent('Signup')(function (_React$Component) {
    _inherits(Signup, _React$Component);

    function Signup(props, context) {
        _classCallCheck(this, Signup);

        var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props, context));

        _this.state = {};
        _this.state.error = "";
        _this.state.email = "";
        _this.state.password = "";
        _this.state.confirmPassword = "";
        _this.state.firstName = "";
        _this.state.lastName = "";
        _this.history = props.history;
        _this.showSessionMsg = props.location.query ? props.location.query.session : true;
        _this._handleFirstNameChange = _handleFirstNameChange.bind(_this);
        _this._handleLastNameChange = _handleLastNameChange.bind(_this);
        _this._handlePasswordChange = _handlePasswordChange.bind(_this);
        _this._handleEmailChange = _handleEmailChange.bind(_this);
        _this._handleConfirmedPassword = _handleConfirmedPassword.bind(_this);

        return _this;
    }

    _createClass(Signup, [{
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
                            { action: '/signup', formMethod: 'POST' },
                            _react3.default.createElement(_TextField2.default, { name: 'firstName', hintText: 'First Name',
                                floatingLabelText: 'First Name',
                                errorText: this.state.errorFirstName,
                                value: this.state.firstName,
                                onChange: this._handleFirstNameChange
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_TextField2.default, { name: 'lastName', hintText: 'Last Name',
                                floatingLabelText: 'Last Name',
                                errorText: this.state.errorLastName,
                                value: this.state.lastName,
                                onChange: this._handleLastNameChange
                            }),
                            _react3.default.createElement('br', null),
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
                            _react3.default.createElement(_TextField2.default, { hintText: 'Confirm Password',
                                errorText: this.state.errorConfirmPass,
                                floatingLabelText: 'Confirm Password',
                                onChange: this._handleConfirmedPassword,
                                value: this.state.confirmPassword,
                                type: 'password'
                            }),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement('br', null),
                            _react3.default.createElement(_RaisedButton2.default, { type: 'submit', formMethod: 'post', label: 'Sign Up',
                                primary: true
                            }),
                            _react3.default.createElement('br', null)
                        )
                    )
                )
            );
        }
    }]);

    return Signup;
}(_react3.default.Component));

exports.default = Signup;