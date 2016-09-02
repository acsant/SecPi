var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AuthenticationConstants = require('../constants/SecPiConstants');
var assign = require('object-assign');

var CHANGE_EVENT  = 'change';

var user_validated = false;

var auth_token = {
	email: null,
	token: null
};

/**
* Login storage to store token
* @param {string, string} email and access token - > null if locally logged in
*/
function loginStorage (email, token) {
	console.log('Login storage called');
	auth_token.email = email;
	auth_token.token = token;
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
	},

	dispatcherIndex: AppDispatcher.register(function (payload) {
		var action = payload.action;
		console.log(payload);
		switch (action.actionType) {

			case SecPiConstants.LOGIN:
				loginStorage(action.username, action.token);
				AuthenticationStore.emitChange();
				break;

			default:
		}
		return true;
	})

});

module.exports = AuthenticationStore;