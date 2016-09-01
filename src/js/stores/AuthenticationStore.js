var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AuthenticationConstants = require('../constants/AuthenticationConstants');
var assign = require('object-assign');
var User = require('../models/user');

var CHANGE_EVENT  = 'change';

var user_validated = false;

/**
* validate user
* @param string email
*/
function validate (email, password) {
	User.findOne({'email': email}, function (err, user) {
		if (user) {
			if (user.local.password == password) {
				return true;
			}
		}
		return false;
	});
}

/**
* login user locally
* @param string username, password
*/
function loginLocally (username, password) {
	return AuthenticationStore.validate(username, password);
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

			case AuthenticationConstants.LOCAL_LOGIN:
				loginLocally(action.username, action.password);
				AuthenticationStore.emitChange();
				break;

			default:
		}
		return true;
	})

});

module.exports = AuthenticationStore;