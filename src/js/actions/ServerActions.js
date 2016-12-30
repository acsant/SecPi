var AppDispatcher = require('../dispatchers/AppDispatcher');
var SecPiConstants = require('../constants/SecPiConstants');
var AuthenticationStore = require('../stores/AuthenticationStore');
var FBAuthenticate = require('../services/FBAuthenticate');

var ServerActions = {
	/**
	* Authenticate with fb
	*/
	getCurrentUser: function (userId) {
		AppDispatcher.handleRequestAction(
			{
				actionType: SecPiConstants.GET_USER,
				userId: this.userId
			}
		);
		FBAuthenticate.getCurrentUser(userId);
	},

};
module.exports = ServerActions;
