var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthenticationConstant = require('../constants/AuthenticationConstant');

var AuthenticationActions = {
	/**
	*	@param {string} username
	*	Validate the user to see if they exist in the system
	*/
	validate: function (username) {
		AppDispatcher.dispatch({
			actionType: AuthenticationConstant.VALIDATE,
			username: username
		});
	},

	/**
	*	@param {string} username
	*	@param {string} password
	*/
	login: function (username, password) {
		AppDispatcher.dispatch({
			actionType: AuthenticationConstant.LOGIN,
			username: username,
			password: password
		});
	}

};
module.exports = AuthenticationActions;