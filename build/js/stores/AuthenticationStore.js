'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SecPiConstants = require('../constants/SecPiConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var user_validated = false;

var auth_token = {
	email: null,
	token: null
};

/**
* Login storage to store token
* @param {string, string} email and access token - > null if locally logged in
*/
var loginStorage = function loginStorage(email, token) {
	console.log('Login storage called');
	auth_token.email = email;
	auth_token.token = token;
};

var getLoginAuthToken = function getLoginAuthToken() {
	return auth_token;
};

var AuthenticationStore = assign({}, EventEmitter.prototype, {
	emitChange: function emitChange() {
		console.log("Change emitted");
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

});

AuthenticationStore.dispatchToken = AppDispatcher.register(function (payload) {
	var action = payload.action;
	console.log("Registered callback payload: ", payload);
	switch (payload.source) {
		case SecPiConstants.LOGIN:
			console.log("Source matched: ", action.email);
			loginStorage(action.email, action.token);
			console.log("Auth token: ", auth_token);
			AuthenticationStore.emitChange();
			break;

		default:
	}
});

module.exports = AuthenticationStore;