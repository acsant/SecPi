var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AuthenticationConstants = require('../constants/AuthenticationConstants');
var assign = require('object-assign');
var User = require('../models/user');

var CHANGE_EVENT  = 'change';

var user_validated = false;

/**
* Validate user
* @param string username
*/
function validate (username) {
	// Validate username
	User.findOne({'email': username}, function (err, user) {
		if (user) {
			return true;
		} else {
			return false;
		}
	});
	return false;
}

/**
* Login Facebook User
* @param string username, password
*/
function loginFacebook () {
	// Login user
	passport.authenticate('facebook', {scope: ['email']});
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

		switch (action.type) {
			case AuthenticationConstants.VALIDATE:
				validate(action.username);
				break;

			case AuthenticationConstants.LOGIN:
				loginFacebook();
				break;

			default:
		}
		return true;
	})

});

module.exports = AuthenticationStore;