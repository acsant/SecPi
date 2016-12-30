var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SecPiConstants = require('../constants/SecPiConstants');
var assign = require('object-assign');

var CHANGE_EVENT  = 'change';

var user_validated = false;

var auth_token = {
	id: null,
	email: null,
	token: null
};

/**
* Login storage to store token
* @param {string, string} email and access token - > null if locally logged in
*/
var loginStorage = function (email, token) {
	auth_token.id = id;
	auth_token.email = email;
	auth_token.token = token;
};

var getLoginAuthToken = function () {
	return auth_token;
}

var AuthenticationStore = assign({}, EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

});

AppDispatcher.register(function (payload) {
	var action = payload.action;
	switch (payload.source) {
		case SecPiConstants.LOGIN:
			loginStorage(action.userId, action.email, action.access_token);
			AuthenticationStore.emitChange();
			break;

		default:
	}
});

module.exports = AuthenticationStore;
