'use strict';

var _reactRouter = require('react-router');

var validate = function validate(nextState, replace) {
    if (true) {
        console.log("Transitioning to login");
        replace({
            pathname: '/',
            state: { nextPathname: nextState.location.pathname }
        });
    }
};

var _handleEmailChange = function _handleEmailChange(e) {
    this.state.errorEmail = "";
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!e.target.value) {
        this.state.errorEmail = "This field is required";
    } else if (!regex.test(e.target.value)) {
        this.state.errorEmail = "Email is not valid";
    }
    this.setState({ errorEmail: this.state.errorEmail });
    this.setState({ email: e.target.value });
};

var _handlePasswordChange = function _handlePasswordChange(e) {
    this.state.errorPassword = "";
    if (!e.target.value) {
        this.state.errorPassword = "This field is required";
    } else if (e.target.value.length < 6) {
        this.state.errorPassword = "Password needs more than 6 characters.";
    }
    this.setState({ errorPassword: this.state.errorPassword });
    this.setState({ password: e.target.value });
};

var _handleConfirmedPassword = function _handleConfirmedPassword(e) {
    this.state.errorConfirmPass = "";
    if (!e.target.value) {
        this.state.errorConfirmPass = "This field is required";
    } else if (e.target.value.length < 6) {
        this.state.errorConfirmPass = "Password needs more than 6 characters.";
    } else if (e.target.value != this.state.password) {
        this.state.errorConfirmPass = "Confirmed password does not match";
    }
    this.setState({ errorConfirmPass: this.state.errorConfirmPass });
    this.setState({ confirmPassword: e.target.value });
};

var _handleFirstNameChange = function _handleFirstNameChange(e) {
    this.state.errorFirstName = "";
    if (!e.target.value) {
        this.state.errorFirstName = "This field is required";
    }
    this.setState({ errorFirstName: this.state.errorFirstName });
    this.setState({ firstName: e.target.value });
};

var _handleLastNameChange = function _handleLastNameChange(e) {
    this.state.errorLastName = "";
    if (!e.target.value) {
        this.state.errorLastName = "This field is required";
    }
    this.setState({ errorLastName: this.state.errorLastName });
    this.setState({ lastName: e.target.value });
};

exports.validate = validate;
exports._handleFirstNameChange = _handleFirstNameChange;
exports._handleLastNameChange = _handleLastNameChange;
exports._handleEmailChange = _handleEmailChange;
exports._handlePasswordChange = _handlePasswordChange;
exports._handleConfirmedPassword = _handleConfirmedPassword;