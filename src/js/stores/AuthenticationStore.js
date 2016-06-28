var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AuthenticationConstants = require('../constants/AuthenticationConstants');
var assign = require('object-assign');

var CHANGE_EVENT  = 'change';

var user_validated = false;

/**
* Validate user
* @param string username
*/
function validate (username, password) {
	if (username == 'acsant@uwaterloo.ca' && password == 'akash') {
		user_validated = true;
	}
	user_validated = false;
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
			
		}
		return true;
	});

});

module.exports = AuthenticationStore;