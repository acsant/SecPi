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

var AuthenticationStore = assign({}, EventEmitter.prototype, {

	/**
	* Login storage to store token
	*/
	loginStorage: function () {
		return auth_token;
	},

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
			auth_token = {
				id: action.userId,
				email: action.email,
				access_token:
				action.access_token
			};
			AuthenticationStore.emitChange();
			break;

		default:
	}
});

module.exports = AuthenticationStore;
